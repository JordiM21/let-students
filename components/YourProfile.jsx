import React from 'react'
import girl1 from '@/public/Characters/girl1.jpeg'
import girl2 from '@/public/Characters/girl2.jpeg'
import girl3 from '@/public/Characters/girl3.jpeg'
import girl4 from '@/public/Characters/girl4.jpeg'
import girl5 from '@/public/Characters/girl5.jpeg'
import girl6 from '@/public/Characters/girl6.jpeg'
import girl7 from '@/public/Characters/girl7.jpeg'
import girl8 from '@/public/Characters/girl8.jpeg'
import girl9 from '@/public/Characters/girl9.jpeg'
import girl10 from '@/public/Characters/girl10.jpeg'
import boy1 from '@/public/Characters/boy1.jpeg'
import boy2 from '@/public/Characters/boy2.jpeg'
import boy3 from '@/public/Characters/boy3.jpeg'
import boy4 from '@/public/Characters/boy4.jpeg'
import boy5 from '@/public/Characters/boy5.jpeg'
import boy6 from '@/public/Characters/boy6.jpeg'
import boy7 from '@/public/Characters/boy7.jpeg'
import boy8 from '@/public/Characters/boy8.jpeg'
import boy9 from '@/public/Characters/boy9.jpeg'
import boy10 from '@/public/Characters/boy10.jpeg'
import deafult from '@/public/Characters/default.png'

import Image from 'next/image'

export default function YourProfile({ char }) {
  return (
    <div>
      {
        !char && (
          <Image src={deafult} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "" && (
          <Image src={deafult} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl1" && (
          <Image src={girl1} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl2" && (
          <Image src={girl2} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl3" && (
          <Image src={girl3} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl4" && (
          <Image src={girl4} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl5" && (
          <Image src={girl5} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl6" && (
          <Image src={girl6} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl7" && (
          <Image src={girl7} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl8" && (
          <Image src={girl8} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl9" && (
          <Image src={girl9} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "girl10" && (
          <Image src={girl10} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy1" && (
          <Image src={boy1} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy2" && (
          <Image src={boy2} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy3" && (
          <Image src={boy3} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy4" && (
          <Image src={boy4} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy5" && (
          <Image src={boy5} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy6" && (
          <Image src={boy6} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy7" && (
          <Image src={boy7} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy8" && (
          <Image src={boy8} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy9" && (
          <Image src={boy9} className='rounded-full object-cover h-52 w-52' />
        )
      }
      {
        char == "boy10" && (
          <Image src={boy10} className='rounded-full object-cover h-52 w-52' />
        )
      }
    </div>
  )
}
