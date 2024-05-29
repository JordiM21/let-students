import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import image1 from '@/public/beginner-cover.png'
import image2 from '@/public/intermediate-cover.png'
import image3 from '@/public/advanced-cover.png'
import LoadingScreen from '@/components/LoadingScreen'
import { useRouter } from 'next/router'
import { BsArrowRightCircleFill, BsQuestionCircle } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import withUserData from '@/components/WithUserData'
import LevelPreview from '@/components/LevelPreview'

const Niveles = ({ userData }) => {
  if (!userData) {
    return <LoadingScreen />;
  }

  const { level, role, progressBeginner, progressIntermediate, progressAdvanced } = userData;

  const router = useRouter()

  const [question, setQuestion] = useState(false)


  return (
    <div className='bg-[var(--bluebg)] min-h-screen max-md:pb-28'>
      {
        role != "Admin" && role != "Student" &&
        (
          <LoadingScreen />
        )
      }
      {
        role == "Admin" && (
          <div className='w-full flex justify-around py-4'>
            <button onClick={() => router.push("/adminCreate/createUnits")} className='bg-[var(--color2)] text-white font-bold text-xl py-2 px-4 rounded-md hover:opacity-75'>
              Create Units
            </button>
            <button onClick={() => router.push("/adminCreate/createTests")} className='bg-[var(--color4)] text-white font-bold text-xl py-2 px-4 rounded-md hover:opacity-75'>
              Create Tests
            </button>
          </div>
        )
      }
      {
        role == "Student" && (
          <div className='flex items-center justify-center gap-2'>
            <h1 className='text-center text-3xl font-semibold py-5 text-white'>¡Comienza a aprender ahora!</h1>
            <div onClick={() => setQuestion(!question)} className='bg-gray-200 rounded-full cursor-pointer'>
              <BsQuestionCircle className="w-5 h-5" />
            </div>
          </div>
        )
      }
      {
        question && (
          <div className='bg-gray-200 backdrop-blur-sm bg-opacity-80 p-6 shadow-gray-500 z-50 rounded-md shadow-lg max-w-[250px] absolute right-0'>
            <AiFillCloseCircle className='absolute top-2 cursor-pointer right-2 w-6 h-6' onClick={() => setQuestion(!question)} />
            <p>Recuerda seguir tu plan de estudios y no atrasarte ni adelantarte mucho, esto es indispensable para tu aprendizaje!. <br /> Al final de cada Unit tienes un test donde verificamos tus conocimientos. <br /> al hacer el test se actualiza tu progreso y se notifica a tu profesor</p>
          </div>
        )
      }
      {
        level === "Beginner" && (
          <div className='space-y-4 md:space-y-0 xl:flex flex-wrap md:px-8 md:gap-4 justify-center items-start'>
            <LevelPreview
              image={image1}
              url={"Niveles/Beginner"}
              description={"En este nivel aprenderás lo básico del idioma y podrás entender y formar oraciones simples en diversos tiempos verbales, embárcate en esta aventura!"}
              title={"Nivel Principiante"}
              disabled={false}
              progress={progressBeginner}
            />
            <LevelPreview
              image={image2}
              url={"Niveles/Intermediate"}
              description={"Cada vez mas cerca! En esta nivel emplearás tus conocimientos adquiridos para formar frases complejas y entender con detalle pronuncia rápida"}
              title={"Nivel Intermedio"}
              disabled={true}
              progress={progressIntermediate}
            />
            <LevelPreview
              image={image3}
              url={"Niveles/Advanced"}
              description={"Ultimo Paso! Aquí trabajaremos tu fluidez al hablar y al expresar ideas, también nos concentraremos en hablado informal y jergas de la lengua"}
              title={"Nivel Avanzado"}
              disabled={true}
              progress={progressAdvanced}
            />
          </div>
        )
      }
      {
        level === "Intermediate" && (
          <div className='space-y-4 md:space-y-0 xl:flex flex-wrap md:px-8 md:gap-4 justify-center items-start'>
            <LevelPreview
              image={image1}
              url={"Niveles/Beginner"}
              description={"En este nivel aprenderás lo básico del idioma y podrás entender y formar oraciones simples en diversos tiempos verbales, embárcate en esta aventura!"}
              title={"Nivel Principiante"}
              disabled={false}
              progress={progressBeginner}
            />
            <LevelPreview
              image={image2}
              url={"Niveles/Intermediate"}
              description={"Cada vez mas cerca! En esta nivel emplearás tus conocimientos adquiridos para formar frases complejas y entender con detalle pronuncia rápida"}
              title={"Nivel Intermedio"}
              disabled={false}
              progress={progressIntermediate}
            />
            <LevelPreview
              image={image3}
              url={"Niveles/Advanced"}
              description={"Ultimo Paso! Aquí trabajaremos tu fluidez al hablar y al expresar ideas, también nos concentraremos en hablado informal y jergas de la lengua"}
              title={"Nivel Avanzado"}
              disabled={true}
              progress={progressAdvanced}
            />
          </div>
        )
      }
      {
        level === "Advanced" && (
          <div className='space-y-4 md:space-y-0 xl:flex flex-wrap md:px-8 md:gap-4 justify-center items-start'>
            <LevelPreview
              image={image1}
              url={"Niveles/Beginner"}
              description={"En este nivel aprenderás lo básico del idioma y podrás entender y formar oraciones simples en diversos tiempos verbales, embárcate en esta aventura!"}
              title={"Nivel Principiante"}
              disabled={false}
              progress={progressBeginner}
            />
            <LevelPreview
              image={image2}
              url={"Niveles/Intermediate"}
              description={"Cada vez mas cerca! En esta nivel emplearás tus conocimientos adquiridos para formar frases complejas y entender con detalle pronuncia rápida"}
              title={"Nivel Intermedio"}
              disabled={false}
              progress={progressIntermediate}
            />
            <LevelPreview
              image={image3}
              url={"Niveles/Advanced"}
              description={"Ultimo Paso! Aquí trabajaremos tu fluidez al hablar y al expresar ideas, también nos concentraremos en hablado informal y jergas de la lengua"}
              title={"Nivel Avanzado"}
              disabled={false}
              progress={progressAdvanced}
            />
          </div>
        )
      }
    </div>
  )
}

export default withUserData(Niveles)
