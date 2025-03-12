import NextImage from 'next/image'
import { Inter } from 'next/font/google'
import argentina from '@/public/flags/argentina.png'
import teacher1 from '@/public/teachers/teacher1.jpg'
import teacher2 from '@/public/teachers/teacher2.jpg'
import teacher3 from '@/public/teachers/teacher3.png'
import teacher4 from '@/public/teachers/teacher4.jpg'
import teacher5 from '@/public/teachers/teacher5.png'
import teacher6 from '@/public/teachers/teacher6.png'
import greenSquare1 from '@/public/GreenSquares/GreeenSquare1.png'
import greenSquare2 from '@/public/GreenSquares/GreenSquare2.png'
import greenSquare3 from '@/public/GreenSquares/GreenSquare3.png'
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
import { FaWhatsapp } from 'react-icons/fa'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

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

  return (
    <>
      {dataLoaded ? (
        <div className="relative bg-[#2D878D] min-h-screen overflow-hidden">
          <div
            onClick={() => router.replace('/Info')}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm hover:shadow-md bg-[#0f596fdf] rounded-full py-[8px] px-[20px] z-30"
          >
            <p className="font-bold text-sm text-white">Matrículas Abiertas</p>
          </div>
          <div
            onClick={() => router.replace('/')}
            className="absolute top-3 left-4 hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm hover:shadow-md bg-[#F9F3D3] rounded-full p-[5px] z-30"
          >
            <NextImage src={Icon} className="object-contain  w-[40px] h-[40px]" />
          </div>
          <a
            href="https://wa.me/+393792913474?text=Hola!%20Acabo%20de%20ver%20la%20página%20y%20me%20gustaría%20obtener%20más%20información%20por%20favor"
            className="bg-red-200"
            target="_blank"
          >
            <div className="absolute top-3 right-4 hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm z-50 hover:shadow-md bg-[#25D366] rounded-full p-[5px]">
              <FaWhatsapp className="w-[40px] h-[40px] fill-white p-1" />
            </div>
          </a>
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
                className="p-3 px-5 md:px-6 md:py-4 rounded-full bg-white shadow-black/30 shadow-lg cursor-pointer hover:scale-105 ease-in 1s active:scale-95"
              >
                <a className="font-black text-md md:text-lg text-[#173330]">Soy Estudiante</a>
              </div>
              <div
                onClick={() => router.push('/Info')}
                className="p-3 px-5 md:px-6 md:py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
              >
                <a className="font-black text-md md:text-lg text-white">Planes Disponibles</a>
              </div>
            </div>
          </div>
          <NextImage
            src={background}
            className="w-full h-screen object-cover pt-0 bg-[#2D878D] overflow-hidden"
            priority
            ref={imageRef}
          />
          <div className="relative">
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
                idioma. Nos especializamos en la enseñanza a estudiantes desde los 7 hasta los 15 años y destacamos por
                ofrecer acompañamiento personalizado y una participación activa de padres y representantes.
              </p>
              <div
                onClick={() => router.replace('/Info')}
                className="px-4 md:px-6 py-4 rounded-full bg-[#F9F1D2] text-[#173330] shadow-black/30 shadow-lg w-[250px] font-black text-md md:text-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
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
          <div className="bg-white relative py-20">
            <h2 className="text-center font-black text-5xl md:text-8xl z-50">
              Nuestros <br /> Pequeños Bilingües
            </h2>
            <p className="text-center py-6 opacity-60 px-20 ">+80 estudiantes en Español - Italiano</p>
            <div className="flex flex-wrap gap-0 justify-center my-10">
              <iframe
                className="my-8 rounded-lg w-[400px] h-[225px] mx-auto md:w-[480px] md:h-[270px]"
                src="https://www.youtube.com/embed/oEjZfTepaYM?si=IvY7rFc55Xd81zAU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              ></iframe>
              <iframe
                className="my-8 rounded-lg w-[400px] h-[225px] mx-auto md:w-[480px] md:h-[270px]"
                src="https://www.youtube.com/embed/Cg2dbPF42uI?si=PDC0CXot5RZ9RhSn"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
              ></iframe>
            </div>
            <div className="w-[320px] mx-auto rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95">
              <Link href={'https://www.youtube.com/@let_academy'} target="_blank">
                <p className="font-black text-lg text-center py-4 px-6 text-white">Ir a YouTube para más Clases</p>
              </Link>
            </div>
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
                  Todos los estudiantes al entrar al programa tendrán su carnet estudiantil y acceso a la plataforma con
                  su matrícula. Donde podrá resolver actividades, ver su progreso y acceder a los recursos de
                  aprendizaje.
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
                  El estudiante aprenderá inglés con sus peliculas favoritas y temas que realmente le interesan, de esta
                  manera le mantendremos concentrado y sin aburrirse como en las clases tradicionales. Pueden elegir de
                  más de 1.000 películas animadas de Disney, Pixar y más!
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
                  También tendrá clases en vivo donde participará en todo momento en las actividades del tutor para
                  mantener un óptimo desempeño. Tableros virtuales y videos muy cortos ayudan a desarrollar sus
                  habilidades lingüisticas.
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
                  Validamos los conocimiento de los estudiantes con evaluaciones divertidas y entretenidas (muy
                  diferentes a un exámen tradicional) son mucho más visuales y didácticos para fomentar su comprensión y
                  aprendizaje.
                </p>
              </div>
              <div className="max-w-lg:w-full">
                <NextImage src={step3} className="w-[450px] md:w-[550px] h-auto mx-auto" />
              </div>
            </div>
          </div>
          <div className="bg-white relative py-20">
            <h2 className="text-center font-black text-5xl md:text-8xl z-50">Nuestros Teachers Certificados</h2>
            <p className="text-center py-6 opacity-60 px-20">+20 docentes de Inglés - Italiano</p>
            <div className="relative overflow-hidden">
              {/* Buttons for navigation */}
              <button
                className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-gray-200 bg-opacity-70 backdrop-blur-sm text-black rounded-full p-3 hover:bg-gray-300 transition"
                onClick={() =>
                  document.getElementById('carousel-container').scrollBy({
                    left: -250,
                    behavior: 'smooth',
                  })
                }
              >
                <MdArrowBackIos size={24} />
              </button>
              <button
                className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-gray-200 bg-opacity-70 backdrop-blur-sm text-black rounded-full p-3 hover:bg-gray-300 transition"
                onClick={() =>
                  document.getElementById('carousel-container').scrollBy({
                    left: 250,
                    behavior: 'smooth',
                  })
                }
              >
                <MdArrowForwardIos size={24} />
              </button>
              {/* Carousel Container */}
              <div
                id="carousel-container"
                className="flex bg-gray-200 py-2 px-10 gap-4 overflow-x-auto scroll-smooth no-scrollbar"
              >
                {/* Teacher Cards */}
                {[
                  {
                    img: teacher1,
                    name: 'Jordi',
                    sub: 'Online Teacher',
                    description: 'Profesor certificado de Inglés e Italiano (B1-B2)',
                  },
                  {
                    img: teacher4,
                    name: 'Ersa',
                    sub: 'Online Teacher',
                    description: 'Profesora certificada de Inglés e Italiano (A1-A2)',
                  },
                  {
                    img: teacher3,
                    name: 'Luca',
                    sub: 'Italian Teacher',
                    description: 'Profesor presencial de Italiano en Español (A1+)',
                  },
                  {
                    img: teacher2,
                    name: 'Anna',
                    sub: 'Children Teacher',
                    description: 'Profesora de Inglés certificada (niños)',
                  },
                  {
                    img: teacher5,
                    name: 'Agostino',
                    sub: 'Online Teacher',
                    description: 'Profesor certificado de Inglés e Italiano (B1-B2)',
                  },
                  {
                    img: teacher6,
                    name: 'Vincenzo',
                    sub: 'Business Teacher',
                    description: 'Docente de Inglés para profesionales (C1)',
                  },
                ].map((teacher, index) => (
                  <div key={index} className="bg-green-600 p-0 w-64 min-w-[256px] rounded-md flex-shrink-0">
                    <div className="teacher-card-bg bg-green-800 rounded-md w-full h-20" />
                    <div className="teacher-card-body relative">
                      <div className="absolute -top-14 right-4">
                        {/* Image Component */}
                        <NextImage
                          src={teacher.img}
                          alt={`Photo of ${teacher.name}`}
                          width={96}
                          height={96}
                          className="my-2 object-cover rounded-full mx-auto w-24 h-24"
                        />
                      </div>
                      <div className="teacher-card-text px-8 py-4">
                        <p className="text-2xl font-black">{teacher.name}</p>
                        <p className="text-sm opacity-70">{teacher.sub}</p>
                        <p className="py-2">{teacher.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#173330] py-20">
            <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg py-8 text-center text-white font-black">
              Metodología
              <br />
              de <span className="text-yellow-400 font-black">Aprendizaje</span>
            </h3>
            <p className="mx-auto w-[90%] text-center text-white opacity-70">
              Queremos dar la oportunidad a todos los estudiantes de tener una educación de calidad donde puedan
              participar libremente y aprender de sus errores. Es por eso que creamos un ambiente cómodo donde el
              estudiante pueda desarrollar su vocabulario y exprimir sus ideas en inglés con confianza
            </p>
            <div className="flex flex-wrap gap-4 justify-center my-10">
              <div className="w-[300px] mx-auto my-8">
                <NextImage src={greenSquare1} className="my-2 rounded-lg mx-auto" />
                <p className="text-white opacity-70 text-center">
                  Tu hijo/a aprende inglés mientras se divierte y descubre su potencial.
                </p>
              </div>
              <div className="w-[300px] mx-auto my-8">
                <NextImage src={greenSquare2} className="my-2 rounded-lg mx-auto" />
                <p className="text-white opacity-70 text-center">
                  Usa el vocabulario aprendido con actividades grupales interáctivas.
                </p>
              </div>
              <div className="w-[300px] mx-auto my-8">
                <NextImage src={greenSquare3} className="my-2 rounded-lg mx-auto" />
                <p className="text-white opacity-70 text-center">
                  El estudiante realiza la prueba final y tu recibes el reporte detallado
                </p>
              </div>
            </div>
            <div
              onClick={() => router.push('/Info')}
              className="px-6 w-[240px] mx-auto py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
            >
              <p className="font-black text-lg text-white">Ver Planes y Precios</p>
            </div>
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
          <div className="bg-[#173330]">
            <h3 className="text-6xl md:text-8xl shadow-black drop-shadow-lg pt-20 pb-8 md:pb-20 text-center text-white font-black">
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
                className="px-6 w-[240px] mx-auto py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95 mt-12"
              >
                <a className="font-black text-lg text-white">Aprende Inglés Hoy</a>
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
                      className="p-2 bg-transparent rounded-full w-[150px] text-center hover:bg-blue-700/40 border-4 border-white text-white "
                    >
                      TikTok
                    </Link>
                    <Link
                      href={'https://www.youtube.com/@let_academy'}
                      target="_blank"
                      className="p-2 bg-transparent rounded-full w-[150px] text-center hover:bg-blue-700/40 border-4 border-white text-white "
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
