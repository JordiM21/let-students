import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import image3 from '@/public/cambridgeandlet.png'
import { AiFillCloseCircle, AiFillPieChart, AiFillYoutube, AiOutlineCopy } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Box, Fade, Modal, TextField, useMediaQuery } from '@mui/material'
import { db } from '@/config/firebase'
import { BsFillCameraVideoFill, BsHeartFill } from 'react-icons/bs'
import CtaAnimationPage from './CtaAnimationPage'
import student from '@/public/animations/student.json'
import Backdrop from '@mui/material/Backdrop'
import ExternalApps from './ExternalApps'
import YourProfile from './YourProfile'
import { MdFaceRetouchingNatural, MdReplay, MdTaskAlt } from 'react-icons/md'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { FaTasks } from 'react-icons/fa'
import { PiGameControllerFill } from 'react-icons/pi'
import { GiGamepadCross } from 'react-icons/gi'

export default function AdminDashboard({ allUsers, id, url, wordsGameProgress }) {
  console.log(allUsers)
  const router = useRouter()
  const [flashCategory, setFlashCategory] = useState('Animals')
  const [urlMeet, setUrlMeet] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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

  const [meetingRoom, setMeetingRoom] = useState(false)
  return (
    <div>
      {meetingRoom == true && (
        <CtaAnimationPage
          title={'Entra en tu sala de reuniones con tus estudiantes'}
          subTitle={`Antes de entrar debes haber establecido un horario, Este botón te llevará a tu sala de reuniones en zoom ¡Recuerda ser muy puntual! `}
          animation={student}
          cta={'Ir a Zoom'}
          btn="link"
          link={url}
          bg="green"
          setMeetingRoom={setMeetingRoom}
        />
      )}
      <div
        onClick={() => setMeetingRoom(true)}
        className="flex bg-green-500 py-1 px-3 absolute top-2 left-2 md:left-20 cursor-pointer hover:opacity-80 rounded-full w-[100px] md:w-[170px] justify-between items-center"
      >
        <BsFillCameraVideoFill fill="white" size={20} />
        <p className={`text-white text-xs`}>
          <span className="hidden text-white md:inline">Enter in the </span>
          Meeting
        </p>
      </div>
      <div className="md:gap-8 my-8 mx-4 md:mx-16">
        <small className="text-white">
          Problemas con tu meeting link?{' '}
          <span onClick={handleOpen} className="text-green-500 cursor-pointer underline">
            Click aqui!
          </span>
        </small>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <small className="text-gray-500 text-xs">Current Url (link actual): {url} </small>
              <p>
                Ingresa aqui el link proporcionado por Zoom. cuando tengas tu link personal ingresalo aqui y listo!
                todos tus estudiantes lo tendran a disposición.
              </p>
              <form onSubmit={changeUrl} className="flex flex-col p-8 space-y-4">
                <TextField
                  id="filled-basic"
                  label="Link given by Zoom"
                  variant="filled"
                  className="bg-gray-300 rounded-md w-full"
                  value={urlMeet}
                  type="text"
                  placeholder="https://us05web.zoom.us/******"
                  onChange={(e) => setUrlMeet(e.target.value)}
                />
                <button type="submit" className="bg-[var(--color3)] py-4 text-lg text-white rounded-md">
                  Add link
                </button>
              </form>
            </Box>
          </Fade>
        </Modal>
        <div className="mx-4 flex justify-center flex-wrap gap-4 my-4">
          {allUsers.length < 2 && (
            <div className="hover:-translate-y-1 cursor-pointer shadow-xl hover:shadow-black flex items-center flex-col bg-slate-300 rounded-lg p-2 w-72">
              <YourProfile />
              <p className="text-2xl">Future Student</p>
              <div className="flex justify-between w-full px-4">
                <div className="group cursor-pointer flex gap-1 items-center">
                  <BsHeartFill size={30} className="group-hover:fill-red-600 group-hover:-translate-y-1" />
                  <p className="group-hover:text-red-600 group-hover:-translate-y-1">0</p>
                </div>
                <div className="group cursor-pointer flex gap-2 items-center">
                  <FaTasks size={30} className="group-hover:fill-yellow-500 group-hover:-translate-y-1" />
                  <p className="group-hover:text-yellow-500 group-hover:-translate-y-1">0</p>
                </div>
              </div>
              <div className="w-[90%] mx-auto">
                <button class="learn-more my-2">
                  <span class="circle bg-gray-400" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text text-gray-400">No Disponible</span>
                </button>
              </div>
            </div>
          )}
          {allUsers.map((student) => (
            <div className="hover:-translate-y-1 cursor-pointer shadow-xl hover:shadow-black flex items-center flex-col bg-slate-300 rounded-lg p-2 w-72">
              <YourProfile char={student.profileImg} size={''} />
              <p className="text-2xl">{student.firstName}</p>
              <div className="flex justify-between w-full px-4">
                <div className="group cursor-pointer flex gap-1 items-center">
                  <BsHeartFill size={30} className="group-hover:fill-red-600 group-hover:-translate-y-1" />
                  <p className="group-hover:text-red-600 group-hover:-translate-y-1">{student.likedVideos.length}</p>
                </div>
                <div className="group cursor-pointer flex gap-2 items-center">
                  <FaTasks size={30} className="group-hover:fill-yellow-500 group-hover:-translate-y-1" />
                  <p className="group-hover:text-yellow-500 group-hover:-translate-y-1">{student.activities.length}</p>
                </div>
              </div>
              <div className="w-[90%] flex justify-center">
                <button
                  onClick={() => router.push(`/ActivitiesDetail/${student.id}`)}
                  className="bg-[var(--bluebg)] hover:bg-[var(--blueDarkbg)] py-2 px-4 rounded-md my-2"
                >
                  <span class="text-white">Ver Actividades</span>
                </button>
              </div>
            </div>
          ))}
          {allUsers.length < 3 && (
            <div className="hover:-translate-y-1 cursor-pointer shadow-xl hover:shadow-black flex items-center flex-col bg-slate-300 rounded-lg p-2 w-72">
              <YourProfile />
              <p className="text-2xl">Future Student</p>
              <div className="flex justify-between w-full px-4">
                <div className="group cursor-pointer flex gap-1 items-center">
                  <BsHeartFill size={30} className="group-hover:fill-red-600 group-hover:-translate-y-1" />
                  <p className="group-hover:text-red-600 group-hover:-translate-y-1">0</p>
                </div>
                <div className="group cursor-pointer flex gap-2 items-center">
                  <FaTasks size={30} className="group-hover:fill-yellow-500 group-hover:-translate-y-1" />
                  <p className="group-hover:text-yellow-500 group-hover:-translate-y-1">0</p>
                </div>
              </div>
              <div className="w-[90%] mx-auto">
                <button class="learn-more my-2">
                  <span class="circle bg-gray-400" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text text-gray-400">No Disponible</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* <ExternalApps role={'admin'} />*/}

        <div className="w-full max-w-4xl mx-auto space-y-6 md:my-12 md:space-y-0 md:flex justify-evenly">
          <div
            onClick={() => router.push(`/Register`)}
            className="group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4"
          >
            <MdFaceRetouchingNatural className="z-10 text-5xl md:text-7xl" />
            <p className="z-10 group-hover:text-white">Add</p>
            <p className="z-10 group-hover:text-white">Student</p>
            <div className="h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute"></div>
            <div className="h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-cyan-300 to-blue-700 rounded-full -left-12 md:left-16 md:top-1 absolute"></div>
          </div>
          <div
            onClick={() => router.push('/adminCreate/createVideo/')}
            className="group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4"
          >
            <TbBrandYoutubeKids className="z-10 text-5xl md:text-7xl" />
            <p className="z-10 group-hover:text-white">Add a</p>
            <p className="z-10 group-hover:text-white">Video</p>
            <div className="h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute"></div>
            <div className="h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-red-300 to-red-600 rounded-full -left-12 md:left-16 md:top-1 absolute"></div>
          </div>
          <div
            onClick={() => router.push('/Progress/')}
            className="group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4"
          >
            <AiFillPieChart className="z-10 text-5xl md:text-7xl" />
            <p className="z-10 group-hover:text-white">My</p>
            <p className="z-10 group-hover:text-white">Students</p>
            <div className="h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute"></div>
            <div className="h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-green-300 to-green-700 rounded-full -left-12 md:left-16 md:top-1 absolute"></div>
          </div>
          <div
            onClick={() => router.push('/Activities/')}
            className="group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4"
          >
            <MdTaskAlt className="z-10 text-5xl md:text-7xl" />
            <p className="z-10 group-hover:text-white">Asign</p>
            <p className="z-10 group-hover:text-white ">Tasks</p>
            <div className="h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute"></div>
            <div className="h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-yellow-200 to-yellow-600 rounded-full -left-12 md:left-16 md:top-1 absolute"></div>
          </div>
        </div>
        <div id="FlashCardsManager" className='mx-auto max-w-2xl'>
          <div className="flex justify-around my-4">
            <button onClick={() => setFlashCategory('Animals')} className="bg-gray-400 p-2 rounded-md">
              Animals
            </button>
            <p className="text-white">{flashCategory}</p>
            <button onClick={() => setFlashCategory('Food')} className="bg-gray-400 p-2 rounded-md">
              Food
            </button>
          </div>

          {allUsers.map((user) => (
            <div className="bg-white rounded-md my-2 hover:bg-gray-400 cursor-pointer flex justify-between p-2">
              <div className="w-40">
                <p>{user.firstName} </p>
              </div>
              {flashCategory == 'Animals' && (
                <div className="flex w-full justify-around ">
                  <p>{user.FlashProgress.animals.First}</p>
                  <p>{user.FlashProgress.animals.Second}</p>
                  <p>{user.FlashProgress.animals.Third}</p>
                </div>
              )}
              {flashCategory == 'Food' && (
                <div className="flex w-full justify-around ">
                  <p>{user.FlashProgress.food.First}</p>
                  <p>{user.FlashProgress.food.Second}</p>
                  <p>{user.FlashProgress.food.Third}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="group bg-gray-100 mx-4 pb-0 relative overflow-hidden my-4 rounded-md md:flex md:justify-between md:pb-0 max-w-5xl md:mx-auto">
          <div className="px-4 md:px-20 md:py-4">
            <div>
              <PiGameControllerFill className="opacity-80 group-hover:scale-125 absolute text-7xl -rotate-12 -right-2 -bottom-4 md:-left-2 md:-top-2 fill-gray-500" />
              <AiFillYoutube className="opacity-0 md:opacity-80 group-hover:scale-110 absolute text-7xl -rotate-6 -left-4 -bottom-3 fill-gray-500" />
              <PiGameControllerFill className="opacity-0 md:opacity-80 group-hover:scale-110 absolute text-7xl -rotate-6 right-96 -bottom-5 fill-gray-500" />
              <GiGamepadCross className="opacity-0 md:opacity-80 group-hover:scale-110 absolute text-7xl rotate-6 right-60 -top-4 fill-gray-500" />
              <AiFillYoutube className="opacity-0 md:opacity-80 group-hover:scale-110 absolute text-7xl rotate-12 -right-4 top-3 fill-gray-500" />
              <p className="text-center text-[var(--color2)] text-2xl py-2">WORDS GAME (Juego de Palabras)</p>
              <p className="font-bold text-md hidden md:block">
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
        </div> */}
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
