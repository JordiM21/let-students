import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import flipIcon from '@/public/flipIcon.png'
import kahootIcon from '@/public/kahootIcon.png'
import padletIcon from '@/public/padletIcon.png'
import ESLIcon from '@/public/ESLIcon.png'
import linguaIcon from '@/public/linguaIcon.png'
import youGlishIcon from '@/public/youGlishIcon.png'
import Link from 'next/link'
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase'

export default function ExternalApps({ role, appNotif, setAppNotif, userId }) {

  const [flip, setFlip] = useState(false)
  const [kahoot, setKahoot] = useState(false)
  const [padlet, setPadlet] = useState(false)

  useEffect(() => {
    if (role == "Student") {
      setFlip(appNotif.includes('Flip'))
      setKahoot(appNotif.includes('Kahoot'))
      setPadlet(appNotif.includes('Padlet'))
    }
  }, [appNotif])

  const handleNotificationClick = async (appName) => {
    if (role == "admin") { return }
    const updatedAppNotif = appNotif.filter(app => app !== appName);
    setAppNotif(updatedAppNotif);
    await updateAppNotifInFirestore(updatedAppNotif);
  }

  const updateAppNotifInFirestore = async (updatedAppNotif) => {
    if (role == "admin") { return }
    const userDocRef = doc(db, 'users', userId);
    await updateDoc(userDocRef, { appNotif: updatedAppNotif });
  }

  return (
    <div className='md:flex justify-center'>
      <div className='flex justify-around my-6 md:w-[500px]'>
        <Link href="https://flip.com/" target='_blank' onClick={() => handleNotificationClick("Flip")}>
          <div className={`rounded-xl relative`}>
            {
              flip && (
                <div class="ping"></div>
              )
            }
            <Image src={flipIcon} className='w-[80px] rounded-xl active:opacity-80 active:scale-95 hover:scale-110 cursor-pointer hover:-rotate-2 shadow-xl shadow-gray-800' />
          </div>
          <p className='text-center text-gray-300'>Flip</p>
        </Link>
        <Link href="https://kahoot.com/" target='_blank' onClick={() => handleNotificationClick("Kahoot")}>
          <div className={`rounded-xl relative`}>
            {
              kahoot && (
                <div class="ping"></div>
              )
            }
            <Image src={kahootIcon} className='w-[80px] rounded-xl active:opacity-80 active:scale-95  hover:scale-110 cursor-pointer hover:rotate-1 shadow-xl shadow-gray-800' />
          </div>
          <p className='text-center text-gray-300'>Kahoot</p>
        </Link>
        <Link href="https://padlet.com/dashboard" target='_blank' onClick={() => handleNotificationClick("Padlet")}>
          <div className={`rounded-xl relative`}>
            {
              padlet && (
                <div class="ping"></div>
              )
            }
            <Image src={padletIcon} className='w-[80px] rounded-xl active:opacity-80 active:scale-95  bg-gray-200 hover:scale-110 cursor-pointer shadow-xl shadow-gray-800 hover:rotate-2' />
          </div>
          <p className='text-center text-gray-300'>Padlet</p>
        </Link>
      </div>
      {
        role === "admin" && (
          <>
            <div className='flex justify-around my-6 md:w-[500px]'>
              <Link href="https://www.esl-lab.com/easy/" target='_blank'>
                <div>
                  <Image src={ESLIcon} className='w-[80px] h-[80px] object-cover rounded-xl hover:scale-110 cursor-pointer hover:-rotate-2 shadow-xl shadow-gray-800' />
                </div>
                <p className='text-center text-gray-300'>ESL Lab</p>
              </Link>
              <Link href="https://lingua.com/english/reading/" target='_blank'>
                <div>
                  <Image src={linguaIcon} className='w-[80px] h-[80px] object-contain bg-gray-200 rounded-xl hover:scale-110 cursor-pointer hover:rotate-1 shadow-xl shadow-gray-800' />
                </div>
                <p className='text-center text-gray-300'>Lingua</p>
              </Link>
              <Link href="https://it.youglish.com/" target='_blank'>
                <div>
                  <Image src={youGlishIcon} className='w-[80px] rounded-xl bg-gray-200 hover:scale-110 cursor-pointer shadow-xl shadow-gray-800 hover:rotate-2' />
                </div>
                <p className='text-center text-gray-300'>YouGlish</p>
              </Link>
            </div>
          </>
        )
      }
    </div>
  )
}
