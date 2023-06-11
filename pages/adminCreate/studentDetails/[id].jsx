import YourFlag from '@/components/YourFlag'
import { db } from '@/config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'

export default function index() {

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

  useEffect(() => {
    fetchPost();
  }, [])
  console.log(userMatched)

  return (
    <div>
      <div className='flex bg-[var(--color2Shadow)] items-center gap-4 md:gap-8 px-4 py-2'>
        <MdArrowBackIosNew onClick={() => router.back()} size={40} className='active:-translate-y-1 transition-all 1s ease-in hover:opacity-80 hover:fill-white cursor-pointer bg-white rounded-full p-2 fill-[var(--color2Shadow)]' />
        <p className='text-2xl font-bold text-white'>Student Details: {userMatched.firstName}</p>
      </div>
      <div className='bg-[var(--color2)] max-w-lg mx-8 md:mx-auto mt-4 rounded-md shadow-sm shadow-black p-4'>
        <div className='flex justify-around items-center'>
          <p>{userMatched.email}</p>
          <YourFlag country={userMatched.country} />
        </div>
        <p className='text-center'>Current Student Level: <span className='font-bold'>{userMatched.level}</span></p>
        <p className='text-center font-bold text-white text-2xl'>Student's Progress by level:</p>
        <p className='text-[var(--color1)] opacity-80'><span className='font-bold'>Beginner:</span> {userMatched.progressBeginner}</p>
        <p className='text-[var(--color1)] opacity-80'><span className='font-bold'>Intermediate:</span> {userMatched.progressIntermediate}</p>
        <p className='text-[var(--color1)] opacity-80'><span className='font-bold'>Advanced:</span>: {userMatched.progressAdvanced}</p>
        <p>Plan: {userMatched.plan}</p>
        <p>Phone: {userMatched.phone}</p>
      </div>
    </div>
  )
}
