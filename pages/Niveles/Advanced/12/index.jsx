import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import VideoPlayer from '@/components/VideoPlayer';

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
      Unit 12
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>The Passive Voice - LESSON 12</p>
        <CustomTitle title={"The Passive Voice"} titleSpanish={"LA VOZ PASIVA"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=e5XiIOybips"} />
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>Hasta ahora hemos hablado de la voz activa donde enfocamos la acción del verbo en el sujeto. Pero cuando queremos dar más importancia a la acción y no a quien la ha realizado, utilizamos la voz pasiva.</small>
            <p className='text-sm opacity-60'>VEAMOS LA DIFERENCIA!</p>
            <p className='text-sm opacity-60  underline'>La voz activa</p>
            <SingleExample
              english="He ate all of the cookies."
              spanish="Comió todas las galletas."
            />
            <small className='text-sm opacity-60  underline'>La voz pasiva</small>
            <SingleExample
              english="All of the cookies were eaten."
              spanish="Todas las galletas fueron comidas."
            /><SingleExample
              english="The speech is written for the president."
              spanish="El discurso está escrito para el presidente."
            /><SingleExample
              english="The house was built in 1975."
              spanish="La casa fue construida en 1975."
            /><SingleExample
              english="My wallet has been stolen."
              spanish="Ha sido robada mi cartera."
            /><SingleExample
              english="The room will be cleaned while we are out."
              spanish="Se limpiará la habitación mientras estemos fuera."
            />
            <small className='text-sm opacity-60  underline'>Más ejemplos!</small>
            <p className='text-sm opacity-60  underline'>La voz activa</p>
            <SingleExample
              english="Mark Twain wrote the book."
              spanish="Mark Twain escribió el libro."
            />
            <small className='text-sm opacity-60  underline'>La voz pasiva</small>
            <SingleExample
              english="The book was written by Mark Twain."
              spanish="El libro fue escrito por Mark Twain."
            />
            <p className='text-sm opacity-60'>Mas ejemplos de uso de la voz pasiva</p>
            <SingleExample
              english="A civilian has been killed."
              spanish="Un civil ha sido asesinado."
            /><SingleExample
              english="The car was stolen."
              spanish="El coche fue robado."
            />
            <SingleExample
              english="The letter was delivered yesterday."
              spanish="La carta fue entregada ayer"
            />
            <SingleExample
              english="
A mistake was made."
              spanish="Un error fue cometido."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={12} />
          </div>
        </div>
      </div>
    </div>
  )
}
