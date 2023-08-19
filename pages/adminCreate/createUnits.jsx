import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function createUnits() {
  const [allUnits, setAllUnits] = useState([])
  const [currentLevel, setCurrentLevel] = useState("Beginner")
  const [title, setTitle] = useState("")
  const [titleSpanish, setTitleSpanish] = useState("")
  const router = useRouter()

  const fetchPost = async () => {
    await getDocs(collection(db, "units"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const unitMatched = newData.filter(item => item.level == currentLevel);
        setAllUnits(unitMatched.sort((a, b) => a.number - b.number))
      })
  }

  useEffect(() => {
    fetchPost();
  }, [currentLevel])

  const createUnit = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, "units"), {
      title,
      titleSpanish,
      number: allUnits.length + 1,
      level: currentLevel,
    }).then(() => (
      toast.success("Unit created succesfuly!"))
    )
    setTimeout(() => {
      router.reload()
    }, 2500)
  }

  return (
    <div className='mx-4 max-w-xl md:mx-auto mb-20'>
      <h1>Search Units by level</h1>
      <FormControl variant="filled" className='w-full'>
        <InputLabel id="demo-simple-select-filled-label">Search by Level</InputLabel>
        <Select
          required
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={currentLevel}
          onChange={(e) => setCurrentLevel(e.target.value)}
        >
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
      </FormControl>
      <div>
        <p>{allUnits.length} Units for the level {currentLevel}</p>
      </div>
      {
        allUnits.map((unit) => (
          <div className='flex justify-between bg-slate-300 my-2 px-8 py-2'>
            <p>{unit.number}</p>
            <p>{unit.title}</p>
          </div>
        ))
      }
      <div>
        <p className='text-3xl text-[var(--color2)] text-center'>Create Unit on the level <span className='text-[var(--color3)]'>{currentLevel}</span></p>
        <form onSubmit={createUnit}>
          <div className='my-4 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between w-full md:justify-center md:gap-8'>
            <TextField id="filled-basic" label="Insert title on English" variant="filled"
              value={title}
              required
              type='text'
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField id="filled-basic" label="Insert title on Spanish" variant="filled"
              value={titleSpanish}
              required
              type='text'
              onChange={(e) => setTitleSpanish(e.target.value)}
            />
          </div>
          <p>This unit is being created with the number {allUnits.length + 1}</p>
          <div className='w-full my-4 flex justify-center'>
            <button type='submit' className='bg-[var(--color3)] text-white font-bold w-64 py-2 rounded-md text-2xl mx-auto'>CREATE UNIT</button>
          </div>
        </form>
      </div>
    </div>
  )
}
