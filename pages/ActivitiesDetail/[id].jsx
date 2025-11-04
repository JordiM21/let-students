import BackHeader from '@/components/BackHeader'
import LoadingScreen from '@/components/LoadingScreen'
import YourProfile from '@/components/YourProfile'
import { db } from '@/config/firebase'
import { collection, doc, getDocs, updateDoc, serverTimestamp } from 'firebase/firestore'
import { Box, Button, Chip, FormControl, MenuItem, Select, Stack, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillCheckCircle, AiFillCloseCircle, AiFillInfoCircle, AiFillSetting } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { toast } from 'react-toastify'

export default function ActivitiesDetail() {
  const router = useRouter()
  const id = router.query.id
  const [userMatched, setUserMatched] = useState({})
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState('')
  const [link, setLink] = useState('')
  const [grade, setGrade] = useState('') //new info
  const [correctAnswers, setCorrectAnswers] = useState('') //updated
  const [exams, setExams] = useState()
  const [submit, setSubmit] = useState(false)
  const gradeOptions = ['A+', 'A', 'B', 'B+', 'C', 'D']
  const [quote, setQuote] = useState('')

  const fetchPost = async () => {
    await getDocs(collection(db, 'users')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      const userMatch = newData.find((item) => item.id == id)

      // Safely sort the exams by assignedDay (most recent first)
      const sortedExams = [...(userMatch.exams || [])].sort((a, b) => {
        const dateA = new Date(a.assignedDay)
        const dateB = new Date(b.assignedDay)
        return dateB - dateA // descending order
      })

      setUserMatched(userMatch)
      setExams(sortedExams)
      setQuote(userMatch?.tutorQuote || '') // ✅ use userMatch directly
    })
  }

  useEffect(() => {
    if (userMatched?.tutorQuote) {
      setQuote(userMatched.tutorQuote)
    }
  }, [userMatched])


  useEffect(() => {
    fetchPost()
  }, [submit])

  const handleQuoteSubmit = async (e) => {
    e.preventDefault()
    try {
      const userRef = doc(db, 'users', id)
      await updateDoc(userRef, {
        tutorQuote: quote, // 'quote' should be your input state variable
        quoteDate: serverTimestamp(), // Firebase server timestamp
      })
      toast.success('Quote updated!')
    } catch (error) {
      console.error('Error updating quote:', error)
      toast.error('Failed to update quote')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userRef = doc(db, 'users', id)
      const currentTime = new Date()
      const timestamp = currentTime.toISOString() // Convert the Date to an ISO string
      const getYearMonthDay = (timestamp) => {
        return timestamp.slice(0, 10)
      }
      await updateDoc(userRef, {
        exams: [
          ...userMatched.exams,
          {
            title,
            description,
            topic,
            link,
            correctAnswers,
            grade,
            status: 'done',
            assignedDay: getYearMonthDay(timestamp),
          },
        ],
      }).then(() => toast.success('Added succesfully!'))
      setTitle('')
      setDescription('')
      setTopic('')
      setLink('')
      setCorrectAnswers('')
      setGrade('')
      setSubmit(!submit)
    } catch (error) {
      console.error('Error updating schedule:', error)
    }
  }

  const markDone = async (e, exam) => {
    e.preventDefault()
    try {
      const userRef = doc(db, 'users', id)
      const updatedExams = userMatched.exams.map((act) => {
        if (act === exam) {
          return { ...act, status: 'done' }
        }
        return act
      })
      await updateDoc(userRef, { exams: updatedExams })
      toast.success("¡Cambiado a 'Done' exitosamente!")
      setSubmit(!submit)
    } catch (error) {
      console.error('Error al actualizar el estado:', error)
    }
  }

  const markPending = async (e, exam) => {
    e.preventDefault()
    try {
      const userRef = doc(db, 'users', id)
      const updatedExams = userMatched.exams.map((act) => {
        if (act === exam) {
          return { ...act, status: 'pending' }
        }
        return act
      })
      await updateDoc(userRef, { exams: updatedExams })
      toast.success("¡Cambiado a 'Pending' exitosamente!")
      setSubmit(!submit)
    } catch (error) {
      console.error('Error al actualizar el estado:', error)
    }
  }

  const [openSettings, setOpenSettings] = useState({})

  const toggleSettings = (activityText) => {
    setOpenSettings((prevState) => ({
      ...prevState,
      [activityText]: !prevState[activityText],
    }))
  }

  const deleteActivity = async (e, exam) => {
    e.preventDefault()
    try {
      const userRef = doc(db, 'users', id)
      const updatedExams = userMatched.exams.filter((act) => act !== exam)
      await updateDoc(userRef, { exams: updatedExams })
      toast.success('¡Actividad eliminada exitosamente!')
      setSubmit(!submit)
    } catch (error) {
      console.error('Error al eliminar la actividad:', error)
    }
  }

  return (
    <div className="bg-[var(--bluebg)] pb-20 h-full min-h-screen">
      {userMatched.role != 'Admin' && userMatched.role != 'Student' && <LoadingScreen />}
      <BackHeader largeTitle={userMatched.firstName} parentTitle={'Volver'} />
      <div className="mx-8 pt-20 max-w-lg md:mx-auto">
        <div className="bg-black rounded-lg p-4 mb-8 flex items-center justify-around">
          <YourProfile char={userMatched.profileImg} size={'small'} />
          <p className="text-xl text-white">
            {userMatched.firstName} {userMatched.lastName}
          </p>
        </div>
        <Stack direction="row" spacing={2}>
          <TextField
            className="bg-white"
            label="Tutor Quote"
            variant="outlined"
            multiline
            rows={4}
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Quote about the Student"
            fullWidth
          />
          <button className="bg-[var(--color2)] hover:scale-110 rounded-sm h-10 px-4 " onClick={handleQuoteSubmit}>
            Save
          </button>
        </Stack>
        <h1 className="text-white mt-4 text-2xl">Historial de Exámenes</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <FormControl variant="filled" className="w-full rounded-lg space-y-3">
            <TextField
              required
              className="w-full bg-white rounded-sm"
              variant="filled"
              label="Title of the Activity"
              placeholder="ej: Past Tense 1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              required
              className="w-full bg-white rounded-sm"
              variant="filled"
              label="Description of the activity"
              placeholder="ej: Watch the video and understand all of the shown elements, then start recording your own video which you´d have to opload, you can also upload only one for each."
              multiline
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              required
              className="w-full bg-white rounded-sm"
              variant="filled"
              label="Set the topic"
              placeholder="ej: writing, speaking, listening"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <TextField
              required
              className="w-full bg-white rounded-sm"
              variant="filled"
              label="Set the correct answers"
              placeholder="ej: 25/30"
              value={correctAnswers}
              onChange={(e) => setCorrectAnswers(e.target.value)}
            />
            <TextField
              required
              select
              className="w-full bg-white rounded-sm"
              variant="filled"
              label="Set the grade"
              placeholder="ej: A+, A, B, C, D"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              {gradeOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className="w-full bg-white rounded-sm"
              variant="filled"
              label="Report image url"
              placeholder="ej: http://res.cloudinary.com"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </FormControl>
          <button
            type="submit"
            className="w-full bg-[var(--color2)] py-4 rounded-sm mt-4 font-bold text-lg hover:scale-105"
          >
            Asigna a {userMatched.firstName}
          </button>
        </form>
        {exams?.map(
          (activity) =>
            activity.status === 'pending' && (
              <div className="mb-4 hover:scale-[102%] relative mt-6">
                <small className="text-white absolute z-50 -top-4 text-[11px] opacity-50">{activity.assignedDay}</small>
                <div className="bg-yellow-400 rounded-md px-2 z-10 absolute gap-1 -top-2 flex items-center -right-2">
                  <AiFillInfoCircle />
                  <p>Pending</p>
                </div>
                <div className="bg-black cursor-pointer rounded-xl py-2 px-4 relative overflow-hidden">
                  <div
                    onClick={() => toggleSettings(activity.title)}
                    className="absolute top-5 right-4 hover:rotate-90"
                  >
                    <AiFillSetting className="fill-gray-200 text-3xl" />
                  </div>
                  <div
                    className={`absolute top-0 bg-gray-400 backdrop-blur-md bg-opacity-40 pt-3 h-fit rounded-bl-lg ${
                      openSettings[activity.title] ? '-right-1' : ' -right-20'
                    }`}
                  >
                    <div
                      className="pt-[3px] px-4 flex items-center hover:bg-gray-200 gap-1"
                      onClick={() => toggleSettings(activity.title)}
                    >
                      <AiFillCloseCircle className="text-2xl" />
                    </div>
                    <div
                      onClick={(e) => markDone(e, activity)}
                      className="bg-green-400 hover:bg-green-600 px-4 py-1 flex items-center gap-1"
                    >
                      <AiFillCheckCircle className="text-2xl" />
                    </div>
                    <div
                      onClick={(e) => deleteActivity(e, activity)}
                      className="bg-red-400 hover:bg-red-600 p-1 justify-center rounded-bl-lg flex items-center"
                    >
                      <BsFillTrashFill className="text-xl" />
                    </div>
                  </div>
                  <div className="my-2 pr-10">
                    <p className="text-xl text-white">{activity.title}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-sm">
                      Tema: <span className="text-white">{activity.topic}</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      Respuestas: <span className="text-white">{activity.correctAnswers}</span>
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Descripción: <span className="text-white">{activity.description}</span>
                  </p>
                  <p className="text-gray-500">Grade: {activity.grade}</p>
                  <div className="overflow-hidden block">
                    <a
                      href={activity.link}
                      target="_blank"
                      className="text-blue-700 text-xs underline cursor-pointer hover:text-orange-500"
                    >
                      {activity.link}
                    </a>
                  </div>
                </div>
              </div>
            )
        )}
        {exams?.map(
          (activity) =>
            activity.status === 'done' && (
              <div className="mb-4 hover:scale-[100%] opacity-75 mt-6 relative">
                <small className="text-white absolute z-50 -top-4 text-[11px] opacity-50">{activity.assignedDay}</small>
                <div className="bg-green-400 rounded-md z-10 px-5 absolute -top-2 flex gap-1 items-center -right-2">
                  <AiFillCheckCircle />
                  <p>Done</p>
                </div>
                <div className="bg-black cursor-pointer rounded-xl py-2 px-4 relative overflow-hidden">
                  <div
                    onClick={() => toggleSettings(activity.title)}
                    className="absolute top-5 right-4 hover:rotate-90"
                  >
                    <AiFillSetting className="fill-gray-200 text-3xl" />
                  </div>
                  <div
                    className={`absolute top-0 bg-gray-400 backdrop-blur-md bg-opacity-40 pt-3 h-fit rounded-bl-lg ${
                      openSettings[activity.title] ? '-right-1' : ' -right-20'
                    }`}
                  >
                    <div
                      className="pt-[3px] px-4 flex items-center hover:bg-gray-200 gap-1"
                      onClick={() => toggleSettings(activity.title)}
                    >
                      <AiFillCloseCircle className="text-2xl" />
                    </div>
                    <div
                      onClick={(e) => markPending(e, activity)}
                      className="bg-yellow-400 hover:bg-yellow-600 px-4 py-1 flex items-center gap-1"
                    >
                      <AiFillInfoCircle className="text-2xl" />
                    </div>
                    <div
                      onClick={(e) => deleteActivity(e, activity)}
                      className="bg-red-400 hover:bg-red-600 p-1 justify-center rounded-bl-lg flex items-center"
                    >
                      <BsFillTrashFill className="text-xl" />
                    </div>
                  </div>
                  <div className="my-2 pr-10">
                    <p className="text-xl text-white">{activity.title}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-sm">
                      Tema: <span className="text-white">{activity.topic}</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      Respuestas: <span className="text-white">{activity.correctAnswers}</span>
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Descripción: <span className="text-white">{activity.description}</span>
                  </p>
                  <p className="text-gray-500">Grade: {activity.grade}</p>
                  <div className="overflow-hidden block">
                    <a
                      href={activity.link}
                      target="_blank"
                      className="text-blue-700 text-xs underline cursor-pointer hover:text-orange-500"
                    >
                      {activity.link}
                    </a>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}
