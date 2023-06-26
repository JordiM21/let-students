import React from 'react'

export default function ProgressLesson({ progress }) {
  const maxLessons = 25

  console.log(progress)
  return (
    <div className='flex gap-1 justify-center w-full'>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 1 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 2 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 3 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 4 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 5 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 6 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 7 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 8 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 9 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 10 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 11 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 12 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 13 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 14 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 15 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 16 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 17 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 18 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 19 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 20 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 21 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 22 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 23 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 24 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>
      <div className={`w-3 h-6 rounded-sm hover:opacity-60 cursor-pointer ${progress < 25 ? 'bg-white' : 'bg-[var(--color3)]'}`}></div>

    </div>
  )
}
