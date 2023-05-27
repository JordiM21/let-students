import { useAuth } from '@/context/AuthContext'
import { TextField } from '@mui/material'
import { Router, useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Login() {
  const { user, login } = useAuth()
  const router = useRouter()

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(data.email, data.password)
      router.push("/Dashboard")
    } catch (error) {
      console.log(error)
    }
  }

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
        <p className='text-sm text-gray-700'>¿Tienes problemas al iniciar sesión? comunicate con <a>Soporte al cliente</a></p>
        <a href='/Register'>Registrarme</a>
      </form>
    </div>
  )
}
