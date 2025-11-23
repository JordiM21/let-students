import { useAuth } from '@/context/AuthContext'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { countries } from '@/models/Countries'
import { useRouter } from 'next/router'
import withUserData from '@/components/WithUserData'
import LoadingScreen from '@/components/LoadingScreen'

const Register = ({ userData, admins }) => {
  if (!userData) {
    return <LoadingScreen />
  }

  const { register } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (userData.role != 'Admin') {
      router.push('/Dashboard')
    }
  }, [])

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    country: '',
    phone: '',
    role: '',
    level: '',
    email: '',
    password: '',
    asignedTutor: '',
    startDate: new Date().toISOString(), // 👈 se asigna automáticamente
    parentName: '',
    matriculation: '',
    classDojoLink: '',
    paymentDate: '',
    paymentFrequency: '',
    paymentMethod: '',
    paymentPlatform: '',
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
        data.asignedTutor,
        data.startDate,
        data.parentName,
        data.matriculation,
        data.classDojoLink,
        data.paymentDate,
        data.paymentFrequency,
        data.paymentMethod,
        data.paymentPlatform
      )
      setData({
        firstName: '',
        lastName: '',
        age: '',
        country: '',
        phone: '',
        role: '',
        level: '',
        email: '',
        password: '',
        asignedTutor: '',
        startDate: new Date().toISOString(),
        parentName: '',
        matriculation: '',
        classDojoLink: '',
        paymentDate: '',
        paymentFrequency: '',
        paymentMethod: '',
        paymentPlatform: '',
      })
      router.push('/Login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-11/12 sm:max-w-lg bg-sky-300/40 p-4 rounded-md mx-auto mt-[10vh]">
      <h1 className="text-4xl my-4 text-center">Registra un estudiante</h1>
      <div className="w-10/12 mx-auto">
        Este usuario será almacenado en la base de datos y podrá acceder a la pagina web con estas credenciales
      </div>
      <form onSubmit={handleRegister} className="flex flex-col p-8 space-y-4">
        <div className="flex gap-4">
          <TextField
            id="filled-basic"
            label="Nombre"
            variant="filled"
            value={data.firstName}
            required
            type="text"
            placeholder="Ingresa nombre"
            onChange={(e) =>
              setData({
                ...data,
                firstName: e.target.value,
              })
            }
          />
          <TextField
            id="filled-basic"
            label="Apellido"
            variant="filled"
            value={data.lastName}
            required
            type="text"
            placeholder="ingresa apelldio"
            onChange={(e) =>
              setData({
                ...data,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <div className="flex gap-4">
          <TextField
            id="filled-basic"
            label="Edad"
            variant="filled"
            value={data.age}
            required
            type="number"
            placeholder="Ingresa edad"
            onChange={(e) =>
              setData({
                ...data,
                age: e.target.value,
              })
            }
          />
          <FormControl variant="filled" className="w-full">
            <InputLabel id="demo-simple-select-filled-label">País</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.country}
              onChange={(e) =>
                setData({
                  ...data,
                  country: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <TextField
          id="filled-basic"
          label="Celular"
          variant="filled"
          value={data.phone}
          required
          type="text"
          placeholder="ingresa numero celular sin código"
          onChange={(e) =>
            setData({
              ...data,
              phone: e.target.value,
            })
          }
        />
        {/* new ones  */}
        <TextField
          id="filled-basic"
          label="ClassDojo Link"
          variant="filled"
          value={data.classDojoLink}
          required
          type="text"
          placeholder="Link de ingreso ClassDojo"
          onChange={(e) =>
            setData({
              ...data,
              classDojoLink: e.target.value,
            })
          }
        />

        <TextField
          id="filled-basic"
          label="Matriculation Number"
          variant="filled"
          value={data.matriculation}
          required
          type="text"
          placeholder="ingresa numero de matrícula del estudiante"
          onChange={(e) =>
            setData({
              ...data,
              matriculation: e.target.value,
            })
          }
        />

        <TextField
          id="filled-basic"
          label="Parent Name"
          variant="filled"
          value={data.parentName}
          required
          type="text"
          placeholder="ingresa nombre del Representante"
          onChange={(e) =>
            setData({
              ...data,
              parentName: e.target.value,
            })
          }
        />

        {/* end of new ones  */}

        <FormControl variant="filled" className="w-full">
          <InputLabel id="demo-simple-select-filled-label">Tutor Asignado</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={data?.asignedTutor}
            onChange={(e) =>
              setData({
                ...data,
                asignedTutor: e.target.value,
              })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {admins.map((admin) => (
              <MenuItem value={admin.uid}>{admin.firstName}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="flex gap-4">
          <FormControl variant="filled" className="w-full">
            <InputLabel id="demo-simple-select-filled-label">Nivel</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.level}
              onChange={(e) =>
                setData({
                  ...data,
                  level: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className="w-full">
            <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.role}
              onChange={(e) =>
                setData({
                  ...data,
                  role: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          value={data.email}
          required
          type="email"
          placeholder="ingresa email asignado al estudiante"
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value,
            })
          }
        />
        <TextField
          id="filled-basic"
          label="Contraseña"
          variant="filled"
          value={data.password}
          required
          type="password"
          placeholder="El mismo numero de matrícula"
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value,
            })
          }
        />

        {/* payment register fields  */}
        <div className="flex flex-col gap-4 p-2 bg-slate-300 rounded-md">
          <TextField
            id="filled-basic"
            label="Payment Due Date"
            variant="filled"
            value={data.paymentDate}
            required
            type="text"
            placeholder="ex: 1 de cada Mes"
            onChange={(e) =>
              setData({
                ...data,
                paymentDate: e.target.value,
              })
            }
          />
          <FormControl variant="filled" className="w-full">
            <InputLabel id="demo-simple-select-filled-label">Payment Method</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.paymentMethod}
              onChange={(e) =>
                setData({
                  ...data,
                  paymentMethod: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="bnb-monthly">bnb-monthly</MenuItem>
              <MenuItem value="bnb-biweekly">bnb-biweekly</MenuItem>
              <MenuItem value="stripe-monthly">stripe-monthly</MenuItem>
              <MenuItem value="stripe-biweekly">stripe-biweekly</MenuItem>
              <MenuItem value="usd-stripe-monthly">usd-stripe-monthly</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className="w-full">
            <InputLabel id="demo-simple-select-filled-label">Payment Frequency</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.paymentFrequency}
              onChange={(e) =>
                setData({
                  ...data,
                  paymentFrequency: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Mensual">Mensual</MenuItem>
              <MenuItem value="Quincenal">Quincenal</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" className="w-full">
            <InputLabel id="demo-simple-select-filled-label">Payment Platform</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={data.paymentPlatform}
              onChange={(e) =>
                setData({
                  ...data,
                  paymentPlatform: e.target.value,
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Banco Nacional de Bolivia">Banco Nacional de Bolivia</MenuItem>
              <MenuItem value="Stripe">Stripe</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* end of payment register fields  */}

        <button type="submit" className="bg-orange-500 p-4 text-white text-xl rounded-full">
          Entrar
        </button>
        <a href="/Login">Ir a login</a>
      </form>
    </div>
  )
}
export default withUserData(Register)
