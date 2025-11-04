import BackHeader from '@/components/BackHeader'
import watch from '@/public/watch.webp'
import play from '@/public/play.webp'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import withUserData from '@/components/WithUserData'

const funZone = ({ allUsers, likedVideos, userData, setSubmit, submit }) => {
  if (!userData) {
    return <LoadingScreen />
  }
  const router = useRouter()

  const [userMatched, setUserMatched] = useState(userData)

  return (
    <div className="py-12 min-h-screen bg-[var(--bluebg)] ">
      <BackHeader largeTitle={'Juegos y Pelis'} parentTitle={'Volver'} />
      {userMatched.role == 'Student' && (
        <div id="body" className="mx-auto px-4 flex flex-col max-w-[600px] md:max-w-[960px] gap-8 my-6">
          <div>
            <h1 className="text-[#2bb0e0] py-2 text-4xl md:text-6xl text-center">Zona de Diversión</h1>
            <p className="text-white text-center">
              Sección enfocada en el aprendizaje lúdico del estudiante, con videos de sus peliculas favoritas y juegos
              interáctivos.
            </p>
          </div>
          <div className="flex md:flex-row items-center flex-col gap-8 justify-between">
            <button
              className="bg-white relative group overflow-hidden rounded-md w-full h-52 md:h-80"
              onClick={() => router.push(`/Immersive/`)}
            >
              <div
                className="flex cursor-pointer hover:bg-white/40 w-[200px] h-8 absolute left-1/2 mt-40 md:mt-64 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
                      rounded-full shadow-lg border border-white/20 items-center justify-around"
              >
                Aprende con Películas
              </div>
              <NextImage
                priority
                src={watch} //bg
                className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover pt-0 "
                fetchPriority="high"
                quality={80}
              />
            </button>
            <button
              onClick={() => router.push(`/FlashCards/`)}
              className="bg-white relative group overflow-hidden rounded-md w-full h-52 md:h-80"
            >
              <div
                className="flex cursor-pointer hover:bg-white/40 w-[200px] h-8 absolute left-1/2 mt-40 md:mt-64 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
                rounded-full shadow-lg border border-white/20 items-center justify-around"
              >
                Aprende Jugando
              </div>
              <NextImage
                priority
                src={play} //bg
                className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover pt-0 "
                fetchPriority="high"
                quality={80}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default withUserData(funZone)
