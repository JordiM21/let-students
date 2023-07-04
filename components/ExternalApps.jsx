import Image from 'next/image'
import React from 'react'
import flipIcon from '@/public/flipIcon.png'
import kahootIcon from '@/public/kahootIcon.png'
import padletIcon from '@/public/padletIcon.png'
import ESLIcon from '@/public/ESLIcon.png'
import linguaIcon from '@/public/linguaIcon.png'
import youGlishIcon from '@/public/youGlishIcon.png'
import Link from 'next/link'


export default function ExternalApps({ role }) {


  return (
    <>
      <div className='flex justify-around my-6 md:w-[400px]'>
        <Link href="https://flip.com/" target='_blank'>
          <div>
            <Image src={flipIcon} className='w-[80px] rounded-xl active:opacity-80 active:scale-95 hover:scale-110 cursor-pointer hover:-rotate-2 shadow-xl shadow-gray-800' />
          </div>
          <p className='text-center text-gray-300'>Flip</p>
        </Link>
        <Link href="https://kahoot.com/" target='_blank'>
          <div>
            <Image src={kahootIcon} className='w-[80px] rounded-xl active:opacity-80 active:scale-95  hover:scale-110 cursor-pointer hover:rotate-1 shadow-xl shadow-gray-800' />
          </div>
          <p className='text-center text-gray-300'>Kahoot</p>
        </Link>
        <Link href="https://padlet.com/dashboard" target='_blank'>
          <div>
            <Image src={padletIcon} className='w-[80px] rounded-xl active:opacity-80 active:scale-95  bg-gray-200 hover:scale-110 cursor-pointer shadow-xl shadow-gray-800 hover:rotate-2' />
          </div>
          <p className='text-center text-gray-300'>Padlet</p>
        </Link>
      </div>
      {
        role == "admin" && (
          <>
            <div className='flex justify-around my-6 md:w-[400px]'>
              <Link href="https://www.esl-lab.com/easy/" target='_blank'>
                <div>
                  <Image src={ESLIcon} className='w-[80px] h-[80px] object-cover rounded-xl hover:scale-110 cursor-pointer hover:-rotate-2 shadow-xl shadow-gray-800' />
                </div>
                <p className='text-center text-gray-300'>ESL Lab</p>
              </Link>
              <Link href="https://lingua.com/english/reading/" target='_blank'>
                <div>
                  <Image src={linguaIcon} className='w-[80px] h-[80px] object-contain bg-gray-200 rounded-xl hover:scale-110 cursor-pointer hover:rotate-1 shadow-xl shadow-gray-800' />
                </div>
                <p className='text-center text-gray-300'>Lingua</p>
              </Link>
              <Link href="https://it.youglish.com/" target='_blank'>
                <div>
                  <Image src={youGlishIcon} className='w-[80px] rounded-xl bg-gray-200 hover:scale-110 cursor-pointer shadow-xl shadow-gray-800 hover:rotate-2' />
                </div>
                <p className='text-center text-gray-300'>YouGlish</p>
              </Link>
            </div>
          </>
        )
      }
    </>
  )
}
