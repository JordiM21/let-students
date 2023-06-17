import BackHeader from '@/components/BackHeader';
import LoadingScreen from '@/components/LoadingScreen';
import Nota from '@/components/Nota';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import ReactPlayer from 'react-player';

export default function Immersive() {

  const [data, setData] = useState([])
  const [currentLevel, setCurrentLevel] = useState("all")
  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [role, setRole] = useState("")


  const fetchPost = async () => {
    await getDocs(collection(db, "Immersive"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        if (currentLevel == "all") {
          const dataFound = newData.filter(item => item.level != "");
          setData(dataFound.sort((a, b) => a.level - b.level))
        } else {
          const dataFound = newData.filter(item => item.level == currentLevel);
          setData(dataFound)
        }
      })
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.find(item => item.uid == authUid);
        setRole(userMatched.role)
      })
  }

  useEffect(() => {
    fetchPost()
  }, [currentLevel])

  const router = useRouter()

  const [question, setQuestion] = useState(false)


  return (
    <div className='bg-[var(--color2Shadow)] m-0 py-20'>
      {
        !data &&
        (
          <LoadingScreen />
        )
      }
      <BackHeader largeTitle={"Immersive Videos"} parentTitle={"Back"} />
      {
        role == "Admin" && (
          <div className='w-10/12 my-8 transition-all 1s ease-in hover:opacity-80 hover:scale-105 mx-auto max-w-md'>
            <button onClick={() => router.push("/adminCreate/createVideo")} className='text-white hover:opacity-80 font-bold w-full py-2 rounded-md bg-[var(--color3)]'>{role} Function: CREATE VIDEOS </button>
          </div>
        )
      }
      {/* <Nota text="Recuerda que los videos son necesarios para tu aprendizaje pero no es necesario que entiendas todo lo que dice en el video para aprender, siempre puedes volver a mirarlo de nuevo y aprender cada vez mas cosas" /> */}
      <div className='w-full flex justify-center px-4 mt-4 relative'>
        <FormControl variant="filled" className='w-10/12 md:max-w-md bg-gray-100 rounded-md'>
          <InputLabel id="demo-simple-select-filled-label">Search by Level</InputLabel>
          <Select
            className='bg-white'
            required
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={currentLevel}
            onChange={(e) => setCurrentLevel(e.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
        </FormControl>
        <div onClick={() => setQuestion(!question)} className='cursor-pointer absolute right-4 top-4 bg-slate-300 rounded-full'>
          <BsQuestionCircle className='w-6 h-6 ' />
        </div>
      </div>
      {
        question && (
          <div className='bg-gray-100 backdrop-blur-sm bg-opacity-70 p-6 shadow-gray-500 z-50 rounded-md shadow-lg max-w-[350px] absolute right-4'>
            <AiFillCloseCircle className='absolute top-2 cursor-pointer right-2 w-6 h-6' onClick={() => setQuestion(!question)} />
            <p>La parte preferida de LET Academy y de muchos estudiantes! <br /> En esta pagina aprenderas viendo peliculas, series, historias cortas, documentales, tips interesantes y mucho mas! <br />Te recordamos que no es fundamental entender todo lo que dicen en el video, lo importante es que escuches y relaciones con lo que ves, recuerda darles like para verlos mas tarde! </p>
          </div>
        )
      }
      <div className='md:flex md:mx-8 gap-4 flex-wrap space-y-8 py-8 md:space-y-0'>
        {
          data.map((video) => (
            <div onClick={() => router.push(`/immersiveActivities/${video.id}`)} className='shadow-blue-900 shadow-xl hover:opacity-70 transition-all 1s ease-in hover:scale-110 cursor-pointer w-[280px] mx-auto bg-[var(--blueDarkbg)] rounded-md relative'>
              <ReactPlayer
                width={"100%"}
                height={"150px"}
                className="mx-auto md:my-4 rounded-md"
                url={video.url}
                controls={true}
                light={true}
              />
              <div className={`absolute top-4 px-2 py-1 rounded-l-md font-bold right-0 ${video.level == 'Advanced' && 'bg-red-600'} ${video.level == 'Intermediate' && 'bg-orange-600'} ${video.level == 'Beginner' && 'bg-blue-600'}`}>
                <p className='text-white'>{video.level}</p>
              </div>
              <p className='text-white font-bold text-xl p-2'>{video.title}</p>
            </div>
          ))
        }
      </div>
    </div >
  )
}
