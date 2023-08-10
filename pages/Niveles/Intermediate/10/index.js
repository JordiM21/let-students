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
      Unit 10
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>QUESTIONS - LESSON 10</p>
        <CustomTitle title={"Question Tags"} titleSpanish={"LAS PREGUNTAS COLETILLA"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=QkYBiPEIwVE"} />
        <p className='font-bold text-gray-700'>En inglés es frecuente terminar las frases con otra frase corta, de signo contrario, la cual tiene la intención de pedir la opinión o buscar la aprobación del interlocutor: son las llamadas question tags (preguntas coletillas). Estas frases equivalen a: ¿verdad?, ¿no es verdad?, ¿no?, ¿no es así? ¿en serio?</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <SingleExample
              english="You eat meat, don’t you?"
              spanish="Comes carne, ¿verdad?" />
            <SingleExample
              english="She doesn’t like to dance, does she?"
              spanish="No le gusta bailar, ¿no?" />
            <SingleExample
              english="Alex and Sergio are friends, aren’t they?"
              spanish="Alex y Sergio son amigos, ¿no?" />
            <SingleExample
              english="Your brother is older than you, isn’t he?"
              spanish="Tu hermano es mayor que tú, ¿no es así?" />
            <SingleExample
              english="You can help me, can’t you?"
              spanish="Puedes ayudarme, ¿verdad?" />
            <SingleExample
              english="John is getting married, isn’t he?"
              spanish="John se casará, ¿verdad?" />
            <SingleExample
              english="You worked yesterday, didn’t you?"
              spanish="Trabajaste ayer, ¿no?" />
            <SingleExample
              english="Sarah likes ice cream, doesn’t she?"
              spanish="A Sarah le gusta el helado, ¿no?" />
            <p className='font-bold text-gray-700'>Ahora tenemos las OPCIONES NEGATIVAS que equivalen a cuando decimos: Tu no comes pasta, o si? osea decimos una frase negativa y preguntamos en positivo en caso que nos estemos equivocando.</p>
            <SingleExample
              english="You’re not from here, are you?"
              spanish="No eres de aquí, ¿no?" />
            <SingleExample
              english="Kate’s not American, is she?"
              spanish="Kate no es americana, ¿verdad?" />
            <SingleExample
              english="Peter never liked Susan, did he?"
              spanish="A Peter nunca le gustó Susan, ¿verdad?" />
            <SingleExample
              english="They didn’t go to class yesterday, did they?"
              spanish="No fueron a la clase ayer, ¿verdad?" />
            <SingleExample
              english="You can’t dance, can you?"
              spanish="No puedes bailar, ¿no?" />
            <Nota text={"ATENCION: Estoy por decir una cosa que probablemente no tenga sentido para ti pero presta atencion, como te explicamos en el video, cuando hacemos frases con (i am) para hacer la question tag usamos (aren't i?) QUEE? lo se, lo se no tiene sentido esta frase porque (are) es con (you) pero, aveces el ingles no tiene sentido :( Recuerda que solo en este caso existe esta excepcion"} />
            <SingleExample
              english="I am wrong, aren’t I?"
              spanish="estoy equivocado, cierto?" />
            <SingleExample
              english="I am pretty, aren't i?"
              spanish="Soy hermosa, no?" />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={10} />
          </div>
        </div>
      </div>
    </div>
  )
}
