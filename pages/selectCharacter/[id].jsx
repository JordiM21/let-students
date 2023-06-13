import { db } from '@/config/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { InputLabel, MenuItem, Select } from '@mui/material'
import { characters } from '@/models/Characters'
import { toast } from 'react-toastify'
import YourProfile from '@/components/YourProfile'
import BackHeader from '@/components/BackHeader'

export default function selectCharacter() {
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
  const [selectedCharacter, setSelectedCharacter] = useState("")

  useEffect(() => {
    fetchPost();
  }, [])

  const updateSelect = async (e) => {
    const nameRef = doc(db, "users", userMatched.id);
    if (selectedCharacter != "") {
      await updateDoc(nameRef, {
        profileImg: selectedCharacter,
      }).then(() => toast.success("Character changed succesfully!"))
      setTimeout(() => {
        router.back()
      }, 1500)
    } else {
      toast.error("You haven't selected a character!")
    }
  }

  return (
    <div className='px-8 pt-24 h-screen bg-[var(--color2Shadow)]'>
      <BackHeader parentTitle={"My Profile"} largeTitle={"Change Character"} />
      <div className='flex justify-center'>
        <YourProfile char={userMatched.profileImg} />
      </div>

      <div className='flex mt-4 gap-2'>
        <div className='w-full'>
          <InputLabel id="demo-simple-select-filled-label">Select a New Character</InputLabel>
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
          </Select>
        </div>
        <div className='bg-[var(--color2)] py-2 mt-6 rounded-full px-4 flex justify-center max-h-14 items-center transition-all 1s ease-in shadow-md hover:opacity-80 hover cursor-pointer hover:shadow-xl active:scale-95 '>
          <button onClick={updateSelect} className='text-white'>Select</button>
        </div>
      </div>
    </div>
  )
}
