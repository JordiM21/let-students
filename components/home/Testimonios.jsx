import React from 'react'
import teachers from '@/public/teachers.webp'
import NextImage from 'next/image'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useRouter } from 'next/router'
import letbgWEBP from '@/public/testimoniosBg.webp'
import gsap from 'gsap'
import Carousel from '../CarouselCards'
import ScheduleClassModal from '@/components/ScheduleClassModal'
import review1 from '@/public/review1.webp'
import review2 from '@/public/review2.webp'
import review3 from '@/public/review3.webp'
import review4 from '@/public/review4.webp'
import review5 from '@/public/review5.webp'
import { useGsapScrollAnim } from '../useGsapScrollAnim'
import { FaStar, FaWhatsapp } from 'react-icons/fa'
import FaqAccordion from '../Accordion'
import { trackEvent } from '@/config/fbpixel'

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

// TestimoniosView.jsx
export default function TestimoniosView({ setNavItem }) {
  const { user } = useAuth()
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const card1Ref = useRef(null)
  const card2Ref = useRef(null)
  const card3Ref = useRef(null)
  const card4Ref = useRef(null)
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

    const imageSources = [letbgWEBP.src]

    preloadImages(imageSources).then(() => {
      setDataLoaded(true)
    })
  }, [router, user])

  useEffect(() => {
    if (dataLoaded) {
      gsap.fromTo(imageRef.current, { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
      gsap.fromTo(textRef.current, { opacity: 0, y: 0 }, { opacity: 1, y: 10, duration: 1, ease: 'power2.out' })
    }
  }, [dataLoaded])

  const modalRef = useRef(null)

  const openModal = () => {
    modalRef.current?.openModal()
  }

  useGsapScrollAnim([
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
  ])

  return (
    <div className="bg-[#186f5f]">
      {/* Modal lives here but invisible until opened */}
      <ScheduleClassModal ref={modalRef} />
      <div id="hero" className="w-full absolute top-20 md:top-36 z-20" ref={textRef}>
        <h1 className="text-3xl md:text-6xl shadow-black drop-shadow-lg my-4 md:my-8 text-center text-[#F9F1D2] font-black">
          Padres Orgullosos y
          <br />
          Casos de Éxito Reales
        </h1>
        <p className="text-sm md:text-xl py-2 drop-shadow-sm text-center text-white">
          Historias de estudiantes que ya están aprendiendo inglés con nosotros.
        </p>
        <p className="text-xs md:text-base py-1 drop-shadow-sm text-center text-white opacity-60">
          Clases en vivo 🎥 Profesores certificados 👩‍🏫 Método Interáctivo 🧩
        </p>
        <div className="flex w-11/12 md:w-[500px] mx-auto justify-evenly my-4">
          <a
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault() // stop immediate navigation
              // Track event first
              trackEvent('Contact_WhatsApp', { method: 'whatsapp_button' })
              // Open the link after a short delay to ensure tracking
              setTimeout(() => {
                window.open(
                  'https://wa.me/+393792913474?text=Hola!%20Acabo%20de%20ver%20la%20página%20y%20me%20gustaría%20obtener%20más%20información%20por%20favor',
                  '_blank'
                )
              }, 300) // 300ms = enough for the pixel to fire
            }}
          >
            <div className="px-3 flex justify-around items-center md:w-[250px] mx-auto py-1 md:py-2 rounded-full bg-[#25d366] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95 mt-12">
              <p style={{ textShadow: '2px 2px 2px #1ba84f' }} className="font-black text-sm md:text-lg text-white text-shadow-md">
                Contacta un Asesor
              </p>
              <FaWhatsapp className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] fill-white p-1" />
            </div>
          </a>
        </div>
      </div>
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <NextImage
          ref={imageRef}
          src={letbgWEBP}
          className="w-full h-full object-cover"
          priority // 👈 preload for faster LCP
          fetchPriority="high" // optional: for extra clarity
          quality={80}
          alt="Background illustration"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2D878D]/60 mix-blend-multiply"></div>
      </div>

      {/* CTA mini section */}
      <div className="relative">
        <div
          className="overflow-hidden flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 py-4 px-4 absolute w-full 
                  bg-gradient-to-r from-[#F17024] to-[#ff8c00] text-white shadow-lg"
        >
          <p className="text-center md:text-left font-semibold text-sm md:text-lg">
            Aprovecha la <span className="text-[#fffd00] font-bold">OFERTA ESPECIAL</span> en tu curso de inglés
          </p>
          <button
            onClick={() => {
              openModal()
              trackEvent('Agenda_Clase_Gratuita', { method: 'cta_button' })
            }}
            className="bg-white text-sm md:text-base text-[#F17024] hover:bg-[#fff2e9] hover:scale-105 transition-all font-semibold rounded-full w-[240px] px-4 py-2 cursor-pointer shadow-md"
          >
            Agenda tu Clase Gratuita
          </button>
        </div>
      </div>
      {/* section / videos */}
      <div className="bg-[#173330] py-36">
        <h2 className="text-center text-[#F9F1D2] font-black text-3xl md:text-8xl z-50">
          Historias de
          <br />
          Familias Orgullosas
        </h2>
        <p className="text-center text-[#F9F1D2]/60 py-6 text-xs sm:text-sm px-10">
          Escucha lo que dicen las familias que hacen parte de LET Academy
        </p>

        <div className="grid grid-cols-1 mx-8 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg px-2 pt-2 pb-4 cursor-pointer transition-transform hover:-translate-y-1">
            <div className="relative w-full aspect-video">
              <iframe
                src={'https://www.youtube.com/embed/LYReBJ-q6kg'}
                className="absolute inset-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="pl-2">
              <h3 className="text-xl font-bold text-gray-900 my-1">Milena Lazo</h3>
              <p className="text-sm font-bold text-blue-600">Curso: Inglés A2</p>
              <p className="text-sm text-gray-600 mt-2">
                La madre de Samir comparte cómo su hijo ha mejorado notablemente su inglés y la satisfacción que siente
                al ver su progreso 🏆
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg px-2 pt-2 pb-4 cursor-pointer transition-transform hover:-translate-y-1">
            <div className="relative w-full aspect-video">
              <iframe
                src={'https://www.youtube.com/embed/pcCeO0YR4_s'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>

            <div className="pl-2">
              <h3 className="text-xl font-bold text-gray-900 my-1">Padre de Neila</h3>
              <p className="text-sm font-bold text-blue-600">Curso: Inglés A2</p>
              <p className="text-sm text-gray-600 mt-2">
                El padre de Neila relata su experiencia con la Academia y los avances que ha visto en la confianza y
                habilidades de su hija 🏅
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg px-2 pt-2 pb-4 cursor-pointer transition-transform hover:-translate-y-1">
            <div className="relative w-full aspect-video">
              <iframe
                src={'https://www.youtube.com/embed/kf9JVE_5CPA'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>

            <div className="pl-2">
              <h3 className="text-xl font-bold text-gray-900 my-1">Cristina Atto</h3>
              <p className="text-sm font-bold text-orange-600">Curso: Inglés B1</p>
              <p className="text-sm text-gray-600 mt-2">
                La tía de Jhonatan explica por qué eligieron nuestras clases de inglés y destaca los resultados que ha
                logrado en poco tiempo 🎓
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg px-2 pt-2 pb-4 cursor-pointer transition-transform hover:-translate-y-1">
            <div className="relative w-full aspect-video">
              <iframe
                src={'https://www.youtube.com/embed/veYDnCDTEbU'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>

            <div className="pl-2">
              <h3 className="text-xl font-bold text-gray-900 my-1">Yessica Archila</h3>
              <p className="text-sm font-bold text-orange-600">Curso: Inglés B1</p>
              <p className="text-sm text-gray-600 mt-2">
                La madre de Josué describe cómo las clases en la Academia marcaron la diferencia en su aprendizaje y lo
                motivaron a seguir mejorando 😲
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="bg-[#173330] relative py-10 px-6 md:px-12 lg:px-20">
        <h2 className="text-center text-[#F9F1D2] font-black text-3xl md:text-8xl mb-6">Lo que dicen de nosotros</h2>
        <p className="text-center text-xs sm:text-sm px-10 text-[#F9F1D2]/60 max-w-2xl mx-auto mb-12">
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
              cada clase es divertida, participan sin miedo y ya incluso empezaron a entender sus series y películas en
              inglés sin subtítulos.
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
                fácil de asimilar para todos los estudiantes de la clase, incluso para los que tienen mayor dificultad o
                les cuesta el idioma. <br />
                Quiero agradecer y recomendar especialmente al profesor Jordi, que ha estado siempre disponible para mi
                hija, con cualquier tema que no entendía o tarea de la escuela le ha ayudado en lo necesario. Muchas
                gracias...
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
              100% recomendado, los profesores son muy profesionales, disponibles y amables. La enseñanza es excelente,
              el aprendizaje muy rápido y en poco tiempo mi pequeño Santiago ya estaba nombrando cosas en inglés por
              toda la casa, muy satisfecho con LET Academy y contento con el avance de mi hijo.
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
        <div
          onClick={() => {
            openModal()
            trackEvent('Agenda_Clase_Gratuita', { method: 'cta_button' })
          }}
          className="mx-auto mt-4 py-2 px-3 md:px-6 w-[210px] md:w-[290px] md:py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95 my-3"
        >
          <a className="font-black text-sm md:text-lg text-white">Agenda una Clase Gratuita</a>
        </div>
      </div>

      <div className="bg-[#173330]">
        <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg pt-20 pb-8 md:pb-20 text-center text-[#ece3bf] font-black">
          Preguntas
          <br />
          Frecuentes
        </h3>
        <FaqAccordion textColor="white" bgColor="#173330" />
      </div>
    </div>
  )
}
