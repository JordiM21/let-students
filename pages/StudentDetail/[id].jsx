import { db } from '@/config/firebase'
import { Plans } from '@/models/Plans'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export default function () {
  const [user, setUser] = useState({})

  const router = useRouter()
  const id = router.query.id
  const [phone, setPhone] = useState(user.phone)
  const [level, setLevel] = useState(user.level)
  const [role, setRole] = useState(user.role)
  const [plan, setPlan] = useState(user.plan)
  const [asignedTutor, setAsignedTutor] = useState(user.asignedTutor)
  const [admins, setAdmins] = useState([])

  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.find(item => item.id == id);
        const adminsFound = newData.filter(item => item.role == "Admin")
        setAdmins(adminsFound)
        setUser(userMatched)
      })
  }

  useEffect(() => {
    fetchPost();
    if (!user) {
      router.push("/Dashboard")
    }
  }, [])

  const updateLevel = async (e) => {
    e.preventDefault()
    const nameRef = doc(db, "users", user.id);
    await updateDoc(nameRef, {
      level,
    });
    toast.success("succesfully changed the level!")
    setTimeout(() => {
      router.reload()
    }, 3000)
  }
  const updatePhone = async (e) => {
    e.preventDefault()
    const nameRef = doc(db, "users", user.id);
    await updateDoc(nameRef, {
      phone,
    });
    toast.success("succesfully changed the Phone Number!")
    setTimeout(() => {
      router.reload()
    }, 2500)
  }
  const updatePlan = async (e) => {
    e.preventDefault()
    const nameRef = doc(db, "users", user.id);
    await updateDoc(nameRef, {
      plan,
    });
    toast.success("succesfully changed the Plan!")
    setTimeout(() => {
      router.reload()
    }, 2500)
  }
  const updateRole = async (e) => {
    e.preventDefault()
    const nameRef = doc(db, "users", user.id);
    await updateDoc(nameRef, {
      role,
    });
    toast.success("succesfully changed the Role!")
    setTimeout(() => {
      router.reload()
    }, 2500)
  }
  const updateTutor = async (e) => {
    e.preventDefault()
    const nameRef = doc(db, "users", user.id);
    await updateDoc(nameRef, {
      asignedTutor,
    });
    toast.success("succesfully changed the Tutor!")
    setTimeout(() => {
      router.reload()
    }, 2500)
  }



  return (
    <div className='mx-4 max-w-xl md:mx-auto'>
      <h1 className='text-center text-[var(--color3)] text-3xl font-bold'>Changes page</h1>
      <small className='text-gray-500 text-center'>Here, as an admin you can modify the information of your students (be careful the changes can't be reverted)</small>
      <h2>Currently Modifying <span className='text-[var(--color3)] font-semibold'>{user.firstName} {user.lastName}</span> </h2>
      <form onSubmit={updateLevel} className='my-8'>
        <FormControl variant="filled" className='w-full'>
          <InputLabel id="demo-simple-select-standard-label">Modify the level</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-helper"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <MenuItem value="">
              <em>New level</em>
            </MenuItem>
            <MenuItem value="Beginner">Beginner</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Advanced">Advanced</MenuItem>
          </Select>
          <FormHelperText>current Level: {user.level}</FormHelperText>
        </FormControl>
        <button type='submit' className='w-full py-4 bg-[var(--color2)] text-white font-bold hover:opacity-75'>Change level</button>
      </form>
      <form onSubmit={updatePhone} className='my-8'>
        <FormControl variant="filled" className='w-full'>
          <TextField
            className='w-full'
            variant='filled'
            label="Modify the Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FormHelperText>current Phone Number: {user.phone}</FormHelperText>
        </FormControl>
        <button type='submit' className='w-full py-4 bg-[var(--color2)] text-white font-bold hover:opacity-75'>Change Phone Number</button>
      </form>
      <form onSubmit={updatePlan} className='my-8'>
        <FormControl variant="filled" className='w-full'>
          <InputLabel id="demo-simple-select-standard-label">Modify the Plan</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
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
          <FormHelperText>current Plan: {user.plan}</FormHelperText>
        </FormControl>
        <button type='submit' className='w-full py-4 bg-[var(--color2)] text-white font-bold hover:opacity-75'>Change Plan</button>
      </form>
      <form onSubmit={updateTutor} className='my-8'>
        <FormControl variant="filled" className='w-full'>
          <InputLabel id="demo-simple-select-standard-label">Modify the Asigned Tutor</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={asignedTutor}
            onChange={(e) => setAsignedTutor(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
              admins.map((admin) => (
                <MenuItem value={admin.firstName}>{admin.firstName}</MenuItem>
              ))
            }
          </Select>
          <FormHelperText>current Tutor: {user.asignedTutor}</FormHelperText>
        </FormControl>
        <button type='submit' className='w-full py-4 bg-[var(--color2)] text-white font-bold hover:opacity-75'>Change Plan</button>
      </form>
      <form onSubmit={updateRole} className='bg-yellow-400 p-4 rounded-md'>
        <p className='text-yellow-900 font-semibold text-xl'>Warning</p>
        <small>This will give permission to admin areas to a student</small>
        <FormControl variant="filled" className='w-full'>
          <InputLabel id="demo-simple-select-filled-label">Modify the Role</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
          <FormHelperText>current value: {user.role}</FormHelperText>
        </FormControl>
        <button type='submit' className='w-full py-4 bg-[var(--color4)] text-white font-bold hover:opacity-75'>Change Role</button>
      </form>
    </div>
  )
}
