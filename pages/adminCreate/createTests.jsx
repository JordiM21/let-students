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
  const [unit, setUnit] = useState(1)

  const router = useRouter()

  const fetchPost = async () => {
    await getDocs(collection(db, "questions"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const unitMatched = newData.filter(item => item.level == currentLevel && item.unit == unit);
        setAllUnits(unitMatched)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [currentLevel, unit])

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
    setOp1("")
    setOp2("")
    setOp3("")
    setOp4("")
    setAnswer("")
    setQuestion("")
  }

  return (
    <div className='mx-4 max-w-xl md:mx-auto mb-28'>
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
        <p>{allUnits.length} Questions for the level {currentLevel} and unit {unit}</p>
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
          <FormControl variant="filled" className='w-full'>
            <InputLabel id="demo-simple-select-filled-label">Select the unit/lesson of your question</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="13">13</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="19">19</MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="21">21</MenuItem>
              <MenuItem value="22">22</MenuItem>
              <MenuItem value="23">23</MenuItem>
              <MenuItem value="24">24</MenuItem>
              <MenuItem value="25">25</MenuItem>
            </Select>
          </FormControl>
          <div className='my-4 flex flex-col space-y-4 md:space-y-0 justify-between w-full md:justify-center md:gap-8'>
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
            <p className='text-center'>Insert options to the question:</p>
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
