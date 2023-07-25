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
      Unit 9
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Future Perfect - LESSON 9</p>
        <CustomTitle title={"Future Perfect"} titleSpanish={"El futuro perfecto"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=W7SApy1D4YU"
          controls={true} />
        <p className='font-bold text-gray-700'>Como hemos visto en las lecciones anteriores, hay dos maneras principales para expresar el futuro. A diferencia del futuro simple, en el tiempo perfecto, el uso de ellas es en general intercambiable.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>Affirmative Sentences (Frases afirmativas)</small>
            <SingleExample
              english="The party will [is going to] have ended by the time you finish work."
              spanish="La fiesta habrá terminado cuando termine el trabajo."
            />
            <SingleExample
              english="I’ll [I’m going to] have eaten before we meet."
              spanish="Habré comido antes de reunirnos."
            />
            <small className='text-sm opacity-60'>Negative Sentences (Frases negativas)</small>
            <SingleExample
              english="
The party won’t [isn’t going to] have ended by the time you finish work."
              spanish="La fiesta no habrá terminado cuando termine el trabajo.h"
            />
            <SingleExample
              english="I won’t [I’m not going to] have eaten before we meet."
              spanish="No habré comido antes de reunirnos."
            />
            <small className='text-sm opacity-60'>Interrogative Sentences (Frases interrogativas)</small>
            <SingleExample
              english="Will [Is] the party [going to] have ended before you finish work?"
              spanish="¿La fiesta habrá terminado antes de que termine el trabajo?"
            />
            <SingleExample
              english="Will [Are] you [going to] have eaten before we meet?"
              spanish="¿Habrás comido antes de reunirnos?"
            />
            <small className='text-sm opacity-60'>1. Se usa el futuro perfecto para acciones que ya se habrá terminado antes de otra acción en el futuro. También, se puede usar para expresar que algo va a suceder antes de un momento específico en el futuro.</small>
            <SingleExample
              english="
I’ll have finished my studies before I start my new job."
              spanish="Habré terminado mis estudios antes de comenzar mi nuevo trabajo."
            />
            <SingleExample
              english="Is Mike going to have trained enough before his first game?"
              spanish="¿Mike habrá entrenado lo suficiente antes de su primer partido?"
            />
            <SingleExample
              english="We won’t have become fluent in Spanish by the time we leave for Mexico next month."
              spanish="No vamos a tener fluidez en español antes de irnos a México el mes que viene."
            />
            <small className='text-sm opacity-60'>2. Utilizamos el futuro perfecto para mostrar que algo va a continuar hasta otra acción en el futuro.</small>
            <SingleExample
              english="Karen is going to have worked for 50 years by the time she retires."
              spanish="Karen habrá trabajado durante 50 años cuando se jubile."
            />
            <SingleExample
              english="Next week, I’ll have lived in Germany for 1 year."
              spanish="La semana que viene habré vivido en Alemania desde hace 1 año."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={9} />
          </div>
        </div>
      </div>
    </div>
  )
}
