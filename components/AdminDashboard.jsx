import React, { useState } from 'react'
import AddButton from './AddButton'
import ListOfUsers from './ListOfUsers'
import FormsCheck from './FormsCheck'
import Image from 'next/image'
import image3 from '@/public/cambridgeandlet.png'
import enviroment from '@/public/enviromentsAdmin.png'
import allStudents from '@/public/AllStudents.png'
import { AiFillCloseCircle, AiOutlineCopy } from 'react-icons/ai'
import copy from 'clipboard-copy';
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { FcAutomatic, FcBullish, FcCalendar, FcContacts, FcHighPriority, FcVideoCall } from 'react-icons/fc'
import { Box, Fade, Modal, TextField, useMediaQuery } from '@mui/material'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { BsFillCameraVideoFill, BsQuestionCircle } from 'react-icons/bs'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CtaAnimationPage from './CtaAnimationPage'
import student from '@/public/animations/student.json'
import Backdrop from '@mui/material/Backdrop';
import ExternalApps from './ExternalApps'
import YourProfile from './YourProfile'

export default function AdminDashboard({ allUsers, profileImg, firstName, email, id, url }) {

  // const [mail] = useState("learnenglishtogether21@gmail.com")
  // const [password] = useState("let-admin")
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

  const handleCopy = (mail) => {
    copy(mail)
    toast.success("Copied!")
  }

  const [beginnerCode] = useState("Z8M2D7GG")
  const [intermediateCode] = useState("R2PMQGRC")
  const [advancedCode] = useState("2DG2QZ9C")

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

  const [question, setQuestion] = useState(false)
  const [meetingRoom, setMeetingRoom] = useState(false)


  return (
    <div>
      {
        meetingRoom == true && (
          <CtaAnimationPage
            title={"Resuelve las dudas de tus estudiantes!"}
            subTitle={`Antes de entrar debes haber establecido un horario con tus estudiantes, recuerda ser muy puntual!`}
            animation={student}
            cta={"Enter in the meeting"}
            btn="link"
            link={url}
            bg="green"
          />
        )
      }
      <div className='flex justify-center items-center pt-4'>
        <h1 className='text-center text-4xl mx-4 py-2 font-bold text-white'>Welcome {firstName}!</h1>
        <YourProfile char={profileImg} size={"small"} />
      </div>      {
        email == "jordimantilla21@gmail.com" && (
          <div className='px-4 py-2'>
            <div className='flex justify-around items-center py-4'>
              <p className='text-white text-xl sm:text-3xl font-bold'>General View Students</p>
              <AddButton text={"Registrar Estudiante"} link={"/Register"} />
            </div>
            <ListOfUsers allUsers={allUsers} />
          </div>
        )
      }
      <div className='md:gap-8 my-8 mx-4 md:mx-16'>
        <div className='md:flex justify-around w-full'>
          <div className='relative space-y-2 my-4 md:w-[400px]'>
            <p className='text-white text-xl'>Link for meetings</p>
            <div onClick={() => setQuestion(!question)} className='absolute right-4 top-0 cursor-pointer bg-slate-300 rounded-full'>
              <BsQuestionCircle className='w-6 h-6 ' />
            </div>
            <div onClick={() => setMeetingRoom(true)} className='flex bg-green-500 cursor-pointer gap-8 hover:gap-10 hover:opacity-80 py-4 rounded-full w-full justify-center items-center'>
              <p className='text-white'>Entra a la meeting</p>
              <BsFillCameraVideoFill fill='white' size={40} />
            </div>
            <small className='text-white'>Aun no tienes link? no sabes como crearlo? <span onClick={handleOpen} className='text-green-500 cursor-pointer underline'>Click aqui!</span></small>
            {
              question && (
                <div className='bg-gray-200 backdrop-blur-sm bg-opacity-80 p-6 shadow-gray-500 z-50 rounded-md shadow-lg max-w-[250px] absolute right-0'>
                  <AiFillCloseCircle className='absolute top-2 cursor-pointer right-2 w-6 h-6' onClick={() => setQuestion(!question)} />
                  <p>Lo primero que tienes que hacer es ir a este <a href='https://whereby.com/' className='text-sky-500 underline' target='_blank'>link</a> y crearte una cuenta con tu correo. <br />Luego debes crear un link personalizado en la pagina, recomendamos que este link tenga tu nombre ya que es unico y siempre te conectaras con tus estudiantes por este link<br /> <span className='text-[var(--color3)]'>LISTO!</span>, agrega tu link aqui abajo para que tus estudiantes puedan acceder facilmente</p>
                </div>
              )
            }
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
          </div>
          <ExternalApps role={"admin"} />
        </div>
        <div className='max-md:space-y-8 md:flex items-start md:gap-4 md:mx-20 '>
          <div className='w-11/12 mx-auto rounded-md bg-black'>
            <Image className='object-cover w-full h-[120px] md:h-[200px] rounded-t-md' src={enviroment} />
            <div className='p-4'>
              <p className='text-white'>Add a new video</p>
              <p className='text-gray-600'>Only admins and tutors can create videos for the students, why don't you try iy? you only have to add the url for youtube, the name, put a level and a description. Try it!</p>
              <div className='flex gap-3 flex-col justify-center my-4'>
                <p className='text-[var(--color3)] text-center'>Remember to put the level correctly</p>
              </div>
              <button onClick={() => router.push("/adminCreate/createVideo")} className='cursor-pointer w-full rounded-full border-4 border-white py-3 text-white hover:bg-gray-800'>
                <a>Create a Video</a>
              </button>
            </div>
          </div>
          <div className='w-11/12 mx-auto rounded-md bg-black'>
            <Image className='object-cover w-full rounded-t-md' src={image3} />
            <div className='p-4'>
              <p className='text-white'>ADMIN ACCESS TO THE WRITE & IMPROVE PAGE</p>
              <p className='text-gray-600'>You already have access as an administrator to the write & improve page to see the students results and tasks finished.</p>
              <p className='text-gray-200 text-xs '>LET Academy paga la subscripcion premium para que todos los administradores puedan ver los resultados de sus alumnos en tiempo real.</p>
              <div className='flex gap-3 flex-col justify-center my-4'>
                <p className='text-[var(--color3)] text-center'>Share the workbooks code with your students.</p>
                <div onClick={() => handleCopy(beginnerCode)} className='flex bg-white justify-center gap-2 items-center px-6 py-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                  <p>Beginner Code: {beginnerCode} </p>
                  <AiOutlineCopy />
                </div>
                <div onClick={() => handleCopy(intermediateCode)} className='flex bg-white items-center px-6 py-2 justify-center gap-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                  <p>Intermediate Code: {intermediateCode} </p>
                  <AiOutlineCopy />
                </div>
                <div onClick={() => handleCopy(advancedCode)} className='flex bg-white items-center px-6 py-2 justify-center gap-2 rounded-md cursor-pointer hover:bg-opacity-80'>
                  <p>Advanced Code: {advancedCode} </p>
                  <AiOutlineCopy />
                </div>
              </div>
              <button className='cursor-pointer w-full rounded-full border-4 border-white py-3 text-white hover:bg-gray-800'>
                <a href='https://writeandimprove.com/' target='_blank'>Go to the page</a>
              </button>
            </div>
          </div>
        </div>
        <div className='bg-black rounded-md md:max-w-3xl my-8 mx-auto'>
          <Image src={allStudents} className='rounded-t-md h-[150px] md:h-[250px] w-full object-cover' />
          <div>
            <div className='flex items-center justify-start gap-2 p-4'>
              <FcBullish size={24} />
              <p className='text-white'>Check your students progress</p>
            </div>
            <div className='flex items-center justify-start gap-2 p-4'>
              <FcAutomatic size={24} />
              <p className='text-white'>Modify their information</p>
            </div>
            <div className='items-center hidden md:flex justify-start gap-2 p-4'>
              <FcContacts size={24} />
              <p className='text-white'>Access to contact data</p>
            </div>
            <div className=' hidden md:flex items-center justify-start gap-2 p-4'>
              <FcHighPriority size={24} />
              <p className='text-white'>Help your students in trouble in real time</p>
            </div>
            <div className='hidden md:flex items-center justify-start gap-2 p-4'>
              <FcCalendar size={24} />
              <p className='text-white'>See the student schedule and disponibility</p>
            </div>
            <div className='flex justify-center pb-6'>
              <button onClick={() => router.push("/Progress")} className='w-11/12 py-4 rounded-full border-4 border-white text-white hover:bg-gray-700'>
                Check it out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FormsCheck />
      </div>
    </div>
  )
}
