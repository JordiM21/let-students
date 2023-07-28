import React, { useEffect, useRef, useState } from 'react'
import ProgressLesson from './ProgressLesson'
import { useRouter } from 'next/router'
import Image from 'next/image'
import image1 from '@/public/cambridgeandlet.png'
import image3 from '@/public/enviroments.png'
import { AiFillCloseCircle, AiFillPieChart, AiOutlineCopy } from 'react-icons/ai'
import { MdArrowForwardIos, MdFaceRetouchingNatural, MdTaskAlt } from 'react-icons/md'
import { FcCalendar } from 'react-icons/fc'
import Schedule from './Schedule'
import { BsFillCameraVideoFill, BsQuestionCircle, BsQuote, BsYoutube } from 'react-icons/bs'
import YourProfile from './YourProfile'
import student from '@/public/animations/student.json'
import CtaAnimationPage from './CtaAnimationPage'
import ExternalApps from './ExternalApps'
import { AiFillYoutube } from 'react-icons/ai'
import { TbBrandYoutubeKids } from 'react-icons/tb'

export default function StudentDashboard({ firstName, id, setAppNotif, appNotif, level, profileImg, tutor, schedule, progressB, progressI, progressA }) {

  const router = useRouter()

  const [question, setQuestion] = useState(false)
  const [meetingRoom, setMeetingRoom] = useState(false)

  return (
    <div className='mt-6'>
      <div onClick={() => setMeetingRoom(true)} className='flex bg-green-500 py-1 px-3 absolute top-1 left-2 md:left-20 cursor-pointer hover:opacity-80 rounded-full w-[100px] md:w-[200px] justify-between items-center'>
        <YourProfile char={tutor.profileImg} size={"super-small"} />
        <p className={`hidden md:block text-white text-lg`}>
          MEETING
        </p>
        <BsFillCameraVideoFill fill='white' size={28} />
      </div>
      {
        meetingRoom == true && (
          <CtaAnimationPage
            title={"Conéctate con tu tutor personal y resuelve todas tus dudas!"}
            subTitle={`Recuerda que antes de entrar en la meeting te debes poner de acuerdo con tu tutor en el horario del encuentro.`}
            animation={student}
            cta={"Go to the meeting"}
            btn="link"
            link={tutor.urlMeet}
            bg="green"
          />
        )
      }
      <div className='bg-yellow-400 mx-4 pb-8 rounded-md md:flex md:pb-0 max-w-5xl md:mx-auto'>
        <div className='bg-yellow-300 font-semibold text-lg md:text-2xl px-4 py-3 md:py-8 rounded-md shadow-md'>
          <span className='text-[var(--color2)] md:block text-3xl md:text-8xl'>{level == "Beginner" && progressB * 23}{level == "Intermediate" && progressI * 23}{level == "Advanced" && progressA * 23}</span> total words known on your level
        </div>
        <div className='px-4 md:px-20 md:py-4'>
          <div className='my-4 space-y-2'>
            <p className='text-center text-xl md:text-2xl'>Your progress in the <span className='text-[var(--color2)] font-bold md:text-3xl text-2xl'>{level}</span> Level</p>
            {
              level == "Beginner" && (
                <ProgressLesson progress={progressB} />
              )
            }
            {
              level == "Intermediate" && (
                <ProgressLesson progress={progressI} />
              )
            }
            {
              level == "Advanced" && (
                <ProgressLesson progress={progressA} />
              )
            }
          </div>
          <div>
            <p className='font-bold text-xl hidden md:block'>Learn more words and complete lessons now!</p>
            {
              level == "Beginner" && (
                <button onClick={() => router.push(`/Niveles/${level}/${progressB + 1}`)} className='my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:shadow-xl shadow-black hover:translate-y-1 transition-all 1s ease-in'>Go to my current Lesson</button>
              )
            }
            {
              level == "Intermediate" && (
                <button onClick={() => router.push(`/Niveles/${level}/${progressI + 1}`)} className='my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:shadow-xl shadow-black hover:translate-y-1 transition-all 1s ease-in'>Go to my current Lesson</button>
              )
            }
            {
              level == "Advanced" && (
                <button onClick={() => router.push(`/Niveles/${level}/${progressA + 1}`)} className='my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:shadow-xl shadow-black hover:translate-y-1 transition-all 1s ease-in'>Go to my current Lesson</button>
              )
            }
          </div>
        </div>
      </div>
      <div className='md:flex items-center justify-center gap-4'>
        <div className='md:pt-12'>
          <ExternalApps appNotif={appNotif} userId={id} setAppNotif={setAppNotif} role="Student" />
        </div>
        <div className='bg-gray-900 mx-4 pb-4 my-6 rounded-md md:w-1/2 max-w-2xl'>
          <div className='flex justify-center gap-4 items-center rounded-t-md py-2 bg-[var(--color2)]'>
            <p className='text-xl'>Student's Schedule</p>
            <FcCalendar size={32} />
          </div>
          <div className='px-4'>
            <Schedule schedule={schedule} />
          </div>
        </div>
      </div>
      <div className='w-full max-w-5xl mx-auto space-y-6 md:space-y-0 md:flex justify-evenly'>
        <div className='group bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-36 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
          <MdFaceRetouchingNatural className='z-10' size={50} />
          <p className='z-10 group-hover:text-white'>
            Change
          </p>
          <p className='z-10 group-hover:text-white'>
            Character
          </p>
          <div className='h-20 group-hover:scale-[700%] w-20 bg-blue-300 rounded-full left-32 md:left-16 absolute'></div>
        </div>
        <div className='group bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-36 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
          <TbBrandYoutubeKids className='z-10' size={50} />
          <p className='z-10'>
            Immersive
          </p>
          <p className='z-10'>
            Videos
          </p>
          <div className='h-20 group-hover:scale-[700%] w-20 bg-red-300 rounded-full left-28 md:left-20 absolute'></div>
        </div>
        <div className='group bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-36 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
          <AiFillPieChart className='z-10' size={50} />
          <p className='z-10'>
            My
          </p>
          <p className='z-10'>
            Progress
          </p>
          <div className='h-20 group-hover:scale-[800%] w-20 bg-red-300 rounded-full left-24 md:left-24 absolute'></div>
        </div>
        <div className='group bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-36 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
          <MdTaskAlt className='z-10' size={50} />
          <p className='z-10'>
            My
          </p>
          <p className='z-10'>
            Tasks
          </p>
          <div className='h-20 group-hover:scale-[900%] w-20 bg-red-300 rounded-full left-20 md:left-28 absolute'></div>
        </div>
      </div>

      <div className='mx-4 py-8 justify-center'>
        <div className='md:w-[80%] w-full  mx-auto rounded-md bg-black'>
          <Image className='object-cover w-full rounded-t-md' src={image1} />
          <div className='p-4'>
            <p className='text-white'>ADMIN ACCESS TO THE WRITE & IMPROVE PAGE</p>
            <p className='text-gray-600'>You already have access as an administrator to the write & improve page to see the students results and tasks finished.</p>
            <a href='https://writeandimprove.com/' target='_blank'>
              <button className='cursor-pointer w-full rounded-full border-4 border-white my-2 py-3 text-white hover:bg-gray-800'>
                Go to the page
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
