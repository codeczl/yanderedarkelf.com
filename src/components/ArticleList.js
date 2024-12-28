// components/ArticleList.js
import Link from 'next/link'

export default function ArticleList({ articles }) {
  return (
    <div className="max-w-2xl mx-auto">
      {articles.map((article, index) => (
        <div key={index} className="relative transform hover:scale-105 transition-transform mb-6">
          <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
          <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
          <div className="bg-white/90 p-6 rounded-lg border-2 border-gray-900">
            <strong className="inline-block transform rotate-1 bg-black text-white px-2 py-1 mb-2">
              {article.title}
            </strong>
            <Link 
              href={`/posts/${article.id}`}
              className="relative inline-block text-gray-800 ml-2
              after:absolute after:bottom-0 after:left-0 after:w-full 
              after:h-[3px] after:bg-gray-200 hover:after:bg-gray-400
              transform hover:rotate-1 transition-all">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}