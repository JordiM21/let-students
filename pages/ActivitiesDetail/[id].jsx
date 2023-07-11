import BackHeader from '@/components/BackHeader'
import YourProfile from '@/components/YourProfile'
import { db } from '@/config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillCheckCircle, AiFillInfoCircle } from 'react-icons/ai'

export default function ActivitiesDetail() {
  const router = useRouter()
  const id = router.query.id
  const [userMatched, setUserMatched] = useState({})
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatch = newData.find(item => item.id == id);
        setUserMatched(userMatch)
      })
  }
  console.log(userMatched)

  useEffect(() => {
    fetchPost();
  }, [])
  return (
    <div className='bg-[var(--bluebg)] pb-20 h-full min-h-screen'>
      <BackHeader largeTitle={userMatched.firstName} parentTitle={"Back"} />
      <div className='mx-8 pt-20 max-w-lg md:mx-auto'>
        <div className='bg-black rounded-lg p-4 mb-8 flex items-center justify-around'>
          <YourProfile char={userMatched.profileImg} size={"small"} />
          <p className='text-xl text-white'>{userMatched.firstName} {userMatched.lastName}</p>
        </div>
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
              <div className='bg-black mb-4 hover:scale-105 cursor-pointer rounded-xl py-2 px-4 relative'>
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
        {id}
      </div>
    </div>
  )
}
