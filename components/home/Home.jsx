import React from 'react'
import NextImage from 'next/image'
import { Inter } from 'next/font/google'
import argentina from '@/public/flags/argentina.png'
import teacher1 from '@/public/teachers/teacher1.jpg'
import teacher2 from '@/public/teachers/teacher2.jpg'
import teacher3 from '@/public/teachers/teacher3.png'
import teacher4 from '@/public/teachers/teacher4.jpg'
import teacher5 from '@/public/teachers/teacher5.png'
import teacher6 from '@/public/teachers/teacher6.png'
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
import review1 from '@/public/review1.webp'
import review2 from '@/public/review2.webp'
import review3 from '@/public/review3.webp'
import review4 from '@/public/review4.webp'
import review5 from '@/public/review5.webp'
import sticker1 from '@/public/sticker1.png'
import sticker2 from '@/public/sticker2.png'
import sticker3 from '@/public/sticker3.png'
import sticker4 from '@/public/sticker4.png'
import step1 from '@/public/step1.png'
import step2 from '@/public/step2.png'
import step4 from '@/public/step3.png'
import step3 from '@/public/step4.png'
import background from '@/public/background-landing.svg'
import backgroundFooter from '@/public/background-footer.svg'
import letbgWEBP from '@/public/let-bg.webp'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import FaqAccordion from '@/components/Accordion'
import Link from 'next/link'
import { FaStar, FaWhatsapp } from 'react-icons/fa'
import { useGsapScrollAnim } from '../useGsapScrollAnim'
import Carousel from '../CarouselCards'
import ScheduleClassModal from '@/components/ScheduleClassModal'

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

export default function HomeView({ setNavItem }) {
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
  const step4Ref = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const card4Ref = useRef(null)
  const cardsRef = useRef([])

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

  const modalRef = useRef(null)

  const openModal = () => {
    modalRef.current?.openModal()
  }
  // Animations Trigger
  useGsapScrollAnim(
    [
      // === HEADER ANIMATION ===
      {
        ref: imageRef,
        from: { opacity: 1, y: 0 },
        to: { opacity: 1, y: 0, duration: 0.8 },
      },
      {
        ref: textRef,
        from: { opacity: 0, y: 0 },
        to: { opacity: 1, y: 10, duration: 0.8 },
      },

      // === TESTIMONIAL CARDS ===
      {
        ref: card1Ref,
        from: { opacity: 0, y: 40, x: -30 },
        to: { opacity: 1, y: 0, x: 0, duration: 0.4 },
      },
      {
        ref: card2Ref,
        from: { opacity: 0, y: 40, x: 30 },
        to: { opacity: 1, y: 0, x: 0, duration: 0.4, delay: 0.2 },
      },
      {
        ref: card3Ref,
        from: { opacity: 0, y: 40, x: -30 },
        to: { opacity: 1, y: 0, x: 0, duration: 0.4, delay: 0.4 },
      },
      {
        ref: card4Ref,
        from: { opacity: 0, y: 40, x: 30 },
        to: { opacity: 1, y: 0, x: 0, duration: 0.4, delay: 0.6 },
      },

      // === STICKERS ===
      {
        ref: sticker1Ref,
        from: { opacity: 0, x: 0, y: 0 },
        to: { opacity: 1, x: 20, y: -70, duration: 0.5 },
      },
      {
        ref: sticker2Ref,
        from: { opacity: 0, x: 0, y: 0 },
        to: { opacity: 1, x: 20, y: 50, duration: 0.5 },
      },
      {
        ref: sticker3Ref,
        from: { opacity: 0, x: 0 },
        to: { opacity: 1, x: -40, duration: 0.5 },
      },
      {
        ref: sticker4Ref,
        from: { opacity: 0, x: 0, y: 0 },
        to: { opacity: 1, x: -40, y: 100, duration: 0.5 },
      },

      // === STEPS ===
      {
        ref: step1Ref,
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration: 0.4 },
      },
      {
        ref: step2Ref,
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration: 0.4 },
      },
      {
        ref: step3Ref,
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration: 0.4 },
      },
      {
        ref: step4Ref,
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0, duration: 0.4 },
      },
    ],
    [dataLoaded] // dependencies
  )

  return (
    <>
      {/* Modal lives here but invisible until opened */}
      <ScheduleClassModal ref={modalRef} />
      <div>
        <div id="hero" className="w-full absolute top-20 md:top-36 z-20" ref={textRef}>
          <h1 className="text-3xl md:text-6xl shadow-black drop-shadow-lg my-4 md:my-8 text-center text-[#F9F1D2] font-black">
            Pequeños Bilingües
            <br />
            Grandes Oportunidades
          </h1>
          <p className="text-sm md:text-xl py-2 drop-shadow-sm text-center text-white">
            Haz que tu hijo aprenda inglés mientras se divierte.
          </p>
          <p className="text-xs md:text-base py-1 drop-shadow-sm text-center text-white opacity-60 px-8">
            Clases en vivo 🎥 Profesores certificados 👩‍🏫 Método Interáctivo 🧩
          </p>
          <div className="flex w-11/12 md:w-[500px] mx-auto justify-evenly my-16">
            <div
              onClick={() => setNavItem('Nosotros')}
              className="py-2 px-3 md:px-6 md:py-4 rounded-full bg-[#F9F1D2] shadow-black/30 shadow-lg cursor-pointer hover:scale-105 ease-in 1s active:scale-95"
            >
              <a className="font-black text-sm md:text-lg text-[#173330]">La Academia</a>
            </div>
            <div
              onClick={openModal}
              className="py-2 px-3 md:px-6 md:py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
            >
              <a className="font-black text-sm md:text-lg text-white">Agenda una Clase Gratuita</a>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <NextImage
            src={letbgWEBP}
            className="w-full h-full object-cover"
            priority // 👈 preload for faster LCP
            fetchPriority="high" // optional: for extra clarity
            quality={80}
            ref={imageRef}
            alt="Background illustration"
          />
          <div className="absolute inset-0 bg-[#2D878D]/60 mix-blend-multiply"></div>
        </div>
        {/* Floating Chip */}
        <div className="bg-[#173330] absolute py-2 px-4 rounded-full top-[480px] md:top-[580px] lg:top- left-4 z-20 shadow-lg shadow-[#08201e]">
          <p className="text-center text-xs md:text-sm text-[#F9F1D2]/80">
            +250 familias felices en Latinoamérica y Europa
          </p>
        </div>

        {/* Logos slider */}
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
        {/* First Section */}
        <div className="relative py-10 md:py-20 bg-[#173330] flex flex-wrap items-center overflow-hidden">
          {/* Left content */}
          <div className="lg:w-[45%] my-3 max-md:mx-10 md:ml-16 relative z-10">
            <h2 className="text-[#F9F1D2] text-4xl md:text-5xl font-black text-start">
              ¿Por qué los padres eligen <span className="text-[#F99B32] font-black">LET Academy?</span>
            </h2>

            <p className="text-[#F9F1D2]/80 text-start font-semibold my-6 leading-relaxed">
              Porque combinamos diversión, resultados reales y un ambiente lleno de confianza. Nuestro programa fue
              diseñado para que los niños aprendan inglés con alegría, mientras los padres ven su progreso semana a
              semana.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                  ✓
                </div>

                <span className="text-[#F9F1D2] font-medium">
                  Profesores certificados y apasionados por enseñar a niños.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                  ✓
                </div>

                <span className="text-[#F9F1D2] font-medium">
                  Clases 100% interactivas con seguimiento personalizado.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                  ✓
                </div>

                <span className="text-[#F9F1D2] font-medium">
                  Método comunicativo: aprender, jugar y hablar desde el primer día.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                  ✓
                </div>

                <span className="text-[#F9F1D2] font-medium">
                  Reportes y actividades para involucrar a los padres en el proceso.
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div
              onClick={openModal}
              className="px-4 md:px-6 py-4 rounded-full bg-[#F17024] text-white shadow-black/30 shadow-lg w-[230px] md:w-[270px] font-black text-base md:text-lg cursor-pointer mt-8 hover:scale-105 ease-in duration-200 active:scale-95"
            >
              Agenda tu Clase Gratuita
            </div>
          </div>

          {/* Right content: video */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg px-2 pt-2 pb-4 cursor-pointer transition-transform hover:-translate-y-1 w-10/12 lg:w-1/2 max-w-[600px] mx-auto">
            <div className="relative w-full aspect-video">
              <iframe
                src={'https://www.youtube.com/embed/veYDnCDTEbU'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#173330] relative py-10 px-6 md:px-12 lg:px-20">
          <h2 className="text-center text-[#F9F1D2] font-black text-5xl md:text-7xl mb-6">Lo que dicen de nosotros</h2>
          <p className="text-center text-[#F9F1D2]/80 max-w-2xl mx-auto mb-12">
            Historias reales de padres orgullosos y pequeños que ya dominan el inglés.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Card 1 - wide */}
            <div
              ref={card1Ref}
              className="md:col-span-4 bg-white cursor-pointer rounded-2xl shadow-lg p-6 flex flex-col justify-start hover:scale-[1.02] transition-transform duration-300 relative"
            >
              {/* Stars */}
              <div className="absolute top-4 right-4 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <NextImage src={review1} alt="Profile" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-lg text-[#173330]">María José Acevedo</h3>
                  <p className="text-sm text-gray-500">Comerciante</p>
                </div>
              </div>
              <p className="text-gray-700">
                Mis pequeños antes se aburrían con el inglés del colegio, pero en LET Academy lo viven como un juego y
                cada clase es divertida, participan sin miedo y ya incluso empezaron a entender sus series y películas
                en inglés sin subtítulos.
                <span className="text-gray-700 hidden md:inline">
                  {' '}
                  Recomiendaría la academia a niños que se distraen facilmente como mis hijos porque la profesora les
                  mantiene entretenidos y aprendiendo
                </span>
              </p>
            </div>

            {/* Card 2 - tall */}
            <div
              ref={card2Ref}
              className="md:col-span-2 md:row-span-2 bg-white cursor-pointer rounded-2xl shadow-lg p-6 flex flex-col justify-start hover:scale-[1.02] transition-transform duration-300 relative"
            >
              {/* Stars */}
              <div className="absolute top-4 right-4 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <NextImage src={review2} alt="Profile" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-lg text-[#173330]">Antonio Méndez</h3>
                  <p className="text-sm text-gray-500">Agente Inmobiliario</p>
                </div>
              </div>
              <p className="text-gray-700">
                Mi hija Lucía esta aprendiendo inglés jugando, cantando y riendo con las clases de la academia. Los
                profesores los motivan a aprender en formas que se divierten al mismo tiempo y cada día que le toca su
                clase me insiste para hacerla entrar. <br />
                <span className="text-gray-700 hidden md:inline">
                  {' '}
                  Mi pequeña tiene un aprendizaje visual mayormente y los profesores explican los temas en modo que sea
                  fácil de asimilar para todos los estudiantes de la clase, incluso para los que tienen mayor dificultad
                  o les cuesta el idioma. <br />
                  Quiero agradecer y recomendar especialmente al profesor Jordi, que ha estado siempre disponible para
                  mi hija, con cualquier tema que no entendía o tarea de la escuela le ha ayudado en lo necesario.
                  Muchas gracias...
                </span>
              </p>
            </div>

            {/* Card 3 */}
            <div
              ref={card3Ref}
              className="md:col-span-2 bg-white cursor-pointer rounded-2xl shadow-lg p-6 flex flex-col justify-start hover:scale-[1.02] transition-transform duration-300 relative"
            >
              {/* Stars */}
              <div className="absolute top-4 right-4 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <NextImage src={review3} alt="Profile" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-lg text-[#173330]">Gustavo Bravo</h3>
                  <p className="text-sm text-gray-500">Médico Veterinario</p>
                </div>
              </div>
              <p className="text-gray-700">
                100% recomendado, los profesores son muy profesionales, disponibles y amables. La enseñanza es
                excelente, el aprendizaje muy rápido y en poco tiempo mi pequeño Santiago ya estaba nombrando cosas en
                inglés por toda la casa, muy satisfecho con LET Academy y contento con el avance de mi hijo.
              </p>
            </div>

            {/* Card 4 */}
            <div
              ref={card4Ref}
              className="md:col-span-2 bg-white cursor-pointer rounded-2xl shadow-lg p-6 flex flex-col justify-start hover:scale-[1.02] transition-transform duration-300 relative"
            >
              {/* Stars */}
              <div className="absolute top-4 right-4 flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <NextImage src={review4} alt="Profile" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-lg text-[#173330]">José Ramírez</h3>
                  <p className="text-sm text-gray-500">Independiente</p>
                </div>
              </div>
              <p className="text-gray-700">
                Recomiendo LET Academy sin dudarlo. Mi hija aprendió más en unos meses que en años anteriores, la
                profesora es súper amable y profesional en las clases. Después de tanto buscar finalmente encontramos la
                academia ideal
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/+393792913474?text=Hola!%20Acabo%20de%20ver%20la%20página%20y%20me%20gustaría%20obtener%20más%20información%20por%20favor"
            target="_blank"
          >
            <div className="px-3 flex justify-around items-center w-[250px] mx-auto py-2 rounded-full bg-[#25d366] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95 mt-12">
              <p style={{ textShadow: '2px 2px 2px #1ba84f' }} className="font-black text-lg text-white text-shadow-md">
                Contacta un Asesor
              </p>
              <FaWhatsapp className="w-[40px] h-[40px] fill-white p-1" />
            </div>
          </a>
        </div>
        <div className="py-20 px-10 bg-[#17423d] space-y-8">
          <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg my-4 text-center text-white font-black">
            Nuestro
            <br />
            Aprendizaje
          </h3>

          {/* Pilar 1 */}
          <div
            ref={step1Ref}
            className="w-full flex items-start flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="lg:max-w-[35%] xl:max-w-[45%]">
              <h3 className="text-3xl md:text-6xl font-black">Plataforma Interactiva</h3>
              <p className="py-2 opacity-80 text-start">
                Cada estudiante recibe su carnet estudiantil y acceso a nuestra plataforma digital, donde puede
                practicar inglés, revisar sus calificaciones, resolver actividades interactivas y aprender a su propio
                ritmo, en cualquier momento del día.
              </p>
            </div>
            <div className="max-w-lg:w-full">
              <NextImage src={step1} className="w-[400px] md:w-[450px] h-auto mx-auto" />
            </div>
          </div>

          {/* Pilar 2 */}
          <div
            ref={step2Ref}
            className="w-full flex flex-row-reverse items-start flex-wrap justify-between h-[500px] md:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="lg:max-w-[35%] xl:max-w-[45%]">
              <h3 className="text-3xl md:text-6xl font-black">Método Audiovisual</h3>
              <p className="py-2 opacity-80 text-start">
                Aprender inglés puede ser tan divertido como ver una película. Nuestro método se basa en materiales
                audiovisuales: series, dibujos y juegos adaptados a la edad del estudiante, para que el aprendizaje
                ocurra de forma natural mientras se divierte.
              </p>
            </div>
            <div className="max-w-lg:w-full">
              <NextImage src={step2} className="w-[450px] md:w-[550px] h-auto mx-auto" />
            </div>
          </div>

          {/* Pilar 3 */}
          <div
            ref={step3Ref}
            className="w-full flex items-start flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="lg:max-w-[35%] xl:max-w-[45%]">
              <h3 className="text-3xl md:text-6xl font-black">Clases en Vivo Personalizadas</h3>
              <p className="py-2 opacity-80 text-start">
                Nuestras clases online en grupos reducidos aseguran atención personalizada. Fomentamos la participación,
                la expresión oral y la confianza para hablar inglés sin miedo a equivocarse, porque aprender también es
                atreverse.
              </p>
            </div>
            <div className="max-w-lg:w-full">
              <NextImage src={step3} className="w-[450px] md:w-[550px] h-auto mx-auto" />
            </div>
          </div>

          {/* Pilar 4 */}
          <div
            ref={step4Ref}
            className="w-full flex-row-reverse flex items-start flex-wrap justify-between h-[500px] lg:h-[300px] rounded-md relative bg-[#ffffff] overflow-hidden px-12 pt-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="lg:max-w-[35%] xl:max-w-[45%]">
              <h3 className="text-3xl md:text-6xl font-black">Evaluación de Conocimientos</h3>
              <p className="py-2 opacity-80 text-start">
                Evaluamos el progreso de forma dinámica y divertida con pruebas interactivas que van más allá del examen
                tradicional. Estas actividades visuales y didácticas permiten reforzar la comprensión y celebrar cada
                avance del estudiante.
              </p>
            </div>
            <div className="max-w-lg:w-full">
              <NextImage src={step4} className="w-[450px] md:w-[550px] h-auto mx-auto" />
            </div>
          </div>
        </div>

        <div className="bg-white relative py-20">
          <h2 className="text-center font-black text-3xl md:text-8xl z-50">Nuestros Teachers Certificados</h2>
          <p className="text-center text-xs sm:text-sm py-6 opacity-60 px-10">
            Profesionales apasionados por la educación y comprometidos con el futuro de tu hijo
          </p>
          <Carousel
            cardWidth="w-64"
            cardHeight="h-40"
            items={[
              {
                type: 'photo',
                src: teacher1,
                title: 'Jordi',
                subtitle: 'Online Teacher',
                description: 'Docente online certificado de Inglés e Italiano (7-14)',
              },
              {
                type: 'photo',
                src: teacher4,
                title: 'Ersa',
                subtitle: 'Online Teacher',
                description: 'Docente online certificada de Inglés e Italiano (4-6)',
              },
              {
                type: 'photo',
                src: teacher3,
                title: 'Luca',
                subtitle: 'Italian Teacher',
                description: 'Docente presencial de Italiano en Español (Adults)',
              },
              {
                type: 'photo',
                src: teacher2,
                title: 'Anna',
                subtitle: 'Children Teacher',
                description: 'Docente presencial de Inglés certificada (7-14)',
              },
              {
                type: 'photo',
                src: teacher6,
                title: 'Vincenzo',
                subtitle: 'Business Teacher',
                description: 'Docente de Inglés para profesionales (Adults)',
              },
            ]}
          />
        </div>
        <div className="bg-white relative py-60">
          <NextImage
            ref={sticker1Ref}
            src={sticker1}
            className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute top-10 md:top-8 right-10 rotate-6"
          />
          <NextImage
            src={sticker2}
            ref={sticker2Ref}
            className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute bottom-2 right-12 rotate-12"
          />
          <NextImage
            src={sticker3}
            ref={sticker3Ref}
            className="h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full absolute top-2 left-16 -rotate-12"
          />
          <NextImage
            src={sticker4}
            ref={sticker4Ref}
            className="h-[160px] w-[160px] md:h-[250px] md:w-[250px] rounded-full absolute bottom-2 left-14 md:left-16 -rotate-6"
          />
          <h2 className="text-center font-black text-6xl md:text-8xl z-50">
            Tu Hijo Disfrutará <br /> Aprender Inglés
          </h2>
        </div>
        <div className="bg-[#173330]">
          <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg pt-28 pb-8 md:pb-20 text-center text-white font-black">
            Preguntas
            <br />
            Frecuentes
          </h3>
          <FaqAccordion textColor="white" bgColor="#173330" />
        </div>
      </div>
    </>
  )
}
