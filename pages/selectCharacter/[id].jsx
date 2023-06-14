import { db } from '@/config/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { InputLabel, MenuItem, Select } from '@mui/material'
import { characters } from '@/models/Characters'
import { toast } from 'react-toastify'
import YourProfile from '@/components/YourProfile'
import BackHeader from '@/components/BackHeader'
import { useSpringCarousel } from 'react-spring-carousel';

export default function selectCharacter() {
  const carouselRef = useRef(null);


  const router = useRouter()
  const menuRef = useRef(null);
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
      router.reload()
    }, 1500)
  }

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    slideType: 'fluid',
    withLoop: false,
    freeScroll: true,
    enableFreeScrollDrag: true,
    items: characters.map((char) => ({
      id: char.value,
      renderItem: (
        <div key={char.value} className='w-[170px] relative'>
          <div className='h-[150px] w-[150px] absolute opacity-0'></div>
          <Image src={char.name} alt={`Character ${char.value}`} className='w-[150px]  h-[150px] object-cover rounded-lg' />
          <button onClick={() => updateSelect(char.value)} className={`active:scale-95 border-2 rounded-full py-2 w-[150px] my-2 font-bold ${userMatched.profileImg == char.value ? "bg-black text-white border-white" : "border-black text-black bg-white hover:bg-black hover:text-white"}`}>{userMatched.profileImg == char.value ? "Selected" : "Select"}</button>
        </div>
      ),
    })),
    // Customize other options as needed
  });

  return (
    <div className='px-8 pt-20 h-screen bg-[var(--color2Shadow)]'>
      <BackHeader parentTitle={"My Profile"} largeTitle={"Change Character"} />
      <div className='flex justify-center'>
        <YourProfile char={userMatched.profileImg} />
      </div>
      <div className='flex mt-4 gap-2'>
        <div className='w-full'>
          <div>
            <div className='flex justify-between'>
              <button onClick={slideToPrevItem}>Prev item</button>
              <button onClick={slideToNextItem}>Next item</button>
            </div>
            <div ref={carouselRef}>{carouselFragment}</div>
          </div>
          {/* <InputLabel id="demo-simple-select-filled-label">Select a New Character</InputLabel>
          <Select
            className='w-full flex justify-center items-center flex-wrap bg-opacity-80 gap-2'
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={selectedCharacter}
            onChange={(e) => setSelectedCharacter(e.target.value)}
          >
            <MenuItem value={selectedCharacter}>
              <em>None</em>
            </MenuItem>
            {
              characters.map((char) => (
                <MenuItem className='mx-auto hover:bg-red-200' value={char.value}>
                  <Image src={char.name} className='rounded-full object-cover h-28 w-28' />
                </MenuItem>
              ))
            }
          </Select> */}
        </div>
        {/* <div className='bg-[var(--color2)] py-2 mt-6 rounded-full px-4 flex justify-center max-h-14 items-center transition-all 1s ease-in shadow-md hover:opacity-80 hover cursor-pointer hover:shadow-xl active:scale-95 '>
          <button onClick={updateSelect} className='text-white'>Select</button>
        </div> */}
      </div>
    </div >
  )
}
