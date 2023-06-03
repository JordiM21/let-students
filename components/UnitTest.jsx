import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/AuthContext';


export default function UnitTest({ level, unit }) {
  const [data, setData] = useState([])
  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [progress, setProgress] = useState("")


  const fetchPost = async () => {
    await getDocs(collection(db, "questions"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const dataFound = newData.filter(item => item.level == level && item.unit == unit);
        setData(dataFound)
      })
  }
  const fetchUser = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.find(item => item.uid == authUid);
        setProgress(userMatched.progressLesson)
      })
  }

  useEffect(() => {
    fetchPost();
    fetchUser();
  }, [])

  const [res1, setRes1] = useState('');
  const [res2, setRes2] = useState('');
  const [res3, setRes3] = useState('');
  const [res4, setRes4] = useState('');
  const [res5, setRes5] = useState('');
  const [res6, setRes6] = useState('');
  const [res7, setRes7] = useState('');
  const [res8, setRes8] = useState('');


  const handleTest = (e) => {
    e.preventDefault()
    if (res1 != data[0]?.answer) {
      return toast.error("¡Ups! Algo esta mal, revisa la primera respuesta")
    }
    if (res2 != data[1]?.answer) {
      return toast.error("¡Ups! Algo esta mal, revisa la segunda respuesta")
    }
    if (res3 != data[2]?.answer) {
      return toast.error("¡Ups! Algo esta mal, revisa la tercera respuesta")
    }
    if (res4 != data[3]?.answer) {
      return toast.error("¡Ups! Algo esta mal, revisa la cuarta respuesta")
    }
    if (res5 != data[4]?.answer) {
      return toast.error("¡Ups! Algo esta mal, revisa la quinta respuesta")
    }
    if (res6 != data[5]?.answer) {
      return toast.error("¡Ups! Algo esta mal, revisa la sexta respuesta")
    }
    if (res7 != data[6]?.answer) {
      return toast.error("¡Ups! Algo esta mal, revisa la séptima respuesta")
    }
    if (res8 != data[7]?.answer) {
      return toast.error("¡Ups! Algo esta mal, revisa la octava respuesta")
    }
    toast.success("Nice job! All of your answers are correct.")
  }

  return (
    <div>
      <h3 className='font-bold text-[var(--color1)] text-3xl'>Test Unit <span className='text-[var(--color3)]'>{unit}</span></h3>
      <p>Completa los ejercicios para actualizar tus progresos</p>
      <form onSubmit={handleTest} className='py-8'>
        <FormLabel id="demo-controlled-radio-buttons-group">
          <span className='bg-sky-600 text-white font-bold px-2 py-1 rounded-full mr-2'>1</span>
          {data[0]?.question}
        </FormLabel>
        <RadioGroup
          required
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={res1}
          onChange={(e) => setRes1(e.target.value)}
        >
          {
            data[0]?.options.map((option) => (
              <FormControlLabel value={option} control={<Radio />} label={option} />
            ))
          }
        </RadioGroup>
        <FormLabel id="demo-controlled-radio-buttons-group">
          <span className='bg-sky-600 text-white font-bold px-2 py-1 rounded-full mr-2'>2</span>
          {data[1]?.question}</FormLabel>
        <RadioGroup
          required
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={res2}
          onChange={(e) => setRes2(e.target.value)}
        >
          {
            data[1]?.options.map((option) => (
              <FormControlLabel value={option} control={<Radio />} label={option} />
            ))
          }
        </RadioGroup>
        {
          data.length > 2 && (
            <>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <span className='bg-sky-600 text-white font-bold px-2 py-1 rounded-full mr-2'>3</span>
                {data[2]?.question}</FormLabel>
              <RadioGroup
                required
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={res3}
                onChange={(e) => setRes3(e.target.value)}
              >
                {
                  data[2]?.options.map((option) => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                  ))
                }
              </RadioGroup>
            </>
          )
        }
        {
          data.length > 3 && (
            <>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <span className='bg-sky-600 text-white font-bold px-2 py-1 rounded-full mr-2'>4</span>
                {data[3]?.question}</FormLabel>
              <RadioGroup
                required
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={res4}
                onChange={(e) => setRes4(e.target.value)}
              >
                {
                  data[3]?.options.map((option) => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                  ))
                }
              </RadioGroup>
            </>
          )
        }
        {
          data.length > 4 && (
            <>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <span className='bg-sky-600 text-white font-bold px-2 py-1 rounded-full mr-2'>5</span>
                {data[4]?.question}</FormLabel>
              <RadioGroup
                required
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={res5}
                onChange={(e) => setRes5(e.target.value)}
              >
                {
                  data[4]?.options.map((option) => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                  ))
                }
              </RadioGroup>
            </>
          )
        }
        {
          data.length > 5 && (
            <>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <span className='bg-sky-600 text-white font-bold px-2 py-1 rounded-full mr-2'>6</span>

                {data[5]?.question}</FormLabel>
              <RadioGroup
                required
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={res6}
                onChange={(e) => setRes6(e.target.value)}
              >
                {
                  data[5]?.options.map((option) => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                  ))
                }
              </RadioGroup>
            </>
          )
        }
        {
          data.length > 6 && (
            <>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <span className='bg-sky-600 text-white font-bold px-2 py-1 rounded-full mr-2'>7</span>

                {data[6]?.question}</FormLabel>
              <RadioGroup
                required
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={res7}
                onChange={(e) => setRes7(e.target.value)}
              >
                {
                  data[6]?.options.map((option) => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                  ))
                }
              </RadioGroup>
            </>
          )
        }
        {
          data.length > 7 && (
            <>
              <FormLabel id="demo-controlled-radio-buttons-group">
                <span className='bg-sky-600 text-white font-bold px-2 py-1 rounded-full mr-2'>8</span>

                {data[7]?.question}</FormLabel>
              <RadioGroup
                required
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={res8}
                onChange={(e) => setRes8(e.target.value)}
              >
                {
                  data[7]?.options.map((option) => (
                    <FormControlLabel value={option} control={<Radio />} label={option} />
                  ))
                }
              </RadioGroup>
            </>
          )
        }
        <p>
          progress: {progress}
        </p>
        <div className='flex w-full justify-center'>
          <button className='bg-[var(--color3)] w-10/12 py-3 my-4 text-white font-bold transition-all 1s ease-in hover:-translate-y-1 hover:shadow-xl rounded-md' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}