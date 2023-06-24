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
      Unit 11
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>QUESTIONS - LESSON 11</p>
        <CustomTitle title={"What vs. Which"} titleSpanish={"¿CUÁL?/¿QUÉ?"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=u1gifz6d1as"
          controls={true} />
        <p className='font-bold text-gray-700'>“What” y “which” son dos pronombres interrogativos que se confunden con frecuencia. A continuación se presenta una explicación de los diferentes usos de estos pronombres.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomTitle
              title="What"
              titleSpanish="What's" />
            <p className='font-bold text-gray-700'>Se utiliza “what” para hacer una pregunta cuando hay un número desconocido o infinitas posibilidades de respuestas u opciones. Se usa para preguntar en general.</p>
            <SingleExample
              english="What is your favorite food?"
              spanish="¿Cuál es tu comida favorita?" />
            <SingleExample
              english="What did you do yesterday?"
              spanish="¿Qué hiciste ayer?" />
            <SingleExample
              english="What type of music do you like?"
              spanish="¿Qué tipo de música te gusta?" />
            <SingleExample
              english="What would you like to drink?"
              spanish="¿Qué te gustaría beber?" />
            <CustomTitle
              title="Which"
              titleSpanish="Which is" />
            <p className='font-bold text-gray-700'>En contraste con “what”, usamos “which” cuando las opciones posibles son limitadas a un pequeño número (quizás 2, 3 o 4) y hay que seleccionar una entre ellas. Se puede utilizar tanto con cosas como con personas.</p>
            <SingleExample
              english="Which jacket should I buy, the brown one or the black one?"
              spanish="¿Qué chaqueta debería comprar, la marrón o la negra?" />
            <SingleExample
              english="Which of you would like to help me?"
              spanish="¿A cuál de vosotros le gustaría ayudarme?" />
            <SingleExample
              english="Which would you like, wine or beer?"
              spanish="¿Qué quieres, vino o cerveza?" />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={11} />
          </div>
        </div>
      </div>
    </div>
  )
}
