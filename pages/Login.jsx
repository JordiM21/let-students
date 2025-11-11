'use client'
import { useAuth } from '@/context/AuthContext'
import { TextField } from '@mui/material'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import background from '@/public/background-landing.svg'
import NextImage from 'next/image'
import { Inter } from 'next/font/google'
import Icon from '@/public/Icon.png'
import gsap from 'gsap'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { auth, db } from '@/config/firebase'

const inter = Inter({ subsets: ['latin'] })

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
}

export default function Login() {
  const { user, login } = useAuth()
  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    let identifier = data.email.trim()
    const password = data.password.trim()

    try {
      // 1. Check if it's an email or phone number
      let emailToUse = identifier
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(identifier)) {
        const q = query(collection(db, 'phoneToEmail'), where('phone', '==', identifier))
        const snapshot = await getDocs(q)
        if (!snapshot.empty) {
          emailToUse = snapshot.docs[0].data().email
        } else {
          throw new Error('No email found for this phone number')
        }
      }

      // 2. Proceed with login
      await login(emailToUse, password)

      // ✅ Show success toast immediately
      toast.success('¡Autenticación exitosa!', {
        hideProgressBar: true,
        autoClose: 1200, 
        closeOnClick: true,
        draggable: false,
        pauseOnHover: false,
      })

      // ✅ Redirect only after the toast finishes
      setTimeout(() => {
        router.push('/Dashboard')
      }, 1200)
    } catch (error) {
      console.error(error)
      toast.error('Algo salió mal, intenta de nuevo', {
        autoClose: 1500,
      })
    }
  }

  return (
    <div className="relative h-screen">
      <div
        onClick={() => router.push('/')}
        className="absolute top-3 left-4 hover:scale-110 active:scale-95 cursor-pointer hover:shadow-[#255d61] shadow-sm hover:shadow-md bg-[#F9F3D3] rounded-full p-[5px]"
      >
        <NextImage src={Icon} alt="logo" className="z-50 object-contain  w-[40px] h-[40px]" />
      </div>
      <NextImage src={background} alt="background" className="-z-10 h-screen object-cover absolute" />
      <div className="w-11/12 z-50 sm:max-w-md bg-[#f9f3d3ce] backdrop-blur-sm p-4 rounded-md absolute top-[16vh] left-1/2 transform -translate-x-1/2">
        {' '}
        <h1 className="text-5xl sm:text-6xl text-[#17332E] font-black my-4 text-center">Inicia Sesión</h1>
        <div className="w-10/12 text-[#17332E] text-center font-black opacity-90 mx-auto">
          Acceso a representantes y estudiantes de la academia, si necesitas ayuda
          <a href="" target="_blank" className="text-[#0b7425] font-black underline cursor-pointer">
            {' '}
            ¡Contáctanos!
          </a>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col p-8 space-y-4">
          <TextField
            id="filled-basic"
            label="Email o Teléfono"
            variant="filled"
            value={data.email}
            required
            type="text"
            placeholder="ingresa tu email o número de teléfono"
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
          <TextField
            id="filled-basic"
            label="Número de Matrícula"
            variant="filled"
            value={data.password}
            required
            type="password"
            placeholder="ingresa tu contraseña"
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
          <button type="submit" className="bg-[#F46F21] p-4 text-white text-xl font-black rounded-md">
            Entra Ahora
          </button>
        </form>
      </div>
    </div>
  )
}
