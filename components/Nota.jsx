import React from 'react'
import { FcIdea } from 'react-icons/fc'

export default function Nota({ text }) {
  return (
    <div className='bg-sky-100 p-4 rounded-md border-sky-200 border flex justify-start'>
      <FcIdea className='w-full' size={30} />
      <p>
        {text}
      </p>
    </div>
  )
}
