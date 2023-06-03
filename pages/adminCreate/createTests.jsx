import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function createTests() {
  const { user, logout } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [allUnits, setAllUnits] = useState([])
  const [currentLevel, setCurrentLevel] = useState("Beginner")
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [op1, setOp1] = useState("")
  const [op2, setOp2] = useState("")
  const [op3, setOp3] = useState("")
  const [op4, setOp4] = useState("")
  const [unit, setUnit] = useState("")

  const router = useRouter()

  const fetchPost = async () => {
    await getDocs(collection(db, "questions"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const unitMatched = newData.filter(item => item.level == currentLevel);
        setAllUnits(unitMatched)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [currentLevel])

  const createUnit = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, "questions"), {
      question,
      answer,
      unit,
      options: [op1, op2, op3, op4],
      level: currentLevel,
    }).then(() => (
      toast.success("Question created succesfuly!"))
    )
    setTimeout(() => {
      router.reload()
    }, 2500)
  }

  return (
    <div className='mx-4 max-w-xl md:mx-auto mb-20'>
      <h1>Search Questions by Level</h1>
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
        <p>{allUnits.length} Questions for the level {currentLevel}</p>
      </div>
      {
        allUnits.map((unit) => (
          <div className='flex justify-between bg-slate-300 my-2 px-8 py-2'>
            <p>{unit.unit}</p>
            <p>{unit.question}</p>
          </div>
        ))
      }
      <div>
        <p className='text-3xl text-[var(--color2)] text-center'>Create Question on the level <span className='text-[var(--color3)]'>{currentLevel}</span></p>
        <form onSubmit={createUnit}>
          <div className='w-full flex justify-center'>
            <TextField id="filled-basic" label="In what unit you want to add this question?" variant="filled"
              value={unit}
              className='w-10/12'
              required
              type='number'
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
          <div className='my-4 flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between w-full md:justify-center md:gap-8'>
            <TextField id="filled-basic" label="Insert question" variant="filled"
              value={question}
              required
              type='text'
              onChange={(e) => setQuestion(e.target.value)}
            />
            <TextField id="filled-basic" label="Insert correct answer" variant="filled"
              value={answer}
              required
              type='text'
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <p className='text-center'>Insert options to the question:</p>
          <div className='space-y-2 md:space-y-0 flex flex-wrap justify-center items-center'>
            <TextField id="filled-basic" label="1st Option" variant="filled"
              value={op1}
              required
              type='text'
              onChange={(e) => setOp1(e.target.value)}
            />
            <TextField id="filled-basic" label="2st Option" variant="filled"
              value={op2}
              required
              type='text'
              onChange={(e) => setOp2(e.target.value)}
            />
            <TextField id="filled-basic" label="3st Option" variant="filled"
              value={op3}
              required
              type='text'
              onChange={(e) => setOp3(e.target.value)}
            />
            <TextField id="filled-basic" label="4st Option" variant="filled"
              value={op4}
              required
              type='text'
              onChange={(e) => setOp4(e.target.value)}
            />
          </div>
          <div className='w-full my-4 flex justify-center'>
            <button type='submit' className='bg-[var(--color3)] text-white font-bold w-64 py-2 rounded-md text-2xl mx-auto'>CREATE QUESTION </button>
          </div>
        </form>
      </div>
    </div>
  )
}
