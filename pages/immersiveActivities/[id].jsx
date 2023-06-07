import RelatedVideos from '@/components/RelatedVideos';
import { db } from '@/config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md';
import ReactPlayer from 'react-player';

export default function VideoDetails() {

  const router = useRouter()
  const id = router.query.id
  const [data, setData] = useState({})
  const [related, setRelated] = useState([])
  const [level, setLevel] = useState("")


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

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      <div className='flex bg-[var(--color2Shadow)] items-center gap-4 md:gap-8 px-4 py-2'>
        <MdArrowBackIosNew onClick={() => router.back()} size={40} className='active:-translate-y-1 transition-all 1s ease-in hover:opacity-80 hover:fill-white cursor-pointer bg-white rounded-full p-2 fill-[var(--color2Shadow)]' />
        <p className='text-2xl font-bold text-white'>{data.title}</p>
      </div>
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
          <div className='bg-[var(--color2)] p-2 max-w-3xl mx-auto mb-2'>
            <p className='p-2 text-white opacity-80 font-bold'>{data.description}</p>
          </div>
        </div>
        <RelatedVideos relatedVideos={related} level={data.level} />
      </div>
    </div>
  )
}
