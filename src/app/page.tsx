// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yandere Dark Elf: Explore the Dark Fantasy World',
  description: 'A thrilling fantasy adventure featuring a dark elf heroine with complex emotions and intense storylines.',
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
<section id="hero" className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Yandere Dark Elf
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          Enter the mysterious and thrilling world of Yandere Dark Elf, where complex emotions and intense storylines await.
        </p>
        <Link href="#articles">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
            Explore Articles
          </button>
        </Link>
      </section>
 {/* About Section */}
 <section id="about" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">1. About the Work</h2>
        <p>
          <strong>Title:</strong> <em>Yandere Dark Elf: She Chased Me All the Way From Another World!</em><br />
          <strong>Japanese Title:</strong> 「ちょっとだけ愛が重いダークエルフが異世界から追いかけてきた」<br />
          <strong>Author:</strong> Nakano Sora<br />
          <strong>Genre:</strong> Fantasy, Romance, Comedy<br />
          <strong>Serialized On:</strong> Takeshobo’s Web Comic Gamma Plus<br />
          <strong>Serialization Start:</strong> September 2021
        </p>
      </section>

      {/* Publication Section */}
      <section id="publication" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">2. Publication Information</h2>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Japanese Edition</h3>
          <ul className="list-disc ml-6">
            <li><strong>Volume 1:</strong> November 7, 2022</li>
            <li><strong>Volume 2:</strong> July 7, 2023</li>
            <li><strong>Volume 3:</strong> September 6, 2024</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">English Edition</h3>
          <ul className="list-disc ml-6">
            <li><strong>Publisher:</strong> Seven Seas Entertainment</li>
            <li><strong>Volume 1:</strong> October 8, 2024</li>
            <li><strong>Volume 2:</strong> January 21, 2025</li>
          </ul>
        </div>
      </section>

      {/* Animation Section */}
      <section id="animation" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">3. Animation Announcement</h2>
        <p>
          <strong>Announcement Date:</strong> December 19, 2024<br />
          <strong>Premiere:</strong> April 2025<br />
          <strong>Official Website:</strong> <Link href="https://aiomodarkelf.deregula.com/" target="_blank" className="text-blue-600 hover:text-blue-800">
            Visit Official Website
          </Link>
        </p>
      </section>

      {/* News Section */}
      <section id="news" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">4. News and Reports</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Natalie.mu:</strong> <Link href="https://natalie.mu/" target="_blank" className="text-blue-600 hover:text-blue-800">
              Read the announcement
            </Link>
          </li>
          <li>
            <strong>Anime News Network:</strong> <Link href="https://www.animenewsnetwork.com/" target="_blank" className="text-blue-600 hover:text-blue-800">
              Read the full report
            </Link>
          </li>
        </ul>
      </section>

      {/* Author Section */}
      <section id="author" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">5. Author on Social Media</h2>
        <p>
          Follow Nakano Sora on social media:<br />
          <strong>X (formerly Twitter):</strong> <Link href="https://x.com/nakano_sora/highlights" target="_blank" className="text-blue-600 hover:text-blue-800">
            @nakano_sora
          </Link>
        </p>
      </section>

      {/* Reading and Purchasing Section */}
      <section id="reading" className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">6. Online Reading and Purchase</h2>
        <div>
          <h3 className="text-xl font-bold">Read Online</h3>
          <p>
            Read the Japanese edition on Takeshobo’s Web Comic Gamma Plus: <br />
            <Link href="https://gammaplus.takeshobo.co.jp/manga/aigaomoi_darkelf/" target="_blank" className="text-blue-600 hover:text-blue-800">
              Read Online
            </Link>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Buy English Edition</h3>
          <ul className="list-disc ml-6">
            <li>
              <Link href="https://sevenseasentertainment.com/books/yandere-dark-elf-she-chased-me-all-the-way-from-another-world-vol-1/" target="_blank" className="text-blue-600 hover:text-blue-800">
                Buy Volume 1
              </Link>
            </li>
            <li>
              <Link href="https://sevenseasentertainment.com/books/yandere-dark-elf-she-chased-me-all-the-way-from-another-world-vol-2/" target="_blank" className="text-blue-600 hover:text-blue-800">
                Buy Volume 2
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <ResourceList resources={resources} />
      <ArticleList articles={allPostsData} />
    </div>
  )
}