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
      href="/Niveles/Intermediate"
    >
      Intermediate
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 8
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>The Gerund and Infinitive - LESSON 8</p>
        <CustomTitle title={"The Gerund and Infinitive"} titleSpanish={"EL GERUNDIO Y INFINITIVO"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=-s1gu725tA4"} />
        <p className='font-bold text-gray-700'>El gerundio y el infinitivo son formas de los verbos que actúan como nombres. El gerundio se forma con “-ing” (walking, eating, etc.). Como hemos visto en la lección sobre los verbos, el infinitivo se forma con la preposición “to” (to walk, to eat, etc.).</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <SingleExample
              english="He began doubting himself."
              spanish="Comenzó a dudar de sí mismo." />
            <SingleExample
              english="They decided to move to Australia in May."
              spanish="Decidieron mudarse a Australia en Mayo." />
            <SingleExample
              english="I enjoy listening to music."
              spanish="Disfruto escuchando música." />
            <SingleExample
              english="She hates studying. / She hates to study."
              spanish="Odia estudiar." />
            <SingleExample
              english="You love dancing. / You love to dance."
              spanish="Te encanta bailar." />
            <SingleExample
              english="
She can’t tolerate complaining."
              spanish="No puede tolerar quejas." />
            <SingleExample
              english="
I tried learning English. / I tried to learn English."
              spanish="He intentado aprender inglés." />
            <SingleExample
              english="
I like cooking. / I like to cook."
              spanish="Me gusta cocinar" />
            <SingleExample
              english="
She continued working. / She continued to work."
              spanish="Continuó trabajando." />
            <SingleExample
              english="Swimming is good exercise."
              spanish="Nadar es un buen ejercicio" />
            <SingleExample
              english="Drinking and driving is dangerous."
              spanish="Beber y conducir es peligroso." />
            <SingleExample
              english="My favorite exercise is swimming."
              spanish="Mi ejercicio favorito es la natación." />
            <SingleExample
              english="He’s good at listening."
              spanish="El Escucha bien." />
            <SingleExample
              english="I always read before going to bed."
              spanish="Siempre leo antes de acostarme." />
            <SingleExample
              english="You can’t leave without saying goodbye."
              spanish="No puedes salir sin despedirte." />
            <SingleExample
              english="What is the advantage of waiting?"
              spanish="¿Cuál es la ventaja de esperar?" />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={8} />
          </div>
        </div>
      </div>
    </div>
  )
}
