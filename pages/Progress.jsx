import BackHeader from '@/components/BackHeader'
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
import Schedule from '@/components/Schedule'
import SendNotifScreen from '@/components/SendNotifScreen'
import withUserData from '@/components/WithUserData'
import { PiGameControllerFill } from 'react-icons/pi'
import { BsTrashFill } from 'react-icons/bs'
import { useRef } from 'react'
import lego1 from '@/public/lego/level1.jpeg'
import final1 from '@/public/lego/final1.jpeg'
import lego3 from '@/public/lego/level3.jpeg'
import lego4 from '@/public/lego/aventurero.jpeg'
import lego5 from '@/public/lego/estrella.jpeg'
import lego6 from '@/public/lego/gamer1.jpeg'
import lego7 from '@/public/lego/gamer2.jpeg'
import lego8 from '@/public/lego/final3.jpeg'

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material'
import Image from 'next/image'
const Progress = ({ allUsers, likedVideos, userData, setSubmit, submit }) => {
  if (!userData) {
    return <LoadingScreen />
  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 40,
    borderRadius: 40,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#000817',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 40,
      backgroundColor: '#FFF500',
    },
  }))

  const [userMatched, setUserMatched] = useState(userData)
  const [students, setStudents] = useState(allUsers)
  const [progressB, setProgressB] = useState(userData.progressBeginner)
  const [progressI, setProgressI] = useState(userData.progressIntermediate)
  const [progressA, setProgressA] = useState(userData.progressAdvanced)

  const router = useRouter()

  const data = [
    { x: 'Beginner', y: userMatched.progressBeginner, y0: 0 },
    { x: 'Intermediate', y: userMatched.progressIntermediate, y0: 0 },
    { x: 'Advanced', y: userMatched.progressAdvanced, y0: 0 },
  ]

  const colorScale = ['rgb(10, 132, 255)', 'rgb(255, 159, 10)', 'rgb(255, 59, 48)']

  const [question, setQuestion] = useState(false)

  const updateUnitInTrouble = async (id) => {
    const nameRef = doc(db, 'users', id)
    await updateDoc(nameRef, {
      unitInTrouble: [],
    })
    toast.success('Well Done! Resolviste todas las dudas de tu estudiante')
    setTimeout(() => {
      router.reload()
    }, 2000)
  }

  const normalise5 = (value) => ((value - 0) * 100) / (5 - 0)
  const normalise10 = (value) => ((value - 0) * 100) / (10 - 0)
  const normalise20 = (value) => ((value - 0) * 100) / (20 - 0)
  const normalise15 = (value) => ((value - 0) * 100) / (15 - 0)
  const normalise25 = (value) => ((value - 0) * 100) / (25 - 0)

  function ProgressBar5(props) {
    return <BorderLinearProgress variant="determinate" value={normalise5(props.value)} />
  }
  function ProgressBar15(props) {
    return <BorderLinearProgress variant="determinate" value={normalise15(props.value)} />
  }
  function ProgressBar25(props) {
    return <BorderLinearProgress variant="determinate" value={normalise25(props.value)} />
  }
  function ProgressBar10(props) {
    return <BorderLinearProgress variant="determinate" value={normalise10(props.value)} />
  }
  function ProgressBar20(props) {
    return <BorderLinearProgress variant="determinate" value={normalise20(props.value)} />
  }
  const totalProgress = userMatched.progressBeginner + userMatched.progressIntermediate + userMatched.progressAdvanced
  const totalLikedVideos = likedVideos.length
  return (
    <div className="pt-20 bg-[var(--bluebg)] h-full md:min-h-screen">
      <BackHeader largeTitle={'Student Progress'} parentTitle={'Back'} />
      {userMatched.role == 'Student' && (
        <div className="flex flex-wrap gap-4 mx-8 justify-center">
        <div className="h-40 w-full flex gap-4 rounded-lg shadow-lg p-4 hover:-translate-y-1 cursor-pointer max-w-[500px] bg-[var(--blueDarkbg)]">
          <div className="w-[25%] relative h-full overflow-hidden bg-[var(--blueSuperDark)] rounded-lg p-6 sm:p-8">
            <Image src={lego1} className="scale-[2] absolute bottom-4 left-0" />
          </div>
          <div className="w-[70%]">
            <h2 className="text-[var(--lightBlue)] text-3xl mb-2">Aprendíz</h2>
            {totalProgress < 5 ? <ProgressBar5 value={totalProgress} /> : <ProgressBar5 value={5} />}
            <p className="text-[var(--lightBlue)] opacity-50 my-2">Complete your first 5 lessons</p>
          </div>
        </div>
        <div className="h-40 w-full flex gap-4 rounded-lg shadow-lg p-4 hover:-translate-y-1 cursor-pointer max-w-[500px] bg-[var(--blueDarkbg)]">
          <div className="w-[25%] relative overflow-hidden bg-[var(--blueSuperDark)] rounded-lg p-6 sm:p-8">
            <Image src={lego4} className="scale-[2] absolute bottom-4 left-0" />{' '}
          </div>
          <div className="w-[70%]">
            <h2 className="text-[var(--lightBlue)] text-3xl mb-2">Aventurero</h2>
            {totalProgress < 10 ? <ProgressBar10 value={totalProgress} /> : <ProgressBar10 value={10} />}
            <p className="text-[var(--lightBlue)] opacity-50 my-2">Complete your first 10 lessons</p>
          </div>
        </div>
        <div className="h-40 w-full flex gap-4 rounded-lg shadow-lg p-4 hover:-translate-y-1 cursor-pointer max-w-[500px] bg-[var(--blueDarkbg)]">
          <div className="w-[25%] relative overflow-hidden bg-[var(--blueSuperDark)] rounded-lg p-6 sm:p-8">
            <Image src={lego3} className="scale-[2] absolute bottom-4 left-0" />{' '}
          </div>
          <div className="w-[70%]">
            <h2 className="text-[var(--lightBlue)] text-3xl mb-2">Prodigio</h2>
            {totalProgress < 20 ? <ProgressBar20 value={totalProgress} /> : <ProgressBar20 value={20} />}
            <p className="text-[var(--lightBlue)] opacity-50 my-2">Complete your first 20 lessons</p>
          </div>
        </div>
        <div className="h-40 w-full flex gap-4 rounded-lg shadow-lg p-4 hover:-translate-y-1 cursor-pointer max-w-[500px] bg-[var(--blueDarkbg)]">
          <div className="w-[25%] relative overflow-hidden bg-[var(--blueSuperDark)] rounded-lg p-6 sm:p-8">
            <Image src={lego7} className="scale-[2] absolute bottom-4 left-0" />{' '}
          </div>
          <div className="w-[70%]">
            <h2 className="text-[var(--lightBlue)] text-3xl mb-2">Video Fan</h2>
            {totalLikedVideos < 5 ? <ProgressBar5 value={totalLikedVideos} /> : <ProgressBar5 value={5} />}
            <p className="text-[var(--lightBlue)] opacity-50 my-2">Like your first 5 videos</p>
          </div>
        </div>
        <div className="h-40 w-full flex gap-4 rounded-lg shadow-lg p-4 hover:-translate-y-1 cursor-pointer max-w-[500px] bg-[var(--blueDarkbg)]">
          <div className="w-[25%] relative overflow-hidden bg-[var(--blueSuperDark)] rounded-lg p-6 sm:p-8">
            <Image src={lego6} className="scale-[2] absolute bottom-4 left-0" />{' '}
          </div>
          <div className="w-[70%]">
            <h2 className="text-[var(--lightBlue)] text-3xl mb-2">Video Pro</h2>
            {totalLikedVideos < 15 ? <ProgressBar15 value={totalLikedVideos} /> : <ProgressBar15 value={15} />}
            <p className="text-[var(--lightBlue)] opacity-50 my-2">Like your first 15 videos</p>
          </div>
        </div>
        <div className="h-40 w-full flex gap-4 rounded-lg shadow-lg p-4 hover:-translate-y-1 cursor-pointer max-w-[500px] bg-[var(--blueDarkbg)]">
          <div className="w-[25%] relative overflow-hidden bg-[var(--blueSuperDark)] rounded-lg p-6 sm:p-8">
          <Image src={lego5} className="scale-[2] absolute bottom-4 left-0" />          </div>
          <div className="w-[70%]">
            <h2 className="text-[var(--lightBlue)] text-3xl mb-2">Estrella</h2>
            {progressB < 24 ? <ProgressBar25 value={progressB} /> : <ProgressBar25 value={25} />}
            <p className="text-[var(--lightBlue)] opacity-50 my-2">Finish the Beginner Level</p>
          </div>
        </div>
        <div className="h-40 w-full flex gap-4 rounded-lg shadow-lg p-4 hover:-translate-y-1 cursor-pointer max-w-[500px] bg-[var(--blueDarkbg)]">
          <div className="w-[25%] relative overflow-hidden bg-[var(--blueSuperDark)] rounded-lg p-6 sm:p-8">
          <Image src={final1} className="scale-[2] absolute bottom-4 left-0" />          </div>
          <div className="w-[70%]">
            <h2 className="text-[var(--lightBlue)] text-3xl mb-2">Experto</h2>
            {progressI < 24 ? <ProgressBar25 value={progressI} /> : <ProgressBar25 value={25} />}
            <p className="text-[var(--lightBlue)] opacity-50 my-2">Finish the Intermediate Level</p>
          </div>
        </div>
        <div className="h-40 w-full flex gap-4 rounded-lg shadow-lg p-4 hover:-translate-y-1 cursor-pointer max-w-[500px] bg-[var(--blueDarkbg)]">
          <div className="w-[25%] relative overflow-hidden bg-[var(--blueSuperDark)] rounded-lg p-6 sm:p-8">
          <Image src={lego8} className="scale-[2] absolute bottom-4 left-0" />          </div>
          <div className="w-[70%]">
            <h2 className="text-[var(--lightBlue)] text-3xl mb-2">Genio</h2>
            {progressA < 24 ? <ProgressBar25 value={progressA} /> : <ProgressBar25 value={25} />}
            <p className="text-[var(--lightBlue)] opacity-50 my-2">Finish the Advanced Level</p>
          </div>
        </div>
      </div>
      )}
      <div className="max-w-2xl mx-auto pb-24">
        {userMatched.role == 'Admin' && (
          <div className="mx-16 md:mx-8">
            <h1 className="text-3xl text-white font-bold my-10 text-center">Your students</h1>
            {students.map((student) => (
              <>
                {student.unitInTrouble?.length > 0 && (
                  <div className="bg-yellow-300 py-4 -mb-2 px-4 rounded-lg">
                    <p>{student.firstName} ha solicitado tu ayuda!</p>
                    <p className="text-xs text-gray-800">
                      Ayudale en la leccion {student.unitInTrouble[0]} del nivel {student.level}{' '}
                    </p>
                    <div className="flex items-center justify-around py-2">
                      <button
                        onClick={() => router.push(`/Niveles/${student.level}/${student.unitInTrouble[0]}`)}
                        className="py-2 border-[var(--color2)] border-4 rounded-full px-3"
                      >
                        <p>Ir a la leccion</p>
                      </button>
                      <button
                        onClick={() => updateUnitInTrouble(student.id)}
                        className="py-2 border-4 border-[var(--color2)] bg-[var(--color2)] rounded-full px-3"
                      >
                        <p className="text-white">Marcar como completa</p>
                      </button>
                    </div>
                  </div>
                )}
                <div className="relative p-4 bg-gray-300 rounded-md mb-4 w-full mx-auto transition-all 1s ease-in cursor-pointer">
                  {student.unitInTrouble?.length > 0 && (
                    <div class="loader">
                      <div class="circle circle-1"></div>
                      <div class="circle circle-2"></div>
                      <div class="circle circle-3"></div>
                      <div class="circle circle-4"></div>
                    </div>
                  )}
                  <div className="flex relative justify-start gap-4 pb-4 items-center">
                    <YourFlag country={student.country} />
                    <p className="text-center font-bold text-xl py-1 cursor-pointer">
                      {student.firstName}
                    </p>
                    <div className="absolute right-4">
                      <p className="text-sm text-gray-600 font-bold">({student.level})</p>
                    </div>
                  </div>
                  <a href={'https://let-students.vercel.app/ActivitiesDetail/' + student.id}>
                    <button className="learn-more w-full md:w-60">
                      <span className="circle bg-[var(--color3)]" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text text-[var(--color3)]">Check Activities</span>
                    </button>
                  </a>
                  <div className="bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 overflow-hidden w-full rounded-t-xl mt-4 flex gap-8 items-center justify-between py-2 px-4">
                    <p className="text-white">Email</p>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-400 opacity-80">{student.email}</p>
                    </div>
                  </div>
                  <div className="bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center justify-between py-2 px-4">
                    <p className="text-white">Phone</p>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-400 opacity-80">{student.phone}</p>
                    </div>
                  </div>
                  <div className="bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center rounded-b-xl mb-4 justify-between py-2 px-4">
                    <p className="text-white">Age</p>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-400 opacity-80">{student.age}</p>
                    </div>
                  </div>
                  <div className=' flex justify-start items-center my-2'>
                    <p>Beginner: {student.progressBeginner} </p>
                  </div>
                  <div className=" flex justify-start items-center my-2">
                    <p>Intermediate: {student.progressIntermediate}</p>
                  </div>
                  <div className=" flex justify-start items-center my-2">
                    <p>Advanced: {student.progressAdvanced}</p>
                  </div>
                  <div className="my-2 flex flex-wrap">
                    <PiGameControllerFill className=" text-3xl items-center gap-2 fill-gray-500" />
                    {student.wordsGameProgress?.map((game) => (
                      <span className="bg-gray-500 px-2 py-1 m-1 rounded-lg">{game}</span>
                    ))}
                  </div>
                  {student.schedule && <Schedule schedule={student.schedule} />}
                  <button
                    onClick={() => router.push(`StudentDetail/${student.id}`)}
                    className="w-full py-4 rounded-full my-4 bg-[var(--blueDarkbg)] hover:bg-white border-4 hover:text-[var(--blueDarkbg)] border-[var(--blueDarkbg)] text-white"
                  >
                    MODIFY
                  </button>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default withUserData(Progress)
