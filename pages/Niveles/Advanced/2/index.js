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
      Unit 2
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Present Perfect Continuous - LESSON 2</p>
        <CustomTitle title={"Present Perfect Continuous"} titleSpanish={"El presente perfecto continuo"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=tBkP83OYtKg"} />
        <p className='font-bold text-gray-700'>El presente perfecto continuo, muchas veces tiene la equivalencia a la traducción “llevar + gerundio” en español, pero el uso de esta forma es más frecuente en inglés. Se utiliza para acciones que han empezado en el pasado pero continúan en el presente.</p>
        <div className='my-4'>
          <small className='text-sm opacity-60'>Como en el presente perfecto, usamos el verbo auxiliar “to have” además de “been” (el participio pasado del verbo “to be”) más el verbo+ing.</small>
          <div className='space-y-2'>
            <SingleExample
              english="They have [They’ve] been talking for three hours."
              spanish="Han estado hablando durante tres horas."
            />
            <SingleExample
              english="She has [She’s] been studying English since she was 16."
              spanish="Ha estado estudiando inglés desde que tenía 16 años."
            />
            <SingleExample
              english="I have [I’ve] been waiting for you for over an hour!"
              spanish="¡Te llevo esperando durante más de una hora!"
            />
            <small className='text-sm opacity-60'>Negative Sentences (Frases negativas)</small>
            <SingleExample
              english="They haven’t been talking for more than a few minutes."
              spanish="No han estado hablando más de unos minutos."
            />
            <SingleExample
              english="She hasn’t been studying English for very long."
              spanish="No ha estado estudiando inglés durante mucho tiempo."
            />
            <SingleExample
              english="Don’t worry, I haven’t been waiting long."
              spanish="No te preocupes, no llevo esperando mucho tiempo."
            />
            <small className='text-sm opacity-60'>Interrogative Sentences (Frases interrogativas)</small>
            <SingleExample
              english="Have they been talking for a long time?"
              spanish="¿Han estado hablando durante mucho tiempo?"
            />
            <SingleExample
              english="
Have you been waiting long?"
              spanish="¿Llevas esperando mucho tiempo?"
            />
            <Nota text="Nos referimos a algo que hemos estado haciendo en un período de tiempo, por lo tanto, usamos las preposiciones de tiempo “for” y “since”." />
            <SingleExample
              english="I can’t believe it is still raining. It’s been raining for a week now!"
              spanish="No puedo creer que todavía esté lloviendo. Lleva lloviendo desde hace una semana!"
            />
            <SingleExample
              english="John has been working at the bank since 2003."
              spanish="John lleva trabajando en el banco desde 2003."
            />
            <SingleExample
              english="We’ve been planning our vacation for over a month."
              spanish="Llevamos planeando nuestras vacaciones desde hace más de un mes"
            />
            <SingleExample
              english="Amanda and Tom have been dating since last June."
              spanish="Amanda y Tom han estado saliendo desde el junio pasado."
            />
            <Nota text="Si usamos el presente perfecto continuo sin un período de tiempo, significa “lately” o “recently”." />
            <SingleExample
              english="He hasn’t been studying enough."
              spanish="No ha estado estudiando bastante."
            />
            <SingleExample
              english="Have you been feeling ok lately?"
              spanish="¿Te has sentido bien últimamente?"
            />
            <SingleExample
              english="I’ve been working too much lately."
              spanish="He estado trabajando demasiado ultimamente."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={2} />
          </div>
        </div>
      </div>
    </div>
  )
}
