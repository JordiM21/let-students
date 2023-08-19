import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { MdReplay } from 'react-icons/md';
import ReactPlayer from 'react-player'
import LoadingScreen from './LoadingScreen';

export default function VideoPlayer({ url }) {

  const [isFinished, setIsFinished] = useState(false);
  const [key, setKey] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    setIsFinished(false);
    setKey(key + 1);
  }, [url]);

  const handleReset = () => {
    setIsFinished(false);
    setKey(key + 1);
  };

  const showAlert = () => {
    setIsFinished(true);
  };
  const [isPlaying, setIsPlaying] = useState(true);

  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  return (
    <div className='mb-2'>
      {isVideoReady ? null : (
        <div className="absolute inset-0 z-50 bg-black flex items-center justify-center opacity-100">
          <LoadingScreen />
        </div>
      )}
      <div className='h-[237px] md:h-[332px] w-full mx-auto'>
        <div onClick={handleReset} className={`group bg-[var(--color2Shadow)] max-w-xl cursor-pointer flex mx-auto justify-center items-center h-[237px] md:h-[332px] w-11/12 absolute ${isFinished ? "opacity-100" : "opacity-0"}`}>
          <div className='bg-white p-8 rounded-full'>
            <MdReplay className='fill-sky-600 group-hover:-rotate-180 group-hover:scale-125' size={48} />
          </div>
        </div>
        <ReactPlayer
          ref={playerRef}
          key={key}
          width={"100%"}
          height={"100%"}
          className="bg-[var(--color2)] max-w-xl rounded-md border-[var(--color2)]"
          url={url}
          muted={false}
          autoplay={true}
          loop={false}
          playing={isPlaying}
          onEnded={showAlert}
          light={false}
          onReady={handleVideoReady}
          config={{
            youtube: {
              playerVars: { showinfo: -1 }
            }
          }}
        />
      </div>
    </div>
  )
}
