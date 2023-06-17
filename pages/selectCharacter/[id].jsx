import { db } from '@/config/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { characters } from '@/models/Characters'
import { toast } from 'react-toastify'
import YourProfile from '@/components/YourProfile'
import BackHeader from '@/components/BackHeader'
import { useSpringCarousel } from 'react-spring-carousel';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'
import LoadingScreen from '@/components/LoadingScreen'

export default function selectCharacter() {
  const carouselRef = useRef(null);


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

  const updateSelect = async (e) => {
    const nameRef = doc(db, "users", userMatched.id);
    await updateDoc(nameRef, {
      profileImg: e,
    }).then(() => toast.success("Character changed succesfully!"))
    setTimeout(() => {
      router.back()
    }, 1000)
  }

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    slideType: 'fluid',
    // slideAmount: 350,
    freeScroll: true,
    enableFreeScrollDrag: true,
    items: characters.map((char) => ({
      id: char.value,
      renderItem: (
        <div key={char.value} className='w-[170px] relative'>
          <div className='h-[150px] w-[150px] absolute opacity-0'></div>
          <Image src={char.name} alt={`Character ${char.value}`} className='w-[150px]  h-[150px] object-cover rounded-lg' />
          <button onClick={() => updateSelect(char.value)} className={`active:scale-90 border-2 rounded-full py-2 w-[150px] my-2 font-bold ${userMatched?.profileImg == char.value ? "bg-black text-white border-white" : "border-black text-black bg-white hover:bg-black hover:text-white"}`}>{userMatched?.profileImg == char.value ? "Selected" : "Select"}</button>
        </div>
      ),
    })),
    // Customize other options as needed
  });

  return (
    <div className='px-8 pt-20 h-screen bg-[var(--color2Shadow)]'>
      {
        !userMatched.profileImg &&
        (
          <LoadingScreen />
        )
      }
      <BackHeader parentTitle={"My Profile"} largeTitle={"Change Character"} />
      <div className='flex justify-center'>
        <YourProfile char={userMatched?.profileImg} />
      </div>
      <div className='flex mt-4 gap-2'>
        <div className='w-full'>
          <div>
            <div className='flex justify-between relative'>
              <button className='absolute z-10 top-0 h-[150px] -left-5 bg-black hover:bg-slate-950 rounded-l-lg' onClick={slideToPrevItem}><ChevronLeftRounded className='stroke-white text-lg' /></button>
              <button className='absolute z-10 top-0 h-[150px] -right-5 bg-black hover:bg-slate-950 rounded-r-lg' onClick={slideToNextItem}><ChevronRightRounded className='stroke-white text-lg' /></button>
            </div>
            <div ref={carouselRef}>{carouselFragment}</div>
          </div>
        </div>
      </div>
    </div >
  )
}
