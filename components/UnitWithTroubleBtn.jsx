import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsQuestionCircle } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Lottie from 'lottie-react'
import onlineClass from '@/public/animations/onlineClass3.json'
import { useMediaQuery } from '@mui/material';

export default function UnitWithTroubleBtn({ unit, level }) {
  const [clicked, setClicked] = useState(false)
  const router = useRouter()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userMatched, setUserMatched] = useState({})
  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)

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


  const fetchUser = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userFound = newData.find(item => item.uid == authUid);
        setUserMatched(userFound)
      })
  }

  useEffect(() => {
    const checkLikedStatus = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const user = newData.find((user) => user.id === userMatched.id);
        if (user && user.unitInTrouble.includes(unit)) {
          setClicked(true);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    checkLikedStatus();
  }, [unit, userMatched]);

  useEffect(() => {
    fetchUser();
  }, [])


  const handleClick = async () => {
    if (userMatched.unitInTrouble?.length > 0) {
      setOpen(false)
      return toast.error("Ya pediste ayuda una vez, solo puedes solicitar una a la vez!")
    }
    if (!clicked) {
      try {
        const userRef = doc(db, "users", userMatched.id);
        await updateDoc(userRef, {
          unitInTrouble: [...userMatched.unitInTrouble, unit],
        }).then(() => toast.success("Ya notificamos a tu tutor!"))
        setClicked(true);
        setOpen(false)
      } catch (error) {
        console.error('Error updating liked videos:', error);
      }
    }
    else {
      toast.info("This video is already on your list!")
    }
  };
  const [question, setQuestion] = useState(false)

  return (
    <div className='my-4 relative'>
      <p className='text-gray-700 text-xl font-bold text-center'>Hey! ¿No entendiste muy bien todo o necesitas ayuda?</p>
      <button className={`w-11/12 relative mt-4`}>
        <div className={`w-full mt-4 py-4 rounded-full border-4 border-[var(--color3)]  ${clicked ? "bg-[var(--color3)] " : ""}`} onClick={handleOpen}>
          <p>{clicked ? 'Listo, lo veremos pronto' : 'Pide ayuda a tu tutor'}</p>
        </div>
        <div onClick={() => setQuestion(!question)} className='absolute -right-8 top-9 hover:bg-slate-300 rounded-full'>
          <BsQuestionCircle className='w-6 h-6 ' />
        </div>
      </button >
      {
        question && (
          <div className='bg-gray-200 backdrop-blur-sm bg-opacity-60 p-6 shadow-gray-500 z-50 rounded-md shadow-lg max-w-[250px] absolute right-0'>
            <AiFillCloseCircle className='absolute top-2 cursor-pointer right-2 w-6 h-6' onClick={() => setQuestion(!question)} />
            <p>No te preocupes si no entiendes todo a la primera, es normal!. <br /> Con esta opción tu profesor podrá ver tu solicitud y te lo explicará la proxima clase <br /> <span className='text-[var(--color3)]'>RECUERDA PEDIR AYUDA CON UNA A LA VEZ, NO PUEDES SOLICITAR AYUDA CON 2 AL MISMO TIEMPO</span>, debes esperar a resolver las dudas con la clase actual y luego podras hacerlo con otras</p>
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
            <Typography id="transition-modal-title" variant="h6" component="h2" className='text-blue-500 font-bold'>
              Pide ayuda a tu tutor
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Le envias una notificacion a tu tutor para que sepa que necesitas ayuda, luego se pondran de acuerdo via <span className='text-green-600'>WhatsApp</span> y resolveras todas tus dudas entrando al link de la <span className='text-green-600'>videollamada</span> en la Home.
            </Typography>
            <Lottie
              animationData={onlineClass} />
            <div className='flex justify-around pt-4'>
              <button className='py-2 text-blue-400 rounded-full border-4 border-blue-400 px-8' onClick={handleClose}>
                Mejor no
              </button>
              <button className='py-2 text-white bg-blue-400 rounded-full border-4 border-blue-400 px-8' onClick={handleClick}>
                Solicitar ayuda
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div >
  )
}
