import { useAuth } from '@/context/AuthContext'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { countries } from '@/models/Countries'
import { Plans } from '@/models/Plans'
import { useRouter } from 'next/router'
import { db } from '@/config/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function Register() {
  const { user, register } = useAuth()
  const [authUid, setAuthUid] = useState(user.uid)

  const router = useRouter()

  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.filter(item => item.uid == authUid);
        if (userMatched[0].role != "Admin") {
          router.push("/Dashboard")
        }
      })
  }
  useEffect(() => {
    fetchPost();
  }, [])


  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    country: "",
    phone: "",
    role: "",
    level: "",
    email: "",
    password: "",
    plan: ""
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await register(
        data.email,
        data.password,
        data.firstName,
        data.lastName,
        data.age,
        data.country,
        data.phone,
        data.role,
        data.level,
        data.plan
      )
      setData({
        firstName: "",
        lastName: "",
        age: "",
        country: "",
        phone: "",
        role: "",
        level: "",
        email: "",
        password: "",
        plan: ""
      })
      router.push("/Login")
    } catch (error) {
      console.log(error)
    }
    console.log(data)
  }
  return (
    <div className='w-11/12 sm:max-w-lg bg-sky-300/40 p-4 rounded-md mx-auto mt-[10vh]'>
      <h1 className='text-4xl my-4 text-center'>Registra un estudiante</h1>
      <div className='w-10/12 mx-auto'>Este usuario será almacenado en la base de datos y podrá acceder a la pagina web con estas credenciales</div>
      <form onSubmit={handleRegister} className='flex flex-col p-8 space-y-4'>
        <div className='flex gap-4'>
          <TextField id="filled-basic" label="Primer Nombre" variant="filled"
            value={data.firstName}
            required
            type='text'
            placeholder='Ingresa primer nombre'
            onChange={(e) => setData({
              ...data,
              firstName: e.target.value
            })}
          />
          <TextField id="filled-basic" label="Segundo Nombre" variant="filled"
            value={data.lastName}
            required
            type='text'
            placeholder='ingresa segundo nombre'
            onChange={(e) => setData({
              ...data,
              lastName: e.target.value
            })}
          />
        </div>
        <div className='flex gap-4'>
          <TextField id="filled-basic" label="Edad" variant="filled"
            value={data.age}
            required
            type='number'
            placeholder='Ingresa edad'
            onChange={(e) => setData({
              ...data,
              age: e.target.value
            })}
          />
          <FormControl variant="filled" className='w-full'>
            <InputLabel id="demo-simple-select-filled-label">País</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.country}
              onChange={(e) => setData({
                ...data,
                country: e.target.value
              })}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <TextField id="filled-basic" label="Celular" variant="filled"
          value={data.phone}
          required
          type='text'
          placeholder='ingresa numero celular sin código'
          onChange={(e) => setData({
            ...data,
            phone: e.target.value
          })}
        />
        <FormControl variant="filled" className='w-full'>
          <InputLabel id="demo-simple-select-filled-label">Plan Adquirido por estudiante</InputLabel>
          <Select
            required
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={data.plan}
            onChange={(e) => setData({
              ...data,
              plan: e.target.value
            })}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              Plans.map((plan) => (
                <MenuItem value={plan.value}>{plan.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <div className='flex gap-4'>
          <FormControl variant="filled" className='w-full'>
            <InputLabel id="demo-simple-select-filled-label">Nivel</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.level}
              onChange={(e) => setData({
                ...data,
                level: e.target.value
              })}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className='w-full'>
            <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.role}
              onChange={(e) => setData({
                ...data,
                role: e.target.value
              })}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField id="filled-basic" label="Email" variant="filled"
          value={data.email}
          required
          type='email'
          placeholder='ingresa email'
          onChange={(e) => setData({
            ...data,
            email: e.target.value
          })}
        />
        <TextField id="filled-basic" label="Contraseña" variant="filled"
          value={data.password}
          required
          type='password'
          placeholder='ingresa contraseña'
          onChange={(e) => setData({
            ...data,
            password: e.target.value
          })}
        />
        <button type='submit' className='bg-orange-500 p-4 text-white text-xl rounded-full'>
          Entrar
        </button>
        <a href='/Login'>Ir a login</a>
      </form>
    </div>
  )
}
