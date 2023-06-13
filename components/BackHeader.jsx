import { useRouter } from 'next/router'
import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'

export default function BackHeader({ largeTitle, parentTitle }) {
  const router = useRouter()
  return (
    <div className='bg-sky-400 absolute w-full top-0 left-0 px-2 backdrop-blur-md bg-opacity-80'>
      <div onClick={() => router.back()} className='group transition-all 1s ease-in cursor-pointer flex items-center text-sm py-2'>
        <MdArrowBackIos className='opacity-80 group-hover:opacity-100 group-hover:scale-105 group-active:fill-blue-900' size={20} />
        <p className='group-hover:underline group-hover:opacity-100 font-bold opacity-80 group-hover:scale-105 group-active:text-blue-900'>{parentTitle}</p>
      </div>
      <div>
        <h1 className='text-2xl pb-2'>{largeTitle}</h1>
      </div>
    </div>
  )
}
