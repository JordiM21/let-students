import React, { useEffect, useRef, useState } from 'react'
import ProgressLesson from './ProgressLesson'
import { useRouter } from 'next/router'
import Image from 'next/image'
import image1 from '@/public/cambridgeandlet.png'
import image3 from '@/public/enviroments.png'
import { AiFillCloseCircle, AiOutlineCopy } from 'react-icons/ai'
import { MdArrowForwardIos } from 'react-icons/md'
import copy from 'clipboard-copy';
import { toast } from 'react-toastify'
import { FcCalendar } from 'react-icons/fc'
import Schedule from './Schedule'
import { BsFillCameraVideoFill, BsQuestionCircle } from 'react-icons/bs'
import YourProfile from './YourProfile'
import student from '@/public/animations/student.json'
import CtaAnimationPage from './CtaAnimationPage'
import ExternalApps from './ExternalApps'

const notifPage = ({ }) => {

}


export default function StudentDashboard({ firstName, id, setAppNotif, appNotif, level, profileImg, tutor, schedule, progressB, progressI, progressA }) {

  const router = useRouter()

  const [question, setQuestion] = useState(false)
  const [meetingRoom, setMeetingRoom] = useState(false)

  return (
    <div>
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
      <div className='flex justify-center items-center pt-2'>
        <h1 className='text-center text-4xl mx-4 py-2 font-bold text-white'>Welcome {firstName}!</h1>
        <YourProfile char={profileImg} size={"small"} />
      </div>
      <div className='md:flex items-center justify-center gap-4'>
        <div className='relative mx-4 my-4 md:w-1/2'>
          <p className='text-white text-xl'>Link for meetings </p>
          <div onClick={() => setQuestion(!question)} className='absolute right-4 top-0 cursor-pointer bg-slate-300 rounded-full'>
            <BsQuestionCircle className='w-6 h-6 ' />
          </div>
          <div onClick={() => setMeetingRoom(true)} className='flex bg-green-500 cursor-pointer hover:opacity-80 py-2 my-3 rounded-full w-full justify-between pl-4 pr-12 items-center'>
            <YourProfile char={tutor.profileImg} size={"small"} />
            <p className='text-white text-xl'>Enter in the meeting</p>
            <BsFillCameraVideoFill fill='white' size={36} />
          </div>
          {
            question && (
              <div className='bg-gray-200 backdrop-blur-sm bg-opacity-80 p-6 shadow-gray-500 z-50 rounded-md shadow-lg max-w-[250px] absolute right-0 top-7'>
                <AiFillCloseCircle className='absolute top-2 cursor-pointer right-2 w-6 h-6' onClick={() => setQuestion(!question)} />
                <p>Para ingresar a la meeting con tu tutor solo tienes que asegurarte de agendar primero y que esten de acuerdo en un horario si los tienes establecidos mucho mejor, no necesitas iniciar sesiòn para entrar ni tener cuenta. Recuerda ser muy puntual con los horarios de tutor</p>
              </div>
            )
          }
        </div>
        <div className='md:pt-12'>
          <ExternalApps appNotif={appNotif} userId={id} setAppNotif={setAppNotif} role="Student" />
        </div>
      </div>
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
                <button onClick={() => router.push(`/Niveles/${level}/${progressB + 1}`)} className='my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:bg-[var(--color1)] transition-all 1s ease-in'>Go to my current Lesson</button>
              )
            }
            {
              level == "Intermediate" && (
                <button onClick={() => router.push(`/Niveles/${level}/${progressI + 1}`)} className='my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:bg-[var(--color1)] transition-all 1s ease-in'>Go to my current Lesson</button>
              )
            }
            {
              level == "Advanced" && (
                <button onClick={() => router.push(`/Niveles/${level}/${progressA + 1}`)} className='my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:bg-[var(--color1)] transition-all 1s ease-in'>Go to my current Lesson</button>
              )
            }
          </div>
        </div>
      </div>
      <div className='bg-gray-900 mx-4 pb-4 my-6 rounded-md md:w-1/2 max-w-2xl md:mx-auto'>
        <div className='flex justify-center gap-4 items-center rounded-t-md py-2 bg-[var(--color2)]'>
          <p className='text-xl'>Student's Schedule</p>
          <FcCalendar size={32} />
        </div>
        <div className='px-4'>
          <Schedule schedule={schedule} />
        </div>
      </div>
      <div className='mx-4 py-8 md:flex gap-8 items-center max-md:space-y-6 justify-center'>
        <div className='rounded-lg bg-black'>
          <Image src={image3} className='rounded-t-lg h-[100px] md:h-[350px] object-cover bg-left' />
          <div className='p-4'>
            <p className='text-white text-xs md:text-sm font-bold opacity-30'>New Immersive activities</p>
            <h2 className='text-white font-bold text-lg'>A NEW WAY TO LEARN</h2>
            <p className='text-white opacity-60 text-sm md:text-md' >Actividades didácticas en video que te ayudarán a mejorar tu inglés y aprender muchas cosas nuevas, diviértete mientras aprendes y practicas inglés.</p>
            <button onClick={() => router.push("/Immersive")} className='w-full bg-white mt-2 rounded-full py-3 hover:opacity-80 active:scale-95'>
              Start Learning
            </button>
          </div>
        </div>
        <div className='w-full mx-auto rounded-md bg-black'>
          <Image className='object-cover w-full rounded-t-md' src={image1} />
          <div className='p-4'>
            <p className='text-white'>ADMIN ACCESS TO THE WRITE & IMPROVE PAGE</p>
            <p className='text-gray-600'>You already have access as an administrator to the write & improve page to see the students results and tasks finished.</p>
            <button className='cursor-pointer w-full rounded-full border-4 border-white my-2 py-3 text-white hover:bg-gray-800'>
              <a href='https://writeandimprove.com/' target='_blank'>Go to the page</a>
            </button>
          </div>
        </div>
        {/* <div className='rounded-lg bg-black w-full'>
          <Image src={image1} className='rounded-t-lg h-[100px] md:h-[320px] object-cover' />
          <div className='p-4'>
            <p className='text-white text-xs md:text-sm font-bold opacity-30'>New Learning Tool</p>
            <h2 className='text-white font-bold text-lg'>WRITE & IMPROVE BY CAMBRIDGE</h2>
            <p className='text-white opacity-60 text-sm md:text-md mb-4' >herramienta desarrollada por la Universidad de Cambridge que ayuda a cada estudiante a mejorar mientras escribe. Desde el inicio eres asignado a un grupo de estudio en esta plataforma acorde a tu nivel, en este grupo podrás practicar tanto como quieras</p>
            {
              level == "Beginner" && (
                <div className='flex justify-between items-center flex-col sm:flex-row gap-2 mb-4'>
                  <div onClick={handleCopyBeginner} className='flex bg-white items-center px-6 py-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                    <p>{beginnerCode} </p>
                    <AiOutlineCopy />
                  </div>
                  <div className='flex items-center gap-2 hover:gap-4 transition-all 1s ease-in cursor-pointer hover:opacity-90 bg-[var(--color1)] text-white font-bold px-6 rounded-md py-2'>
                    <a href='https://writeandimprove.com/workbooks#/memberships/e405a0c1-8025-4fbb-ad94-bc0eefada543/workbooks/647f2ecc-604b-4a24-bbf9-4851f980cb85' target='_blank'>Go to the page</a>
                    <MdArrowForwardIos />
                  </div>
                </div>
              )
            }
            {
              level == "Intermediate" && (
                <div className='flex justify-between items-center mb-4'>
                  <div onClick={handleCopyIntermediate} className='flex bg-white items-center px-6 py-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                    <p>{intermediateCode} </p>
                    <AiOutlineCopy />
                  </div>
                  <div className='flex items-center gap-2 hover:gap-4 transition-all 1s ease-in cursor-pointer hover:opacity-90 text-white border-4 border-white font-bold px-6 rounded-full py-2'>
                    <a href='https://writeandimprove.com/workbooks#/memberships/e405a0c1-8025-4fbb-ad94-bc0eefada543/workbooks/647f2ef1-cb66-4f4d-87ae-a842fbc28e33' target='_blank'>Go to page</a>
                    <MdArrowForwardIos fill='white' />
                  </div>
                </div>
              )
            }
            {
              level == "Advanced" && (
                <div className='flex justify-between items-center mb-4'>
                  <div onClick={handleCopyAdvanced} className='flex bg-white items-center px-6 py-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                    <p>{advancedCode} </p>
                    <AiOutlineCopy />
                  </div>
                  <div className='flex items-center gap-2 hover:gap-4 transition-all 1s ease-in cursor-pointer hover:opacity-90 bg-[var(--color1)] text-white font-bold px-6 rounded-md py-2'>
                    <a href='https://writeandimprove.com/workbooks#/memberships/e405a0c1-8025-4fbb-ad94-bc0eefada543/workbooks/647f2eff-931c-4d46-84f9-2a866f69831d' target='_blank'>Go to the page</a>
                    <MdArrowForwardIos />
                  </div>
                </div>
              )
            }
            <p className='text-white text-center opacity-90'>Recuerda Registrarte con el mismo correo que tienes registrado aca</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
