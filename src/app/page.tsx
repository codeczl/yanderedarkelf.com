// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList';
import ArticleList from '@/components/ArticleList';
import { Metadata } from 'next'
import Link from 'next/link';
import Image from 'next/image';
import ImageCollection from '@/components/ImageCollection';

// 首先定义类型接口
interface Resource {
  title: string;
  url: string;
  description: string;
}

interface Article {
  id: string;
  title: string;
  date: string;
}

export const metadata: Metadata = {
  title: 'Yandere Dark Elf: Explore the Dark Fantasy World',
  description: 'A thrilling fantasy adventure featuring a dark elf heroine with complex emotions and intense storylines.',
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="min-h-screen relative">
      
      {/* 装饰性背景元素 */}
      <div className="fixed inset-0 -z-10">
        {/* 左上角装饰 */}
        <div className="absolute top-0 left-0 w-64 h-64">
          <div className="w-full h-full opacity-20">
            <div className="absolute top-0 left-0 w-32 h-2 bg-gray-800"></div>
            <div className="absolute top-0 left-0 w-2 h-32 bg-gray-800"></div>
            <div className="absolute top-4 left-4 w-24 h-1 bg-gray-600"></div>
            <div className="absolute top-4 left-4 w-1 h-24 bg-gray-600"></div>
          </div>
        </div>
        
        {/* 右上角装饰 */}
        <div className="absolute top-0 right-0 w-64 h-64">
          <div className="w-full h-full opacity-20">
            <div className="absolute top-0 right-0 w-32 h-2 bg-gray-800"></div>
            <div className="absolute top-0 right-0 w-2 h-32 bg-gray-800"></div>
            <div className="absolute top-4 right-4 w-24 h-1 bg-gray-600"></div>
            <div className="absolute top-4 right-4 w-1 h-24 bg-gray-600"></div>
          </div>
        </div>
        
        {/* 速度线效果 - 使用CSS渐变 */}
        <div className="absolute inset-0 opacity-5"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              #000 10px,
              #000 11px
            )`
          }}
        ></div>
      </div>

      {/* 内容区域 */}
      <div className="relative">
        {/* Hero Section - 漫画风格设计 */}
        <section id="hero" className="relative py-20 overflow-hidden min-h-[600px]">
          {/* 背景图层 */}
          <div className="absolute inset-0">
            {/* 左侧背景图片 */}
            <div 
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px]
                bg-[url('/pic/manga-girl.jpg')] 
                bg-center bg-no-repeat bg-cover
                opacity-90"
              style={{
                transform: 'translate(-120%, -50%) rotate(-30deg)',
                transformOrigin: 'center center',
                filter: 'contrast(1.1)'
              }}
            ></div>

            {/* 右侧背景图片 */}
            <div 
              className="absolute top-1/2 left-1/2 w-[800px] h-[800px]
                bg-[url('/pic/manga-girl.jpg')] 
                bg-center bg-no-repeat bg-cover
                opacity-90"
              style={{
                transform: 'translate(20%, -50%) rotate(30deg)',
                transformOrigin: 'center center',
                filter: 'contrast(1.1)'
              }}
            ></div>

            {/* 轻微的渐变罩，确保文字 */}
            <div className="absolute inset-0 bg-white/30"></div>
          </div>

          {/* 内容区域 */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-8
                text-gray-900 [text-shadow:3px_3px_0_#fff,-1px_-1px_0_#000]
                transform -rotate-2 relative
                before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
                before:[text-shadow:2px_2px_0_#000] before:-z-10"
                data-text="Yandere Dark Elf">
                Yandere Dark Elf
              </h1>

              <div className="relative">
                {/* 手绘边框效果 */}
                <div className="absolute -inset-2 border-2 border-black opacity-20 transform rotate-1"></div>
                <div className="absolute -inset-2 border-2 border-black opacity-20 transform -rotate-1"></div>
                
                <p className="text-2xl text-gray-800 relative z-10 
                  bg-white/80 backdrop-blur-sm p-6 rounded-lg
                  border-2 border-gray-900 transform hover:rotate-1 transition-transform">
                  Enter the mysterious and thrilling world of Yandere Dark Elf, 
                  where complex emotions and intense storylines await.
                </p>
              </div>
            </div>
          </div>
          </section>
   {/* About、Publication、Animation Sections 的共同容器 */}
   <div className="relative min-h-[1200px]">
     {/* 背景图层 */}
     <div className="absolute inset-0">
       {/* 左侧图片背景 */}
       <div className="absolute left-0 w-1/4 h-full">
         <Image 
           src="/pic/zhanli.png" 
           alt="background" 
           className="w-full h-full object-cover opacity-90"
           style={{
             transform: 'scale(1)',
             transformOrigin: 'center center',
             transition: 'transform 0.3s ease-in-out'
           }}
         />
         {/* 渐变遮罩层 */}
         <div className="absolute inset-0">
           {/* 向右的渐变 */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white/90"></div>
           {/* 上下渐变 */}
           <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30"></div>
           {/* 额外的变效果 */}
           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30"></div>
           {/* 与前部分背景的过渡效果 */}
           <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40"></div>
         </div>
       </div>

       {/* 右侧斜45度分割背景 */}
       <div className="absolute right-0 w-3/4 h-full overflow-hidden">
         {/* 基础背景 */}
         <div className="absolute inset-0 bg-gray-50"></div>
         
         {/* 斜块装饰 */}
         <div 
           className="absolute inset-0"
           style={{
             background: `repeating-linear-gradient(
               45deg,
               transparent,
               transparent 200px,
               #f3f4f6 200px,
               #f3f4f6 400px
             )`
           }}
         ></div>

         {/* 手绘描边效果 */}
         <div 
           className="absolute inset-0"
           style={{
             background: `repeating-linear-gradient(
               45deg,
               transparent,
               transparent 199px,
               #374151 199px,
               #374151 200px,
               transparent 200px,
               transparent 399px,
               #374151 399px,
               #374151 400px
             )`,
             opacity: 0.1
           }}
         ></div>
       </div>
     </div>

     {/* 内容区域 */}
     <div className="relative z-10">
       {/* About Section */}
       <section id="about" className="relative py-16 px-4">
         <div className="container mx-auto relative">
           <h2 className="text-4xl font-bold mb-8 inline-block
             text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
             transform -rotate-1 border-b-4 border-black relative
             before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
             before:[text-shadow:2px_2px_0_#000] before:-z-10"
             data-text="1. About the Work">
             1. About the Work
           </h2>

           <div className="relative bg-white/90 p-8 rounded-lg
             before:absolute before:inset-0 before:border-2 before:border-black before:rounded-lg before:transform before:rotate-1 before:-z-10
             after:absolute after:inset-0 after:border-2 after:border-black after:rounded-lg after:transform after:-rotate-1 after:-z-10">
             {/* 手绘角落装饰 */}
             <div className="absolute -top-2 -left-2 w-8 h-8 opacity-30">
               <div className="absolute top-0 left-0 w-4 h-px bg-gray-800"></div>
               <div className="absolute top-0 left-0 w-px h-4 bg-gray-800"></div>
               <div className="absolute top-2 left-2 w-3 h-px bg-gray-600"></div>
               <div className="absolute top-2 left-2 w-px h-3 bg-gray-600"></div>
             </div>
             <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-30 transform rotate-180">
               <div className="absolute top-0 left-0 w-4 h-px bg-gray-800"></div>
               <div className="absolute top-0 left-0 w-px h-4 bg-gray-800"></div>
               <div className="absolute top-2 left-2 w-3 h-px bg-gray-600"></div>
               <div className="absolute top-2 left-2 w-px h-3 bg-gray-600"></div>
             </div>
             
             <div className="space-y-6">
               <div className="relative transform hover:scale-105 transition-transform">
                 <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
                 <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
                 <strong className="inline-block transform -rotate-1 bg-black text-white px-2 py-1
                   [text-shadow:1px_1px_0_#fff,-1px_-1px_0_#000]">
                   Title:
                 </strong> 
                 <em className="font-bold not-italic text-gray-800 relative ml-2
                   after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gray-200">
                   Yandere Dark Elf: She Chased Me All the Way From Another World!
                 </em>
               </div>

               <div className="relative transform hover:scale-105 transition-transform">
                 <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
                 <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
                 <strong className="inline-block transform rotate-1 bg-black text-white px-2 py-1">
                   Japanese Title:
                 </strong> 
                 <span className="font-bold ml-2 relative
                   before:absolute before:inset-0 before:border-2 before:border-black before:transform before:rotate-1">
                   「ちょっとだけ愛が重いダークエルフが異世界から追いかけてきた」
                 </span>
               </div>

               <div className="relative transform hover:scale-105 transition-transform">
                 <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
                 <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
                 <strong className="inline-block transform -rotate-1 bg-black text-white px-2 py-1">
                   Author:
                 </strong> 
                 <span className="relative inline-block px-2 ml-2
                   before:absolute before:inset-0 before:border-2 before:border-black before:transform before:rotate-1">
                   Nakano Sora
                 </span>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Publication Section */}
       <section id="publication" className="relative py-16 px-4">
         <div className="container mx-auto">
           <h2 className="text-4xl font-bold mb-8
             text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
             transform rotate-1 relative"
             data-text="2. Publication Information">
             2. Publication Information
           </h2>

           <div className="grid md:grid-cols-2 gap-8">
             <div className="relative bg-white/95 p-6 rounded-lg transform -rotate-1
               before:absolute before:inset-0 before:border-2 before:border-black before:rounded-lg before:transform before:rotate-1 before:-z-10
               after:absolute after:inset-0 after:border-2 after:border-black after:rounded-lg after:transform after:-rotate-1 after:-z-10">
               
               <h3 className="text-2xl font-bold mb-4 relative inline-block
                 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
                 after:absolute after:bottom-0 after:left-0 after:w-full 
                 after:h-[3px] after:bg-black after:transform after:rotate-1">
                 Japanese Edition
               </h3>

               <ul className="list-none space-y-4">
                 <li className="relative transform hover:-translate-y-1 transition-transform">
                   <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
                   <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
                   <div className="bg-white/90 p-3 rounded border-2 border-black">
                     <strong className="inline-block transform -rotate-1">Volume 1:</strong>
                     <span className="ml-2">November 7, 2022</span>
                   </div>
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

       {/* Animation Section */}
       <section id="animation" className="relative py-16 px-4">
         <div className="container mx-auto">
           <h2 className="text-4xl font-bold mb-12
             text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
             transform rotate-1 relative
             before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
             before:[text-shadow:2px_2px_0_#000] before:-z-10"
             data-text="3. Animation Announcement">
             3. Animation Announcement
           </h2>

           <div className="max-w-2xl mx-auto space-y-8">
             {/* Announcement Date */}
             <div className="relative">
               <div className="flex items-start">
                 <div className="bg-black text-white px-3 py-1 font-bold text-lg
                   transform -rotate-1">
                   Announcement Date:
                 </div>
                 <div className="flex-1 ml-4 border-b-2 border-black">
                   <span className="text-lg font-medium block py-1">
                     December 19, 2024
                   </span>
                 </div>
               </div>
             </div>

             {/* Premiere */}
             <div className="relative">
               <div className="flex items-start">
                 <div className="bg-black text-white px-3 py-1 font-bold text-lg
                   transform rotate-1">
                   Premiere:
                 </div>
                 <div className="flex-1 ml-4 border-b-2 border-black">
                   <span className="text-lg font-medium block py-1">
                     April 2025
                   </span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
   </div>

{/* News、Author、Reading Sections 的共同容器 */}
<div className="relative min-h-[1200px]">
  {/* 背景图层 */}
  <div className="absolute inset-0">
    {/* 右侧图片背景 */}
    <div className="absolute right-0 w-1/4 h-full">
      <Image 
        src="/pic/section456.png" 
        alt="background" 
        fill
        className="w-full h-full object-cover opacity-90"
        style={{
          transform: 'scale(1)',
          transformOrigin: 'center center',
          transition: 'transform 0.3s ease-in-out'
        }}
      />
      {/* 渐变遮罩层 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/10 to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40"></div>
      </div>
    </div>

    {/* 左侧斜45度分割背景 */}
    <div className="absolute left-0 w-3/4 h-full overflow-hidden">
      <div className="absolute inset-0 bg-gray-50"></div>
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 200px,
            #f3f4f6 200px,
            #f3f4f6 400px
          )`
        }}
      ></div>
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 199px,
            #374151 199px,
            #374151 200px,
            transparent 200px,
            transparent 399px,
            #374151 399px,
            #374151 400px
          )`,
          opacity: 0.1
        }}
      ></div>
    </div>
  </div>

  {/* 内容区域 */}
  <div className="relative z-10">
    {/* News Section */}
    <section id="news" className="relative py-16 px-4">
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold mb-8 inline-block
          text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
          transform -rotate-1 border-b-4 border-black relative
          before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
          before:[text-shadow:2px_2px_0_#000] before:-z-10"
          data-text="4. News and Reports">
          4. News and Reports
        </h2>

        <div className="max-w-2xl mx-auto relative bg-white/90 p-8 rounded-lg
          before:absolute before:inset-0 before:border-2 before:border-black before:rounded-lg before:transform before:rotate-1 before:-z-10
          after:absolute after:inset-0 after:border-2 after:border-black after:rounded-lg after:transform after:-rotate-1 after:-z-10">
          
          {/* 手绘角落装饰 */}
          <div className="absolute -top-2 -left-2 w-8 h-8 opacity-30">
            <div className="absolute top-0 left-0 w-4 h-px bg-gray-800"></div>
            <div className="absolute top-0 left-0 w-px h-4 bg-gray-800"></div>
            <div className="absolute top-2 left-2 w-3 h-px bg-gray-600"></div>
            <div className="absolute top-2 left-2 w-px h-3 bg-gray-600"></div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 opacity-30 transform rotate-180">
            <div className="absolute top-0 left-0 w-4 h-px bg-gray-800"></div>
            <div className="absolute top-0 left-0 w-px h-4 bg-gray-800"></div>
            <div className="absolute top-2 left-2 w-3 h-px bg-gray-600"></div>
            <div className="absolute top-2 left-2 w-px h-3 bg-gray-600"></div>
          </div>
          
          <div className="space-y-6">
            <div className="relative transform hover:scale-105 transition-transform">
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
              <div className="bg-white/90 p-6 rounded-lg border-2 border-gray-900">
                <strong className="inline-block transform -rotate-1 bg-black text-white px-2 py-1 mb-2">
                  Natalie.mu:
                </strong>
                <Link href="https://natalie.mu/" target="_blank" 
                  className="relative inline-block text-gray-800 ml-2
                  after:absolute after:bottom-0 after:left-0 after:w-full 
                  after:h-[3px] after:bg-gray-200 hover:after:bg-gray-400
                  transform hover:-rotate-1 transition-all">
                  Read the announcement
                </Link>
              </div>
            </div>

            <div className="relative transform hover:scale-105 transition-transform">
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
              <div className="bg-white/90 p-6 rounded-lg border-2 border-gray-900">
                <strong className="inline-block transform rotate-1 bg-black text-white px-2 py-1 mb-2">
                  Anime News Network:
                </strong>
                <Link href="https://www.animenewsnetwork.com/" target="_blank"
                  className="relative inline-block text-gray-800 ml-2
                  after:absolute after:bottom-0 after:left-0 after:w-full 
                  after:h-[3px] after:bg-gray-200 hover:after:bg-gray-400
                  transform hover:rotate-1 transition-all">
                  Read the full report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Author Section */}
    <section id="author" className="relative py-16 px-4">
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold mb-8 inline-block
          text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
          transform rotate-1 border-b-4 border-black relative
          before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
          before:[text-shadow:2px_2px_0_#000] before:-z-10"
          data-text="5. Author on Social Media">
          5. Author on Social Media
        </h2>

        <div className="max-w-2xl mx-auto relative bg-white/90 p-8 rounded-lg
          before:absolute before:inset-0 before:border-2 before:border-black before:rounded-lg before:transform before:rotate-1 before:-z-10
          after:absolute after:inset-0 after:border-2 after:border-black after:rounded-lg after:transform after:-rotate-1 after:-z-10">
          
          <div className="relative transform hover:scale-105 transition-transform">
            <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
            <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
            <div className="bg-white/90 p-6 rounded-lg border-2 border-gray-900">
              <strong className="inline-block transform -rotate-1 bg-black text-white px-2 py-1 mb-2">
                X (formerly Twitter):
              </strong>
              <Link href="https://x.com/nakano_sora/highlights" target="_blank"
                className="relative inline-block text-gray-800 ml-2
                after:absolute after:bottom-0 after:left-0 after:w-full 
                after:h-[3px] after:bg-gray-200 hover:after:bg-gray-400
                transform hover:-rotate-1 transition-all">
                @nakano_sora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Reading Section */}
    <section id="reading" className="relative py-16 px-4">
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold mb-8 inline-block
          text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
          transform -rotate-1 border-b-4 border-black relative
          before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
          before:[text-shadow:2px_2px_0_#000] before:-z-10"
          data-text="6. Online Reading and Purchase">
          6. Online Reading and Purchase
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Read Online */}
          <div className="relative bg-white/90 p-8 rounded-lg
            before:absolute before:inset-0 before:border-2 before:border-black before:rounded-lg before:transform before:rotate-1 before:-z-10
            after:absolute after:inset-0 after:border-2 after:border-black after:rounded-lg after:transform after:-rotate-1 after:-z-10">
            
            <h3 className="text-2xl font-bold mb-4 relative inline-block
              after:absolute after:bottom-0 after:left-0 after:w-full 
              after:h-[3px] after:bg-black after:transform after:rotate-1">
              Read Online
            </h3>
            
            <div className="relative transform hover:scale-105 transition-transform">
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
              <div className="bg-white/90 p-6 rounded-lg border-2 border-gray-900">
                <Link href="https://gammaplus.takeshobo.co.jp/manga/aigaomoi_darkelf/" 
                  target="_blank"
                  className="relative inline-block text-gray-800
                  after:absolute after:bottom-0 after:left-0 after:w-full 
                  after:h-[3px] after:bg-gray-200 hover:after:bg-gray-400
                  transform hover:-rotate-1 transition-all">
                  Read Online
                </Link>
              </div>
            </div>
          </div>

          {/* Buy English Edition */}
          <div className="relative bg-white/90 p-8 rounded-lg
            before:absolute before:inset-0 before:border-2 before:border-black before:rounded-lg before:transform before:rotate-1 before:-z-10
            after:absolute after:inset-0 after:border-2 after:border-black after:rounded-lg after:transform after:-rotate-1 after:-z-10">
            
            <h3 className="text-2xl font-bold mb-4 relative inline-block
              after:absolute after:bottom-0 after:left-0 after:w-full 
              after:h-[3px] after:bg-black after:transform after:rotate-1">
              Buy English Edition
            </h3>
            
            <ul className="space-y-4">
              <li className="relative transform hover:scale-105 transition-transform">
                <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
                <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
                <div className="bg-white/90 p-6 rounded-lg border-2 border-gray-900">
                  <Link href="https://sevenseasentertainment.com/books/yandere-dark-elf-she-chased-me-all-the-way-from-another-world-vol-1/" 
                    target="_blank"
                    className="relative inline-block text-gray-800
                    after:absolute after:bottom-0 after:left-0 after:w-full 
                    after:h-[3px] after:bg-gray-200 hover:after:bg-gray-400
                    transform hover:rotate-1 transition-all">
                    Buy Volume 1
                  </Link>
                </div>
              </li>
              <li className="relative transform hover:scale-105 transition-transform">
                <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
                <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
                <div className="bg-white/90 p-6 rounded-lg border-2 border-gray-900">
                  <Link href="https://sevenseasentertainment.com/books/yandere-dark-elf-she-chased-me-all-the-way-from-another-world-vol-2/" 
                    target="_blank"
                    className="relative inline-block text-gray-800
                    after:absolute after:bottom-0 after:left-0 after:w-full 
                    after:h-[3px] after:bg-gray-200 hover:after:bg-gray-400
                    transform hover:-rotate-1 transition-all">
                    Buy Volume 2
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>

    <div className="relative min-h-[800px]">
      {/* 背景图层 */}
      <div className="absolute inset-0">
        {/* 左侧图片背景 */}
        <div className="absolute left-0 w-1/4 h-full">
          <Image 
            src="/pic/biaoqing2.png" 
            alt="background" 
            fill
            className="w-full h-full object-contain animate-gentle-swing opacity-100"
            style={{
              transformOrigin: 'center center'
            }}
          />
          {/* 渐变遮罩层 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white/90"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/30"></div>
          </div>
        </div>

    {/* 右侧斜45度分割背景 */}
    <div className="absolute left-1/4 right-0 h-full bg-gray-50">
      <div 
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 200px,
            #f3f4f6 200px,
            #f3f4f6 400px
          )`,
          opacity: 0.5
        }}
      ></div>
    </div>
  </div>

      {/* Story Synopsis Section */}
      <section id="synopsis" className="relative py-16 px-4">
        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold mb-8 inline-block
            text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
            transform -rotate-1 border-b-4 border-black relative
            before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
            before:[text-shadow:2px_2px_0_#000] before:-z-10"
            data-text="8. Story Synopsis">
            8. Story Synopsis
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1" />
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1" />
              
              <div className="relative bg-white/90 p-8 rounded-lg border-2 border-gray-900 space-y-6">
                {/* First Paragraph */}
                <p className="text-lg leading-relaxed text-gray-800 relative z-10
                  first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                  Hinata, a high school student who was reincarnated into another world and became a hero with the power of a god, 
                  successfully defeated the Demon King with his companions, including the dark elf, Mariabel. Having fulfilled the god's wish, 
                  he returns to the real world. However, one month later, Mariabel inexplicably follows him to the real world! Why? 
                  Because she's determined to stay with her beloved Hinata—forever! But her love for him is a bit overwhelming, 
                  and with a pinch of jealousy, she starts relentlessly pursuing him (in many ways).
                </p>

                {/* Second Paragraph */}
                <p className="text-lg leading-relaxed text-gray-800 relative z-10">
                  Now, Hinata finds himself living under one roof with a slightly possessive dark elf who's as exotic as she is beautiful. 
                  Will he survive this strange and chaotic domestic life? Get ready for a sweet, gravity-defying, reverse-isekai love comedy 
                  with a touch of yandere dark elf madness!
                </p>

                {/* Third Paragraph - Highlight Box */}
                <div className="relative p-6 bg-gray-50 rounded-lg
                  before:absolute before:inset-0 before:border-2 before:border-black before:rounded-lg before:transform before:rotate-1 before:-z-10
                  after:absolute after:inset-0 after:border-2 after:border-black after:rounded-lg after:transform after:-rotate-1 after:-z-10">
                  <p className="text-lg font-semibold text-gray-900 italic text-center">
                    Will Hinata manage to keep his cool, or will Mariabel's love consume him? 
                    Yandere dark elf lovers won't want to miss this thrilling, heart-pounding journey!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="relative min-h-[800px] bg-[#F8F9FA]">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {/* 同心圆效果 - 增加间距 */}
        <div className="absolute inset-0" style={{
          background: `
            repeating-radial-gradient(
              circle at 50% 50%,
              #FFFFFF,
              #FFFFFF 100px,
              #F3F4F6 100px,
              #F3F4F6 200px,
              #E5E7EB 200px,
              #E5E7EB 300px,
              #D1D5DB 300px,
              #D1D5DB 400px
            )
          `
        }} />

        {/* 中心光晕 */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(
              circle at 50% 50%,
              rgba(255, 255, 255, 0.9) 0%,
              rgba(255, 255, 255, 0.6) 20%,
              transparent 60%
            )
          `
        }} />
      </div>

      {/* 视频部分内容 */}
      <section id="video" className="relative py-16 px-4">
        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold mb-8 inline-block
            text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
            transform -rotate-1 border-b-4 border-black relative
            before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
            before:[text-shadow:2px_2px_0_#000] before:-z-10"
            data-text="7. Yandere Dark Elf PV is being announced!">
            7. Yandere Dark Elf PV is being announced!
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1" />
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1" />
              
              <div className="relative bg-white/90 p-4 rounded-lg border-2 border-gray-900">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/OMOYUmE0m_A?si=Pa8ziCr1hvCIbtJD"
                    title="Yandere Dark Elf PV"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600 italic text-center transform -rotate-1">
              Watch the thrilling preview of our upcoming adventure!
            </p>
          </div>
        </div>
      </section>

      {/* 图片展览区 - 直接使用 ImageCollection 组件 */}
          <ImageCollection />
    </div>

        </div>
 {/* Resources Section */}
 <section id="resources" className="relative py-16 px-4">
        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold mb-8 inline-block
            text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
            transform -rotate-1 border-b-4 border-black relative
            before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
            before:[text-shadow:2px_2px_0_#000] before:-z-10"
            data-text="Resources">
            Resources
          </h2>
          <ResourceList resources={resources} />
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="relative py-16 px-4">
        <div className="container mx-auto relative">
          <h2 className="text-4xl font-bold mb-8 inline-block
            text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
            transform rotate-1 border-b-4 border-black relative
            before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
            before:[text-shadow:2px_2px_0_#000] before:-z-10"
            data-text="Articles">
            Articles
          </h2>
          <ArticleList articles={allPostsData} />
        </div>
      </section>

      </div>
  )
}