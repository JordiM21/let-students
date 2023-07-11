import BackHeader from '@/components/BackHeader'
import YourProfile from '@/components/YourProfile'
import { db } from '@/config/firebase'
import { FormControl, TextField } from '@mui/material'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillCheckCircle, AiFillInfoCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'

export default function ActivitiesDetail() {
  const router = useRouter()
  const id = router.query.id
  const [userMatched, setUserMatched] = useState({})
  // const [status, setStatus] = useState("") status is always pending when you create it
  const [text, setText] = useState("")
  const [topic, setTopic] = useState("")
  const [link, setLink] = useState("")
  const [limitDate, setLimitDate] = useState("")
  const [activities, setActivities] = useState([])
  const [submit, setSubmit] = useState(false)

  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatch = newData.find(item => item.id == id);
        setUserMatched(userMatch)
        setActivities(userMatch.activities)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [submit])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userRef = doc(db, "users", id);
      await updateDoc(userRef, {
        activities: [...userMatched.activities, {
          text,
          topic,
          link,
          limitDate,
          status: "pending",
        }],
      }).then(() => toast.success("Added succesfully!"))
      setSubmit(!submit)
    } catch (error) {
      console.error('Error updating schedule:', error);
    }
  }

  const markDone = async (e, activity) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "users", id);
      const updatedActivities = userMatched.activities.map((act) => {
        if (act === activity) {
          return { ...act, status: "done" };
        }
        return act;
      });
      await updateDoc(userRef, { activities: updatedActivities });
      toast.success("¡Cambiado a 'Done' exitosamente!");
      setSubmit(!submit);
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
    }
  };


  const markPending = async (e, activity) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "users", id);
      const updatedActivities = userMatched.activities.map((act) => {
        if (act === activity) {
          return { ...act, status: "pending" };
        }
        return act;
      });
      await updateDoc(userRef, { activities: updatedActivities });
      toast.success("¡Cambiado a 'Pending' exitosamente!");
      setSubmit(!submit);
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
    }
  };

  return (
    <div className='bg-[var(--bluebg)] pb-20 h-full min-h-screen'>
      <BackHeader largeTitle={userMatched.firstName} parentTitle={"Back"} />
      <div className='mx-8 pt-20 max-w-lg md:mx-auto'>
        <div className='bg-black rounded-lg p-4 mb-8 flex items-center justify-around'>
          <YourProfile char={userMatched.profileImg} size={"small"} />
          <p className='text-xl text-white'>{userMatched.firstName} {userMatched.lastName}</p>
        </div>scale
        <h1 className='text-2xl'>Crea nueva actividad</h1>
        <form onSubmit={handleSubmit} className='mb-8'>
          <FormControl variant="filled" className='w-full rounded-lg space-y-3'>
            <TextField
              required
              className='w-full bg-white rounded-sm'
              variant='filled'
              label="Title of the Activity"
              placeholder='ej: Past Tense 1'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <TextField
              required
              className='w-full bg-white rounded-sm'
              variant='filled'
              label="Set the topic"
              placeholder='ej: writing, speaking, listening'
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <TextField
              required
              className='w-full bg-white rounded-sm'
              variant='filled'
              label="Set the limit date"
              placeholder='ej: 26 de Julio'
              value={limitDate}
              onChange={(e) => setLimitDate(e.target.value)}
            />
            <TextField
              className='w-full bg-white rounded-sm'
              variant='filled'
              label="Insert the url"
              placeholder='ej: http://activitypasttense.com'
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </FormControl>
          <button type='submit' className='w-full bg-[var(--color2)] py-4 rounded-full mt-4 font-bold text-lg hover:scale-105'>Asigna a {userMatched.firstName}</button>
        </form>
        {
          activities.map((activity) => (
            activity.status === "pending" && (
              <div className='mb-4 hover:scale-[102%]'>
                <div className='bg-black cursor-pointer rounded-t-xl py-2 px-4 relative'>
                  <div className='my-2'>
                    <p className='text-xl text-white'>{activity.text}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-500 text-sm'>Tema: <span className='text-white'>{activity.topic}</span></p>
                    <p className='text-gray-500 text-sm'>Fecha Límite: <span className='text-white'>{activity.limitDate}</span></p>
                  </div>
                  <div className='overflow-hidden'>
                    <a href={activity.link} target='_blank' className='text-blue-700 text-xs underline cursor-pointer hover:text-orange-500'>{activity.link}</a>
                  </div>
                  <div className='bg-yellow-400 rounded-md px-2 absolute gap-1 -top-2 flex items-center -right-2'>
                    <AiFillInfoCircle />
                    <p>Pending</p>
                  </div>
                </div>
                <div onClick={(e) => markDone(e, activity)} className='bg-green-400 cursor-pointer hover:bg-green-700 rounded-b-xl py-2 flex justify-center items-center gap-2'>
                  <p className='text-center'>
                    Mark as Done
                  </p>
                  <AiFillCheckCircle className='text-xl' />
                </div>
              </div>
            )
          ))
        }
        {
          activities.map((activity) => (
            activity.status === "done" && (
              <div className='mb-4 hover:scale-[100%] opacity-75 '>
                <div className='bg-black cursor-pointer rounded-t-xl py-2 px-4 relative'>
                  <div className='my-2'>
                    <p className='text-xl text-white'>{activity.text}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-500 text-sm'>Tema: <span className='text-white'>{activity.topic}</span></p>
                    <p className='text-gray-500 text-sm'>Fecha Límite: <span className='text-white'>{activity.limitDate}</span></p>
                  </div>
                  <div className='overflow-hidden'>
                    <a href={activity.link} target='_blank' className='text-blue-700 text-xs underline cursor-pointer hover:text-orange-500'>{activity.link}</a>
                  </div>
                  <div className='bg-green-400 rounded-md px-2 absolute -top-2 flex gap-1 items-center -right-2'>
                    <AiFillCheckCircle />
                    <p>Done</p>
                  </div>
                </div>
                <div onClick={(e) => markPending(e, activity)} className='bg-yellow-400 cursor-pointer hover:bg-yellow-600 rounded-b-xl py-2 flex justify-center items-center gap-2'>
                  <p className='text-center'>
                    Mark as Pending
                  </p>
                  <AiFillCheckCircle className='text-xl' />
                </div>
              </div>
            )
          ))
        }
      </div>
    </div>
  )
}
