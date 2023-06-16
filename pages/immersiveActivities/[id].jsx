import BackHeader from '@/components/BackHeader';
import RelatedVideos from '@/components/RelatedVideos';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew, MdFavoriteBorder } from 'react-icons/md';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';

export default function VideoDetails() {

  const router = useRouter()
  const id = router.query.id
  const [data, setData] = useState({})
  const [related, setRelated] = useState([])
  const [userMatched, setUserMatched] = useState({})
  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [isLiked, setIsLiked] = useState("")

  const fetchUser = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userFound = newData.find(item => item.uid == authUid);
        setUserMatched(userFound)
      })
  }

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
        if (user && user.likedVideos.includes(data.url)) {
          setLiked(true);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    checkLikedStatus();
  }, [data.url, liked]);



  useEffect(() => {
    fetchUser();
    fetchPost();
  }, [])

  const handleLike = async () => {
    if (!liked) {
      try {
        const userRef = doc(db, "users", userMatched.id);
        await updateDoc(userRef, {
          likedVideos: [...userMatched.likedVideos, data.url],
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

  return (
    <div className='pt-20 bg-[var(--blueDarkbg)]'>
      {
        !data &&
        (
          <LoadingScreen />
        )
      }
      <BackHeader largeTitle={data.title} parentTitle={"Back"} />
      <div className='md:flex'>
        <div className='flex-1'>
          <div className='h-[260px] md:h-[432px] w-full max-w-3xl mx-auto'>
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              className="mx-auto my-0 rounded-md"
              url={data.url}
              playing={true}
              controls={true}
            />
          </div>
          <div className='bg-[var(--color2)] p-2 rounded-b-md max-w-3xl mx-auto mb-2'>
            <div onClick={handleLike} className={`group transition-all 1s max-w-[50%] ease-in cursor-pointer flex w-full border-green-600 border-4 rounded-md py-2 justify-around ${liked ? 'bg-green-600 text-white opacity-90' : 'active:translate-y-2 bg-white hover:bg-green-600 hover:border-white '}`}>
              <p className={`text-sm  transition-all 1s ease-in font-bold ${liked ? 'text-white' : 'group-hover:text-white text-green-600 group-hover:scale-110'}`}>{liked ? 'Video on your list' : 'Save video'}</p>
              <MdFavoriteBorder className={`transition-all 1s ease-in ${liked ? 'fill-white scale-125' : 'group-hover:scale-125 group-hover:fill-white fill-green-600'}`} />
            </div>
            <p className='p-2 text-white opacity-80 font-bold'>{data.description}</p>
          </div>
        </div>
        <RelatedVideos relatedVideos={related} level={data.level} />
      </div>
    </div>
  )
}
