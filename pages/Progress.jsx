import BackHeader from '@/components/BackHeader'
import exam from '@/public/Progreso.webp'
import map from '@/public/Map.webp'
import trophy from '@/public/trophy.webp'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import withUserData from '@/components/WithUserData'
const Progress = ({ allUsers, likedVideos, userData, setSubmit, submit }) => {
  if (!userData) {
    return <LoadingScreen />
  }
  const router = useRouter()

  const [userMatched, setUserMatched] = useState(userData)

  return (
    <div className="py-12 bg-[var(--bluebg)] ">
      <BackHeader largeTitle={'Progreso del Estudiante'} parentTitle={'Volver'} />
      {userMatched.role == 'Student' && (
        <div id="body" className="mx-auto px-4 flex flex-col max-w-[600px] md:max-w-[800px] gap-8 my-6">
          <h1 className="text-white">
            Sección dedicada al avance detallado del estudiante y a los logros que ha obtenido en la academia.
          </h1>
          <div className="flex md:flex-row items-center flex-col gap-8 justify-between">
            <button
              className="bg-white relative group overflow-hidden rounded-md w-full h-52 md:h-64"
              onClick={() => router.push(`/Exams/`)}
            >
              <div
                className="flex cursor-pointer hover:bg-white/40 w-[200px] h-8 absolute left-1/2 mt-40 md:mt-52 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
                      rounded-full shadow-lg border border-white/20 items-center justify-around"
              >
                Historial de Exámenes
              </div>
              <NextImage
                priority
                src={exam} //bg
                className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover pt-0 "
                fetchPriority="high"
                quality={80}
              />
            </button>
            <button
              onClick={() => router.push('/LevelProgression/')}
              className="bg-white relative group overflow-hidden rounded-md w-full h-52 md:h-64"
            >
              <div
                className="flex cursor-pointer hover:bg-white/40 w-[200px] h-8 absolute left-1/2 mt-40 md:mt-52 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
                rounded-full shadow-lg border border-white/20 items-center justify-around"
              >
                Progresión de Niveles
              </div>
              <NextImage
                priority
                src={map} //bg
                className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover pt-0 "
                fetchPriority="high"
                quality={80}
              />
            </button>
          </div>
          <button
            onClick={() => router.push('/Pensum')}
            className="bg-white relative group overflow-hidden rounded-md w-full h-52 md:h-64"
          >
            <div
              className="flex cursor-pointer hover:bg-white/40 w-[240px] h-8 absolute left-1/2 mt-40 md:mt-52 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
                rounded-full shadow-lg border border-white/20 items-center justify-around"
            >
              Pensum de Actividades
            </div>
            <NextImage
              priority
              src={trophy} //bg
              className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover object-top"
              fetchPriority="high"
              quality={80}
            />
          </button>
        </div>
      )}
    </div>
  )
}
export default withUserData(Progress)
