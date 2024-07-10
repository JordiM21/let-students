import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowRightCircleFill, BsFillLockFill } from 'react-icons/bs'
import ProgressLesson from './ProgressLesson'

export default function LevelPreview({ image, url, description, title, disabled, progress }) {
  const router = useRouter()

  return (
    <div>
      {disabled == false && (
        <div className="max-w-sm mx-auto group relative">
          <div className="overflow-hidden h-6 absolute top-2 right-10 z-10 bg-transparent">
            <ProgressLesson progress={progress} />
          </div>
          <div
            onClick={() => router.push(url)}
            className="rounded-md relative max-w-sm h-40 md:h-full mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer flex items-center justify-center"
          >
            <Image src={image} className="w-full object-cover group-hover:scale-110 transition-all .1s ease-in" />
          </div>
          <div className="bg-[var(--blueSuperDark)] pt-9 group-hover:-mt-8 -mt-24 rounded-b-md">
            <p className="px-2 text-sm text-gray-400">{description}</p>
            <div className="flex justify-between items-center my-1 px-4">
              <p className="text-gray-300 group-hover:text-white text-lg">{title}</p>
              <BsArrowRightCircleFill className="fill-gray-300 group-hover:fill-white text-xl rotate-90 group-hover:-rotate-90" />
            </div>
          </div>
        </div>
      )}
      {disabled == true && (
        <div className="max-w-sm mx-auto group">
          <div className="rounded-md relative max-w-sm h-40 md:h-full mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer flex items-center justify-center">
          <div className="overflow-hidden absolute bg-gray-800">
            <ProgressLesson progress={progress} />
          </div>
            <div className="bg-gray-400 bg-opacity-0 backdrop-blur-lg absolute w-full h-full top-0 right-0 z-20"></div>
            <div className="absolute z-30 top-12 md:top-32 font-extrabold right-0 w-full bg-white text-center text-2xl bg-opacity-60 py-4">
              Nivel no disponible
            </div>
            <Image src={image} className="w-full object-cover group-hover:scale-110 transition-all .1s ease-in" />
          </div>
          <div className="bg-[var(--blueSuperDark)] pt-9 group-hover:-mt-8 -mt-24 rounded-b-md">
            <p className="px-2 text-sm text-gray-400">{description}</p>
            <div className="flex justify-between items-center my-1 px-4">
              <p className="text-gray-300 group-hover:text-white text-lg">{title} </p>
              <BsFillLockFill className="fill-gray-300 group-hover:fill-white text-xl rotate-0" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
