import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import image3 from '@/public/cambridgeandlet.png'
import enviroment from '@/public/enviromentsAdmin.png'
import allStudents from '@/public/AllStudents.png'
import { AiFillCloseCircle, AiFillPieChart, AiOutlineCopy } from 'react-icons/ai'
import copy from 'clipboard-copy';
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { FcAutomatic, FcBullish, FcCalendar, FcContacts, FcHighPriority, FcVideoCall } from 'react-icons/fc'
import { Box, Fade, Modal, TextField, useMediaQuery } from '@mui/material'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { BsFillCameraVideoFill, BsHeartFill, BsQuestionCircle } from 'react-icons/bs'
import CtaAnimationPage from './CtaAnimationPage'
import student from '@/public/animations/student.json'
import Backdrop from '@mui/material/Backdrop';
import ExternalApps from './ExternalApps'
import YourProfile from './YourProfile'
import ReactPlayer from 'react-player'
import { ReplayOutlined } from '@mui/icons-material'
import { MdFaceRetouchingNatural, MdReplay, MdTaskAlt } from 'react-icons/md'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { FaTasks } from 'react-icons/fa'

export default function AdminDashboard({ allUsers, id, url }) {

  const router = useRouter()
  const [urlMeet, setUrlMeet] = useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isScreenBig = useMediaQuery('(min-width: 550px)');

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: isScreenBig ? '400px' : '90%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
  };

  const changeUrl = async (e) => {
    e.preventDefault()
    const nameRef = doc(db, "users", id);
    await updateDoc(nameRef, {
      urlMeet: urlMeet,
    }).then(() => toast.success("Link added succesfully!"))
    setTimeout(() => {
      router.reload()
    }, 3000)
  }

  const [isFinished, setIsFinished] = useState(false);
  const [key, setKey] = useState(0);

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

  const [meetingRoom, setMeetingRoom] = useState(false)
  return (
    <div>
      {
        meetingRoom == true && (
          <CtaAnimationPage
            title={"Entra en tu sala de reuniones con tus estudiantes"}
            subTitle={`Antes de entrar debes haber establecido un horario, Este botón te llevará a tu sala de reuniones en WhereBy ¡Recuerda ser muy puntual! `}
            animation={student}
            cta={"Ir a WhereBy"}
            btn="link"
            link={url}
            bg="green"
            setMeetingRoom={setMeetingRoom}
          />
        )
      }
      <div onClick={() => setMeetingRoom(true)} className='flex bg-green-500 py-1 px-3 absolute top-2 left-2 md:left-20 cursor-pointer hover:opacity-80 rounded-full w-[100px] md:w-[170px] justify-between items-center'>
        <BsFillCameraVideoFill fill='white' size={20} />
        <p className={`text-white text-xs`}>
          <span className='hidden text-white md:inline'>
            Enter in the {" "}
          </span>
          Meeting
        </p>
      </div>
      <div className='md:gap-8 my-8 mx-4 md:mx-16'>
        <small className='text-white'>Problemas con tu meeting link? <span onClick={handleOpen} className='text-green-500 cursor-pointer underline'>Click aqui!</span></small>
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
              <small className='text-gray-500 text-xs'>Current Url (link actual): {url} </small>
              <p>Ingresa aqui el link proporcionado por WhereBy. si aun no tienes tu link entra a esta pagina <a href='https://whereby.com/' className='text-sky-500 underline' target='_blank'>WhereBy</a> y crea tu cuenta super rapido, cuando tengas tu link personal ingresalo aqui y listo! todos tus estudiantes lo tendran a disposicion.</p>
              <form onSubmit={changeUrl} className='flex flex-col p-8 space-y-4'>
                <TextField id="filled-basic" label="Link given by WhereBy" variant="filled"
                  className='bg-gray-300 rounded-md w-full'
                  value={urlMeet}
                  type='text'
                  placeholder='https://whereby.com/***********'
                  onChange={(e) => setUrlMeet(e.target.value)}
                />
                <button type='submit' className='bg-[var(--color3)] py-4 text-lg text-white rounded-md'>Add link</button>
              </form>
            </Box>
          </Fade>
        </Modal>
        <ExternalApps role={"admin"} />
        <div className='bg-yellow-400 mx-4 mb-6 pb-8 rounded-md md:flex md:pb-0 max-w-5xl md:mx-auto'>
          <div className='bg-yellow-300 font-semibold text-lg md:text-2xl px-4 py-3 md:py-8 rounded-md shadow-md'>
            <span className='text-[var(--color2)] md:block text-3xl md:text-7xl'>Advices for Teachers!</span>
          </div>
          <div className='px-4 md:px-20 md:py-2'>
            <div className='my-4 space-y-2'>
              <p className='text-center text-md'>Recuerda preparar todas las lecciones <span className='text-[var(--color2)] font-bold text-xl'>Una Semana Antes</span></p>
              <p className='text-center text-md'>Tienes 24 horas para responder las dudas del <span className='text-[var(--color2)] font-bold text-xl'>Apoyo Academico</span></p>
              <p className='text-center text-md'>Asisna Actividades claras cuando no hagas <span className='text-[var(--color2)] font-bold text-xl'>Clase en Tiempo Real</span></p>
            </div>
            <div className='max-w-[90%] mx-auto'>
              <button onClick={() => router.push(`/Activities/`)} class="learn-more">
                <span class="circle bg-blue-950" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text text-blue-950">Asignar Actividades</span>
              </button>
            </div>
          </div>
        </div>
        <div className='w-full max-w-5xl mx-auto space-y-6 md:my-12 md:space-y-0 md:flex justify-evenly'>
          <div onClick={() => router.push(`/selectCharacter/${id}`)} className='group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
            <MdFaceRetouchingNatural className='z-10 text-5xl md:text-7xl' />
            <p className='z-10 group-hover:text-white'>
              Change
            </p>
            <p className='z-10 group-hover:text-white'>
              Character
            </p>
            <div className='h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute'></div>
            <div className='h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-cyan-300 to-blue-700 rounded-full -left-12 md:left-16 md:top-1 absolute'></div>
          </div>
          <div onClick={() => router.push("/adminCreate/createVideo/")} className='group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
            <TbBrandYoutubeKids className='z-10 text-5xl md:text-7xl' />
            <p className='z-10 group-hover:text-white'>
              Add a
            </p>
            <p className='z-10 group-hover:text-white'>
              Video
            </p>
            <div className='h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute'></div>
            <div className='h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-red-300 to-red-600 rounded-full -left-12 md:left-16 md:top-1 absolute'></div>
          </div>
          <div onClick={() => router.push("/Progress/")} className='group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
            <AiFillPieChart className='z-10 text-5xl md:text-7xl' />
            <p className='z-10 group-hover:text-white'>
              My
            </p>
            <p className='z-10 group-hover:text-white'>
              Students
            </p>
            <div className='h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute'></div>
            <div className='h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-green-300 to-green-700 rounded-full -left-12 md:left-16 md:top-1 absolute'></div>
          </div>
          <div onClick={() => router.push("/Activities/")} className='group active:scale-90 bg-white relative overflow-hidden flex gap-2 justify-center items-center py-6 md:py-2 md:w-56 rounded-md hover:shadow-lg shadow-black cursor-pointer hover:-translate-y-1 md:h-40 md:flex-col mx-4'>
            <MdTaskAlt className='z-10 text-5xl md:text-7xl' />
            <p className='z-10 group-hover:text-white'>
              Asign
            </p>
            <p className='z-10 group-hover:text-white '>
              Tasks
            </p>
            <div className='h-20 group-hover:scale-[100%] scale-0 w-20 z-[5] bg-white rounded-full -left-8 md:left-[72px] md:top-2 absolute'></div>
            <div className='h-32 md:h-24 md:w-24 group-hover:scale-[1000%] md:group-hover:scale-[350%] w-32 bg-gradient-to-tl from-yellow-200 to-yellow-600 rounded-full -left-12 md:left-16 md:top-1 absolute'></div>
          </div>
        </div>
        <div className='mx-4 flex justify-center flex-wrap gap-4 my-4'>
          {
            allUsers.length < 2 && (
              <div className='hover:-translate-y-1 cursor-pointer shadow-xl hover:shadow-black flex items-center flex-col bg-slate-300 rounded-lg p-2 w-72'>
                <YourProfile />
                <p className='text-2xl'>
                  Future Student
                </p>
                <div className='flex justify-between w-full px-4'>
                  <div className='group cursor-pointer flex gap-1 items-center'>
                    <BsHeartFill size={30} className='group-hover:fill-red-600 group-hover:-translate-y-1' />
                    <p className='group-hover:text-red-600 group-hover:-translate-y-1'>
                      0
                    </p>
                  </div>
                  <div className='group cursor-pointer flex gap-2 items-center'>
                    <FaTasks size={30} className='group-hover:fill-yellow-500 group-hover:-translate-y-1' />
                    <p className='group-hover:text-yellow-500 group-hover:-translate-y-1'>
                      0
                    </p>
                  </div>
                </div>
                <div className='w-[90%] mx-auto'>
                  <button class="learn-more my-2">
                    <span class="circle bg-gray-400" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-gray-400">No Disponible</span>
                  </button>
                </div>
              </div>
            )
          }
          {
            allUsers.map((student) => (
              <div className='hover:-translate-y-1 cursor-pointer shadow-xl hover:shadow-black flex items-center flex-col bg-slate-300 rounded-lg p-2 w-72'>
                <YourProfile char={student.profileImg} size={""} />
                <p className='text-2xl'>
                  {student.firstName}
                </p>
                <div className='flex justify-between w-full px-4'>
                  <div className='group cursor-pointer flex gap-1 items-center'>
                    <BsHeartFill size={30} className='group-hover:fill-red-600 group-hover:-translate-y-1' />
                    <p className='group-hover:text-red-600 group-hover:-translate-y-1'>
                      {student.likedVideos.length}
                    </p>
                  </div>
                  <div className='group cursor-pointer flex gap-2 items-center'>
                    <FaTasks size={30} className='group-hover:fill-yellow-500 group-hover:-translate-y-1' />
                    <p className='group-hover:text-yellow-500 group-hover:-translate-y-1'>
                      {student.activities.length}
                    </p>
                  </div>
                </div>
                <div className='w-[90%] mx-auto'>
                  <button onClick={() => router.push(`/ActivitiesDetail/${student.id}`)} class="learn-more my-2">
                    <span class="circle bg-[var(--color3)]" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-[var(--color3)]">Ver Actividades</span>
                  </button>
                </div>
              </div>
            ))
          }
          {
            allUsers.length < 3 && (
              <div className='hover:-translate-y-1 cursor-pointer shadow-xl hover:shadow-black flex items-center flex-col bg-slate-300 rounded-lg p-2 w-72'>
                <YourProfile />
                <p className='text-2xl'>
                  Future Student
                </p>
                <div className='flex justify-between w-full px-4'>
                  <div className='group cursor-pointer flex gap-1 items-center'>
                    <BsHeartFill size={30} className='group-hover:fill-red-600 group-hover:-translate-y-1' />
                    <p className='group-hover:text-red-600 group-hover:-translate-y-1'>
                      0
                    </p>
                  </div>
                  <div className='group cursor-pointer flex gap-2 items-center'>
                    <FaTasks size={30} className='group-hover:fill-yellow-500 group-hover:-translate-y-1' />
                    <p className='group-hover:text-yellow-500 group-hover:-translate-y-1'>
                      0
                    </p>
                  </div>
                </div>
                <div className='w-[90%] mx-auto'>
                  <button class="learn-more my-2">
                    <span class="circle bg-gray-400" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text text-gray-400">No Disponible</span>
                  </button>
                </div>
              </div>
            )
          }

        </div>
        <div className='mx-4 py-8 justify-center'>
          <div className='md:w-[80%] w-full  mx-auto rounded-md bg-black'>
            <Image className='object-cover w-full rounded-t-md' src={image3} />
            <div className='p-4'>
              <p className='text-white'>Working with Write & Improve</p>
              <p className='text-gray-600'>Cuando veas a un estudiante listo tambien puedes empezar a practicar su Writing con la herramienta de la colaboración University of Cambridge</p>
              <a href='https://writeandimprove.com/' target='_blank'>
                <button class="learn-more my-2">
                  <span class="circle bg-[var(--color2)]" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text text-[var(--color2)]">Go to the Page</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
