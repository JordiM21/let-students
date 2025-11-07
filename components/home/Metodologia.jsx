import cefr from '@/public/cefr.webp'
import week from '@/public/week.webp'
import React from 'react'
import NextImage from 'next/image'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useRouter } from 'next/router'
import letbgWEBP from '@/public/metodoBg.webp'
import teenBanner from '@/public/teenBanner.webp'
import gsap from 'gsap'
import BenefitsAccordion from '../Accordion2'
import Carousel from '../CarouselCards'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import craft1 from '@/public/crafts/playdoughCraft.webp'
import craft2 from '@/public/crafts/paperRollCraft.webp'
import craft3 from '@/public/crafts/paperBagCraft.webp'
import craft4 from '@/public/crafts/travelSuitCraft.webp'
import page1 from '@/public/grammarPage.webp'
import page2 from '@/public/flashPage.webp'
import page3 from '@/public/sheetsPage.webp'
import page4 from '@/public/videosPage.webp'
import { BsArrowLeft } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import ScheduleClassModal from '@/components/ScheduleClassModal'
import { useGsapScrollAnim } from '../useGsapScrollAnim'
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

// MetodologiaView.jsx
export default function MetodologiaView({ setNavItem }) {
  const { user } = useAuth()
  const imageRef = useRef(null)
  const girlRef = useRef(null)
  const craft1Ref = useRef(null)
  const craft2Ref = useRef(null)
  const craft3Ref = useRef(null)
  const craft4Ref = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const image3Ref = useRef(null)
  const image4Ref = useRef(null)
  const textRef = useRef(null)
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
    // ==== BELOW ANIMATIONS ===
    {
      ref: girlRef,
      from: { opacity: 0, y: -10 },
      to: { opacity: 1, y: 0, duration: 0.8, delay: 0.2 },
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
    {
      ref: image1Ref,
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, x: 0, duration: 0.4 },
    },
    {
      ref: image2Ref,
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0, duration: 0.4 },
    },
    {
      ref: image3Ref,
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, x: 0, duration: 0.4 },
    },
    {
      ref: image4Ref,
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0, duration: 0.4 },
    },
  ])

  const videos = [
    {
      id: 1,
      title: 'Samir ha Mejorado su Inglés en la Academia!',
      description:
        'Nuestro Pequeño Bilingüe lleva en la academia solo 5 meses y ya está viviendo una mejora significativa en su nivel de inglés, nos cuenta su experiencia.',
      youtubeId: '8vojkJHdmfg',
    },
    {
      id: 2,
      title: 'Neila superó su miedo de Hablar Inglés',
      description:
        'Gracias a las prácticas grupales de la academia, Neila ha podido superar su miedo a hablar en inglés mientras perfecciona su pronunciación, escucha su historia',
      youtubeId: 'SXAH6o42o6Y',
    },
    {
      id: 3,
      title: 'Jhonatan ahora es el N.1 en Inglés de su Colegio!',
      description:
        'Las clases de la academia le han facilitado el aprendizaje a Jhonatan de temas que no había comprendido con las clases de la escuela, la gramática ahora es súper fácil!',
      youtubeId: '5i0laG3hUhM',
    },
  ]

  const [current, setCurrent] = useState(0)
  const touchStart = useRef(null)

  const goNext = () => current < videos.length - 1 && setCurrent((c) => c + 1)
  const goPrev = () => current > 0 && setCurrent((c) => c - 1)

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart.current - touchEnd

    if (diff > 50) goNext() // swipe left → next
    if (diff < -50) goPrev() // swipe right → prev
  }

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
          Clases Divertidas
          <br />
          Fluidez Garantizada
        </h1>
        <p className="text-sm md:text-xl py-2 drop-shadow-sm text-center text-white">
          Un Plan de Estudio creado específicamente para que tu hijo/a aprenda inglés
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
      {/* First Section */}
      <div className="pt-32 pb-12 md:py-32 bg-[#173330] flex flex-wrap flex-col-reverse md:flex-row items-center overflow-hidden">
        {/* Left content */}
        <div className="lg:w-[45%] my-3 max-md:mx-10 md:ml-16 relative z-10">
          <h2 className="text-[#F9F1D2] text-4xl md:text-5xl font-black text-start">
            Un plan ideal para los
            <br />
            <span className="text-[#F99B32] font-black bg-gradient-to-r from-[#F99B32] to-[#ec7c20] bg-clip-text text-transparent">
              Pequeños de la Casa
            </span>
          </h2>

          <p className="text-[#F9F1D2] text-start font-semibold my-6 opacity-90 leading-relaxed">
            Nuestro método de enseñanza está creado específicamente para que niños y niñas de 7 a 14 años aprendan
            inglés en tiempo record y puedan hablarlo con fluidez sin reglas gramáticales aburridas
          </p>

          {/* Benefits list */}
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                ✓
              </div>
              <span className="text-[#F9F1D2] font-medium">
                Clases dinámicas e interáctivas que despiertan el interés por hablar en inglés desde el primer día
              </span>
            </li>

            <li className="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                ✓
              </div>
              <span className="text-[#F9F1D2] font-medium">
                Actividades creativas y en grupo que estimulan la imaginación y el trabajo en equipo
              </span>
            </li>

            <li className="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                ✓
              </div>
              <span className="text-[#F9F1D2] font-medium">
                Juegos y experiencias lúdicas que convierten el aprendizaje del inglés en pura diversión
              </span>
            </li>
          </ul>

          {/* CTA */}
          <div
            onClick={() => {
              openModal()
              trackEvent('Agenda_Clase_Gratuita', { method: 'cta_button' })
            }}
            className="px-4 md:px-6 py-4 rounded-full bg-[#F17024] text-white shadow-black/30 shadow-lg w-[230px] md:w-[270px] font-black text-base md:text-lg cursor-pointer mt-8 hover:scale-105 ease-in duration-200 active:scale-95"
          >
            Agenda tu Clase Gratuita
          </div>
        </div>

        {/* Right content: photo */}
        <NextImage
          ref={girlRef}
          src={teenBanner}
          alt="Profile"
          className="w-full max-w-[360px] sm:max-w-[540px] mx-auto my-8"
        />
      </div>

      {/* Second Section */}
      <div className="py-12 bg-[#173330] flex flex-wrap flex-col md:flex-row items-center overflow-hidden">
        {/* big title */}
        <div className="pb-8 mx-auto">
          <h2 className="text-3xl md:text-8xl text-center text-[#F9F1D2] font-black">Manualidades en Clase</h2>
          <p className="py-2 drop-shadow-sm text-xs sm:text-sm px-10 text-center text-[#F9F1D2]/60">
            Actividades divertidas e interáctivas que permiten al estudiante aprender mientras se divierte
          </p>
        </div>
        {/* list of cards activities */}
        <div className="grid grid-cols-1 mx-8 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div
            ref={craft1Ref}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <NextImage src={craft1} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">PlayDough Animals </h3>
            <p className="text-sm font-medium text-indigo-600">- Sofía, Isaac, Laura y Sebastián</p>
            <p className="text-sm text-gray-600 mt-2">
              Aprendimos los animales en inglés mientras creamos formas con plastilina de cada uno de ellos: "Crab,
              Turtle and Starfish" 🐠
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={craft2Ref}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <NextImage src={craft2} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Halloween Paper Roll Monsters</h3>
            <p className="text-sm font-medium text-orange-600">- Carlos, Daniela, Nikol y Felipe</p>
            <p className="text-sm text-gray-600 mt-2">
              Para nuestro especial de Halloween aprendimos vocabulario en inglés jugando Dulce o Truco y creamos
              figuras "Spooky" 🎃
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={craft3Ref}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <NextImage src={craft3} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Paper Bags Monsters</h3>
            <p className="text-sm font-medium text-purple-600">- Carla, Mónica y Luciano</p>
            <p className="text-sm text-gray-600 mt-2">
              Reutilizamos bolsas de papel para crear "Monsters" en clase mientras aprendimos los colores y las partes
              del cuerpo: "Eyes, Mouth and Teeth" 👾
            </p>
          </div>

          {/* Card 4 */}
          <div
            ref={craft4Ref}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <NextImage src={craft4} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Travel Suitcase Handicraft</h3>
            <p className="text-sm font-medium text-purple-600">- Neila, Ian, Samir y Mila</p>
            <p className="text-sm text-gray-600 mt-2">
              Recortamos y armamos esta maleta de viaje mientras aprendiamos vocabulario en inglés de las vacaciones y
              el verano. 🏖️
            </p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="py-12 bg-[#173330] overflow-hidden">
        {/* big title */}
        <div className="pt-12 mx-auto">
          <h2 className="text-3xl md:text-8xl text-center text-[#F9F1D2] font-black">Nuestros Pequeños Bilingües</h2>
          <p className="py-4 mx-auto max-w-[750px] text-xs sm:text-sm px-10 drop-shadow-sm text-center text-[#F9F1D2]/60">
            Esto es lo que dicen nuestros estudiantes de las clases, ellos aprenden inglés a diario mientras se
            divierten en la academia con actividades de aprendizaje adaptadas a su edad y a su nivel de inglés
          </p>
        </div>
        {/* list of class videos */}
        <div className="relative w-full max-w-4xl mx-auto mt-10 px-4 select-none">
          {/* Arrows */}
          {current > 0 && (
            <button
              onClick={goPrev}
              className="absolute left-16 sm:left-1/3 -bottom-10 -translate-y-1/2 
          bg-[#F17024] shadow-lg p-4 rounded-full z-10 hover:scale-105 transition"
            >
              <FaArrowLeft />
            </button>
          )}

          {current < videos.length - 1 && (
            <button
              onClick={goNext}
              className="absolute right-16 sm:right-1/3 -bottom-10 -translate-y-1/2 
          bg-[#F17024] shadow-lg p-4 rounded-full z-10 hover:scale-105 transition"
            >
              <FaArrowRight />
            </button>
          )}

          {/* Video Card */}
          <div
            className="bg-white rounded-xl shadow-xl p-4 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={videos[current].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${videos[current].youtubeId}`}
                    title={videos[current].title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{videos[current].title}</h3>
                <p className="text-gray-600 text-sm">{videos[current].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-3 w-3 rounded-full transition ${
                  current === i ? 'bg-[#F17024] scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="pt-12 pb-12 md:py-32 bg-[#173330] flex flex-wrap flex-col-reverse md:flex-row items-center overflow-hidden">
        {/* Left content */}
        <div className="lg:w-[45%] my-3 max-md:mx-10 md:ml-16 relative z-10">
          <h2 className="text-[#F9F1D2] text-4xl md:text-5xl font-black text-start">
            La Semana de Clase en
            <br />
            <span className="text-[#F99B32] font-black">LET Academy</span>
          </h2>

          <p className="text-[#F9F1D2] text-start font-semibold my-6 opacity-90 leading-relaxed">
            Así es como están organizadas las clases en la Academia en 3 días semanales (Lunes, Miércoles y Viernes).
            Especialmente diseñado para mantener la atención de los más pequeños de la casa y aprender temas complejos
            en tiempo record
          </p>

          {/* Benefits list */}
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                ✓
              </div>
              <span className="text-[#F9F1D2] font-medium">
                El dinamismo de nuestras clases permite a los estudiantes aprender sin aburrirse ya que cada día les
                espera algo nuevo
              </span>
            </li>

            <li className="flex items-start gap-3">
              <div class="w-6 h-6 rounded-full bg-[#F99B32] flex items-center justify-center text-[#173330] font-bold flex-none">
                ✓
              </div>
              <span className="text-[#F9F1D2] font-medium">
                Los tutores están disponibles los fines de semana o después del horario de clases para aclarar dudas o
                repetir temas complejos (sin costo adicional)
              </span>
            </li>
          </ul>

          {/* CTA */}
          <div
            onClick={() => setNavItem('Testimonios')}
            className="px-4 md:px-6 py-4 rounded-full bg-[#F9F1D2] font-black text-sm md:text-lg text-[#173330] shadow-black/30 shadow-lg w-[200px] md:w-[270px] cursor-pointer mt-8 hover:scale-105 ease-in duration-200 active:scale-95"
          >
            Nuestros Casos de Éxito
          </div>
        </div>

        {/* Right content: photo */}
        <NextImage
          src={week}
          alt="Profile"
          className="w-11/12 rounded-md max-w-[580px] sm:max-w-[540px] mx-auto my-8"
        />
      </div>
      <div className="py-12 bg-[#173330] flex flex-wrap flex-col md:flex-row items-center overflow-hidden">
        {/* big title */}
        <div className="pb-8 mx-auto max-w-[850px]">
          <h2 className="text-[#F9F1D2] text-3xl md:text-8xl font-black text-center">Nuestra Plataforma</h2>
          <p className=" py-2 text-xs sm:text-sm px-10 drop-shadow-sm text-center text-[#F9F1D2]/60">
            Un espacio seguro para que los más pequeños de la casa se diviertan mientras aprenden inglés y para que tú
            como representante tengas un rol activo en su aprendizaje
          </p>
        </div>
        {/* list of cards activities */}
        <div className="grid grid-cols-1 mx-8 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div
            ref={image1Ref}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <NextImage src={page1} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Gramática Básica</h3>
            <p className="text-sm font-medium text-[#087c21]">- Principiantes</p>
            <p className="text-sm text-gray-600 mt-2">
              Estudio en autonomía disponible 24/7 para que el estudiante resuelva ejercicios de gramática.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={image2Ref}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <NextImage src={page2} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Flash Cards en Inglés</h3>
            <p className="text-sm font-medium text-[#087c21]">- Principiantes</p>
            <p className="text-sm text-gray-600 mt-2">
              Juego de Cartas en Inglés, el estudiante tendrá que seleccionar la palabra correcta según la imagen.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={image3Ref}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <NextImage src={page3} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Hojas de Actividades</h3>
            <p className="text-sm font-medium text-[#d36409]">- Intermedio</p>
            <p className="text-sm text-gray-600 mt-2">
              Tendrás a disposición +100 documentos con ejercicios para realizar en casa (sopa de letras, crucigramas,
              lecturas, etc)
            </p>
          </div>

          {/* Card 4 */}
          <div
            ref={image4Ref}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer transition-transform hover:-translate-y-1"
          >
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <NextImage src={page4} className="object-cover w-full h-full" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Series y Peliculas</h3>
            <p className="text-sm font-medium text-[#d36409]">- Intermedio</p>
            <p className="text-sm text-gray-600 mt-2">
              Disfrutarás de un amplio repertorio de videos cortos de aprendizaje con series y peliculas animadas.
            </p>
          </div>
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
