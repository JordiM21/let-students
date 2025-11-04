import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import NextImage from 'next/image'
import { useRef } from 'react'

/**
 * Reusable Carousel
 * @param {Array} items - Array of objects { type: 'photo' | 'video', src, title, subtitle, description }
 * @param {string} cardWidth - Tailwind width class or custom width for cards
 * @param {string} cardHeight - Tailwind height class or custom height for cards
 * @param {string} containerClassName - Optional additional classes for carousel container
 */
export default function Carousel({ items = [], cardWidth = 'w-64', cardHeight = 'h-40', containerClassName = '' }) {
  const carouselRef = useRef(null)

  const scrollBy = (distance) => {
    carouselRef.current?.scrollBy({ left: distance, behavior: 'smooth' })
  }

  return (
    <div className="relative bg-gray-200 overflow-hidden">
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-gray-200 bg-opacity-70 backdrop-blur-sm text-black rounded-full p-3 hover:bg-gray-300 transition"
        onClick={() => scrollBy(-250)}
      >
        <MdArrowBackIos size={24} />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-gray-200 bg-opacity-70 backdrop-blur-sm text-black rounded-full p-3 hover:bg-gray-300 transition"
        onClick={() => scrollBy(250)}
      >
        <MdArrowForwardIos size={24} />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className={`flex gap-4 overflow-x-auto scroll-smooth no-scrollbar py-2 px-10 ${containerClassName}`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-xl cursor-pointer overflow-hidden flex-shrink-0 transition-transform hover:-translate-y-1 hover:shadow-lg ${cardWidth}`}
          >
            {item.type === 'photo' ? (
              <div className={`relative ${cardHeight} w-full`}>
                <NextImage src={item.src} alt={item.title} fill className="object-cover" />
              </div>
            ) : (
              <div className={`relative w-full ${cardHeight}`}>
                <iframe
                  src={item.src}
                  title={item.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
            )}

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              {item.subtitle && <p className="text-sm text-green-700 font-medium">{item.subtitle}</p>}
              {item.description && <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
