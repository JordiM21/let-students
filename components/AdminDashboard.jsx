import React, { useState } from 'react'
import AddButton from './AddButton'
import ListOfUsers from './ListOfUsers'
import FormsCheck from './FormsCheck'
import Image from 'next/image'
import image3 from '@/public/cambridgeandlet.png'
import enviroment from '@/public/enviromentsAdmin.png'
import allStudents from '@/public/AllStudents.png'
import { AiOutlineCopy } from 'react-icons/ai'
import copy from 'clipboard-copy';
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { FcAutomatic, FcBullish, FcCalendar, FcContacts, FcHighPriority } from 'react-icons/fc'


export default function AdminDashboard({ allUsers, firstName, email }) {

  const [mail] = useState("learnenglishtogether21@gmail.com")
  const [password] = useState("let-admin")
  const router = useRouter()


  const handleCopy = (mail) => {
    copy(mail)
    toast.success("Copied!")
  }

  const [beginnerCode] = useState("Z8M2D7GG")
  const [intermediateCode] = useState("R2PMQGRC")
  const [advancedCode] = useState("2DG2QZ9C")

  return (
    <div>
      <p className='text-center text-4xl py-4 font-bold text-[var(--color2)]'>Welcome {firstName}!</p>
      {
        email == "jordimantilla21@gmail.com" && (
          <div className='px-4 py-2'>
            <div className='flex justify-around items-center py-4'>
              <p className='text-white text-xl sm:text-3xl font-bold'>General View Students</p>
              <AddButton text={"Registrar Estudiante"} link={"/Register"} />
            </div>
            <ListOfUsers allUsers={allUsers} />
          </div>
        )
      }
      <div className='flex justify-center my-8'>
        <div className='bg-black rounded-md'>
          <Image src={allStudents} className='rounded-t-md w-full object-cover' />
          <div>
            <div className='flex items-center justify-start gap-2 p-4'>
              <FcBullish size={24} />
              <p className='text-white'>Check your students progress</p>
            </div>
            <div className='flex items-center justify-start gap-2 p-4'>
              <FcAutomatic size={24} />
              <p className='text-white'>Modify their information</p>
            </div>
            <div className='flex items-center justify-start gap-2 p-4'>
              <FcContacts size={24} />
              <p className='text-white'>Access to contact data</p>
            </div>
            <div className='flex items-center justify-start gap-2 p-4'>
              <FcHighPriority size={24} />
              <p className='text-white'>Help your students in trouble in real time</p>
            </div>
            <div className='flex items-center justify-start gap-2 p-4'>
              <FcCalendar size={24} />
              <p className='text-white'>See the student schedule and disponibility</p>
            </div>
            <div className='flex justify-center pb-6'>
              <button onClick={() => router.push("/Progress")} className='w-11/12 py-4 rounded-full border-4 border-white text-white hover:bg-gray-700'>
                Check it out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='max-md:space-y-8 md:flex items-start md:gap-4 md:mx-20 '>
        <div className='w-11/12 mx-auto rounded-md bg-black'>
          <Image height={200} className='object-cover w-full rounded-t-md' src={enviroment} />
          <div className='p-4'>
            <p className='text-white'>Add a new video</p>
            <p className='text-gray-600'>Only admins and tutors can create videos for the students, why don't you try iy? you only have to add the url for youtube, the name, put a level and a description. Try it!</p>
            <div className='flex gap-3 flex-col justify-center my-4'>
              <p className='text-[var(--color3)] text-center'>Remember to put the level correctly</p>
            </div>
            <button onClick={() => router.push("/adminCreate/createVideo")} className='cursor-pointer w-full rounded-full border-4 border-white py-3 text-white hover:bg-gray-800'>
              <a>Create a Video</a>
            </button>
          </div>
        </div>
        <div className='w-11/12 mx-auto rounded-md bg-black'>
          <Image className='object-cover w-full rounded-t-md' src={image3} />
          <div className='p-4'>
            <p className='text-white'>ADMIN ACCESS TO THE WRITE & IMPROVE PAGE</p>
            <p className='text-gray-600'>You already have access as an administrator to the write & improve page to see the students results and tasks finished.</p>
            <p className='text-gray-200 text-xs '>LET Academy paga la subscripcion premium para que todos los administradores puedan ver los resultados de sus alumnos en tiempo real.</p>
            <div className='flex gap-3 flex-col justify-center my-4'>
              <p className='text-[var(--color3)] text-center'>Share the workbooks code with your students.</p>
              <div onClick={() => handleCopy(beginnerCode)} className='flex bg-white justify-center gap-2 items-center px-6 py-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                <p>Beginner Code: {beginnerCode} </p>
                <AiOutlineCopy />
              </div>
              <div onClick={() => handleCopy(intermediateCode)} className='flex bg-white items-center px-6 py-2 justify-center gap-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                <p>Intermediate Code: {intermediateCode} </p>
                <AiOutlineCopy />
              </div>
              <div onClick={() => handleCopy(advancedCode)} className='flex bg-white items-center px-6 py-2 justify-center gap-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                <p>Advanced Code: {advancedCode} </p>
                <AiOutlineCopy />
              </div>
            </div>
            <button className='cursor-pointer w-full rounded-full border-4 border-white py-3 text-white hover:bg-gray-800'>
              <a href='https://writeandimprove.com/' target='_blank'>Go to the page</a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <FormsCheck />
      </div>
    </div>
  )
}
