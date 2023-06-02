import React from 'react'
import AddButton from './AddButton'
import ListOfUsers from './ListOfUsers'
import FormsCheck from './FormsCheck'

export default function AdminDashboard({ allUsers, firstName }) {
  return (
    <div>
      <p className='text-center text-4xl py-4 font-bold text-[var(--color2)]'>Welcome {firstName}!</p>
      <div className='px-4 py-2'>
        <div className='flex justify-around items-center py-4'>
          <p className='text-white text-xl sm:text-3xl font-bold'>General View Students</p>
          <AddButton text={"Registrar Estudiante"} link={"/Register"} />
        </div>
        <ListOfUsers allUsers={allUsers} />
      </div>
      <div>
        <FormsCheck />
      </div>
    </div>
  )
}
