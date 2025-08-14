import { useAuth } from '@/context/AuthContext'
import { TextField } from '@mui/material'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import background from '@/public/background-landing.svg';
import NextImage from 'next/image';
import { Inter } from 'next/font/google';
import Icon from '@/public/Icon.png';
import gsap from 'gsap'

const inter = Inter({ subsets: ['latin'] });

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  borderRadius: 4,
};


export default function Login() {
  const { user, login } = useAuth()
  const router = useRouter()

  // useEffect(() => {
  //   if (user) {
  //     router.push("/Dashboard")
  //   }
  // }, [])

  const [data, setData] = useState({
    email: "",
    password: ""
  })
  
  const handleLogin = async (e) => {
    e.preventDefault()
     setTimeout(toast("Actualización en curso...", {
        hideProgressBar: true,
        autoClose: 500,
        type: 'error'
      }), 200)
  }

  // const handleLogin = async (e) => {
  //   e.preventDefault()
  //   try {
  //     await login(data.email, data.password)
  //     setTimeout(toast("¡Autenticación exitosa!", {
  //       hideProgressBar: true,
  //       autoClose: 200,
  //       type: 'success'
  //     }), 200)
  //     router.push("/Dashboard")
  //   } catch (error) {
  //     console.log(error)
  //     toast(`Algo salió mal, intenta de nuevo`, {
  //       autoClose: 1000,
  //       type: 'error'
  //     })
  //   }
  // }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='relative'>
      <div onClick={() => router.replace("/")} className='absolute top-3 left-4 hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm hover:shadow-md bg-[#F9F3D3] rounded-full p-[5px]'>
        <NextImage src={Icon} className='z-50 object-contain  w-[40px] h-[40px]'/>
      </div>
    <NextImage src={background} className="-z-10 h-screen object-cover absolute" />
    <div className='w-11/12 z-50 sm:max-w-md bg-[#f9f3d3ce] backdrop-blur-lg p-4 rounded-md absolute top-[12vh] left-1/2 transform -translate-x-1/2'>      <h1 className='text-5xl sm:text-6xl text-[#17332E] font-black my-4 text-center'>Inicia Sesión</h1>
      <div className='w-10/12 text-[#17332E] text-center font-black opacity-90 mx-auto'>Este módulo es exclusivo para estudiantes. Pero si estás interesado/a en el programa recuerda que puedes <a className='text-[#F46F21] font-black underline hover:no-underline cursor-pointer'>¡Solicitar Ingreso!</a></div>
      <form onSubmit={handleLogin} className='flex flex-col p-8 space-y-4'>
        <TextField id="filled-basic" label="Email" variant="filled"
          value={data.email}
          required
          type='email'
          placeholder='ingresa tu email'
          onChange={(e) => setData({
            ...data,
            email: e.target.value
          })}
        />
        <TextField id="filled-basic" label="Contraseña" variant="filled"
          value={data.password}
          required
          type='password'
          placeholder='ingresa tu contraseña'
          onChange={(e) => setData({
            ...data,
            password: e.target.value
          })}
        />
        <button type='submit' className='bg-[#F46F21] p-4 text-white text-xl font-black rounded-md'>
          Entra Ahora
        </button>
        <p className='text-sm font-black text-[#17332E] opacity-90'>¿Olvidaste tu contraseña? <a onClick={handleOpen} className=' underline hover:no-underline cursor-pointer'>Restablecer contraseña</a></p>
      </form>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfyFF63RLIe1vl0zewGgM9AL5_K1diq56x6Xqsf6Ab19VwCZA/viewform?embedded=true" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>                  </Box>
        </Modal>
      </div>
    </div>
    </div>
  )
}
