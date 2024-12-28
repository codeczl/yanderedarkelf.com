'use client';

import { useState } from 'react';

const imageDetails = [
  "Yandere Dark Elf Expression One",
  "Yandere Dark Elf Expression Two",
  "Yandere Dark Elf Expression Three",
  "Yandere Dark Elf Expression Four",
  "Yandere Dark Elf Expression Five",
  "Yandere Dark Elf Expression Six",
  "Yandere Dark Elf Expression Seven",
  "Yandere Dark Elf Expression Eight",
  "Yandere Dark Elf Expression Nine",
  "Yandere Dark Elf Expression Ten",
  "Yandere Dark Elf Expression Eleven",
  "Yandere Dark Elf Expression Twelve",
  "Yandere Dark Elf Expression Thirteen",
  "Yandere Dark Elf Expression Fourteen",
  "Yandere Dark Elf Expression Fifteen",
  "Yandere Dark Elf Expression Sixteen",
  "Yandere Dark Elf Expression Seventeen"
];

export default function ImageCollection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    index: number;
  } | null>(null);

  return (
    <section id="collection" className="relative py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 inline-block
          text-gray-900 [text-shadow:2px_2px_0_#fff,-1px_-1px_0_#000]
          transform -rotate-1 border-b-4 border-black relative
          before:absolute before:inset-0 before:text-white before:content-[attr(data-text)]
          before:[text-shadow:2px_2px_0_#000] before:-z-10"
          data-text="8. Yandere Dark Elf Cute Collection">
          8. Yandere Dark Elf Cute Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imageDetails.map((title, index) => (
            <div 
              key={index + 1} 
              className="group relative transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage({
                src: `/pic/${index + 1}.png`,
                title: title,
                index: index + 1
              })}
            >
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform rotate-1" />
              <div className="absolute -inset-2 border-2 border-black opacity-10 transform -rotate-1" />
              
              <div className="relative bg-white p-3 rounded-lg border-2 border-gray-900 shadow-md">
                <img
                  src={`/pic/${index + 1}.png`}
                  alt={title}
                  className="w-full h-auto rounded-md object-cover aspect-[4/3]"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-white text-lg font-medium mb-2">Click to preview</span>
                  <span className="text-white/80 text-sm px-4 text-center">{title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 图片预览模态框 */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl mx-auto px-4 py-8">
              <button 
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIndex = selectedImage.index - 1;
                  if (prevIndex > 0) {
                    setSelectedImage({
                      src: `/pic/${prevIndex}.png`,
                      title: imageDetails[prevIndex - 1],
                      index: prevIndex
                    });
                  }
                }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIndex = selectedImage.index + 1;
                  if (nextIndex <= imageDetails.length) {
                    setSelectedImage({
                      src: `/pic/${nextIndex}.png`,
                      title: imageDetails[nextIndex - 1],
                      index: nextIndex
                    });
                  }
                }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[90vh] max-w-full object-contain mx-auto"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 