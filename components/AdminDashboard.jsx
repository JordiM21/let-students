import React from 'react'
import AddButton from './AddButton'
import ListOfUsers from './ListOfUsers'
import FormsCheck from './FormsCheck'

export default function AdminDashboard({ allUsers, firstName }) {
  return (
    <div>
      <p className='text-center text-4xl my-4 font-bold text-[var(--color2)]'>Welcome {firstName}!</p>
      <div className='bg-[var(--color3)] px-4 py-2'>
        <div className='flex justify-around items-center my-4'>
          <p className='text-[var(--color3Shadow)] text-xl sm:text-3xl font-bold'>Vista General Usuarios</p>
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
