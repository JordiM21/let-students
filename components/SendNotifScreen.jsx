import React, { useState } from 'react'
import { MdNotificationAdd } from 'react-icons/md'
import ExternalApps from './ExternalApps'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { BsX, BsXCircleFill } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

export default function SendNotifScreen({ student, id, country }) {
  // stablish the changes on the db with this information and shows the student photo if necessary
  // josue has already the field appNotif that is an object with the properties name: name of the app, and notif is a boolean on false by default



  const [app, setApp] = useState("")
  const [modal, setModal] = useState(false)

  const handleClick = async () => {
    if (app == "") {
      return toast.error("Selecciona almenos una app para notificar al estudiante")
    }
    try {
      const userRef = doc(db, "users", id);
      const userDoc = await getDoc(userRef);
      const currentAppNotif = userDoc.data().appNotif || [];
      if (currentAppNotif.includes(app)) {
        return toast.info("¡Ya has notificado a tu estudiante con esta app!");
      }
      const updatedAppNotif = [...currentAppNotif, app];
      await updateDoc(userRef, { appNotif: updatedAppNotif });
      toast.success("¡Ya notificamos a tu estudiante!");
    } catch (error) {
      toast.error('Error notifying your student:', error);
    }
    setModal(!modal)
  }


  return (
    <>
      {
        modal && (
          <div className='bg-gray-900 px-4 py-8 absolute right-0 rounded-md z-30'>
            <BsXCircleFill onClick={() => setModal(!modal)} size={18} className='fill-[var(--color3)] mb-4 absolute right-4 top-2' />
            <FormControl variant="filled" className='w-full bg-gray-200'>
              <InputLabel id="demo-simple-select-standard-label">App to notify</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-helper"
                value={app}
                onChange={(e) => setApp(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select an app</em>
                </MenuItem>
                <MenuItem value="Flip">Flip</MenuItem>
                <MenuItem value="Kahoot">Kahoot</MenuItem>
                <MenuItem value="Padlet">Padlet</MenuItem>
              </Select>
            </FormControl>
            <p className='text-sm text-gray-700'>This is going to notify the student about the activity, do it only if you have already asign the activity</p>
            <button onClick={handleClick} className='group w-full py-4 flex justify-center gap-4 items-center rounded-full my-4 bg-[var(--color3)] hover:bg-black border-4 border-[var(--color3)] text-white'>
              <p className='text-black group-hover:text-[var(--color3)]'>Send it</p>
            </button>
          </div>
        )
      }
      {
        !modal && (
          <button onClick={() => setModal(!modal)} className='group w-full py-4 flex justify-center gap-4 items-center rounded-full my-4 bg-[var(--color3)] hover:bg-black border-4 border-[var(--color3)] text-white'>
            <p className='text-black group-hover:text-[var(--color3)]'>Send Notification</p>
            <MdNotificationAdd fill='black' className='group-hover:fill-[var(--color3)] group-hover:rotate-12' size={24} />
          </button>
        )
      }
    </>
  )
}
