import React, { useRef, useState } from 'react'
import withUserData from '@/components/WithUserData'
import VideoCard from '@/components/VideoCard'
import { BsTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'
import LoadingScreen from '@/components/LoadingScreen'
import { db } from '@/config/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'
import BackHeader from '@/components/BackHeader'

const likedVideos = ({ likedVideos, userData, submit, setSubmit }) => {
  if (!userData || !likedVideos) {
    return <LoadingScreen />
  }
  console.log(likedVideos)

  const router = useRouter()

  const [userMatched, setUserMatched] = useState(userData)

  const likedVideosRef = useRef(userData?.likedVideos)

  const deleteActivity = async (e, video) => {
    e.preventDefault()
    const { id } = userMatched
    console.log('Video to remove:', video);
console.log('LikedVideos array:', likedVideosRef.current);
    try {
        toast.error('Este video ya no te gusta!');
        const userRef = doc(db, 'users', id);
        const indexToRemove = likedVideosRef.current.findIndex((act) => act.id === video.id);
        if (indexToRemove !== -1) {
      likedVideosRef.current.splice(indexToRemove, 1);
      await updateDoc(userRef, { likedVideos: likedVideosRef.current });
      likedVideosRef.current = [...likedVideosRef.current];
      setSubmit((prevSubmit) => !prevSubmit);
    } else {
        toast.error('Video not found in likedVideos array.');
      }
    } catch (error) {
      console.error('Error al eliminar la actividad:', error)
      toast.error('Error al eliminar la actividad')
    }
  }

  return (
    <div className="bg-[var(--blueDarkbg)] min-h-screen pt-20">
      <BackHeader largeTitle={'Liked Videos'} parentTitle={'Back'} />
      <h3 className="text-center text-xl md:text-3xl text-[var(--lightBlue)]">Aquí puedes ver los todos videos que has dado like</h3>
      <div className="md:flex md:mx-8 gap-4 justify-center items-center flex-wrap space-y-8 py-8 sm:space-y-0">
        {likedVideos.map((video, e) => (
          <div className=" hover:opacity-80 h-[220px] w-[400px] bg-[var(--blueSuperDark)] transition-all 1s ease-in cursor-pointer mx-auto rounded-md relative my-4">
            <div
              onClick={() => router.push(`/immersiveActivities/${video.id}`)}
              className="bg-gray-200 h-[220px] absolute z-20 w-[100px] opacity-0"
            ></div>
            <ReactPlayer
              width={'90%'}
              height={220}
              className="mx-auto rounded-md"
              url={video.url}
              controls={true}
              light={true}
            />
            <button
              className="bg-red-500 hover:scale-110 p-2 rounded-md absolute right-6 bottom-0 z-30"
              onClick={(e) => deleteActivity(e, video)}
            >
              <BsTrashFill className="text-xl fill-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default withUserData(likedVideos)
