import LoadingScreen from '@/components/LoadingScreen';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Image from 'next/image'
import image1 from '@/public/advanced-cover.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import BackHeader from '@/components/BackHeader';
import { BsCircle } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import Link from 'next/link';
import withLevelAndLessonsData from '@/components/WithLevelData';
import withUserData from '@/components/WithUserData';

const Advanced = ({ levelData, userData }) => {
  if (!levelData) {
    return <LoadingScreen />;
  }

  const { level, progressAdvanced, role } = userData
  const [progress, setProgress] = useState(progressAdvanced)

  const [data, setData] = useState([])

  const router = useRouter()

  const filterAndSetData = () => {
    const dataFound = levelData.filter((item) => item.level === "Advanced");
    setData(dataFound.sort((a, b) => a.number - b.number));
  };

  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)

  useEffect(() => {
    filterAndSetData();
  }, [])


  return (
    <div className='bg-[var(--bluebg)] py-24'>
      {
        (level !== "Intermediate" && level !== "Advanced") &&
        (
          <LoadingScreen />
        )
      }
      <BackHeader largeTitle="Advanced" parentTitle="Back" />
      <div className='md:w-2/5 max-md:w-10/12 mx-8 my-4 md:fixed bg-[var(--bluebg)]'>
        <Image src={image1} className='w-full h-48 md:h-80 object-cover rounded-md' />
        <h3 className='text-2xl font-bold text-white'>Curso Avanzado de inglés para los que ya dominan la mayoría de conceptos de la lengua inglesa.</h3>
        <p className='text-[var(--lightBlue)] opacity-60'>El curso avanzado es para los que dominan ya la lengua y pueden hablar y tener conversaciones fluidas, en este modulo perfeccionaremos esas frases y oraciones. Al finalizar este curso, el estudiante será capaz de formular oraciones mucho más complejas y comunicarse en inglés con mayor confianza.</p>
      </div>
      <div className='md:ml-[46%] max-md:w-10/12 mx-auto md:w-1/2 space-y-4'>
        <div className='space-y-2'>
          {
            data.map((data, index) => (
              <>
                {
                  progress >= index && (
                    <Link href={{ pathname: `/Niveles/${data.level}/${data.number}` }} className='hover:px-3 hover:opacity-80 transition-all 1s ease-in cursor-pointer flex justify-between items-center bg-gray-300 px-4 py-2 rounded-md'>
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
                    </Link>
                  )
                }
                {
                  progress < index && role == "Student" && (
                    <div className='grayscale opacity-70 transition-all 1s ease-in cursor-pointer flex justify-between items-center bg-gray-300 px-4 py-2 rounded-md'>
                      <div className='w-4/5'>
                        <small className='text-xs text-[var(--color3)] font-semibold'>UNIT {data.number}</small>
                        <p className='font-bold text-[var(--color2)]'>{data.title}</p>
                        <p className='text-gray-700 text-sm'>({data.titleSpanish})</p>
                      </div>
                      <BsCircle size={24} fill='green' />
                    </div>
                  )
                }
                {
                  progress < index && role == "Admin" && (
                    <Link href={{ pathname: `/Niveles/${data.level}/${data.number}` }} className='hover:px-3 hover:opacity-80 transition-all 1s ease-in cursor-pointer flex justify-between items-center bg-gray-300 px-4 py-2 rounded-md'>
                      <div className='w-4/5'>
                        <small className='text-xs text-[var(--color3)] font-semibold'>UNIT {data.number}</small>
                        <p className='font-bold text-[var(--color2)]'>{data.title}</p>
                        <p className='text-gray-700 text-sm'>({data.titleSpanish})</p>
                      </div>
                      <BsCircle size={24} fill='green' />
                    </Link>
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


export default withLevelAndLessonsData(withUserData(Advanced))