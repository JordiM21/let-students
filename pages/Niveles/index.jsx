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
import { BsQuestionCircle } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'

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
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  const [question, setQuestion] = useState(false)


  return (
    <div className='bg-[var(--bluebg)] min-h-screen max-md:pb-28'>
      {
        role != "Admin" && role != "Student" &&
        (
          <LoadingScreen />
        )
      }
      {
        role == "Admin" && (
          <div className='w-full flex justify-around py-4'>
            <button onClick={() => router.push("/adminCreate/createUnits")} className='bg-[var(--color2)] text-white font-bold text-xl py-2 px-4 rounded-md hover:opacity-75'>
              Create Units
            </button>
            <button onClick={() => router.push("/adminCreate/createTests")} className='bg-[var(--color4)] text-white font-bold text-xl py-2 px-4 rounded-md hover:opacity-75'>
              Create Tests
            </button>
          </div>
        )
      }
      {
        role == "Student" && (
          <div className='flex items-center justify-center gap-2'>
            <h1 className='text-center text-3xl font-semibold py-5 text-white'>¡Comienza a aprender ahora!</h1>
            <div onClick={() => setQuestion(!question)} className='bg-gray-200 rounded-full cursor-pointer'>
              <BsQuestionCircle className="w-5 h-5" />
            </div>
          </div>
        )
      }
      {
        question && (
          <div className='bg-gray-200 backdrop-blur-sm bg-opacity-80 p-6 shadow-gray-500 z-50 rounded-md shadow-lg max-w-[250px] absolute right-0'>
            <AiFillCloseCircle className='absolute top-2 cursor-pointer right-2 w-6 h-6' onClick={() => setQuestion(!question)} />
            <p>Recuerda seguir tu plan de estudios y no atrasarte ni adelantarte mucho, esto es indispensable para tu aprendizaje!. <br /> Al final de cada Unit tienes un test donde verificamos tus conocimientos. <br /> al hacer el test se actualiza tu progreso y se notifica a tu profesor</p>
          </div>
        )
      }
      {
        level === "Beginner" && (
          <div className='space-y-4 md:space-y-0 md:flex md:py-8 justify-center items-center'>
            <div onClick={() => router.push("/Niveles/Beginner")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image1} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <div className='bg-gray-400 bg-opacity-80 backdrop-blur-lg absolute w-full h-full top-0 right-0 z-20'></div>
              <div className='absolute z-30 top-32 font-bold right-0 w-full bg-white text-center text-2xl bg-opacity-60 py-4'>Nivel no disponible</div>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image2} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <div className='bg-gray-400 bg-opacity-80 backdrop-blur-lg absolute w-full h-full top-0 right-0 z-20'></div>
              <div className='absolute z-30 top-32 font-bold right-0 w-full bg-white text-center text-2xl bg-opacity-60 py-4'>Nivel no disponible</div>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image3} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
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
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div onClick={() => router.push("/Niveles/Intermediate")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image2} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <div className='bg-gray-400 bg-opacity-80 backdrop-blur-lg absolute w-full h-full top-0 right-0 z-20'></div>
              <div className='absolute z-30 top-32 font-bold right-0 w-full bg-white text-center text-2xl bg-opacity-60 py-4'>Nivel no disponible</div>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image3} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
          </div>
        )
      }
      {
        level === "Advanced" && (
          <div className='space-y-4 md:space-y-0 md:flex md:px-8 md:gap-4 justify-center items-center'>
            <div onClick={() => router.push("/Niveles/Beginner")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image1} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div onClick={() => router.push("/Niveles/Intermediate")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image2} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
            <div onClick={() => router.push("/Niveles/Advanced")} className='group rounded-md relative max-w-sm h-72 md:h-full mx-auto bg-red-200 overflow-hidden transition-all .1s ease-in cursor-pointer'>
              <p className='bg-sky-200 absolute z-10 -top-16 transition-all .2s backdrop-blur-md font-semibold px-4 bg-opacity-30 ease-in group-hover:top-0 right-0'>Pie de foto colocado en cada nivel del curso para dar una pequeña información</p>
              <Image src={image3} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
              <p className='bg-gradient-to-t text-white from-[var(--bluebg)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Poquisima info aca solo para aclarar el objetivo</p>
            </div>
          </div>
        )
      }

    </div>
  )
}
