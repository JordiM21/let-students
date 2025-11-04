import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import image3 from '@/public/cambridgeandlet.png'
import { AiFillCloseCircle, AiFillPieChart, AiFillYoutube, AiOutlineCopy } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Box, Fade, IconButton, Modal, TextField, useMediaQuery } from '@mui/material'
import { db } from '@/config/firebase'
import Backdrop from '@mui/material/Backdrop'
import { MdFaceRetouchingNatural, MdReplay, MdTaskAlt } from 'react-icons/md'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { PiGameControllerFill } from 'react-icons/pi'
import { GiGamepadCross } from 'react-icons/gi'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { getCurrentMonthWithAdjustment } from './getCurrentMonth'

export default function AdminDashboard({ allUsers, id, url, wordsGameProgress }) {
  const theme = useTheme()
  const router = useRouter()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [currentMonth, setCurrentMonth] = useState()
  const [urlMeet, setUrlMeet] = useState('')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [userMonths, setUserMonths] = useState({}) // store month per user

  useEffect(() => {
    const months = {}
    allUsers.forEach((user) => {
      months[user.uid] = getCurrentMonthWithAdjustment(user.startDate, user.dateVariable)
    })
    setUserMonths(months)
  }, [allUsers])

  const isScreenBig = useMediaQuery('(min-width: 550px)')

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: isScreenBig ? '400px' : '90%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  }

  const changeUrl = async (e) => {
    e.preventDefault()
    const nameRef = doc(db, 'users', id)
    await updateDoc(nameRef, {
      urlMeet: urlMeet,
    }).then(() => toast.success('Link added succesfully!'))
    setTimeout(() => {
      router.reload()
    }, 3000)
  }

  const [isFinished, setIsFinished] = useState(false)
  const [key, setKey] = useState(0)

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
  const levelOrder = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

  const renderFlashProgress = (progress = {}) => {
    return Object.entries(progress).map(([category, levels]) => (
      <div key={category} className="mb-1">
        <strong>{category}:</strong>{' '}
        {Object.entries(levels)
          .sort(([a], [b]) => levelOrder.indexOf(a) - levelOrder.indexOf(b))
          .map(([level, value]) => (
            <span key={level} className="mr-2">
              {level}: <span className="font-mono">{value}</span>
            </span>
          ))}
      </div>
    ))
  }

  // State at the top of your component
  const [expandedUsers, setExpandedUsers] = useState({})

  const handleToggleExpand = (userId) => {
    setExpandedUsers((prev) => ({
      ...prev,
      [userId]: !prev[userId], // toggle only this user
    }))
  }

  const sortedUsers = allUsers.sort((a, b) => (userMonths[b.uid] ?? 0) - (userMonths[a.uid] ?? 0))


  return (
    <div>
      <div className="md:gap-8 my-8 mx-4 md:mx-16">
        <TableContainer component={Paper} className="rounded-xl shadow-md overflow-x-auto">
          <Table
            stickyHeader
            sx={{
              tableLayout: 'fixed',
              minWidth: 1200,
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell className="font-bold w-[150px]">Name</TableCell>
                <TableCell className="font-bold w-[250px]">Email</TableCell>
                <TableCell className="font-bold w-[150px]">Phone</TableCell>
                <TableCell className="font-bold w-[150px]">Mat Number</TableCell>
                <TableCell className="font-bold w-[150px]">Level</TableCell>
                <TableCell className="font-bold w-[500px]">Flash Cards</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedUsers.map((user) => (
                <TableRow
                  key={user.uid}
                  hover
                  className="cursor-pointer"
                  onClick={() => router.push(`/StudentDetail/${user.id}`)}
                >
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.matriculation}</TableCell>
                  <TableCell>{userMonths[user.uid] ?? 'Loading...'}</TableCell>{' '}
                  <TableCell
                    className="align-top whitespace-pre-wrap break-words"
                    style={{ minWidth: '500px' }} // 👈 enforce width
                  >
                    {renderFlashProgress(user.FlashProgress)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <ExternalApps role={'admin'} />*/}

        <div className="w-full max-w-4xl mx-auto space-y-6 py-8 md:my-12 md:space-y-0 md:flex flex-wrap gap-2 justify-evenly">
          <div
            onClick={() => router.push(`/Register`)}
            className="group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-40 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col "
          >
            <MdFaceRetouchingNatural className="z-10 text-5xl md:text-7xl" />
            <p className="z-10 group-hover:text-white">Add</p>
            <p className="z-10 group-hover:text-white">Student</p>
            <div className="h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[60px] md:top-2 absolute"></div>
            <div className="h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-cyan-300 to-blue-700 rounded-full -left-12 md:left-8 md:top-1 absolute"></div>
          </div>
          <div
            onClick={() => router.push('/adminCreate/createVideo/')}
            className="group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-40 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col "
          >
            <TbBrandYoutubeKids className="z-10 text-5xl md:text-7xl" />
            <p className="z-10 group-hover:text-white">Add a</p>
            <p className="z-10 group-hover:text-white">Video</p>
            <div className="h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute"></div>
            <div className="h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-red-300 to-red-600 rounded-full -left-12 md:left-8 md:top-1 absolute"></div>
          </div>
          <div
            onClick={() => router.push('/Profile/')}
            className="group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-40 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col "
          >
            <AiFillPieChart className="z-10 text-5xl md:text-7xl" />
            <p className="z-10 group-hover:text-white">My</p>
            <p className="z-10 group-hover:text-white">Profile</p>
            <div className="h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute"></div>
            <div className="h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-green-300 to-green-700 rounded-full -left-12 md:left-8 md:top-1 absolute"></div>
          </div>
          <div
            onClick={() => router.push('/adminCreate/createFlash')}
            className="group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-40 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col "
          >
            <MdTaskAlt className="z-10 text-5xl md:text-7xl" />
            <p className="z-10 group-hover:text-white">Create</p>
            <p className="z-10 group-hover:text-white ">Flash</p>
            <div className="h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute"></div>
            <div className="h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-orange-200 to-orange-600 rounded-full -left-12 md:left-8 md:top-1 absolute"></div>
          </div>
        </div>

        <div className="group bg-gray-100  pb-0 relative overflow-hidden my-4 rounded-md md:flex md:justify-between md:pb-0 max-w-5xl md:mx-auto">
          <div className="px-4 md:px-20 md:py-4">
            <div>
              <PiGameControllerFill className="opacity-80 group-hover:scale-125 absolute text-7xl -rotate-12 -right-2 -bottom-4 md:-left-2 md:-top-2 fill-gray-500" />
              <AiFillYoutube className="opacity-0 md:opacity-80 group-hover:scale-110 absolute text-7xl -rotate-6 -left-4 -bottom-3 fill-gray-500" />
              <PiGameControllerFill className="opacity-0 md:opacity-80 group-hover:scale-110 absolute text-7xl -rotate-6 right-96 -bottom-5 fill-gray-500" />
              <GiGamepadCross className="opacity-0 md:opacity-80 group-hover:scale-110 absolute text-7xl rotate-6 right-60 -top-4 fill-gray-500" />
              <AiFillYoutube className="opacity-0 md:opacity-80 group-hover:scale-110 absolute text-7xl rotate-12 -right-4 top-3 fill-gray-500" />
              <p className="text-center text-[var(--color2)] text-2xl py-2">WORDS GAME (Juego de Palabras)</p>
              <p className="font-bold text-base hidden md:block">
                Learn new words and phrases by listening to native people
              </p>
              <button
                onClick={() => router.push(`/wordsGame/`)}
                className="my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:shadow-xl shadow-black hover:translate-y-1 transition-all 1s ease-in"
              >
                Go to Words Game
              </button>
            </div>
          </div>
          <div className="bg-white font-semibold text-lg md:text-2xl px-4 md:px-16 py-3 md:py-8 rounded-md shadow-md">
            <span className="text-[var(--color2)] text-end md:block text-3xl md:text-8xl">
              {wordsGameProgress ? wordsGameProgress.length : '0'}
            </span>{' '}
            Modules Complete in Total
          </div>
        </div>
        <div className="mx-4 py-8 justify-center">
          <div className="md:w-[80%] w-full  mx-auto rounded-md bg-black">
            <Image className="object-cover w-full rounded-t-md" src={image3} />
            <div className="p-4">
              <p className="text-white">Working with Write & Improve</p>
              <p className="text-gray-600">
                When a student is Ready to jump into to writing simple essays. add this activity once a week to check
                grammar and coherence in their text.
              </p>
              <a href="https://writeandimprove.com/" target="_blank">
                <button class="bg-white px-8 py-4 rounded-full my-2">
                  <span class=" text-[var(--color2)]">Go to the Page</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
