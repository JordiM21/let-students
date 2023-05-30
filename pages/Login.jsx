import { useAuth } from '@/context/AuthContext'
import { TextField } from '@mui/material'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

  useEffect(() => {
    if (user) {
      router.push("/Dashboard")
    }
  }, [])

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(data.email, data.password)
      setTimeout(toast("¡Autenticación exitosa!", {
        hideProgressBar: true,
        autoClose: 200,
        type: 'success'
      }), 200)
      router.push("/Dashboard")
    } catch (error) {
      console.log(error)
      toast(`Algo salió mal, intenta de nuevo`, {
        autoClose: 1000,
        type: 'error'
      })
    }
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='w-11/12 sm:max-w-md bg-sky-300/40 p-4 rounded-md mx-auto mt-[10vh]'>
      <h1 className='text-4xl my-4 text-center'>Inicia Sesión</h1>
      <div className='w-10/12 mx-auto'>Si ya eres estudiante y tienes tus credenciales puedes iniciar sesión, si aún no tienes cuenta <a className='text-orange-500'>Únete a nosotros</a></div>
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
        <button type='submit' className='bg-orange-500 p-4 text-white text-xl rounded-full'>
          Entrar
        </button>
        <p className='text-sm text-gray-700'>¿Olvidaste tu contraseña? <a onClick={handleOpen} className='text-[var(--color3)] underline hover:no-underline cursor-pointer'>Restablecer contraseña</a></p>
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
  )
}
