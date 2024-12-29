/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ACCESS_PASSWORD: process.env.ACCESS_PASSWORD,
  },
  eslint: {
    // 在生产构建时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // 禁用图片优化（不推荐，但可以临时解决问题）
  },
  reactStrictMode: true,
}

module.exports = nextConfig 