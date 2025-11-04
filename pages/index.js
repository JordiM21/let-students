import NextImage from 'next/image'
import { Inter } from 'next/font/google'
import slide1 from '@/public/slide1.png'
import slide2 from '@/public/slide2.png'
import slide3 from '@/public/slide3.png'
import background from '@/public/background-landing.svg'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState, useRef } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import gsap from 'gsap'
import logo from '@/public/let-nobg.png'
import { FaFacebook, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import backgroundFooter from '@/public/background-footer.svg'
import HomeView from '@/components/home/Home'
import NosotrosView from '@/components/home/Nosotros'
import MetodologiaView from '@/components/home/Metodologia'
import TestimoniosView from '@/components/home/Testimonios'
import PagosView from '@/components/home/Pagos'
import Icon from '@/public/Icon.png'
import Link from 'next/link'

const preloadImages = (srcArray) => {
  const promises = srcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new window.Image()
      img.src = src
      img.onload = resolve
      img.onerror = reject
    })
  })
  return Promise.all(promises)
}

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    if (user) {
      router.push('/Dashboard')
      return
    }
    const loadPlugins = async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
    }

    loadPlugins()

    const imageSources = [background.src, slide1.src, slide2.src, slide3.src]

    preloadImages(imageSources).then(() => {
      setDataLoaded(true)
    })
  }, [router, user])

  const [navItem, setnavItem] = useState('Home')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [navItem])

  //  SCROLL TO A SPECIFIC PAGE COMPONENT "HERO" !!!
  // useEffect(() => {
  //   const target = document.getElementById('hero')
  //   if (target) {
  //     target.scrollIntoView({ behavior: 'smooth' })
  //   } else {
  //     window.scrollTo({ top: 0, behavior: 'smooth' })
  //   }
  // }, [navItem])
  return (
    <>
      {dataLoaded ? (
        <div>
          {/* Glass Fixed CTA LOGIN  */}
          <div
            onClick={() => router.push('/Login')}
            className="fixed cursor-pointer max-md:top-4 md:bottom-4 right-4 z-50"
          >
            <p className="bg-[#0f5186] hover:bg-[#083a63] text-white backdrop-blur-md rounded-full px-3 py-1 border-[#166bb1] shadow-lg shadow-black/40 border border-w transition-all duration-200 ease-in-out">
              Iniciar Sesión 🔐
            </p>
          </div>

          {/* mobile navbar */}
          <div className="w-full flex md:hidden max-w-[360px] justify-between h-12 fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div onClick={() => setnavItem('Home')}>
              <div className="group hover:scale-110 mt-1 shadow-black/60 active:scale-95 cursor-pointer shadow-md z-50 bg-[#F9F1D2] rounded-full p-[5px]">
                <NextImage src={logo} className="w-[30px] h-[30px] fill-white p-1" />
                <div className="hidden absolute -top-8 -left-[1px] rounded-full p-1 group-hover:block bg-white/30 backdrop-blur-md">
                  <p className="text-xs">Home</p>
                </div>
              </div>
            </div>
            <div
              className="flex shadow-black/60 w-full max-w-[260px] h-12 fixed left-1/2 -translate-x-1/2 z-50
               bg-white/30 backdrop-blur-md rounded-full shadow-md border border-white/20
                items-center justify-around"
            >
              <div
                onClick={() => setnavItem('Nosotros')}
                className={`group cursor-pointer px-3 py-2  rounded-full transition-all duration-150 ease-in-out ${
                  navItem === 'Nosotros' ? 'bg-[#173330]' : 'hover:bg-white/30'
                }`}
              >
                <p className={`text-sm ${navItem === 'Nosotros' ? 'text-white' : ''}`}>Nosotros</p>
              </div>

              <div
                onClick={() => setnavItem('Metodología')}
                className={`group cursor-pointer px-3 py-2 rounded-full transition-all duration-150 ease-in-out ${
                  navItem === 'Metodología' ? 'bg-[#F9F1D2]' : 'hover:bg-white/60'
                }`}
              >
                <p className={`text-sm ${navItem === 'Metodología' ? '' : ''}`}>Método</p>
              </div>

              <div
                onClick={() => setnavItem('Testimonios')}
                className={`group cursor-pointer px-3 py-2 rounded-full transition-all duration-150 ease-in-out ${
                  navItem === 'Testimonios' ? 'bg-[#F9F1D2]' : 'hover:bg-white/60'
                }`}
              >
                <p className={`text-sm ${navItem === 'Testimonios' ? '' : ''}`}>Reseñas</p>
              </div>
            </div>
            <div>
              <a
                href="https:wa.me/+393792913474?text=Hola!%20Acabo%20de%20ver%20la%20página%20y%20me%20gustaría%20obtener%20más%20información%20por%20favor"
                className="bg-red-200"
                target="_blank"
              >
                <div className="group hover:scale-110 mt-1 active:scale-95 cursor-pointer shadow-black/60 shadow-md z-50 hover:shadow-md bg-[#25D366] rounded-full p-[5px]">
                  <FaWhatsapp className="w-[30px] h-[30px] fill-white p-1" />
                  <div className="hidden absolute -top-8 right-[4px] rounded-full p-1 group-hover:block bg-white/30 backdrop-blur-md">
                    <p className="text-xs">Chat</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* wide navbar */}
          <div className="w-full hidden md:flex max-w-[500px]  justify-between h-12 fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div
              onClick={() => setnavItem('Home')}
              className="group hover:scale-110 active:scale-95 cursor-pointer shadow-black/60 shadow-md bg-[#F9F3D3] rounded-full p-[5px] z-30"
            >
              <NextImage src={logo} className="object-contain  w-[40px] h-[40px]" />
              <div className="hidden absolute mt-2 -ml-1 rounded-full px-2 group-hover:block bg-white/30 backdrop-blur-md">
                <p className="text-sm">Inicio</p>
              </div>
            </div>
            <div
              className="flex w-full max-w-[380px] shadow-black/60 shadow-md h-12 fixed left-1/2 -translate-x-1/2 z-50
               bg-white/30 backdrop-blur-md rounded-full border border-white/20
                items-center justify-around"
            >
              <div
                onClick={() => setnavItem('Nosotros')}
                className={`group  cursor-pointer px-4 py-2  rounded-full transition-all duration-150 ease-in-out ${
                  navItem === 'Nosotros' ? 'bg-[#173330]' : 'hover:bg-white/30'
                }`}
              >
                <p className={`${navItem === 'Nosotros' ? 'text-white' : 'text-black'}`}>Nosotros</p>
              </div>

              <div
                onClick={() => setnavItem('Metodología')}
                className={`group  cursor-pointer px-4 py-2 rounded-full transition-all duration-150 ease-in-out ${
                  navItem === 'Metodología' ? 'bg-[#F9F1D2]' : 'hover:bg-white/30'
                }`}
              >
                <p>Metodología</p>
              </div>

              <div
                onClick={() => setnavItem('Testimonios')}
                className={`group cursor-pointer px-4 py-2 rounded-full transition-all duration-150 ease-in-out ${
                  navItem === 'Testimonios' ? 'bg-[#F9F1D2]' : 'hover:bg-white/30'
                }`}
              >
                <p>Testimonios</p>
              </div>
            </div>
            <div>
              <a
                href="https:wa.me/+393792913474?text=Hola!%20Acabo%20de%20ver%20la%20página%20y%20me%20gustaría%20obtener%20más%20información%20por%20favor"
                target="_blank"
              >
                <div className="group hover:scale-110 active:scale-95 cursor-pointer shadow-black/60 shadow-md z-50 bg-[#25D366] rounded-full p-[5px]">
                  <FaWhatsapp className="w-[40px] h-[40px] fill-white p-1" />
                  <div className="hidden absolute mt-2 -ml-[2px] rounded-full px-2 group-hover:block bg-white/30 backdrop-blur-md">
                    <p className="text-sm">Chat</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {navItem === 'Home' && <HomeView setNavItem={setnavItem} />}
          {navItem === 'Nosotros' && <NosotrosView setNavItem={setnavItem} />}
          {navItem === 'Metodología' && <MetodologiaView setNavItem={setnavItem} />}
          {navItem === 'Testimonios' && <TestimoniosView setNavItem={setnavItem} />}
          {navItem === 'Pagos' && <PagosView setNavItem={setnavItem} />}
          {/* footer */}
          <div className="bg-[#357DB9] relative pt-44 pb-12">
            <div className="absolute top-[5vh]  w-11/12 left-1/2 transform -translate-x-1/2">
              <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg text-center text-white font-black">
                Tu Pequeño Bilingüe,
                <br />
                ¡Es Posible!
              </h3>
              <a
                href="https:wa.me/+393792913474?text=Hola!%20Acabo%20de%20ver%20la%20página%20y%20me%20gustaría%20obtener%20más%20información%20por%20favor"
                target="_blank"
              >
                <div className="px-3 flex justify-around items-center w-[250px] mx-auto py-2 rounded-full bg-[#25d366] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95 mt-12">
                  <p
                    style={{ textShadow: '2px 2px 2px #1ba84f' }}
                    className="font-black text-lg text-white text-shadow-md"
                  >
                    Contacta un Asesor
                  </p>
                  <FaWhatsapp className="w-[40px] h-[40px] fill-white p-1" />
                </div>
              </a>
            </div>
            <div className="absolute bottom-12 md:bottom-0 w-full left-0 py-8 px-2 md:px-8 flex justify-center">
              <div className="bg-white-500 md:flex justify-between items-end md:w-full gap-4">
                <div>
                  <NextImage src={Icon} className="w-20 lg:w-40 object-contain" />
                </div>
                <div>
                  <p className="text-base md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
                    Terms of Use
                  </p>
                  <p className="text-base md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
                    Privacy Policy
                  </p>
                  <p className="text-base md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
                    2023 LET Academy Ltd
                  </p>
                  <p className="text-base md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
                    Company no. 14569152
                  </p>
                  <div className="py-4 flex gap-2 justify-around">
                    <Link
                      className="cursor-pointer hover:scale-125"
                      href={'https:www.tiktok.com/@letacademy'}
                      target="_blank"
                    >
                      <FaTiktok size={32} />
                    </Link>
                    <Link
                      className="cursor-pointer hover:scale-125"
                      href={'https:www.youtube.com/@let_academy'}
                      target="_blank"
                    >
                      <FaYoutube size={32} />
                    </Link>
                    <Link
                      className="cursor-pointer hover:scale-125"
                      href={'https:www.facebook.com/profile.php?id=100076017257031'}
                      target="_blank"
                    >
                      <FaFacebook size={32} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <NextImage src={backgroundFooter} className="w-full h-screen object-cover bg-[#2D878D] overflow-hidden" />
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}
