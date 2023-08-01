import BackHeader from '@/components/BackHeader';
import LoadingScreen from '@/components/LoadingScreen';
import RelatedVideos from '@/components/RelatedVideos';
import withUserData from '@/components/WithUserData';
import { db } from '@/config/firebase';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { MdFavoriteBorder, MdForward10, MdReplay, MdReplay10, MdReplayCircleFilled } from 'react-icons/md';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';
import { GrBackTen, GrForwardTen } from 'react-icons/gr'

const VideoDetails = ({ userData }) => {
  if (!userData) {
    return <LoadingScreen />;
  }

  const router = useRouter()
  const id = router.query.id
  const [data, setData] = useState({})
  const [related, setRelated] = useState([])
  const [userMatched, setUserMatched] = useState(userData)

  const fetchPost = async () => {
    await getDocs(collection(db, "Immersive"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const dataFound = newData.find(item => item.id == id);
        const dataRelated = newData.filter(item => item.level == dataFound.level && item.id != dataFound.id);
        setData(dataFound)
        setRelated(dataRelated)
      })
  }

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkLikedStatus = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const user = newData.find((user) => user.id === userMatched.id);
        if (user && user.likedVideos.some((video) => video.id === data.id)) {
          setLiked(true);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    checkLikedStatus();
  }, [data.url, liked]);

  useEffect(() => {
    fetchPost();
  }, [])

  const handleLike = async () => {
    if (!liked) {
      try {
        const userRef = doc(db, "users", userMatched.id);
        await updateDoc(userRef, {
          likedVideos: [...userMatched.likedVideos, {
            url: data.url,
            id: data.id
          }],
        }).then(() => toast.success("Saved succesfully!"))

        setLiked(true);
      } catch (error) {
        console.error('Error updating liked videos:', error);
      }
    }
    else {
      toast.info("This video is already on your list!")
    }
  };


  const [isFinished, setIsFinished] = useState(false);
  const [key, setKey] = useState(0);
  const playerRef = useRef(null);

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
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='pt-28 bg-[var(--blueDarkbg)]'>
      {
        !data.title &&
        (
          <LoadingScreen />
        )
      }
      <BackHeader largeTitle={data.title} parentTitle={"Back"} />
      <div className='md:flex'>
        <div className='flex-1'>
          <div className='relative h-[260px] md:h-[432px] mx-auto max-w-3xl'>
            <div onClick={() => setIsPlaying(!isPlaying)} className={`bg-green-400 cursor-pointer flex justify-center items-center h-[260px] md:h-[432px] w-full absolute ${isFinished ? "opacity-100" : "opacity-0"}`}>
            </div>
            <ReactPlayer
              ref={playerRef}
              key={key}
              width={"100%"}
              height={"100%"}
              className="mx-auto md:my-4 bg-green-400 rounded-md"
              url={data.url}
              muted={true} //MODIFY TO FALSE
              autoplay={true}
              loop={false}
              playing={isPlaying}
              onEnded={showAlert}
              light={false}
              config={{
                youtube: {
                  playerVars: { showinfo: -1 }
                }
              }}
            />
          </div>
          <div className='bg-[var(--color2)] pb-2 rounded-b-md max-w-3xl mx-auto mb-2'>
            <div className='w-full flex justify-between px-2'>
              <div onClick={handleLike} className={`group transition-all 1s p-2 m-1 ease-in cursor-pointer flex border-green-600 rounded-full justify-around ${liked ? 'bg-green-600 text-white opacity-90' : 'active:translate-y-2 bg-white hover:bg-green-600 hover:border-white '}`}>
                <MdFavoriteBorder size={24} className={`transition-all 1s ease-in ${liked ? 'fill-white scale-125' : 'group-hover:scale-125 group-hover:fill-white fill-green-600'}`} />
              </div>
              <div className=''>
                <button
                  className="group hover:bg-red-400 bg-red-600 rounded-full p-2 shadow-md m-1"
                  onClick={handleBackward}
                >
                  <MdReplay10 className='fill-white group-hover:fill-red-600' size={24} />
                </button>
                <button
                  className="group bg-red-600 hover:bg-red-400 rounded-full p-2 shadow-md m-1"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ?
                    <AiFillPauseCircle className='group-hover:fill-red-600 fill-white' size={24} /> : <AiFillPlayCircle className='group-hover:fill-red-600 fill-white' size={24} />}
                </button>
                <button
                  className="group hover:bg-red-400 bg-red-600 rounded-full p-2 shadow-md m-1"
                  onClick={handleForward}
                >
                  <MdForward10 className='fill-white group-hover:fill-red-600' size={24} />
                </button>
              </div>
              <button
                className="group hover:bg-blue-700 bg-white rounded-full p-2 shadow-md m-1"
                onClick={handleReset}
              >
                <MdReplay className='fill-blue-700 group-hover:fill-white group-hover:scale-125' size={24} />
              </button>
            </div>
            <p className='p-2 text-white opacity-80 font-bold'>{data.description}</p>
          </div>
        </div>
        <RelatedVideos relatedVideos={related} level={data.level} />
      </div>
    </div>
  )
}

export default withUserData(VideoDetails)
