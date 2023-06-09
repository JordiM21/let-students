import React from 'react'
import albania from '@/public/flags/albania.png'
import argentina from '@/public/flags/argentina.png'
import bolivia from '@/public/flags/bolivia.png'
import brazil from '@/public/flags/brazil.png'
import chile from '@/public/flags/chile.png'
import colombia from '@/public/flags/colombia.png'
import ecuador from '@/public/flags/ecuador.png'
import italia from '@/public/flags/italy.png'
import mexico from '@/public/flags/mexico.png'
import peru from '@/public/flags/peru.png'
import romania from '@/public/flags/romania.png'
import spain from '@/public/flags/spain.png'
import uruguay from '@/public/flags/uruguay.png'
import venezuela from '@/public/flags/venezuela.png'
import Image from 'next/image'



export default function YourFlag({ country }) {
  return (
    <div>
      {
        country == "col" && (<Image className='h-8 w-12 rounded-md' src={colombia} />)
      }
      {
        country == "alb" && (<Image className='h-8 w-12 rounded-md' src={albania} />)
      }{
        country == "arg" && (<Image className='h-8 w-12 rounded-md' src={argentina} />)
      }{
        country == "bol" && (<Image className='h-8 w-12 rounded-md' src={bolivia} />)
      }{
        country == "bra" && (<Image className='h-8 w-12 rounded-md' src={brazil} />)
      }{
        country == "chi" && (<Image className='h-8 w-12 rounded-md' src={chile} />)
      }{
        country == "ecu" && (<Image className='h-8 w-12 rounded-md' src={ecuador} />)
      }{
        country == "ita" && (<Image className='h-8 w-12 rounded-md' src={italia} />)
      }{
        country == "mex" && (<Image className='h-8 w-12 rounded-md' src={mexico} />)
      }{
        country == "per" && (<Image className='h-8 w-12 rounded-md' src={peru} />)
      }{
        country == "esp" && (<Image className='h-8 w-12 rounded-md' src={spain} />)
      }{
        country == "rom" && (<Image className='h-8 w-12 rounded-md' src={romania} />)
      }{
        country == "uru" && (<Image className='h-8 w-12 rounded-md' src={uruguay} />)
      }
      {
        country == "ven" && (<Image className='h-8 w-12 rounded-md' src={venezuela} />)
      }
    </div>
  )
}
