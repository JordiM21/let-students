import React from 'react'
import YourProfile from './YourProfile'
import { AiFillCheckCircle, AiFillInfoCircle } from 'react-icons/ai'
import BackHeader from './BackHeader'
import { IoCheckmarkDoneCircle } from 'react-icons/Io'

export default function StudentActivities({ tutor, userMatched }) {

  return (
    <div className='mx-8 pt-20 max-w-lg md:mx-auto'>
      <BackHeader largeTitle={"Your Activities"} parentTitle={"Back"} />
      <div className='flex justify-between items-center px-6 py-2 rounded-xl bg-black'>
        <p className='text-white'>Tu tutor</p>
        <div className='flex items-center gap-4'>
          <p className='text-gray-400'>{tutor.firstName} {tutor.lastName}</p>
          <YourProfile char={tutor.profileImg} size={"small"} />
        </div>
      </div>
      <div className='my-8'>
        <h1>Your Activities</h1>
        {
          userMatched.activities.map((activity) => (
            activity.status === "pending" && (
              <div className='bg-black mb-4 hover:scale-105 cursor-pointer rounded-xl py-2 px-4 relative'>
                <div>
                  <p className='text-xl text-white'>{activity.text}</p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-gray-500'>Tema: <span className='text-white'>{activity.topic}</span></p>
                  <p className='text-gray-500'>Fecha Límite: <span className='text-white'>{activity.limitDate}</span></p>
                </div>
                <a href={activity.link} target='_blank' className='text-blue-700 text-xs underline cursor-pointer hover:text-orange-500'>{activity.link}</a>
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
              <div className='bg-gray-900 opacity-80 mb-4 rounded-xl py-2 px-4 relative'>
                <div>
                  <p className='text-xl text-white'>{activity.text}</p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-gray-500'>Tema: <span className='text-white'>{activity.topic}</span></p>
                  <p className='text-gray-500'>Fecha Límite: <span className='text-white'>{activity.limitDate}</span></p>
                </div>
                <a href={activity.link} target='_blank' className='text-blue-700 text-xs underline cursor-pointer hover:text-orange-500'>{activity.link}</a>
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
