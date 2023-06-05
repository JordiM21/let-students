import React from 'react'

export function DoubleExample({ english1, english2, spanish1, spanish2 }) {
  return (
    <div><div className='bg-gray-200 flex justify-between transition-all 1s ease-in p-4 rounded-md text-xl hover:bg-gray-300 hover:shadow-md shadow-sm cursor-pointer'>
      <div className='w-1/2'>
        <p>{english1}</p>
        <p className='text-gray-600 text-sm'>{spanish1}</p>
      </div>
      <div className='w-1/2'>
        <p>{english2}</p>
        <p className='text-gray-600 text-sm'>{spanish2}</p>
      </div>
    </div></div>
  )
}

export function SingleExample({ english, spanish }) {
  return (
    <div>
      <div className='bg-gray-200 transition-all 1s ease-in p-4 rounded-md text-2xl hover:bg-gray-300 hover:shadow-md shadow-sm cursor-pointer'>
        <p>{english}</p>
        <p className='text-gray-600 text-sm'>{spanish}</p>
      </div>
    </div>
  )
}

export function CustomTitle({ title, titleSpanish }) {
  return (
    <div className='my-4'>
      <h1 className='text-gray-800 font-bold text-4xl'>{title}</h1>
      <p className='text-sm opacity-60 font-semibold'>({titleSpanish})</p>

    </div>
  )
}

