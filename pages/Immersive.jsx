import { db } from '@/config/firebase';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

export default function Immersive() {

  const [data, setData] = useState([])
  const [currentLevel, setCurrentLevel] = useState("all")

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
  }

  useEffect(() => {
    fetchPost()
  }, [currentLevel])

  const router = useRouter()

  return (
    <div><h1>Immersive page</h1>
      <FormControl variant="filled" className='w-full'>
        <InputLabel id="demo-simple-select-filled-label">Search by Level</InputLabel>
        <Select
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
      <div className='md:flex md:mx-8 gap-4 flex-wrap space-y-8 py-8 md:space-y-0'>
        {
          data.map((video) => (
            <div onClick={() => router.push(`/immersiveActivities/${video.id}`)} className='hover:opacity-70 transition-all 1s ease-in hover:scale-110 cursor-pointer w-[280px] mx-auto bg-blue-950 rounded-md relative'>
              <ReactPlayer
                width={"100%"}
                height={"150px"}
                className="mx-auto md:my-4 rounded-md"
                url={video.url}
                controls={false}
                light={true}
              />
              <div className={`absolute top-4 px-1 rounded-l-md font-bold text-white right-0 ${video.level == 'Advanced' && 'bg-red-600'} ${video.level == 'Intermediate' && 'bg-orange-600'} ${video.level == 'Beginner' && 'bg-blue-600'}`}>
                <p>{video.level}</p>
              </div>
              <p className='text-white font-bold text-xl p-2'>{video.title}</p>
            </div>
          ))
        }
      </div>
    </div >
  )
}
