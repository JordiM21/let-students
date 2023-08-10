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
      Unit 17
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>FUTURE CONTINUOUS - LESSON 17</p>
        <CustomTitle title={"Future Continuous"} titleSpanish={"EL FUTURO CONTINUO"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=eOs0cZ12Fhk"} />
        <p className='font-bold text-gray-700'>Escucha el video atentamente y mira las palabras subrayadas en rojo y entiende el contexto. Para formar el futuro continuo se utilizan “will be” o “be going to” y el verbo+ing.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <SingleExample
              english="
I will be talking. / I’m going to be talking."
              spanish="Estaré hablando." />
            <p className='font-bold text-gray-700'>Te lo puedo explicar sencillo como: La frase yo voy a estar + verbo (ando, endo) ejemplo: estaré trabajando (i will be working) que con going to es lo mismo pero decimos yo voy a estar trabajando (i am going to be working)</p>
            <SingleExample
              english="He will be eating. / He’s going to be eating."
              spanish="El estará comiendo" />
            <SingleExample
              english="They will be learning. / They’re going to be learning."
              spanish="Ellos Estarán aprendiendo." />
            <SingleExample
              english="
I will not [won’t] be talking. / I’m not going to be talking."
              spanish="No estaré hablando." />
            <SingleExample
              english="He will not [won’t] be eating. / He’s not going to be eating."
              spanish="El no estará comiendo." />
            <SingleExample
              english="They will not [won’t] be learning. / They’re not going to be learning."
              spanish="No estarán aprendiendo" />
            <SingleExample
              english="Will you be talking? / Are you going to be talking?"
              spanish="¿Estarás hablando?" />
            <SingleExample
              english="
Will he be eating? / Is he going to be eating?"
              spanish="¿Estará comiendo?" />
            <SingleExample
              english="
Will they be learning? / Are they going to be learning?"
              spanish="¿Estarán aprendiendo?" />
            <SingleExample
              english="
Jose will be [Jose’s going to be] watching the news when you call."
              spanish="Jose estará mirando las noticias cuando le llames." />
            <SingleExample
              english="Will it be [Is it going to be] raining when l leave?"
              spanish="¿Estará lloviendo cuando salga?" />
            <SingleExample
              english="Paula will be [Paula’s going to be] living in Spain next April."
              spanish="Paula estará viviendo en España el próximo abril." />
            <SingleExample
              english="We’ ll still be working [ We’re still going to be working] at 10 o’clock tomorrow night."
              spanish="Todavía estaremos trabajando a las 10 mañana por la noche." />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={17} />
          </div>
        </div>
      </div>
    </div>
  )
}
