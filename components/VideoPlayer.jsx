import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { MdFavoriteBorder, MdForward10, MdReplay, MdReplay10 } from 'react-icons/md';
import ReactPlayer from 'react-player'

export default function VideoPlayer({ url }) {


  const [isFinished, setIsFinished] = useState(false);
  const [key, setKey] = useState(0);
  const playerRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);

  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10, 'seconds');
  };

  const handleBackward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10, 'seconds');
  };

  useEffect(() => {
    setIsFinished(false);
    setKey(key + 1);
  }, []);

  const handleReset = () => {
    setIsFinished(false);
    setKey(key + 1);
  };

  const showAlert = () => {
    setIsFinished(true);
  };
  const [isPlaying, setIsPlaying] = useState(true);

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleVideoDuration = (duration) => {
    setVideoDuration(duration);
  };

  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  return (
    <div className='mb-14'>
      {isVideoReady ? null : (
        <div className="absolute inset-0 flex items-center justify-center bg-black opacity-100">
          <span className="text-white text-xl animate-pulse">Estamos preparando tu video...</span>
        </div>
      )}
      <div className='h-[237px] md:h-[332px]'>
        <div onClick={() => setIsPlaying(!isPlaying)} className={`bg-green-400 max-w-2xl cursor-pointer flex justify-center items-center h-[237px] md:h-[332px] w-full absolute ${isFinished ? "opacity-100" : "opacity-0"}`}>
        </div>
        <ReactPlayer
          ref={playerRef}
          key={key}
          width={"100%"}
          height={"100%"}
          className="mx-autoS bg-[var(--color2)] max-w-2xl border-t-8 rounded-md border-[var(--color2)]"
          url={url}
          muted={false}
          autoplay={true}
          loop={false}
          playing={isPlaying}
          onEnded={showAlert}
          light={false}
          onDuration={handleVideoDuration}
          onReady={handleVideoReady}
          config={{
            youtube: {
              playerVars: { showinfo: -1 }
            }
          }}
        />
        <div className='bg-[var(--color2)] pb-2 rounded-b-md max-w-3xl mx-auto mb-2'>
          <div className='w-full flex justify-between px-2'>
            <div>
              <button
                className="group hover:bg-blue-900 bg-blue-700 rounded-full p-2 shadow-md m-1"
                onClick={handleBackward}
              >
                <MdReplay10 className='fill-white ' size={24} />
              </button>
              <button
                className="group bg-blue-700 hover:bg-blue-900 rounded-full p-2 shadow-md m-1"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ?
                  <AiFillPauseCircle className=' fill-white' size={24} /> : <AiFillPlayCircle className=' fill-white' size={24} />}
              </button>
              <button
                className="group hover:bg-blue-900 bg-blue-700 rounded-full p-2 shadow-md m-1"
                onClick={handleForward}
              >
                <MdForward10 className='fill-white' size={24} />
              </button>
            </div>
            <small className="text-gray-300 pr-4 min-w-[100px] text-end text-sm">
              {formatDuration(videoDuration)} min.
            </small>
            <button
              className="group hover:bg-blue-200 bg-white rounded-full p-2 shadow-md m-1"
              onClick={handleReset}
            >
              <MdReplay className='fill-blue-700 group-hover:-rotate-180 group-hover:scale-125' size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
