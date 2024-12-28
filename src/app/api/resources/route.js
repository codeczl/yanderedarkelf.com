import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Octokit } from '@octokit/rest';

// 首先定义 checkAuth 函数
async function checkAuth(request) {
  try {
    const authHeader = request.headers.get('Authorization');
    console.log('Auth header:', authHeader);
    
    if (!authHeader) {
      console.log('No auth header found');
      return false;
    }
    
    const token = authHeader.split(' ')[1];
    console.log('Received token:', token);
    console.log('Expected token:', process.env.ACCESS_PASSWORD);
    
    return token === process.env.ACCESS_PASSWORD;
  } catch (error) {
    console.error('Auth check error:', error);
    return false;
  }
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const githubPath = 'data/json/resources.json';
const localPath = path.join(process.cwd(), 'data', 'json', 'resources.json');

async function getResourcesFromGitHub() {
  try {
    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: githubPath,
    });

    const content = Buffer.from(data.content, 'base64').toString('utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error fetching resources from GitHub:', error);
    throw error;
  }
}

function getLocalResources() {
  return JSON.parse(fs.readFileSync(localPath, 'utf8'));
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const source = searchParams.get('source');

  if (source === 'github') {
    try {
      const resources = await getResourcesFromGitHub();
      return NextResponse.json(resources);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch resources from GitHub' }, { status: 500 });
    }
  } else {
    // Default to local file for homepage
    const resources = getLocalResources();
    return NextResponse.json(resources);
  }
}

export async function POST(req) {
  try {
    // 使用 checkAuth 函数
    if (!await checkAuth(req)) {
      console.log('Authentication failed');
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      );
    }

    const updatedResources = await req.json();
    console.log('Received resources:', updatedResources);

    // 3. 检查数据格式
    if (!Array.isArray(updatedResources)) {
      console.log('Invalid data format - not an array');
      return NextResponse.json(
        { error: 'Invalid data format' }, 
        { status: 400 }
      );
    }

    // 4. 检查资源对象结构
    for (const resource of updatedResources) {
      console.log('Checking resource:', resource);
      if (!resource.title || !resource.url || !resource.description) {
        console.log('Missing fields in resource:', resource);
        return NextResponse.json(
          { error: 'Missing required fields' }, 
          { status: 400 }
        );
      }
    }

    // 5. 检查 GitHub 配置
    console.log('GitHub config:', {
      owner,
      repo,
      path: githubPath
    });

    // 6. 获取当前文件
    const { data: currentFile } = await octokit.repos.getContent({
      owner,
      repo,
      path: githubPath,
    });
    console.log('Current file SHA:', currentFile.sha);

    // 7. 尝试更新文件
    try {
      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: githubPath,
        message: 'Update resources',
        content: Buffer.from(JSON.stringify(updatedResources, null, 2)).toString('base64'),
        sha: currentFile.sha,
      });
      console.log('GitHub update successful');
    } catch (githubError) {
      console.error('GitHub update error:', githubError);
      throw githubError;
    }

    return NextResponse.json({ 
      message: 'Resources updated successfully',
      data: updatedResources 
    });
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.data
    });
    return NextResponse.json(
      { error: 'Failed to update resources', details: error.message }, 
      { status: 500 }
    );
  }
}