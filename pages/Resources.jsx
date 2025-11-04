import BackHeader from '@/components/BackHeader'
import exam from '@/public/Study.webp'
import map from '@/public/Parents.webp'
import test from '@/public/test.webp'
import NextImage from 'next/image'
import ProgressLesson from '@/components/ProgressLesson'
import YourFlag from '@/components/YourFlag'
import { db } from '@/config/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory'
import ReactPlayer from 'react-player'
import LoadingScreen from '@/components/LoadingScreen'
import { toast } from 'react-toastify'
import withUserData from '@/components/WithUserData'
import { styled } from '@mui/material'
import Image from 'next/image'
const Resources = ({ allUsers, likedVideos, userData, setSubmit, submit }) => {
  if (!userData) {
    return <LoadingScreen />
  }

  const router = useRouter()

  const [userMatched, setUserMatched] = useState(userData)
  const [students, setStudents] = useState(allUsers)

  return (
    <div className="py-12 bg-[var(--bluebg)] min-h-screen">
      <BackHeader largeTitle={'Recursos Útiles'} parentTitle={'Volver'} />
      {userMatched.role == 'Student' && (
        <div id="body" className="mx-auto px-4 flex flex-col max-w-[600px] md:max-w-[800px] gap-8 my-6">
          <h1 className="text-white">
            Sección orientada a ofrecer material de apoyo para repasar temas anteriores y practicar en casa
          </h1>
          <div className="flex md:flex-row items-center flex-col gap-8 justify-between">
            <button
              className="bg-white relative group overflow-hidden rounded-md w-full h-52 md:h-64"
              onClick={() => router.push(`/MaterialAdicional/`)}
            >
              <div
                className="flex cursor-pointer hover:bg-white/40 w-[190px] h-8 absolute left-1/2 mt-40 md:mt-52 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
                      rounded-full shadow-lg border border-white/20 items-center justify-around"
              >
                Material Adicional
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
              onClick={() => router.push(`/advices`)}
              className="bg-white relative group overflow-hidden rounded-md w-full h-52 md:h-64"
            >
              <div
                className="flex cursor-pointer hover:bg-white/40 w-[190px] h-8 absolute left-1/2 mt-40 md:mt-52 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
                rounded-full shadow-lg border border-white/20 items-center justify-around"
              >
                Consejos para Padres
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
            onClick={() => router.push(`/Niveles/`)}
            className="bg-white relative group overflow-hidden rounded-md w-full h-52 md:h-64"
          >
            <div
              className="flex cursor-pointer hover:bg-white/40 w-[180px] h-8 absolute left-1/2 mt-40 md:mt-52 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
                          rounded-full shadow-lg border border-white/20 items-center justify-around"
            >
              Gramática en Casa
            </div>
            <NextImage
              priority
              src={test} //bg
              className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover"
              fetchPriority="high"
              quality={80}
            />
          </button>
        </div>
      )}
    </div>
  )
}
export default withUserData(Resources)
