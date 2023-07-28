import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import VideoCard from './VideoCard';

export default function RelatedVideos({ relatedVideos, level }) {
  const router = useRouter()

  return (
    <div className='md:max-w-sm'>
      <div className={` py-1 mx-auto rounded-md w-[310px] ${level == 'Advanced' && 'bg-red-600'} ${level == 'Intermediate' && 'bg-orange-600'} ${level == 'Beginner' && 'bg-blue-600'}`}>
        <p className='text-white font-bold text-center'>Similar on the level {level}</p>
      </div>
      <div className='md:flex md:mx-14 max-w-lg gap-2 space-y-8 flex-wrap py-8 md:py-2'>
        {
          relatedVideos.map((video) => (
            <VideoCard
              id={video.id}
              url={video.url}
              title={video.title}
              level={video.level}
            />
          ))
        }
      </div>
    </div>
  )
}
