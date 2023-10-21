import Image from 'next/image'
import { Inter } from 'next/font/google'
import people1 from '@/public/covers/people1.jpg'
import people3 from '@/public/covers/people3.jpg'
import people4 from '@/public/covers/people4.jpg'
import people5 from '@/public/covers/people5.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { useEffect } from 'react'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()

  const [dataLoaded, setDataLoaded] = useState(false); // State to track data loading

  useEffect(() => {
    if (user) {
      router.push('/Dashboard');
    }
    setTimeout(() => {
      setDataLoaded(true);
    }, 2000);
  }, [router, user]);

  return (
    <>
      {
        dataLoaded
          ?
          (
            <div className='relative'>
              <div className='w-full absolute top-1/4 z-20'>
                <h1 className='text-4xl md:text-6xl drop-shadow-lg text-center text-white font-bold'>Achieve your goals and share them with others</h1>
                <p className='text-md md:text-xl drop-shadow-lg text-center text-white'>Learning a new language give you the opportunity</p>
                <div onClick={() => router.push("/Login")} className='text-center py-4 mt-10 backdrop-blur-sm w-fit mx-auto hover:backdrop-blur-0 cursor-pointer transition-all 1s ease-in rounded-md'>
                  <a className='bg-black backdrop-blur-md text-white border-4 transition-all 1s ease-in border-white px-8 py-4 bg-opacity-40 font-bold drop-shadow-md rounded-md'>Inicia Sesión ahora</a>
                </div>
              </div>
              <div className='w-full h-[100vh] bg-black bg-opacity-50 absolute z-10'></div>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=""
              >
                <SwiperSlide>
                  <Image src={people5} className='w-full h-[100vh] object-cover bg-gray-600' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={people1} className='w-full h-[100vh] object-cover bg-gray-600' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={people3} className='w-full h-[100vh] object-cover bg-gray-600' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={people4} className='w-full h-[100vh] object-cover bg-gray-600' />
                </SwiperSlide>
              </Swiper>
            </div>
          ) : (
            <LoadingScreen />
          )
      }
    </>
  )
}
