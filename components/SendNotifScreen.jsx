import React from 'react'
import { MdNotificationAdd } from 'react-icons/md'

export default function SendNotifScreen({ student, id, country }) {
  // stablish the changes on the db with this information and shows the student photo if necessary
  // josue has already the field appNotif that is a Boolean, here we are going to play with it
  return (
    <button className='group w-full py-4 flex justify-center gap-4 items-center rounded-full my-4 bg-[var(--color3)] hover:bg-black border-4 border-[var(--color3)] text-white'>
      <p className='text-black group-hover:text-[var(--color3)]'>Send Notification</p>
      <MdNotificationAdd fill='black' className='group-hover:fill-[var(--color3)] group-hover:rotate-12' size={24} />
    </button>
  )
}
