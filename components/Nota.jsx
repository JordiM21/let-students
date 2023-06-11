import React from 'react'
import { FcIdea } from 'react-icons/fc'

export default function Nota({ text }) {
  return (
    <div className='bg-sky-100 p-4 rounded-md border-sky-200 border flex justify-center'>
      <div className='mr-2'>
        <FcIdea size={30} />
      </div>
      <p className='font-semibold text-sm opacity-90 text-gray-800'>
        {text}
      </p>
    </div>
  )
}
