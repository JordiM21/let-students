import React from 'react'
import Lottie from 'lottie-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillCloseCircle } from 'react-icons/ai'

export default function CtaAnimationPage({ title, subTitle, animation, cta, bg, btn, link }) {
  const router = useRouter()
  return (
    <div className={`fixed z-50 top-0 right-0 flex flex-col justify-between pb-20 h-screen w-screen ${bg == "green" ? "bg-green-600" : "bg-blue-700"}`}>
      <AiFillCloseCircle onClick={() => router.reload()} className='text-white cursor-pointer right-2 top-2 absolute text-2xl fill-white' />
      <div className='md:mx-auto md:max-w-lg mx-8 -mb-16 mt-8'>
        <p className='text-center text-2xl text-white font-bold'>{title}</p>
      </div>
      <div className='mx-auto max-w-[350px] mt-8'>
        <Lottie
          animationData={animation} />
      </div>
      <div className='md:mx-auto -mt-4 md:max-w-lg mx-8 '>
        <p className='text-center text-gray-300'>{subTitle}</p>
        {
          btn == "router" ? (
            <button onClick={() => router.push(link)} className='w-full py-6 text-center bg-white text-blue-800 rounded-full mt-10 hover:opacity-80 hover:scale-95 font-bold text-xl'>{cta} </button>
          ) : (
            <Link href={link} target='_blank'>
              <div className='w-full py-6 text-center bg-white text-blue-800 rounded-full mt-8 hover:opacity-80 hover:scale-95 font-bold text-xl'  >
                {cta}
              </div>
            </Link>
          )
        }
      </div>
    </div>
  )
}
