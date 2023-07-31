import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';

export default function index() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/Niveles"
    >
      Levels
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/Niveles/Advanced"
    >
      Advanced
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 14
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Do vs. Make - LESSON 14</p>
        <CustomTitle title={"Do vs. Make"} titleSpanish={"HACER"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url=""
          controls={true} />
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>“Do” y “make” son dos verbos que se confunden frecuentemente en inglés. Ambos se pueden traducir como “hacer”, pero hay algunas diferencias en su significado. En general, “do” considera más la acción, mientras que utilizando “make” nos referimos más al resultado de la acción.</small>
            <CustomTitle title={"Do"} titleSpanish={"Se usa “do” para acciones, actividades y trabajos. Se utiliza en un sentido amplio, como de “realizar”. En general, estas acciones y actividades no producen un objeto físico."} />
            <SingleExample
              english="Do the homework"
              spanish="Hacer la tarea"
            />
            <SingleExample
              english="Do the Dishes"
              spanish="Hacer los platos (Lavarlos)"
            />
            <SingleExample
              english="Do exercise"
              spanish="Hacer ejercicio"
            />
            <SingleExample
              english="What are you doing today? I’m not doing anything."
              spanish="¿Qué haces hoy? No hago nada."
            />
            <SingleExample
              english="He’s always doing nice things for his girlfriend."
              spanish="Siempre hace cosas buenas para su novia."
            />
            <SingleExample
              english="Are you doing anything important right now?"
              spanish="¿Haces algo importante ahora mismo?"
            />
            <CustomTitle title={"Make"} titleSpanish={"Se utiliza “make” en el sentido de “fabricar”, “elaborar” o “crear”. Se usa para actividades en que se crea algo que se puede tocar, un objeto físico."} />
            <SingleExample
              english="make a decision"
              spanish="tomar una decisión"
            />
            <SingleExample
              english="make a choice"
              spanish="hacer una elección"
            />
            <SingleExample
              english="make a plan"
              spanish="trazar/hacer un plan"
            />
            <SingleExample
              english="make an appointment"
              spanish="pedir cita/hora, concertar una cita"
            />
            <SingleExample
              english="make a mistake"
              spanish="cometer un error"
            />
            <SingleExample
              english="make money"
              spanish="ganar dinero"
            />
            <SingleExample
              english="make an effort"
              spanish="hacer un esfuerzo"
            />
            <SingleExample
              english="make fun of"
              spanish="reírse/burlarse de"
            />
            <SingleExample
              english="make [a] noise"
              spanish="hacer [un] ruido"
            />
            <SingleExample
              english="make peace"
              spanish="firmar la paz"
            />
            <SingleExample
              english="make a phone call"
              spanish="hacer una llamada"
            />
            <SingleExample
              english="make a change"
              spanish="hacer un cambio"
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={14} />
          </div>
        </div>
      </div>
    </div>
  )
}
