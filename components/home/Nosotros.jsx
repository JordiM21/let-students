import React from 'react'
import teachers from '@/public/teachers.webp'
import unicalmap from '@/public/unical-map.webp'
import teacher1 from '@/public/teachers/teacher1.jpg'
import teacher2 from '@/public/teachers/teacher2.jpg'
import teacher3 from '@/public/teachers/teacher3.png'
import teacher4 from '@/public/teachers/teacher4.jpg'
import teacher5 from '@/public/teachers/teacher5.png'
import teacher6 from '@/public/teachers/teacher6.png'
import NextImage from 'next/image'
import Link from 'next/link'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useRouter } from 'next/router'

// NosotrosView.jsx
export default function NosotrosView() {
  
    const router = useRouter()
  return (
    <div className="bg-[#186f5f]">
      <div id='hero' className="w-full py-24">
        <h1 className="text-6xl md:text-8xl shadow-black drop-shadow-lg my-4 text-center text-[#F9F1D2] font-black">
          Acerca de <br /> Nosotros
        </h1>
        <p className="text-md mx-auto max-w-[350px] md:text-xl drop-shadow-lg text-center text-[#F9F1D2]">
          ¿Quienes somos y como logramos formar pequeños bilingues a diario?
        </p>
      </div>
      <div className="bg-[#F9F1D2] md:py-28 py-10 px-4 justify-center gap-14 flex flex-wrap">
        <div className="max-w-[400px] md:max-w-[500px]">
          <h2 className="text-5xl text-center font-black text-[#1b725e]">¿Quienes somos?</h2>
          <p className="text-center font-bold text-[#081325] my-4 opacity-80">
            Somos una academia de idiomas especializada en pedagogía infantil (6-15 años). Brindamos clases presenciales
            en Italia y virtuales en todo el mundo, nos apasiona enseñar idiomas a los más pequeños de una forma
            divertida y disfrutable
          </p>
          <div
            onClick={() => router.push('/Info')}
            className="p-3 mx-auto px-5 max-w-[220px] md:px-6 my-12 md:py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer  hover:scale-105 ease-in 1s active:scale-95"
          >
            <a className="font-black text-md md:text-lg text-white">Planes Disponibles</a>
          </div>
        </div>
        <div>
          <NextImage src={teachers} className="w-[350px] md:w-[450px] lg:w-[560px] rounded-md h-auto mx-auto" />
        </div>
      </div>
      <div className="bg-[#0c3c2e] py-10 md:py-28 px-4 justify-center gap-14 flex flex-wrap-reverse">
        <div>
          <NextImage src={unicalmap} className="w-[350px] md:w-[450px] rounded-md h-auto mx-auto" />
        </div>
        <div className="max-w-[400px]">
          <h2 className="text-5xl text-center font-black text-[#F9F1D2]">¿Donde estamos?</h2>
          <p className="text-center font-bold text-[#F9F1D2] my-4 opacity-80">
            Estamos ubicados presencialmente en Italia, precisamente nuestra sede principal está en la{' '}
            <Link href={'https://www.unical.it/'} target="_blank" className="underline text-orange-500">
              {' '}
              Universitá della Calabria
            </Link>{' '}
            en Rende, Cosenza. Sin embargo, la mayoría de nuestros estudiantes frecuenta clases de manera virtual desde
            Colombia, Bolivia, España y México.
          </p>
        </div>
      </div>

      <div className="bg-[#1c5a65] py-24 px-4 justify-center gap-24 flex flex-wrap-reverse">
        <div className="max-w-[400px]">
          <h2 className="text-5xl text-center font-black text-[#F9F1D2]">Misión</h2>
          <p className="text-center font-bold text-[#F9F1D2] my-4 opacity-80">
            Brindar una educación lingüística de calidad a niños y niñas de 6 a 15 años, combinando pedagogía infantil
            especializada con metodologías divertidas, accesibles y efectivas. A través de clases presenciales en Italia
            y virtuales en todo el mundo, buscamos despertar el amor por los idiomas y acompañar a cada estudiante en su
            crecimiento personal y académico.
          </p>
        </div>
        <div className="max-w-[400px]">
          <h2 className="text-5xl text-center font-black text-[#F9F1D2]">Visión</h2>
          <p className="text-center font-bold text-[#F9F1D2] my-4 opacity-80">
            Ser un referente internacional en la enseñanza de idiomas para niños, creando una comunidad educativa
            inclusiva y global que inspire confianza, curiosidad y pasión por aprender. Queremos abrir las puertas del
            mundo a las nuevas generaciones, haciendo del aprendizaje una experiencia positiva, significativa y llena de
            oportunidades para el futuro.
          </p>
        </div>
      </div>
      <div className="bg-[#1b725e] relative py-10 md:py-28 md:px-24">
        <h2 className="text-center text-[#F9F1D2] font-black text-5xl md:text-8xl z-50">
          Nuestros Teachers Certificados
        </h2>
        <p className="text-center text-[#F9F1D2] py-6 opacity-60 px-20">+20 docentes de Inglés - Italiano</p>
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
            className="flex bg-[#17604f] py-2 px-10 gap-4 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {/* Teacher Cards */}
            {[
              {
                img: teacher1,
                name: 'Jordi',
                sub: 'Online Teacher',
                description: 'Profesor certificado de Inglés e Italiano (7-14)',
              },
              {
                img: teacher4,
                name: 'Ersa',
                sub: 'Online Teacher',
                description: 'Profesora certificada de Inglés e Italiano (4-6)',
              },
              {
                img: teacher3,
                name: 'Luca',
                sub: 'Italian Teacher',
                description: 'Profesor presencial de Italiano en Español (18+)',
              },
              {
                img: teacher2,
                name: 'Anna',
                sub: 'Children Teacher',
                description: 'Profesora de Inglés certificada (7-14)',
              },
              {
                img: teacher5,
                name: 'Agostino',
                sub: 'Online Teacher',
                description: 'Profesor certificado de Inglés e Italiano (7-14)',
              },
              {
                img: teacher6,
                name: 'Vincenzo',
                sub: 'Business Teacher',
                description: 'Docente de Inglés para profesionales (18+)',
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
      <div className="bg-white pb-36 relative py-10 px-8 md:px-24">
        <h2 className="text-center text-[#165646] font-black text-3xl md:text-5xl z-50">
          ¿Te gustaría trabajar con nosotros?
        </h2>
        <p className="text-center text-[#165646] py-6 opacity-80 px-4">
          Si eres un docente de idiomas certificado, compartes nuestra visión y te gustaría ser parte del equipo
        </p>
        <div className="flex w-11/12 md:w-1/2 mx-auto justify-evenly my-6">
          <div
            onClick={() => router.push('/Login')}
            className="p-3 px-5 md:px-6 md:py-4 rounded-full bg-[#F17024] shadow-black/30 shadow-lg cursor-pointer hover:scale-105 ease-in 1s active:scale-95"
          >
            <a className="font-black text-md md:text-lg text-white ">Postúlate aquí</a>
          </div>
        </div>
      </div>
    </div>
  )
}
