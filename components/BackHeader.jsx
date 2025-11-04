import { useRouter } from 'next/router'
import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'

export default function BackHeader({ largeTitle, parentTitle }) {
  const router = useRouter()

  // Helper function to capitalize only the first letter
  const capitalize = (text) =>
    typeof text === 'string' && text.length > 0 ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : text

  return (
    <div className="bg-gray-950 fixed w-full z-40 top-0 left-0 px-2 backdrop-blur-md bg-opacity-60">
      <div
        onClick={() => router.back()}
        className="group transition-all duration-1000 ease-in cursor-pointer flex items-center text-sm pt-2"
      >
        <MdArrowBackIos className="opacity-80 group-hover:opacity-100 group-hover:scale-105 fill-white" size={20} />
        <p className="text-white group-hover:underline group-hover:opacity-100 font-bold opacity-80 group-hover:scale-105 group-active:text-blue-900">
          {capitalize(parentTitle)}
        </p>
      </div>

      <div>
        <h1 className="text-white text-2xl pb-2">{capitalize(largeTitle)}</h1>
      </div>
    </div>
  )
}
