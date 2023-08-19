import { db } from '@/config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function createUnits() {
  const [allUnits, setAllUnits] = useState([])
  const [textEng, setTextEng] = useState("")
  const [textSpa, setTextSpa] = useState("")
  const [description, setDescription] = useState("")
  const [level, setLevel] = useState("Basics")
  const [url, setUrl] = useState("")

  const router = useRouter()

  const fetchPost = async () => {
    await getDocs(collection(db, "wordsGame"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const unitMatched = newData.filter(item => item.level == level);
        setAllUnits(unitMatched)//unitMatched.sort((a, b) => a.number - b.number)
      })
  }
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    fetchPost();
  }, [level, update])


  const createUnit = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, "wordsGame"), {
      textEng,
      textSpa,
      level,
      description,
      url,
    }).then(() => {
      toast.success("Video added succesfuly!")
      setUpdate(!update)
      setTextEng("")
      setTextSpa("")
      setDescription("")
      setLevel("")
      setUrl("")
    }
    )
  }

  return (
    <div className='mx-4 max-w-xl md:mx-auto mb-20'>
      <h1>Search word Games by level</h1>
      <FormControl variant="filled" className='w-full'>
        <InputLabel id="demo-simple-select-filled-label">Search by Level</InputLabel>
        <Select
          required
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <MenuItem value="Basics">Basics</MenuItem>
          <MenuItem value="veryBeginner">veryBeginner</MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="upperBeginner">upper Beginner</MenuItem>
          <MenuItem value="bronzeIntermediate">bronze Intermediate</MenuItem>
          <MenuItem value="silverIntermediate">silver Intermediate</MenuItem>
          <MenuItem value="goldIntermediate">gold Intermediate</MenuItem>
          <MenuItem value="upperIntermediate">upper Intermediate</MenuItem>
          <MenuItem value="earlyAdvanced">early Advanced</MenuItem>
          <MenuItem value="Advanced1">Advanced 1</MenuItem>
          <MenuItem value="Advanced2">Advanced 2</MenuItem>
          <MenuItem value="Advanced3">Advanced 3</MenuItem>
          <MenuItem value="upperAdvanced">Upper Advanced</MenuItem>
          <MenuItem value="pro">pro</MenuItem>
          <MenuItem value="master">master</MenuItem>
          <MenuItem value="champion">pro</MenuItem>
        </Select>
      </FormControl>
      <div>
        <p>{allUnits.length} Units for the level {level}</p>
      </div>
      {
        allUnits.map((unit) => (
          <div className='flex justify-between bg-slate-300 my-2 px-8 py-2'>
            <p>{unit.textEng}</p>
            <p>{unit.textSpa}</p>
          </div>
        ))
      }
      <div>
        <p className='text-3xl text-[var(--color2)] text-center'>Create Video on the level <span className='text-[var(--color3)]'>{level}</span></p>
        <form onSubmit={createUnit}>
          <div className='my-4 flex flex-col space-y-4 md:space-y-0 justify-between w-full md:justify-center md:gap-8'>
            <TextField id="filled-basic" label="Insert title on English" variant="filled"
              value={textEng}
              required
              type='text'
              onChange={(e) => setTextEng(e.target.value)}
            />
            <TextField id="filled-basic" label="Insert title on Spanish" variant="filled"
              value={textSpa}
              required
              type='text'
              onChange={(e) => setTextSpa(e.target.value)}
            />
            <TextField id="filled-basic" label="Insert url with start and end time" variant="filled"
              value={url}
              required
              type='text'
              onChange={(e) => setUrl(e.target.value)}
            />
            <TextField id="filled-basic" label="Insert Description" variant="filled"
              value={description}
              multiline
              rows={4}
              required
              type='text'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='w-full my-4 flex justify-center'>
            <button type='submit' className='bg-[var(--color3)] text-white font-bold w-64 py-2 rounded-md text-2xl mx-auto'>ADD VIDEO</button>
          </div>
        </form>
      </div>
    </div>
  )
}
