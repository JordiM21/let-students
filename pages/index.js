import NextImage from 'next/image'
import { Inter } from 'next/font/google'
import slide1 from '@/public/slide1.png'
import slide2 from '@/public/slide2.png'
import slide3 from '@/public/slide3.png'
import sticker1 from '@/public/sticker1.png'
import sticker2 from '@/public/sticker2.png'
import sticker3 from '@/public/sticker3.png'
import sticker4 from '@/public/sticker4.png'
import step1 from '@/public/step1.png'
import step2 from '@/public/step2.png'
import step3 from '@/public/step3.png'
import background from '@/public/background-landing.svg'
import backgroundFooter from '@/public/background-footer.svg'
import niños from '@/public/niños.png'
import padres from '@/public/padres.png'
import estudiantes from '@/public/estudiantes.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState, useRef } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import gsap from 'gsap'
import Icon from '@/public/Icon.png'
import { Divider } from '@mui/material'
import AccordionUsage from '@/components/Accordion'
import Link from 'next/link'

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

  useEffect(() => {
    if (dataLoaded) {
      gsap.fromTo(imageRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' })
      gsap.fromTo(textRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      gsap.fromTo(
        sticker1Ref.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
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
        { opacity: 0, x: 50, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: 'power1.out',
          duration: 0.5,
          opacity: 1,
          duration: 1,
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
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
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
        { opacity: 0, x: -50, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
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

  return (
    <>
      {dataLoaded ? (
        <div className="relative bg-[#2D878D] min-h-screen overflow-hidden">
          <div
            onClick={() => router.replace('/')}
            className="absolute top-3 left-4 hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm hover:shadow-md bg-[#F9F3D3] rounded-full p-[5px] z-30"
          >
            <NextImage src={Icon} className="object-contain  w-[40px] h-[40px]" />
          </div>
          <div className="w-full absolute top-10 z-20" ref={textRef}>
            <h1 className="text-6xl md:text-8xl shadow-black drop-shadow-lg my-4 text-center text-white font-black">
              English for <br /> Children
            </h1>
            <p className="text-md md:text-xl drop-shadow-lg text-center text-white">
              Haz que tu hijo sea <span className="text-[#0F3F3F] text-md font-black">Bilingüe</span> <br /> y regálale
              un mundo de oportunidades
            </p>
            <div className="flex w-10/12 md:w-1/2 mx-auto justify-evenly my-6">
              <div
                onClick={() => router.push('/Login')}
                className="px-6 py-4 rounded-md bg-white shadow-black/30 shadow-lg cursor-pointer hover:scale-105 ease-in 1s active:scale-95"
              >
                <a className="font-black text-lg text-[#173330]">Soy Estudiante</a>
              </div>
              <div
                onClick={() => router.push('/Info')}
                className="px-6 py-4 rounded-md bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
              >
                <a className="font-black text-lg text-white">Nuevo Ingreso</a>
              </div>
            </div>
          </div>
          <NextImage
            src={background}
            className="w-full h-screen object-cover pt-0 bg-[#2D878D] overflow-hidden"
            priority
            ref={imageRef}
          />
          <div className="py-10 md:py-20 bg-[#173330] flex flex-wrap">
            <div className="lg:w-[40%] my-3 max-md:mx-10 md:ml-16">
              <h2 className=" text-5xl text-start font-black text-[#F9F1D2]">¿Como le haremos Bilingüe?</h2>
              <p className="text-start font-bold text-[#F9F1D2] my-6 opacity-80">
                El Progama está diseñado especialmente para que los más pequeños de la casa puedan adquirir un nuevo
                idioma. Nos especializamos en la enseñanza a estudiantes desde los 6 hasta los 14 años y destacamos por
                ofrecer acompañamiento personalizado y una participación activa de padres y representantes.
              </p>
              <div onClick={() => router.replace("/Info")} className="px-6 py-4 rounded-md bg-white text-[#173330] shadow-black/30 shadow-lg w-[250px] font-black text-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95">
                Ver Planes Disponibles
              </div>
            </div>
            <iframe
              className="sm:w-[600px] rounded-lg w-[400px] h-[225px] sm:h-[337px] mx-auto"
              src="https://www.youtube.com/embed/_aNfPuIO5eI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
          <div className="bg-white relative py-60">
            <NextImage
              ref={sticker1Ref}
              src={sticker1}
              className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute top-20 md:top-10 right-12 rotate-6"
            />
            <NextImage
              src={sticker2}
              ref={sticker2Ref}
              className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute bottom-10 right-12 rotate-12"
            />
            <NextImage
              src={sticker3}
              ref={sticker3Ref}
              className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute top-10 left-12 -rotate-12"
            />
            <NextImage
              src={sticker4}
              ref={sticker4Ref}
              className="h-[160px] w-[160px] md:h-[250px] md:w-[250px] rounded-full absolute bottom-16 left-24 md:left-16 -rotate-6"
            />
            <h2 className="text-center font-black text-6xl md:text-8xl">
              Tu Hijo disfrutará <br /> Aprender Inglés
            </h2>
          </div>
          <div className="py-20 px-10 space-y-8">
            <h3 className="text-6xl md:text-8xl shadow-black drop-shadow-lg my-4 text-center text-white font-black">
              Ruta de
              <br />
              Aprendizaje
            </h3>
            <div
              ref={step1Ref}
              className="w-full flex items-center flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2"
            >
              <div className="absolute bg-white px-4 py-2  text-2xl top-2 left-2 rounded-full">
                <p className="text-3xl text-[] font-black">1</p>
              </div>
              <div className="lg:max-w-[40%] xl:max-w-[45%]">
                <h3 className="text-6xl font-black">Aprende las bases del Inglés.</h3>
                <p className="py-2 opacity-80 text-start">
                  El primer paso es establecer unas bases del sólidas y duraderas del idioma. Que lograremos con ayuda
                  del material didáctico y clases de refuerzo en cada área
                </p>
              </div>
              <div className="max-w-lg:w-full">
                <NextImage src={step1} className="w-[450px] md:w-[550px] h-auto mx-auto" />
              </div>
            </div>
            <div
              ref={step2Ref}
              className="w-full flex flex-row-reverse items-center flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2"
            >
              <div className="absolute bg-white px-4 py-2  text-2xl top-2 left-2 rounded-full">
                <p className="text-3xl text-[] font-black">2</p>
              </div>
              <div className="lg:max-w-[40%]">
                <h3 className="text-6xl font-black">Practica lo aprendido.</h3>
                <p className="py-2 opacity-80 text-start">
                  Una vez establecidas las bases, el estudiante podrá empezar a afianzar su conocimiento mientras juega
                  y se divierte explorando cada rincón de la aldea.
                </p>
              </div>
              <div className="max-w-lg:w-full">
                <NextImage src={step2} className="w-[450px] md:w-[550px] h-auto mx-auto" />
              </div>
            </div>
            <div
              ref={step3Ref}
              className="w-full flex items-center flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2"
            >
              <div className="absolute bg-white px-4 py-2  text-2xl top-2 left-2 rounded-full">
                <p className="text-3xl text-[] font-black">3</p>
              </div>
              <div className="lg:max-w-[40%]">
                <h3 className="text-6xl font-black">Refuerza su Aprendizaje</h3>
                <p className="py-2 opacity-80 text-start">
                  Cada estudiante es asignado a un Tutor Personal, el cual se encargará de hacerle entender todos los
                  temas y no dejar ninguna pregunta sin responder.
                </p>
              </div>
              <div className="max-w-lg:w-full">
                <NextImage src={step3} className="w-[450px] md:w-[550px] h-auto mx-auto" />
              </div>
            </div>
          </div>
          <div className="bg-[#173330]">
            <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg py-12 text-center text-white font-black">
              ¿Quien estudia con
              <br />
              Nosotros?
            </h3>
            <div className="flex flex-wrap pb-10 justify-center md:space-x-10 space-y-10 items-baseline w-[95%] mx-auto">
              <div className="w-[330px] lg:w-[370px] ">
                <NextImage src={niños} className=" h-auto" />
                <p className="text-white font-black opacity-80 text-center py-4">
                  Es un método orientado a los más pequeños de la casa y funciona perfectamente en este rango.
                </p>
              </div>
              <div className="w-[330px] lg:w-[370px] ">
                <NextImage src={estudiantes} className=" h-auto" />
                <p className="text-white font-black opacity-80 text-center py-4">
                  Se complementa muy bien con el colegio y reciben ayuda en sus actividades escolares.
                </p>
              </div>
              <div className="w-[330px] lg:w-[370px] ">
                <NextImage src={padres} className=" h-auto" />
                <p className="text-white font-black opacity-80 text-center py-4">
                  Son parte activa del aprendizaje de su hijo y reciben reportes mensuales con su progreso.
                </p>
              </div>
            </div>
            <div
              onClick={() => router.push('/Info')}
              className="px-6 w-[240px] mx-auto py-4 rounded-md bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
            >
              <p className="font-black text-lg text-white">Solicitar Información</p>
            </div>
          </div>
          <div className="bg-[#173330]">
            <h3 className="text-6xl md:text-8xl shadow-black drop-shadow-lg pt-44 pb-8 md:pb-20 text-center text-white font-black">
              Preguntas
              <br />
              Frecuentes
            </h3>
            <AccordionUsage />
          </div>
          <div className="bg-[#357DB9] relative pt-44 pb-12">
            <div className="absolute top-[5vh]  w-11/12 left-1/2 transform -translate-x-1/2">
              <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg text-center text-white font-black">
                Tu Pequeño Bilingüe,
                <br />
                ¡Es Posible!
              </h3>
              <div
                onClick={() => router.push('/Info')}
                className="px-6 w-[240px] mx-auto py-4 rounded-md bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95 mt-12"
              >
                <a className="font-black text-lg text-white">Solicitar Información</a>
              </div>
            </div>
            <div className="absolute bottom-0 w-full left-0 py-8 px-2 md:px-8 flex justify-between flex-wrap">
              <div className="flex items-center flex-wrap gap-4">
                <NextImage src={Icon} className="w-20 lg:w-40 object-contain" />
                <div>
                  <h4 className="text-2xl lg:text-5xl shadow-black drop-shadow-lg text-start text-white font-black">
                    Get in touch
                  </h4>
                  <a
                    className="text-lg underline lg:text-2xl shadow-black drop-shadow-lg text-start text-white font-black"
                    target="_blank"
                    href="mailto:letacademyteam@gmail.com"
                  >
                    letacademyteam@gmail.com
                  </a>
                </div>
              </div>
              <div className="bg-white-500 flex gap-4">
                <div>
                
                  <p
                    className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black"
                  >
                    Terms of Use
                  </p>
                  <p
                    className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black"
                  >
                    Privacy Policy
                  </p>
                  <p
                    className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black"
                  >
                    2023 LET Academy Ltd
                  </p>
                  <p
                    className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black"
                  >
                    Company no. 14569152
                  </p>
                  <div className='py-4 flex gap-2 justify-around'>
<Link href={"https://www.tiktok.com/@letacademy"} target='_blank' className='p-2 bg-transparent rounded-full w-[150px] text-center border-4 border-white text-white '>
  TikTok
</Link>
<Link href={"https://www.youtube.com/@let_academy"} target='_blank' className='p-2 bg-transparent rounded-full w-[150px] text-center border-4 border-white text-white '>
  YouTube
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
