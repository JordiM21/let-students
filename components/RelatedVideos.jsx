import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

export default function RelatedVideos({ relatedVideos, level }) {
  const router = useRouter()

  return (
    <div className='md:max-w-sm'>
      <div className={` py-1 mx-auto rounded-md max-w-sm ${level == 'Advanced' && 'bg-red-600'} ${level == 'Intermediate' && 'bg-orange-600'} ${level == 'Beginner' && 'bg-blue-600'}`}>
        <p className='text-white font-bold text-center'>Related content on the level {level}</p>
      </div>
      <div className='md:flex md:mx-4 max-w-lg gap-2 flex-wrap py-8 md:py-2 md:space-y-0'>
        {
          relatedVideos.map((video) => (
            <a href={`/immersiveActivities/${video.id}`}>
              <div className='my-4 hover:opacity-90 transition-all 1s ease-in hover:scale-105 cursor-pointer w-[280px] mx-auto bg-blue-950 rounded-md relative'>
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
            </a>
          ))
        }
      </div>
    </div>
  )
}
