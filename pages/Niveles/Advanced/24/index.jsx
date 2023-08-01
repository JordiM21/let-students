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
      Unit 24
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Connected Speech - LESSON 24</p>
        <CustomTitle title={"Connected Speech"} titleSpanish={"Oraciones Conectadas"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url=""
          controls={true} />
        <div className='my-4'>
          <div className='space-y-2'>
            <p className='text-sm opacity-60'>El "connected speech" o "habla conectada" se refiere a cómo los sonidos y las palabras se modifican cuando hablamos de manera fluida y natural en lugar de pronunciar cada palabra de forma aislada. Esto ocurre para que las palabras se enlacen y fluyan con mayor facilidad, lo que mejora la comprensión y la fluidez del habla. Algunas de las formas más comunes de cambiar las oraciones y los sonidos en el "connected speech" son:</p>
            <CustomTitle title={"Elisión de sonidos"} titleSpanish={" En el habla conectada, a menudo omitimos ciertos sonidos al final de las palabras o al inicio de otras palabras para facilitar la pronunciación."} />
            <SingleExample
              english="Im gonna go to the store"
              spanish="I am going to go the store"
            />
            <CustomTitle title={"Reducción de palabras"} titleSpanish={"En el habla conectada, las palabras no enfatizadas o menos importantes tienden a reducirse o abreviarse."} />
            <SingleExample
              english="I've been to the museum."
              spanish="I have been to the museum."
            />
            <CustomTitle title={"Enlace de palabras"} titleSpanish={" En inglés, es común enlazar palabras para que fluyan suavemente juntas, especialmente cuando una palabra termina en una consonante y la siguiente comienza con una vocal."} />
            <SingleExample
              english="i likapples"
              spanish="i like apples"
            />
            <p className='text-sm opacity-60'>Now let's see some examples with the pronunciation or sounds</p>
            <SingleExample
              english="We gotta start the meeting [ui gora star-ta-miting]"
              spanish="Tenemos que iniciar la reunión"
            />
            <SingleExample
              english="You're too young [Iu-r tu-iong]"
              spanish="Eres muy joven"
            />
            <SingleExample
              english="Let me help you [Lemmi-jelp-iu]"
              spanish="Dejame ayudarte"
            />
            <SingleExample
              english="I want to play with you [Aiwanaplei-widfiu]"
              spanish=""
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
