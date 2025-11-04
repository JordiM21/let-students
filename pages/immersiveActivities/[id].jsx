import BackHeader from '@/components/BackHeader'
import LoadingScreen from '@/components/LoadingScreen'
import RelatedVideos from '@/components/RelatedVideos'
import withUserData from '@/components/WithUserData'
import { db } from '@/config/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState, useRef } from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import { MdFavoriteBorder, MdForward10, MdReplay, MdReplay10, MdReplayCircleFilled } from 'react-icons/md'
import ReactPlayer from 'react-player'
import { toast } from 'react-toastify'

const VideoDetails = ({ userData }) => {
  if (!userData) {
    return <LoadingScreen />
  }

  const router = useRouter()
  const id = router.query.id
  const [data, setData] = useState({})
  const [related, setRelated] = useState([])
  const [userMatched, setUserMatched] = useState(userData)

  const fetchPost = async () => {
    await getDocs(collection(db, 'Immersive')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      const dataFound = newData.find((item) => item.id == id)
      const dataRelated = newData.filter((item) => item.level == dataFound.level && item.id != dataFound.id)
      setData(dataFound)
      setRelated(dataRelated)
    })
  }

  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const checkLikedStatus = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'))
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const user = newData.find((user) => user.id === userMatched.id)
        if (user && user.likedVideos.some((video) => video.id === data.id)) {
          setLiked(true)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    checkLikedStatus()
  }, [data.url, liked])

  useEffect(() => {
    fetchPost()
  }, [])

  const handleLike = async () => {
    if (!liked) {
      try {
        const userRef = doc(db, 'users', userMatched.id)
        await updateDoc(userRef, {
          likedVideos: [
            ...userMatched.likedVideos,
            {
              url: data.url,
              id: data.id,
            },
          ],
        }).then(() => toast.success('Te gusta este video!'))

        setLiked(true)
      } catch (error) {
        console.error('Error updating liked videos:', error)
      }
    } else {
      toast.info('Ya te gusta este video!')
    }
  }

  const [isFinished, setIsFinished] = useState(false)
  const [key, setKey] = useState(0)
  const playerRef = useRef(null)
  const [videoDuration, setVideoDuration] = useState(0)

  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10, 'seconds')
  }

  const handleBackward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10, 'seconds')
  }

  useEffect(() => {
    setIsFinished(false)
    setKey(key + 1)
  }, [])

  const handleReset = () => {
    setIsFinished(false)
    setKey(key + 1)
  }

  const showAlert = () => {
    setIsFinished(true)
  }
  const [isPlaying, setIsPlaying] = useState(true)

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const handleVideoDuration = (duration) => {
    setVideoDuration(duration)
  }

  const [isVideoReady, setIsVideoReady] = useState(false)

  const handleVideoReady = () => {
    setIsVideoReady(true)
  }

  return (
    <div className="pt-24 md:pt-16 bg-[var(--blueDarkbg)]">
      {!data.title && <LoadingScreen />}
      <BackHeader largeTitle={data.title} parentTitle={'Volver'} />
      <div className="md:flex">
        <div className="flex-1">
          <div className="relative h-[260px] md:h-[432px] mx-auto max-w-3xl">
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className={`bg-black cursor-pointer flex justify-center items-center h-[260px] md:h-[432px] w-full absolute ${
                isFinished ? 'opacity-100' : 'opacity-0'
              }`}
            ></div>
            {isVideoReady ? null : (
              <div className="absolute inset-0 flex items-center justify-center bg-black opacity-100">
                <span className="text-white text-xl animate-pulse">Estamos preparando tu video...</span>
              </div>
            )}
            <ReactPlayer
              ref={playerRef}
              key={key}
              width={'100%'}
              height={'100%'}
              className="mx-auto md:my-4 bg-black rounded-md"
              url={data.url}
              muted={false} //MODIFY TO FALSE
              autoplay={true}
              loop={false}
              playing={isPlaying}
              onEnded={showAlert}
              light={false}
              onDuration={handleVideoDuration}
              onReady={handleVideoReady}
              config={{
                youtube: {
                  playerVars: { showinfo: -1 },
                },
              }}
            />
          </div>
          <div className="bg-[var(--bluebg)] pb-2 rounded-b-md max-w-3xl mx-auto mb-2">
            <div className="w-full flex justify-between">
              <small className="text-gray-300 pl-4 mr-12 text-start text-xl">{data.title}</small>
              <small className="text-gray-300 pr-4 min-w-[100px] text-end text-sm">
                {formatDuration(videoDuration)} min.
              </small>
            </div>
            <div className="w-full flex justify-between px-2">
              <div
                onClick={handleLike}
                className={`group transition-all 1s p-2 m-1 ease-in cursor-pointer flex border-green-600 rounded-full justify-around ${
                  liked
                    ? 'bg-green-600 text-white opacity-90'
                    : 'active:translate-y-2 bg-white hover:bg-green-600 hover:border-white '
                }`}
              >
                <MdFavoriteBorder
                  size={24}
                  className={`transition-all 1s ease-in ${
                    liked ? 'fill-white scale-125' : 'group-hover:scale-125 group-hover:fill-white fill-green-600'
                  }`}
                />
              </div>
              <div className="">
                <button
                  className="group hover:bg-blue-400 bg-blue-600 rounded-full p-2 shadow-md m-1"
                  onClick={handleBackward}
                >
                  <MdReplay10 className="fill-white " size={24} />
                </button>
                <button
                  className="group bg-blue-600 hover:bg-blue-400 rounded-full p-2 shadow-md m-1"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <AiFillPauseCircle className=" fill-white" size={24} />
                  ) : (
                    <AiFillPlayCircle className=" fill-white" size={24} />
                  )}
                </button>
                <button
                  className="group hover:bg-blue-400 bg-blue-600 rounded-full p-2 shadow-md m-1"
                  onClick={handleForward}
                >
                  <MdForward10 className="fill-white" size={24} />
                </button>
              </div>
              <button className="group hover:bg-blue-200 bg-white rounded-full p-2 shadow-md m-1" onClick={handleReset}>
                <MdReplay className="fill-blue-700 group-hover:-rotate-180 group-hover:scale-125" size={24} />
              </button>
            </div>
          </div>
        </div>
        <RelatedVideos relatedVideos={related} level={data.level} />
      </div>
    </div>
  )
}

export default withUserData(VideoDetails)
