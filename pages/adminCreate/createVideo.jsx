import { db } from '@/config/firebase'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function createVideo() {

  const [title, setTitle] = useState("")
  const [level, setLevel] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter()

  const createVideo = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, "Immersive"), {
      title,
      level,
      url,
      description,
    }).then(() => (
      toast.success("Video added succesfuly!"))
    )
    setTimeout(() => {
      router.reload()
    }, 2500)
  }

  return (
    <div className='bg-[var(--bluebg)] min-h-screen'>
      <div>
        <h1 className='text-white text-xl text-center font-bold'>Add a video</h1>
        <p className='opacity-50 font-bold text-sm text-center'>This video will appear automatically on the immersive section of the students</p>
      </div>
      <div className='w-10/12 mx-auto max-w-2xl my-2'>
        <form className='space-y-4' onSubmit={createVideo}>
          <TextField className='w-full bg-white' id="filled-basic" label="Title of the youtube Video" variant="filled"
            value={title}
            required
            type='text'
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormControl variant="filled" className='w-full bg-white'>
            <InputLabel id="demo-simple-select-filled-label">What's the level of the video?</InputLabel>
            <Select
              required
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <MenuItem value="Beginner">Beginner</MenuItem>
              <MenuItem value="Intermediate">Intermediate</MenuItem>
              <MenuItem value="Advanced">Advanced</MenuItem>
            </Select>
          </FormControl>
          <TextField className='w-full bg-white' id="filled-basic" label="Copy and paste the exact url" variant="filled"
            value={url}
            required
            type='text'
            onChange={(e) => setUrl(e.target.value)}
          />
          <TextField className='w-full bg-white' id="filled-basic" label="add a description for the video" variant="filled"
            value={description}
            required
            type='text'
            multiline
            rows={6}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className='bg-[var(--color3)] text-white font-bold w-full py-4 rounded-md hover:-translate-y-2 transition-all 1s ease-in hover:opacity-80' type='submit'>Add video</button>
        </form>
      </div>
    </div>
  )
}
