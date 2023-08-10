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
      Unit 21
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Phrasal Verbs - LESSON 21</p>
        <CustomTitle title={"Phrasal Verbs"} titleSpanish={"Verbos Frasales"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=B6lnuHd8XIk"} />
        <p className='font-bold text-gray-700'>Los phrasal verbs son uno de los temas mas avanzados y complejos del ingles asi que, no te preocupes si no los entiendes a la primera, los estaremos viendo mucho mejor mas adelante. Por ahora te daremos algunos basicos para usar en las rutinas diarias</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <SingleExample
              english="Wake up"
              spanish="Despertarse" />
            <SingleExample
              english="I always wake up at 6 in the morning"
              spanish="Yo siempre me levanto a las 6 am" />
            <SingleExample
              english="Get up"
              spanish="Levantarse (Similar to wake up)" />
            <SingleExample
              english="get dressed"
              spanish="Vestirse" />
            <SingleExample
              english="I have to get dressed on five minutes"
              spanish="Yo tengo que vestirme en cinco minutos" />
            <SingleExample
              english="Wash up"
              spanish="Lavar o Lavarse" />
            <SingleExample
              english="You must wash up your hands before dinner"
              spanish="Debes lavarte las manos antes de la cena" />
            <SingleExample
              english="Go out"
              spanish="Salir" />
            <SingleExample
              english="Clean up"
              spanish="limpiar" />
            <SingleExample
              english="You should clean up your room"
              spanish="Deberias limpiar tu cuarto" />
            <SingleExample
              english="put on"
              spanish="ponerse" />
            <SingleExample
              english="make up"
              spanish="maquillarse" />
            <SingleExample
              english="sit down"
              spanish="sentarse" />
            <SingleExample
              english="work out"
              spanish="hacer ejercicio" />
            <SingleExample
              english="hang out"
              spanish="pasar el rato (salir)" />
            <SingleExample
              english="get off work"
              spanish="salir del trabajo" />
            <SingleExample
              english="slow down"
              spanish="bajar la velocidad" />
            <SingleExample
              english="Turn on"
              spanish="encender" />
            <SingleExample
              english="Turn off"
              spanish="Apagar" />
            <SingleExample
              english="Turn off the lights"
              spanish="Apaga las luces" />
            <SingleExample
              english="Shut up (grosero, informal)"
              spanish="Callate" />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={21} />
          </div>
        </div>
      </div>
    </div>
  )
}
