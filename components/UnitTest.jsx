import React, { useEffect, useState, useRef } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import UnitWithTroubleBtn from './UnitWithTroubleBtn';
import CtaAnimationPage from './CtaAnimationPage';
import trophy from '@/public/animations/trophy.json'


export default function UnitTest({ level, unit }) {
  const [data, setData] = useState([])
  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  const [userMatched, setUserMatched] = useState({})

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
        const userFound = newData.find(item => item.uid == authUid);
        setUserMatched(userFound)
        if (level == "Beginner") {
          setProgress(userMatched.progressBeginner)
        }
        if (level == "Intermediate") {
          setProgress(userMatched.progressIntermediate)
        }
        if (level == "Advanced") {
          setProgress(userMatched.progressAdvanced)
        }
      })
  }

  const [finished, setFinished] = useState(false)
  useEffect(() => {
    fetchPost();
    fetchUser();
  }, [progress, finished])


  const updateProgress = async (e) => {
    const nameRef = doc(db, "users", userMatched.id);
    if (level == "Beginner") {
      await updateDoc(nameRef, {
        progressBeginner: progress + 1,
      });
    }
    if (level == "Intermediate") {
      await updateDoc(nameRef, {
        progressIntermediate: progress + 1,
      });
    }
    if (level == "Advanced") {
      await updateDoc(nameRef, {
        progressAdvanced: progress + 1,
      });
    }
    setFinished(true)
  }

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
    updateProgress()
  }

  return (
    <div>
      <UnitWithTroubleBtn unit={unit} />
      {
        finished == true && (
          <CtaAnimationPage
            title={"Congratulations! You did it amazing!"}
            subTitle={`Completaste con éxito la unidad ${unit} del nivel ${level}, Sigue asi!`}
            animation={trophy}
            cta={"Go to the Next Lesson"}
            btn="router"
            link={`/Niveles/${level}/${unit + 1}`}
          />
        )
      }
      <h3 className='font-bold text-[var(--color1)] text-3xl'>Test Unit <span className='text-[var(--color3)]'>{unit}</span></h3>
      <p>Completa los ejercicios para actualizar tus progresos</p>
      <form onSubmit={handleTest} className='py-8'>
        <div className='mb-8'>
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
        </div>
        <div className='my-8'>
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
        </div>
        <div className='my-8'>
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
        </div>
        <div className='my-8'>
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
        </div>
        <div className='my-8'>
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
        </div>
        <div className='my-8'>
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
        </div>
        <div className='my-8'>
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
        </div>
        <div className='mt-8'>
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
        </div>
        <div className='flex w-full pb-10 justify-center'>
          {
            progress >= unit && (
              <div className='w-11/12'>
                <button disabled className='bg-green-500 w-full opacity-60 py-4 my-4 text-white font-bold transition-all 1s ease-in hover:shadow-xl rounded-full' type='submit'>Well Done!</button>
              </div>
            )
          }
          {
            progress < unit && (
              <button className='bg-[var(--color3)] w-10/12 py-4 my-4 text-white font-bold transition-all 1s ease-in hover:-translate-y-1 hover:shadow-xl rounded-full' type='submit'>Submit</button>
            )
          }
        </div>
      </form>
    </div>
  )
}
