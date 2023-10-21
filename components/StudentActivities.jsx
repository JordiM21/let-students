import React from 'react'
import YourProfile from './YourProfile'
import { AiFillCheckCircle, AiFillInfoCircle } from 'react-icons/ai'
import BackHeader from './BackHeader'
import Link from 'next/link'
import { FaMagic } from 'react-icons/fa'

export default function StudentActivities({ tutor, userMatched }) {
  return (
    <div className='mx-8 pt-20 max-w-lg md:mx-auto'>
      <BackHeader largeTitle={"Your Activities"} parentTitle={"Back"} />
      <div className='px-6 py-2 rounded-xl bg-black'>
        <div className='flex justify-between items-center '>
          <div className='flex items-center gap-4'>
            <YourProfile char={tutor.profileImg} size={"super-small"} />
            <p className='text-gray-400'>{tutor.firstName} {tutor.lastName}</p>
          </div>
          <p className='text-white'>Tutor Personal</p>
        </div>
        <div className='my-2'>
          <p className='text-gray-600 text-sm'>
            Estas actividades son asignadas por tu <span className='text-white'>tutor personal</span>, asegúrate de terminarlas <span className='text-white'>antes</span> de la fecha límite, cuando la termines, avísale para que la revise y la <span className='text-white'>actualice a completada</span>
          </p>
        </div>
      </div>
      <div className='my-8'>
        <h1>Your Activities</h1>
        {
          userMatched.activities.length < 1 && (
            <p className='text-center text-gray-500 text-sm'>Aún no tienes actividades</p>
          )
        }
        {
          userMatched.activities.map((activity) => (
            activity.status === "pending" && (
              <div className='bg-gray-950 mb-4 hover:scale-105 cursor-pointer rounded-xl py-2 px-4 relative'>
                <div className='my-2'>
                  <p className='text-xl text-white'>{activity.text}</p>
                  <p className='text-gray-600 text-sm my-2'>
                    {activity.description}
                  </p>
                </div>
                <p className='text-gray-500 bg-gray-900 w-min p-2 rounded-md'>
                  <span className='text-white flex gap-3'>
                    <FaMagic className='fill-blue-400' />
                    {activity.topic}
                  </span>
                </p>
                <div className='w-full my-4 flex justify-between'>
                  <p className='text-gray-500'>
                    {activity.limitDate}
                  </p>
                  <div>
                    <Link href={activity.link} target='_blank' className='bg-blue-600 border-blue-600 border-4 hover:opacity-80 p-2 rounded-md'>
                      Ir a la Actividad
                    </Link>
                  </div>
                </div>
                <div className='bg-yellow-400 rounded-md px-2 absolute gap-1 -top-2 flex items-center -right-2'>
                  <AiFillInfoCircle />
                  <p>Pending</p>
                </div>
              </div>
            )
          ))
        }
        {
          userMatched.activities.map((activity) => (
            activity.status === "done" && (
              <div className='bg-gray-950 mb-4 opacity-50 cursor-pointer rounded-xl mt-6 py-2 px-4 relative'>
                <small className='text-white absolute z-50 -top-4 text-[11px] opacity-50'>{activity.assignedDay}</small>
                <div className='my-2'>
                  <p className='text-xl text-white'>{activity.text}</p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-gray-500 bg-gray-900 w-min p-2 rounded-md'>
                    <span className='text-white flex gap-3'>
                      <FaMagic className='fill-blue-400' />
                      {activity.topic}
                    </span>
                  </p>
                  <p className='text-gray-300'>
                    {activity.limitDate}
                  </p>
                </div>
                <div className='bg-green-400 rounded-md px-2 absolute -top-2 flex gap-1 items-center -right-2'>
                  <AiFillCheckCircle />
                  <p>Done</p>
                </div>
              </div>
            )
          ))
        }
      </div>
    </div>
  )
}
