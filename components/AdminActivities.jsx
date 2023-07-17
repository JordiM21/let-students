import React, { useState } from 'react'
import BackHeader from './BackHeader'
import YourProfile from './YourProfile'
import { BsChevronRight } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { FormControl, TextField } from '@mui/material'

export default function AdminActivities({ allUsers, userMatched }) {
  const router = useRouter()
  const [link, setLink] = useState("")

  return (
    <div className='mx-8 pt-20 max-w-lg md:mx-auto'>
      <BackHeader largeTitle={"Create Activities"} parentTitle={"Back"} />
      <div className='mb-4'>
        <h1 className='text-3xl'>Tus estudiantes</h1>
        {
          allUsers.map((student) => (
            <div onClick={() => router.push(`/ActivitiesDetail/${student.id}`)} className='bg-black mb-4 hover:scale-[102%] hover:opacity-80 cursor-pointer rounded-xl py-2 px-4 relative'>
              <div className='flex items-center justify-start gap-4'>
                <YourProfile char={student.profileImg} size={"small"} />
                <p className='text-xl text-white'>{student.firstName} {student.lastName} </p>
              </div>
              <div className='flex justify-between my-2'>
                <p className='text-gray-500'>Nivel: <span className='text-white'>{student.level}</span></p>
              </div>
              <BsChevronRight className='fill-white text-5xl absolute top-10 right-4' />
            </div>
          ))
        }
      </div>
    </div>
  )
}
