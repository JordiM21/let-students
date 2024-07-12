import NextImage from 'next/image'
import { Inter } from 'next/font/google'
import argentina from '@/public/flags/argentina.png'
import bolivia from '@/public/flags/bolivia.png'
import brazil from '@/public/flags/brazil.png'
import chile from '@/public/flags/chile.png'
import colombia from '@/public/flags/colombia.png'
import ecuador from '@/public/flags/ecuador.png'
import italy from '@/public/flags/italy.png'
import mexico from '@/public/flags/mexico.png'
import spain from '@/public/flags/spain.png'
import venezuela from '@/public/flags/venezuela.png'
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
import step4 from '@/public/step4.png'
import background from '@/public/background-landing.svg'
import backgroundFooter from '@/public/background-footer.svg'
import niños from '@/public/niños.png'
import padres from '@/public/padres.png'
import estudiantes from '@/public/estudiantes.png'
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
      gsap.fromTo(imageRef.current, { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      gsap.fromTo(textRef.current, { opacity: 0, y: 0 }, { opacity: 1, y: 10, duration: 1, ease: 'power2.out' })
      gsap.fromTo(
        sticker1Ref.current,
        { opacity: 0, x: 0 },
        {
          opacity: 1,
          x: -30,
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
          x: -20,
          y: -10,
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
          x: 50,
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
          x: -10,
          y: -50,
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
          <div className="w-full absolute top-20 md:top-10 z-20" ref={textRef}>
            <h1 className="text-6xl md:text-8xl shadow-black drop-shadow-lg my-4 text-center text-white font-black">
              English for <br /> Children
            </h1>
            <p className="text-md md:text-xl drop-shadow-lg text-center text-white">
              Haz que tu hijo sea <span className="text-[#0F3F3F] text-md font-black">Bilingüe</span> <br /> y regálale
              un mundo de oportunidades
            </p>
            <div className="flex w-11/12 md:w-1/2 mx-auto justify-evenly my-6">
              <div
                onClick={() => router.push('/Login')}
                className="p-3 md:px-6 md:py-4 rounded-md bg-white shadow-black/30 shadow-lg cursor-pointer hover:scale-105 ease-in 1s active:scale-95"
              >
                <a className="font-black text-md md:text-lg text-[#173330]">Soy Estudiante</a>
              </div>
              <div
                onClick={() => router.push('/Info')}
                className="p-3 md:px-6 md:py-4 rounded-md bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
              >
                <a className="font-black text-md md:text-lg text-white">Comienza Ahora</a>
              </div>
            </div>
          </div>
          <NextImage
            src={background}
            className="w-full h-screen object-cover pt-0 bg-[#2D878D] overflow-hidden"
            priority
            ref={imageRef}
          />
          <div className='relative'>

          <div className="logos">
            <div className="logos-slide">
              <NextImage src={argentina} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={spain} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={colombia} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={chile} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={italy} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={ecuador} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={bolivia} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={mexico} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={venezuela} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={brazil} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={argentina} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={spain} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={colombia} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={chile} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={italy} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={ecuador} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={bolivia} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={mexico} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={venezuela} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={brazil} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={argentina} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={spain} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={colombia} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={chile} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={italy} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={ecuador} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={bolivia} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={mexico} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={venezuela} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={brazil} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={argentina} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={spain} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={colombia} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={chile} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={italy} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={ecuador} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={bolivia} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={mexico} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={venezuela} className="w-10 h-10 object-contain mx-8" />
              <NextImage src={brazil} className="w-10 h-10 object-contain mx-8" />
            </div>
          </div>
          </div>
          <div className="py-10 md:py-20 bg-[#173330] flex flex-wrap">
            <div className="lg:w-[40%] my-3 max-md:mx-10 md:ml-16">
              <h2 className=" text-5xl text-start font-black text-[#F9F1D2]">¿Como le haremos Bilingüe?</h2>
              <p className="text-start font-bold text-[#F9F1D2] my-6 opacity-80">
                El Progama está diseñado especialmente para que los más pequeños de la casa puedan adquirir un nuevo
                idioma. Nos especializamos en la enseñanza a estudiantes desde los 6 hasta los 15 años y destacamos por
                ofrecer acompañamiento personalizado y una participación activa de padres y representantes.
              </p>
              <div
                onClick={() => router.replace('/Info')}
                className="px-4 md:px-6 py-4 rounded-md bg-[#F9F1D2] text-[#173330] shadow-black/30 shadow-lg w-[250px] font-black text-md md:text-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
              >
                Ver Planes Disponibles
              </div>
            </div>
            <iframe
              className="sm:w-[600px] my-8 rounded-lg w-[400px] h-[225px] sm:h-[337px] mx-auto"
              src="https://www.youtube.com/embed/veYDnCDTEbU?si=1l7TYJdeg_nnfgSt"
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
              className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute top-10 md:top-10 right-2 rotate-6"
            />
            <NextImage
              src={sticker2}
              ref={sticker2Ref}
              className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute bottom-2 right-2 rotate-12"
            />
            <NextImage
              src={sticker3}
              ref={sticker3Ref}
              className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute top-2 left-2 -rotate-12"
            />
            <NextImage
              src={sticker4}
              ref={sticker4Ref}
              className="h-[160px] w-[160px] md:h-[250px] md:w-[250px] rounded-full absolute bottom-2 left-6 md:left-16 -rotate-6"
            />
            <h2 className="text-center font-black text-6xl md:text-8xl z-50">
              Tu Hijo disfrutará <br /> Aprender Inglés
            </h2>
          </div>
          <div className="py-20 px-10 space-y-8">
            <h3 className="text-6xl md:text-8xl shadow-black drop-shadow-lg my-4 text-center text-white font-black">
              Método de
              <br />
              Aprendizaje
            </h3>
            <div
              ref={step1Ref}
              className="w-full flex items-start flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2"
            >
              <div className="lg:max-w-[35%] xl:max-w-[45%]">
                <h3 className="text-4xl md:text-6xl font-black">Plataforma Interáctiva.</h3>
                <p className="py-2 opacity-80 text-start">
                  Todos los estudiantes al entrar al programa tendrán su carnet estudiantil y acceso a la plataforma con su matrícula. Donde podrá resolver actividades, ver su progreso y acceder a los recursos de aprendizaje.
                </p>
              </div>
              <div className="max-w-lg:w-full">
                <NextImage src={step1} className="w-[400px] md:w-[450px] h-auto mx-auto" />
              </div>
            </div>
            <div
              ref={step2Ref}
              className="w-full flex flex-row-reverse items-start flex-wrap justify-between h-[500px] md:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2"
            >
              <div className="lg:max-w-[35%] xl:max-w-[45%]">
              <h3 className="text-4xl md:text-6xl font-black">Aprendizaje Divertido</h3>
                <p className="py-2 opacity-80 text-start">
                  El estudiante aprenderá inglés con sus peliculas favoritas y temas que realmente le interesan, de esta manera le mantendremos concentrado y sin aburrirse como en las clases tradicionales. Pueden elegir de más de 1.000 películas animadas de Disney, Pixar y más!
                </p>
              </div>
              <div className="max-w-lg:w-full">
                <NextImage src={step2} className="w-[450px] md:w-[550px] h-auto mx-auto" />
              </div>
            </div>
            <div
              ref={step3Ref}
              className="w-full flex items-start flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2"
            >
              <div className="lg:max-w-[35%] xl:max-w-[45%]">
              <h3 className="text-4xl md:text-6xl font-black">Clases Online </h3>
                <p className="py-2 opacity-80 text-start">
                  También tendrá clases en vivo donde participará en todo momento en las actividades del tutor para mantener un óptimo desempeño. Tableros virtuales y videos muy cortos ayudan a desarrollar sus habilidades lingüisticas.
                </p>
              </div>
              <div className="max-w-lg:w-full">
                <NextImage src={step4} className="w-[450px] md:w-[550px] h-auto mx-auto" />
              </div>
            </div>
            <div
              ref={step3Ref}
              className="w-full flex-row-reverse flex items-start flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2"
            >
              <div className="lg:max-w-[35%] xl:max-w-[45%]">
              <h3 className="text-4xl md:text-6xl font-black">Test de Habilidad</h3>
                <p className="py-2 opacity-80 text-start">
                  Validamos los conocimiento de los pequeños con tests divertidos y entretenidos (nada que ver con un exámen) son mucho más visuales y didácticos para que no se sienta presionado ni intimidado.
                </p>
              </div>
              <div className="max-w-lg:w-full">
                <NextImage src={step3} className="w-[450px] md:w-[550px] h-auto mx-auto" />
              </div>
            </div>
          </div>
          <div className="bg-[#173330]">
            <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg py-12 text-center text-white font-black">
              ¿Quien hace parte
              <br />
              del Programa?
            </h3>
            <div className="flex flex-wrap pb-10 justify-center md:space-x-10 space-y-10 items-baseline w-[95%] mx-auto">
              <div className="w-[330px] lg:w-[370px] ">
                <NextImage src={niños} className=" h-auto" />
                <p className="text-white font-black opacity-80 text-center py-4">
                  Es un método orientado a los más pequeños de la casa y funciona perfectamente en este rango de edades, los niños disfrutan un montón el dinamismo de las clases y la metodología.
                </p>
              </div>
              <div className="w-[330px] lg:w-[370px] ">
                <NextImage src={estudiantes} className=" h-auto" />
                <p className="text-white font-black opacity-80 text-center py-4">
                  Se complementa muy bien con el colegio y las actividades escolares ya que reciben ayuda adicional para tareas de inglés en el colegio y preparación para exámenes.
                </p>
              </div>
              <div className="w-[330px] lg:w-[370px] ">
                <NextImage src={padres} className=" h-auto" />
                <p className="text-white font-black opacity-80 text-center py-4">
                  Los papitos son parte activa del aprendizaje de su hijo y reciben reportes mensuales con su progreso, de esta manera pueden estar al tanto en todo momento del avance de su pequeño
                </p>
              </div>
            </div>
            <div
              onClick={() => router.push('/Info')}
              className="px-6 w-[240px] mx-auto py-4 rounded-md bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
            >
              <p className="font-black text-lg text-white">Planes y Precios</p>
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
                  <p className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
                    Terms of Use
                  </p>
                  <p className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
                    Privacy Policy
                  </p>
                  <p className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
                    2023 LET Academy Ltd
                  </p>
                  <p className="text-md md:text-xl shadow-black drop-shadow-lg text-start md:text-end text-white font-black">
                    Company no. 14569152
                  </p>
                  <div className="py-4 flex gap-2 justify-around">
                    <Link
                      href={'https://www.tiktok.com/@letacademy'}
                      target="_blank"
                      className="p-2 bg-transparent rounded-full w-[150px] text-center border-4 border-white text-white "
                    >
                      TikTok
                    </Link>
                    <Link
                      href={'https://www.youtube.com/@let_academy'}
                      target="_blank"
                      className="p-2 bg-transparent rounded-full w-[150px] text-center border-4 border-white text-white "
                    >
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
