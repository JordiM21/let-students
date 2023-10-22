import BackHeader from '@/components/BackHeader';
import LoadingScreen from '@/components/LoadingScreen';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle, AiFillHeart } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import withUserData from '@/components/WithUserData';
import WithImmersiveInfo from '@/components/WithImmersiveInfo';
import VideoCard from '@/components/VideoCard';
import { MdVideoLibrary } from 'react-icons/md';


const Immersive = ({
  userData,
  data,
  currentLevel,
  setCurrentLevel,
  question,
  setQuestion
}) => {
  if (!userData) {
    return <LoadingScreen />;
  }
  const { role } = userData

  const router = useRouter()

  return (
    <div className='bg-[var(--color2Shadow)] m-0 py-20'>
      {
        role != "Admin" && role != "Student" &&
        (
          <LoadingScreen />
        )
      }
      <BackHeader largeTitle={"Immersive Videos"} parentTitle={"Back"} />
      <div className='w-[200px] ml-10'>
        <button onClick={() => router.push("/Progress")} className='group flex bg-green-500 hover:shadow-gray-900 hover:shadow-md hover:bg-white w-full px-2 items-center justify-center gap-2 py-2 rounded-full'>
          <AiFillHeart className='text-2xl group-hover:-rotate-12 group-hover:scale-110' />
          <p>Your Liked Videos</p>
        </button>
      </div>
      {
        role == "Admin" && (
          <div className='flex justify-center'>
            <button onClick={() => router.push("/adminCreate/createVideo")} className="group cursor-pointer lg:cursor-pointer hover:bg-opacity-20 font-bold font-sans transition-all duration-200 px-5 py-2 rounded-full bg-[var(--color3)] border border-transparent flex items-center text-base active:scale-95">
              <span className="mr-2">Admin Feature: Add Video</span>
              <svg
                className="w-9 h-9 transform transition-transform ease-in-out group-hover:translate-x-2"
                viewBox="0 0 74 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                <path
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
        )
      }
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
      <div className='sm:flex md:mx-8 gap-4 flex-wrap space-y-8 py-8 sm:space-y-0'>
        {
          data.map((video) => (
            <VideoCard
              id={video.id}
              url={video.url}
              title={video.title}
              level={video.level}
            />
          ))
        }
      </div>
    </div >
  )
}

export default WithImmersiveInfo(withUserData(Immersive))
