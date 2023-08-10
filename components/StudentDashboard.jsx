import React, { useState } from 'react'
import ProgressLesson from './ProgressLesson'
import { useRouter } from 'next/router'
import Image from 'next/image'
import image1 from '@/public/cambridgeandlet.png'
import { AiFillPieChart } from 'react-icons/ai'
import { MdFaceRetouchingNatural, MdTaskAlt } from 'react-icons/md'
import { FcCalendar } from 'react-icons/fc'
import Schedule from './Schedule'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import YourProfile from './YourProfile'
import student from '@/public/animations/student.json'
import CtaAnimationPage from './CtaAnimationPage'
import ExternalApps from './ExternalApps'
import { TbBrandYoutubeKids } from 'react-icons/tb'

export default function StudentDashboard({ id, setAppNotif, appNotif, level, tutor, schedule, progressB, progressI, progressA }) {

  const router = useRouter()

  const [meetingRoom, setMeetingRoom] = useState(false)

  return (
    <div className='mt-6'>
      <div onClick={() => setMeetingRoom(true)} className='flex bg-green-500 py-1 px-2 sm:px-3 absolute top-1 left-2 md:left-20 cursor-pointer hover:opacity-80 rounded-full w-[90px] sm:w-[100px] md:w-[200px] justify-between items-center'>
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
            subTitle={`Recuerda solo entrar en los horarios establecidos con tu tutor. Este botón te llevará directamente a su sala de reuniones en WhereBy`}
            animation={student}
            cta={"Entrar a la Reunión"}
            btn="link"
            link={tutor.urlMeet}
            setMeetingRoom={setMeetingRoom}
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
        <div onClick={() => router.push(`/selectCharacter/${id}`)} className='group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
          <MdFaceRetouchingNatural className='z-10 text-5xl md:text-7xl' />
          <p className='z-10 group-hover:text-white'>
            Change
          </p>
          <p className='z-10 group-hover:text-white'>
            Character
          </p>
          <div className='h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute'></div>
          <div className='h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-cyan-300 to-blue-700 rounded-full -left-12 md:left-16 md:top-1 absolute'></div>
        </div>
        <div onClick={() => router.push("/Immersive/")} className='group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
          <TbBrandYoutubeKids className='z-10 text-5xl md:text-7xl' />
          <p className='z-10 group-hover:text-white'>
            Immersive
          </p>
          <p className='z-10 group-hover:text-white'>
            Videos
          </p>
          <div className='h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute'></div>
          <div className='h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-red-300 to-red-600 rounded-full -left-12 md:left-16 md:top-1 absolute'></div>
        </div>
        <div onClick={() => router.push("/Progress/")} className='group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
          <AiFillPieChart className='z-10 text-5xl md:text-7xl' />
          <p className='z-10 group-hover:text-white'>
            My
          </p>
          <p className='z-10 group-hover:text-white'>
            Progress
          </p>
          <div className='h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute'></div>
          <div className='h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-green-300 to-green-700 rounded-full -left-12 md:left-16 md:top-1 absolute'></div>
        </div>
        <div onClick={() => router.push("/Activities/")} className='group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
          <MdTaskAlt className='z-10 text-5xl md:text-7xl' />
          <p className='z-10 group-hover:text-white'>
            My
          </p>
          <p className='z-10 group-hover:text-white '>
            Tasks
          </p>
          <div className='h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute'></div>
          <div className='h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-yellow-200 to-yellow-600 rounded-full -left-12 md:left-16 md:top-1 absolute'></div>
        </div>
      </div>
      <div className='mx-4 py-8 justify-center'>
        <div className='md:w-[80%] w-full  mx-auto rounded-md bg-black'>
          <Image className='object-cover w-full rounded-t-md' src={image1} />
          <div className='p-4'>
            <p className='text-white'>Working with Write & Improve</p>
            <p className='text-gray-600'>Cuando estés listo, empezarás a estudiar con actividades de escritura en la plataforma Write and Improve, en la colaboración con University of Cambridge.</p>
            <a href='https://writeandimprove.com/' target='_blank'>
              <button class="learn-more">
                <span class="circle bg-[var(--color2)]" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text text-[var(--color2)]">Go to the Page</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
