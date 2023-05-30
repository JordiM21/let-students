import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import image1 from '@/public/beginner-cover.png'
import image2 from '@/public/intermediate-cover.png'
import image3 from '@/public/advanced-cover.png'
import { useAuth } from '@/context/AuthContext'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'
import LoadingScreen from '@/components/LoadingScreen'
import { useRouter } from 'next/router'

export default function Niveles() {

  const router = useRouter()

  const [level, setLevel] = useState("")
  const [role, setRole] = useState("")
  const [plan, setPlan] = useState("")

  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.filter(item => item.uid == authUid);
        setLevel(userMatched[0].level);
        setRole(userMatched[0].role);
        setPlan(userMatched[0].plan)
        console.log(userMatched)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])



  return (
    <div className='bg-[var(--color3Shadow)]'>
      {
        !level &&
        (
          <LoadingScreen />
        )
      }
      <h1 className='text-center text-3xl font-semibold py-5 text-white'>¡Comienza a aprender ahora!</h1>
      {
        level === "Beginner" && (
          <div className='space-y-4 md:space-y-0 md:flex md:py-8 justify-center items-center'>
            <div onClick={() => router.push("/Niveles/Beginner")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image1} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <div className='bg-gray-400 bg-opacity-80 backdrop-blur-lg absolute w-full h-full top-0 right-0 z-40'></div>
              <div className='absolute z-50 top-32 font-bold right-0 w-full bg-white text-center text-2xl bg-opacity-60 py-4'>Nivel no disponible</div>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image2} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <div className='bg-gray-400 bg-opacity-80 backdrop-blur-lg absolute w-full h-full top-0 right-0 z-40'></div>
              <div className='absolute z-50 top-32 font-bold right-0 w-full bg-white text-center text-2xl bg-opacity-60 py-4'>Nivel no disponible</div>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image3} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
          </div>
        )
      }
      {
        level === "Intermediate" && (
          <div className='space-y-4 md:space-y-0 md:flex md:py-8 justify-center items-center'>
            <div onClick={() => router.push("/Niveles/Beginner")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image1} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div onClick={() => router.push("/Niveles/Intermediate")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image2} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <div className='bg-gray-400 bg-opacity-80 backdrop-blur-lg absolute w-full h-full top-0 right-0 z-40'></div>
              <div className='absolute z-50 top-32 font-bold right-0 w-full bg-white text-center text-2xl bg-opacity-60 py-4'>Nivel no disponible</div>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image3} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
          </div>
        )
      }
      {
        level === "Advanced" && (
          <div className='space-y-4 md:space-y-0 md:flex md:py-8 justify-center items-center'>
            <div onClick={() => router.push("/Niveles/Beginner")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image1} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div onClick={() => router.push("/Niveles/Intermediate")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image2} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div onClick={() => router.push("/Niveles/Advanced")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image3} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
          </div>
        )
      }

    </div>
  )
}
