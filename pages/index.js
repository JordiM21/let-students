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
import { FcFaq, FcGlobe, FcPuzzle, FcMoneyTransfer } from 'react-icons/fc'
import backgroundFooter from '@/public/background-footer.svg'
import HomeView from '@/components/home/Home'
import NosotrosView from '@/components/home/Nosotros'
import MetodologiaView from '@/components/home/Metodologia'
import TestimoniosView from '@/components/home/Testimonios'
import PagosView from '@/components/home/Pagos'
import Icon from '@/public/Icon.png'
import { AiFillFacebook, AiFillTikTok, AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link'
import letbgWEBP from '@/public/let-bg.webp'

const inter = Inter({ subsets: ['latin'] })

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
  //update ongoing
  const [updating, setUpdating] = useState(true)

  const { user } = useAuth()
  const router = useRouter()
  const [dataLoaded, setDataLoaded] = useState(false)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const sticker1Ref = useRef(null)
  const sticker2Ref = useRef(null)
  const sticker3Ref = useRef(null)
  const sticker4Ref = useRef(null)
  const step1Ref = useRef(null)
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)

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

  //gsap
  useEffect(() => {
    if (dataLoaded) {
      gsap.fromTo(imageRef.current, { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      gsap.fromTo(textRef.current, { opacity: 0, y: 0 }, { opacity: 1, y: 10, duration: 1, ease: 'power2.out' })
      gsap.fromTo(
        sticker1Ref.current,
        { opacity: 0, x: 0, y: 0 },
        {
          opacity: 1,
          x: 40,
          y: -30,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: sticker1Ref.current,
            start: '10px 80%',
            toggleActions: 'play complete restart complete',
            once: false,
          },
        }
      )
      gsap.fromTo(
        sticker2Ref.current,
        { opacity: 0, x: 0, y: 0 },
        {
          opacity: 1,
          x: 20,
          y: 50,
          ease: 'power1.out',
          duration: 0.5,
          opacity: 1,
          scrollTrigger: {
            trigger: sticker1Ref.current,
            start: '100px 80%',
            toggleActions: 'play complete restart complete',
            once: false,
          },
        }
      )
      gsap.fromTo(
        sticker3Ref.current,
        { opacity: 0, x: 0 },
        {
          opacity: 1,
          x: -40,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: sticker1Ref.current,
            start: '200px 80%',
            toggleActions: 'play complete restart complete',
            once: false,
          },
        }
      )
      gsap.fromTo(
        sticker4Ref.current,
        { opacity: 0, x: 0, y: 0 },
        {
          opacity: 1,
          x: -40,
          y: 100,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: sticker1Ref.current,
            start: '300px 80%',
            toggleActions: 'play complete restart complete',
            once: false,
          },
        }
      )
      gsap.fromTo(
        step1Ref.current,
        { opacity: 0, x: -50, y: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: step1Ref.current,
            start: '0px 80%',
            toggleActions: 'play complete restart complete',
            once: false,
          },
        }
      )
      gsap.fromTo(
        step2Ref.current,
        { opacity: 0, x: 50, y: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: step2Ref.current,
            start: '0px 80%',
            toggleActions: 'play complete restart complete',
            once: false,
          },
        }
      )
      gsap.fromTo(
        step3Ref.current,
        { opacity: 0, x: -50, y: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: 'power1.out',
          duration: 0.5,
          scrollTrigger: {
            trigger: step3Ref.current,
            start: '0px 80%',
            toggleActions: 'play complete restart complete',
            once: false,
          },
        }
      )
    }
  }, [dataLoaded])

  const [navItem, setnavItem] = useState('Home')

  // uncomment for scrolltop function
  //  useEffect(() => {
  //    window.scrollTo({ top: 0, behavior: 'smooth' })
  //  }, [navItem])

  //  SCROLL TO A SPECIFIC PAGE COMPONENT "HERO" !!!

  //  useEffect(() => {
  //    const target = document.getElementById('hero')
  //    if (target) {
  //      target.scrollIntoView({ behavior: 'smooth' })
  //    } else {
  //      window.scrollTo({ top: 0, behavior: 'smooth' })
  //    }
  //  }, [navItem])

  return (
    <>
      {updating ? (
        <div className="text-center mt-20 p-10">
          <h2 className="text-3xl py-8">Estamos actualizando la Plataforma</h2>
          <p>Vuelve pronto para ver las nuevas mejoras y beneficios para miembros de la academia</p>
          <p className="pt-10 text-start">- LET Team</p>
          <Link href={'https://forms.gle/jwaRwY81xdrAAWqr6'} target="_blank">
            <div className="bg-white py-4 hover:scale-105 w-56 mx-auto active:scale-95 ease-in px-6 my-8 rounded-md">
            Ayúdanos a mejorar
            </div>
          </Link>
        </div>
      ) : (
        <div>Home</div>

        //commented all the code

        // {dataLoaded ? (
        //   <div>
        //     {/* text helper */}
        //     {navItem !== 'Home' && (
        //       <div
        //         className="w-[120px] h-8 fixed md:hidden bottom-[90px] left-1/2 -translate-x-1/2 z-50
        //     bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/20
        //     flex items-center justify-around"
        //       >
        //         <p className="text-sm">{navItem}</p>
        //       </div>
        //     )}
        //     {/* mobile navbar */}
        //     <div
        //       className="md:hidden w-full max-w-[380px] h-16 fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        //             bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/20
        //             flex items-center justify-around"
        //     >
        //       <div
        //         onClick={() => setnavItem('Home')}
        //         className={`group hover:scale-110 cursor-pointer p-1 rounded-full transition-all duration-150 ease-in-out ${
        //           navItem === 'Home' ? 'bg-[#F9F1D2]' : 'text-white'
        //         }`}
        //       >
        //         <NextImage src={logo} className="object-contain  w-[40px] h-[40px]" />
        //       </div>
        //       <div
        //         onClick={() => setnavItem('Nosotros')}
        //         className={`group hover:scale-110 cursor-pointer p-3 rounded-full transition-all duration-150 ease-in-out ${
        //           navItem === 'Nosotros' ? 'bg-[#F9F1D2]' : 'text-white'
        //         }`}
        //       >
        //         <FcGlobe size={28} />
        //       </div>

        //       <div
        //         onClick={() => setnavItem('Metodología')}
        //         className={`group hover:scale-110 cursor-pointer p-3 rounded-full transition-all duration-150 ease-in-out ${
        //           navItem === 'Metodología' ? 'bg-[#F9F1D2]' : 'text-white'
        //         }`}
        //       >
        //         <FcPuzzle size={28} />
        //       </div>

        //       <div
        //         onClick={() => setnavItem('Testimonios')}
        //         className={`group hover:scale-110 cursor-pointer p-3 rounded-full transition-all duration-150 ease-in-out ${
        //           navItem === 'Testimonios' ? 'bg-[#F9F1D2]' : 'text-white'
        //         }`}
        //       >
        //         <FcFaq size={28} />
        //       </div>

        //       <div
        //         onClick={() => setnavItem('Pagos')}
        //         className={`group hover:scale-110 cursor-pointer p-3 rounded-full transition-all duration-150 ease-in-out ${
        //           navItem === 'Pagos' ? 'bg-[#F9F1D2]' : 'text-white'
        //         }`}
        //       >
        //         <FcMoneyTransfer size={28} />
        //       </div>
        //       <div>
        //         <a
        //           href="https://wa.me/+393792913474?text=Hola!%20Acabo%20de%20ver%20la%20página%20y%20me%20gustaría%20obtener%20más%20información%20por%20favor"
        //           className="bg-red-200"
        //           target="_blank"
        //         >
        //           <div className="group hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm z-50 hover:shadow-md bg-[#25D366] rounded-full p-[5px]">
        //             <FaWhatsapp className="w-[40px] h-[40px] fill-white p-1" />
        //           </div>
        //         </a>
        //       </div>
        //     </div>
        //     {/* wide navbar */}
        //     <div className="w-full hidden md:flex max-w-[600px]  justify-between h-12 fixed top-4 left-1/2 -translate-x-1/2 z-50">
        //       <div
        //         onClick={() => setnavItem('Home')}
        //         className="group hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm hover:shadow-md bg-[#F9F3D3] rounded-full p-[5px] z-30"
        //       >
        //         <NextImage src={logo} className="object-contain  w-[40px] h-[40px]" />
        //         <div className="hidden absolute mt-2 -ml-1 rounded-full px-2 group-hover:block bg-white/30 backdrop-blur-md">
        //           <p className="text-sm">Inicio</p>
        //         </div>
        //       </div>
        //       <div
        //         className="flex w-full max-w-[480px] h-12 fixed left-1/2 -translate-x-1/2 z-50
        //       bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/20
        //        items-center justify-around"
        //       >
        //         <div
        //           onClick={() => setnavItem('Nosotros')}
        //           className={`group hover:scale-105 cursor-pointer px-4 py-2  rounded-full transition-all duration-150 ease-in-out ${
        //             navItem === 'Nosotros' ? 'bg-[#F9F1D2]' : 'text-white'
        //           }`}
        //         >
        //           <p>Nosotros</p>
        //         </div>

        //         <div
        //           onClick={() => setnavItem('Metodología')}
        //           className={`group hover:scale-105 cursor-pointer px-4 py-2 rounded-full transition-all duration-150 ease-in-out ${
        //             navItem === 'Metodología' ? 'bg-[#F9F1D2]' : 'text-white'
        //           }`}
        //         >
        //           <p>Metodología</p>
        //         </div>

        //         <div
        //           onClick={() => setnavItem('Testimonios')}
        //           className={`group hover:scale-105 cursor-pointer px-4 py-2 rounded-full transition-all duration-150 ease-in-out ${
        //             navItem === 'Testimonios' ? 'bg-[#F9F1D2]' : 'text-white'
        //           }`}
        //         >
        //           <p>Testimonios</p>
        //         </div>

        //         <div
        //           onClick={() => setnavItem('Pagos')}
        //           className={`group hover:scale-105 cursor-pointer px-4 py-2 rounded-full transition-all duration-150 ease-in-out ${
        //             navItem === 'Pagos' ? 'bg-blue-800/60' : 'text-white'
        //           }`}
        //         >
        //           <p>Pagos</p>
        //         </div>
        //       </div>
        //       <div>
        //         <a
        //           href="https://wa.me/+393792913474?text=Hola!%20Acabo%20de%20ver%20la%20página%20y%20me%20gustaría%20obtener%20más%20información%20por%20favor"
        //           className="bg-red-200"
        //           target="_blank"
        //         >
        //           <div className="group hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm z-50 hover:shadow-md bg-[#25D366] rounded-full p-[5px]">
        //             <FaWhatsapp className="w-[40px] h-[40px] fill-white p-1" />
        //             <div className="hidden absolute mt-2 -ml-[2px] rounded-full px-2 group-hover:block bg-white/30 backdrop-blur-md">
        //               <p className="text-sm">Chat</p>
        //             </div>
        //           </div>
        //         </a>
        //       </div>
        //     </div>
        //     {navItem === 'Home' && <HomeView />}
        //     {navItem === 'Nosotros' && <NosotrosView />}
        //     {navItem === 'Metodología' && <MetodologiaView />}
        //     {navItem === 'Testimonios' && <TestimoniosView />}
        //     {navItem === 'Pagos' && <PagosView />}
        //     {/* footer */}
        //     <div className="bg-[#357DB9] relative pt-44 pb-12">
        //       <div className="absolute top-[5vh]  w-11/12 left-1/2 transform -translate-x-1/2">
        //         <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg text-center text-white font-black">
        //           Tu Pequeño Bilingüe,
        //           <br />
        //           ¡Es Posible!
        //         </h3>
        //         <div
        //           onClick={() => router.push('/Info')}
        //           className="px-6 w-[240px] mx-auto py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95 mt-12"
        //         >
        //           <a className="font-black text-lg text-white">Aprende Inglés Hoy</a>
        //         </div>
        //       </div>
        //       <div className="absolute bottom-12 md:bottom-0 w-full left-0 py-8 px-2 md:px-8 flex justify-center">
        //         <div className="bg-white-500 md:flex justify-between items-end md:w-full gap-4">
        //           <div>
        //             <NextImage src={Icon} className="w-20 lg:w-40 object-contain" />
        //           </div>
        //           <div>
        //             <p className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
        //               Terms of Use
        //             </p>
        //             <p className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
        //               Privacy Policy
        //             </p>
        //             <p className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
        //               2023 LET Academy Ltd
        //             </p>
        //             <p className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
        //               Company no. 14569152
        //             </p>
        //             <div className="py-4 flex gap-2 justify-around">
        //               <Link
        //                 className="cursor-pointer hover:scale-125"
        //                 href={'https://www.tiktok.com/@letacademy'}
        //                 target="_blank"
        //               >
        //                 <FaTiktok size={32} />
        //               </Link>
        //               <Link
        //                 className="cursor-pointer hover:scale-125"
        //                 href={'https://www.youtube.com/@let_academy'}
        //                 target="_blank"
        //               >
        //                 <FaYoutube size={32} />
        //               </Link>
        //               <Link
        //                 className="cursor-pointer hover:scale-125"
        //                 href={'https://www.facebook.com/profile.php?id=100076017257031'}
        //                 target="_blank"
        //               >
        //                 <FaFacebook size={32} />
        //               </Link>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <NextImage src={backgroundFooter} className="w-full h-screen object-cover bg-[#2D878D] overflow-hidden" />
        //     </div>
        //   </div>
        // ) : (
        //   <LoadingScreen />
        // )}
      )}
    </>
  )
}
