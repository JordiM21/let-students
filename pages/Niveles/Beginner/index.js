import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import image1 from '@/public/beginner-cover.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { AiFillCheckCircle } from 'react-icons/ai'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import { BsCircle } from 'react-icons/bs'
import { toast } from 'react-toastify';

export default function Beginner() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/Niveles"

    >
      Levels
    </Link>,
    <Typography
      key="3"
      color="text.primary">
      Beginner
    </Typography>,
  ];
  const router = useRouter()
  const [level, setLevel] = useState("")

  const [data, setData] = useState([])
  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [progress, setProgress] = useState("")


  const fetchPost = async () => {
    await getDocs(collection(db, "units"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const dataFound = newData.filter(item => item.level == "Beginner");
        setData(dataFound.sort((a, b) => a.number - b.number))
      })
  }
  const fetchUser = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.find(item => item.uid == authUid);
        console.log(userMatched)
        setLevel(userMatched.level);
        // if (level == "Beginner") {
        setProgress(userMatched.progressBeginner);
        // }
        // if (level == "Intermediate") {
        //   setProgress(userMatched.progressIntermediate);
        // }
        // if (level == "Advanced") {
        //   setProgress(userMatched.progressAdvanced);
        // }
      })
  }

  useEffect(() => {
    fetchPost()
    fetchUser()
  }, [])

  return (
    <div>
      <div className='max-w-3xl mx-auto bg-[var(--color3Shadow)]'>
        <Image src={image1} className='w-full h-48 md:h-72 object-cover' />
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <div className='mx-8 space-y-4'>
        <h3>Curso básico de inglés para los que están empezando.</h3>
        <p>El curso básico de inglés, está diseñado para los que están empezando. Al finalizar el curso, el estudiante tendrá una comprensión de los conceptos básicos de inglés y será capaz de formar construcciones y oraciones simples.</p>
        <div className='space-y-2'>
          {
            data.map((data, index) => (
              <>
                {
                  progress >= index && (
                    <div onClick={() => router.push(`/Niveles/${data.level}/${data.number}`)} className='hover:px-3 hover:opacity-80 transition-all 1s ease-in cursor-pointer flex justify-between items-center bg-gray-300 px-4 py-2 rounded-md'>
                      <div className='w-4/5'>
                        <small className='text-xs text-[var(--color3)] font-semibold'>UNIT {data.number}</small>
                        <p className='font-bold text-[var(--color2)]'>{data.title}</p>
                        <p className='text-gray-700 text-sm'>({data.titleSpanish})</p>
                      </div>
                      {
                        progress == index && (
                          <BsCircle size={24} fill='green' />
                        )
                      }
                      {
                        progress > index && (
                          <AiFillCheckCircle size={24} fill='green' />
                        )
                      }
                    </div>
                  )
                }
                {
                  progress < index && (
                    <div onClick={() => router.push(`/Niveles/${data.level}/${data.number}`)} className='opacity-60 transition-all 1s ease-in cursor-pointer flex justify-between items-center bg-gray-300 px-4 py-2 rounded-md'>
                      <div className='w-4/5'>
                        <small className='text-xs text-[var(--color3)] font-semibold'>UNIT {data.number}</small>
                        <p className='font-bold text-[var(--color2)]'>{data.title}</p>
                        <p className='text-gray-700 text-sm'>({data.titleSpanish})</p>
                      </div>
                      <BsCircle size={24} fill='green' />
                    </div>
                  )
                }
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}
