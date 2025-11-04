import React from 'react'
import teachers from '@/public/teachers.webp'
import unical from '@/public/unical.webp'
import teacher1 from '@/public/teachers/teacher1.jpg'
import teacher2 from '@/public/teachers/teacher2.jpg'
import teacher3 from '@/public/teachers/teacher3.png'
import teacher4 from '@/public/teachers/teacher4.jpg'
import teacher6 from '@/public/teachers/teacher6.png'
import craft1 from '@/public/grammarPage.webp'
import craft2 from '@/public/flashPage.webp'
import craft3 from '@/public/sheetsPage.webp'
import studentsTeacher from '@/public/studentsTeacher.webp'
import craft4 from '@/public/videosPage.webp'
import NextImage from 'next/image'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useRouter } from 'next/router'
import letbgWEBP from '@/public/nosotrosBg.webp'
import gsap from 'gsap'
import ScheduleClassModal from '@/components/ScheduleClassModal'
import Carousel from '../CarouselCards'
import { useGsapScrollAnim } from '../useGsapScrollAnim'
import { delay } from 'framer-motion'
import FaqAccordion from '../Accordion'
import { FaWhatsapp } from 'react-icons/fa'

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

// NosotrosView.jsx
export default function NosotrosView({ setNavItem }) {
  const { user } = useAuth()
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const studentsTeacherRef = useRef(null)
  const craft1Ref = useRef(null)
  const craft2Ref = useRef(null)
  const craft3Ref = useRef(null)
  const craft4Ref = useRef(null)
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

  useGsapScrollAnim([
    {
      ref: studentsTeacherRef,
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0, duration: 0.4, delay: 0.2 },
    },
    // === STEPS ===
    {
      ref: craft1Ref,
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, x: 0, duration: 0.4 },
    },
    {
      ref: craft2Ref,
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0, duration: 0.4 },
    },
    {
      ref: craft3Ref,
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, x: 0, duration: 0.4 },
    },
    {
      ref: craft4Ref,
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0, duration: 0.4 },
    },
  ])

  const modalRef = useRef(null)

  const openModal = () => {
    modalRef.current?.openModal()
  }

  return (
    <div className="bg-[#186f5f]">
      {/* Modal lives here but invisible until opened */}
      <ScheduleClassModal ref={modalRef} />
      <div id="hero" className="w-full absolute top-20 md:top-36 z-20" ref={textRef}>
        <h1 className="text-3xl md:text-6xl shadow-black drop-shadow-lg my-4 md:my-8 text-center text-[#F9F1D2] font-black">
          Docentes Apasionados
          <br />
          Comprometidos con su Futuro
        </h1>
        <p className="text-sm md:text-xl py-2 drop-shadow-sm text-center text-white">
          Educadores expertos en enseñanza de idiomas y pedagogía infantil.
        </p>
        <p className="text-xs md:text-base py-1 drop-shadow-sm text-center text-white opacity-60">
          Clases en vivo 🎥 Profesores certificados 👩‍🏫 Método Interáctivo 🧩
        </p>
        <div className="flex w-11/12 md:w-[500px] mx-auto justify-evenly my-4">
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
      <div className="relative z-10">
        <div
          className="overflow-hidden flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 py-4 px-4 absolute w-full 
                  bg-gradient-to-r from-[#F17024] to-[#ff8c00] text-white shadow-lg"
        >
          <p className="text-center md:text-left font-semibold text-sm md:text-lg">
            Aprovecha la <span className="text-[#fffd00] font-bold">OFERTA ESPECIAL</span> en tu curso de inglés
          </p>
          <button
            onClick={openModal}
            className="bg-white text-sm md:text-base text-[#F17024] hover:bg-[#fff2e9] hover:scale-105 transition-all font-semibold rounded-full w-[240px] px-4 py-2 cursor-pointer shadow-md"
          >
            Agenda tu Clase Gratuita
          </button>
        </div>
      </div>
      {/* First Section - Optimized Version */}
      <div className="pt-32 pb-12 md:py-32 bg-[#F9F1D2] flex flex-wrap flex-col-reverse md:flex-row items-center overflow-hidden relative">
        {/* Left content */}
        <div className="w-full md:w-[50%] lg:w-[45%] my-3 px-6 md:pl-16 relative z-10">
          {/* Context subtitle */}
          <p className="text-[#165646] text-sm md:text-base font-bold uppercase tracking-wider mb-3">
            Nuestra misión en LET Academy
          </p>
          {/* Main title */}
          <h2 className="text-[#1b725e] text-4xl md:text-5xl font-black text-start leading-tight">
            Nuestro objetivo:
            <br />
            <span className="text-[#F99B32] font-black bg-gradient-to-r from-[#F99B32] to-[#ec7c20] bg-clip-text text-transparent">
              Hacer que tu hijo se enamore del inglés
            </span>
          </h2>
          {/* Supporting subtitle */}
          <p className="text-start font-semibold text-[#081325] mt-4 opacity-80 leading-relaxed">
            Aprender inglés no es solo memorizar palabras — es abrir puertas al futuro de tu hijo y en LET Academy, lo
            hacemos posible. 🌟
          </p>
          {/* Benefits list */}
          <ul className="space-y-4 mt-6">
            <li className="flex items-center gap-3">
              <p className="text-2xl">🎨</p>
              <span className="text-[#081325] text-sm md:text-base font-semibold">
                Clases llenas de juegos, historias y creatividad
              </span>
            </li>

            <li className="flex items-center gap-3">
              <p className="text-2xl">💬</p>
              <span className="text-[#081325] text-sm md:text-base font-semibold">
                Interacción con otros niños para ganar seguridad al hablar
              </span>
            </li>

            <li className="flex items-center gap-3">
              <p className="text-2xl">🚀</p>
              <span className="text-[#081325] text-sm md:text-base font-semibold">
                Método efectivo que convierte el aprendizaje en una aventura
              </span>
            </li>
          </ul>
          {/* CTA button */}
          <div
            onClick={() => setNavItem('Metodología')}
            className="px-2 py-4 rounded-full bg-[#165646] text-white shadow-black/30 shadow-lg w-[230px] font-black text-base md:text-lg cursor-pointer mt-10 hover:scale-105 hover:bg-[#1b725e] ease-in duration-200 active:scale-95 flex items-center justify-center gap-2"
          >
            Nuestra Metodología
          </div>
          {/* Microtext for trust */}
          <p className="text-[#1b725e] font-semibold text-xs mt-6 opacity-80">
            💚 Más del 90% de nuestros alumnos gana confianza al hablar inglés en menos de 3 meses.
          </p>
        </div>

        {/* Right content: photo with soft background shape */}
        <div className="w-full md:w-[50%] lg:w-[55%] flex justify-center items-center relative">
          <div className="absolute bg-[#DFF0E2] rounded-full w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] blur-3xl opacity-40"></div>
          <NextImage
            ref={studentsTeacherRef}
            src={studentsTeacher}
            alt="Niños aprendiendo inglés con su profesora"
            className="w-[85%] sm:w-[75%] md:w-[80%] max-w-[540px] rounded-xl relative z-10 transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* section / our teachers  */}
      <div className="bg-[#F9F1D2] relative pt-12">
        <h2 className="text-center text-[#165646] font-black text-3xl md:text-8xl z-50">
          Nuestros Teachers Certificados
        </h2>
        <p className="text-center text-xs sm:text-sm py-6 opacity-60 px-10">
          Profesionales en Educación y Pedagogía infantil apasionados por la enseñanza de idiomas a los más pequeños de
          la casa
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
              description: 'Docente presencial de Italiano en Español (Business)',
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
              description: 'Docente de Inglés para profesionales (Business)',
            },
          ]}
        />
      </div>

      {/* section / Quienes somos?  */}
      <div className="bg-[#F9F1D2] py-16 px-6 flex flex-col md:flex-row justify-center items-center gap-14">
        {/* Texto */}
        <div className="max-w-[450px] md:max-w-[550px] leading-relaxed">
          <h2 className="text-3xl md:text-6xl text-center md:text-left font-black text-[#1b725e] mb-6">
            ¿Quiénes somos?
          </h2>

          <p className="text-center md:text-left font-semibold text-[#081325] opacity-90 mb-4">
            Somos un grupo de jóvenes profesionales egresados de la{' '}
            <span className="font-bold">Universidad de la Calabria</span>, especializados en{' '}
            <span className="font-bold">enseñanza de idiomas y pedagogía infantil</span>.
          </p>
          <p className="text-center md:text-left font-medium text-[#081325] opacity-80 mb-4">
            En <span className="font-bold">LET Academy</span> creemos que cada niño aprende mejor cuando se siente
            motivado y comprendido. Por eso combinamos métodos pedagógicos modernos con actividades interactivas que
            despiertan la curiosidad y la confianza al comunicarse en otro idioma.
          </p>

          <p className="text-center md:text-left font-medium text-[#081325] opacity-80">
            Ofrecemos clases presenciales en <span className="font-bold">Italia</span> y virtuales para estudiantes de
            todo el mundo, manteniendo siempre nuestro compromiso: hacer que aprender inglés sea una{' '}
            <span className="font-bold">experiencia alegre, significativa y duradera</span>.
          </p>
        </div>

        {/* Imagen */}
        <div>
          <NextImage
            src={teachers}
            alt="Equipo de LET Academy"
            className="w-[340px] md:w-[450px] rounded-xl shadow-md shadow-[#5c5637] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* second section / donde estamos?  */}

      <div className="bg-[#F9F1D2] py-16 px-6 flex flex-col-reverse md:flex-row justify-center items-center gap-14">
        <div>
          <NextImage
            src={unical}
            className="w-[340px] md:w-[450px] rounded-xl shadow-md shadow-[#5c5637] hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="max-w-[400px] md:max-w-[600px] text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-black text-[#1b725e] mb-4">¿Dónde estamos?</h2>
          <p className="font-medium text-[#081325] opacity-80 leading-relaxed">
            Nuestra sede principal se encuentra en Italia, dentro de la{' '}
            <Link
              href="https://www.unical.it/"
              target="_blank"
              className="underline text-orange-500 hover:text-orange-600 font-semibold"
            >
              Università della Calabria
            </Link>{' '}
            en Rende, Cosenza. Aun así, la mayoría de nuestros estudiantes asisten a clases virtuales desde diferentes
            países, como Colombia, Bolivia, España y México. 🌍
          </p>
          <p className="mt-4 text-[#165646] font-semibold opacity-90">¡Estamos presentes donde tú estés!</p>
        </div>
      </div>

      <div className="bg-[#F9F1D2] py-32 px-8 md:px-24 text-center relative">
        <h2 className="text-[#165646] font-black text-3xl md:text-5xl mb-4">¿Te gustaría trabajar con nosotros?</h2>
        <p className="text-[#165646] opacity-80 mb-8 text-sm max-w-2xl mx-auto leading-relaxed">
          Si eres un docente de idiomas certificado, compartes nuestra pasión por la enseñanza y quieres formar parte de
          una comunidad educativa internacional, ¡te estamos buscando!
        </p>
        <div className="flex justify-center">
          <Link
            href="https://forms.gle/c5PYooudkGZnC9jQ9"
            target="_blank"
            className="px-8 py-4 rounded-full bg-[#F17024] text-white font-bold shadow-lg shadow-black/20 hover:bg-[#d85f1c] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Postúlate ahora 🚀
          </Link>
        </div>
      </div>
      <div className="bg-[#F9F1D2]">
        <h3 className="text-5xl md:text-8xl shadow-black drop-shadow-lg pt-20 pb-8 md:pb-20 text-center text-[#165646] font-black">
          Preguntas
          <br />
          Frecuentes
        </h3>
        <FaqAccordion textColor="black" bgColor="#ece3bf" />
      </div>
    </div>
  )
}
