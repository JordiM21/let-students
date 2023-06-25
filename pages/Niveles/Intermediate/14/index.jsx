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
      href="/Niveles/Intermediate"
    >
      Intermediate
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
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>PAST CONTINUOUS - LESSON 14</p>
        <CustomTitle title={"Past Continuous"} titleSpanish={"EL PASADO CONTINUO"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=WdhwwqVaFLc"
          controls={true} />
        <p className='font-bold text-gray-700'>Esta lecciòn es genial asi que presta mucha atenciòn, el pasado continuo es muy importante que, para resumirte te hago el ejemplo: [Yo estaba jugando] (Significa algo que estabamos haci"endo") lo mismo que vimos en el nivel anterior, recuerdas? I am playing! [Yo estoy jugando] El pasado continuo se utiliza para acciones que estaban pasando en un momento específico en el pasado. Como el presente continuo, se forma con el verbo auxiliar “to be” y el verbo+ing.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <SingleExample
              english="
I was talking."
              spanish="Estaba hablando" />
            <SingleExample
              english="He was eating."
              spanish="Estaba comiendo." />
            <SingleExample
              english="They were learning."
              spanish="Estaban aprendiendo." />
            <SingleExample
              english="
I was not [wasn’t] talking."
              spanish="No estaba hablando." />
            <SingleExample
              english="He was not [wasn’t] eating."
              spanish="El no estaba comiendo." />
            <SingleExample
              english="They were not [weren’t] learning"
              spanish="No estaban aprendiendo." />
            <p className='font-bold text-gray-700'>Para preguntar como absolutamente todo en ingles invertimooooos el sujeto con el verbo auxiliar, asi:</p>
            <SingleExample
              english="Were you talking?"
              spanish="¿Estabas hablando?" />
            <SingleExample
              english="Was he eating?"
              spanish="¿Estaba comiendo?" />
            <SingleExample
              english="
Were they learning?"
              spanish="¿Estaban aprendiendo?" />
            <SingleExample
              english="Was it raining when you left?"
              spanish="¿Estaba lloviendo cuando te fuiste?" />
            <SingleExample
              english="Paula wasn’t living in Spain in 2005."
              spanish="Paula no estaba viviendo en España en el 2005." />
            <SingleExample
              english="My son was reading while I was cooking."
              spanish="Mi hijo estaba leyendo mientras que yo estaba cocinando." />
            <p className='font-bold text-gray-700'>WAIT WHAT? si no habias visto el "while" te lo presento, es muy util para hacer frases continuas y lo traducimos como "mientras" y se prenuncia [uail]</p>
            <SingleExample
              english="They were talking very loudly while we were trying to watch the movie."
              spanish="Estaban hablando muy alto mientras nosotros estábamos intentando mirar la película." />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={14} />
          </div>
        </div>
      </div>
    </div>
  )
}
