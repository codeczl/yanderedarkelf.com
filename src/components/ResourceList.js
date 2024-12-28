// components/ResourceList.js
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function ResourceList({ resources }) {
  return (
    <div className="max-w-2xl mx-auto">
      {resources.map((resource, index) => (
        <div key={index} className="relative transform hover:scale-105 transition-transform mb-6">
          <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1"></div>
          <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1"></div>
          <div className="bg-white/90 p-6 rounded-lg border-2 border-gray-900">
            <div className="flex items-center gap-2 mb-2">
              <strong className="inline-block transform -rotate-1 bg-black text-white px-3 py-1">
                {resource.title}
              </strong>
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </div>
            <Link href={resource.url} target="_blank"
              className="relative inline-block text-gray-800
              after:absolute after:bottom-0 after:left-0 after:w-full 
              after:h-[3px] after:bg-gray-200 hover:after:bg-gray-400
              transform hover:-rotate-1 transition-all">
              {resource.description}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}