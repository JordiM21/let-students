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
      Unit 3
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>RELATIVE PRONOUNS - LESSON 3</p>
        <CustomTitle title={"Relative Pronouns"} titleSpanish={"Pronombres relativos"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=xzui11Tl578"
          controls={true} />
        <p className='font-bold text-gray-700'>Utilizamos los pronombres relativos para referirnos a un sustantivo (una persona o una cosa) mencionado antes y al que queremos agregar más información o modificar. Los pronombres relativos pueden referirse a algo o alguien en singular o plural. Algunos pronombres relativos se pueden usar sólo con personas, otros sólo con cosas y algunos con ambos. A continuación, tienes una lista de los pronombres relativos.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <p className='text-gray-400 font-bold text-md'>EJEMPLO:</p>
            <SingleExample
              english="that"
              spanish="que" />
            <SingleExample
              english="which"
              spanish="que / cual" />
            <SingleExample
              english="who"
              spanish="que / quién" />
            <SingleExample
              english="whom"
              spanish="que / a quien" />
            <SingleExample
              english="whose"
              spanish="cuyo" />
            <p className='text-gray-400 font-bold text-md'>EJEMPLOS:</p>
            <SingleExample
              english="This is the book that won the Pulitzer prize last year."
              spanish="Este es el libro que ganó el Permio Pulizer el año pasado." />
            <SingleExample
              english="This is the restaurant that received the excellent reviews in the newspaper."
              spanish="Este es el restaurante que recibió excelentes críticas en el periódico." />
            <SingleExample
              english="The house which we lived in when we were children burnt down last week."
              spanish="La casa en la que vivíamos cuando éramos niños se quemó la semana pasada." />
            <SingleExample
              english="My sister, who just moved in with me, is looking for a job."
              spanish="Mi hermana, que se acaba de mudar conmigo, está buscando trabajo." />
            <SingleExample
              english="
I never met someone who didn’t like music."
              spanish="Nunca he conocido a alguien que no le guste la música." />
            <SingleExample
              english="This is Peter, whom I met at the party last week."
              spanish="Este es Peter, a quien conocí en la fiesta la semana pasada." />
            <SingleExample
              english="That is the girl whose parents got divorced last year."
              spanish="Esa es la chica cuyos padres se divorciaron el año pasado." />
            <SingleExample
              english="Paul, whose wife just had a baby, will not be at work for a few weeks."
              spanish="Paul, cuyo esposa acaba de tener un bebé, no irá a trabajar durante unas semanas." />
            <SingleExample
              english="The university where I teach is an excellent school."
              spanish="La universidad donde enseño es una escuela excelente." />
            <Nota text={"nota: Puede omitirse el pronombre relativo cuando es el objeto de la frase."} />
            <SingleExample
              english="The exam [that] I took this morning won’t be corrected and returned until next week."
              spanish="El examen que hice esta mañana no se corregirá ni se devolverá hasta la semana que viene." />
            <SingleExample
              english="The woman [who] I’m dating is a teacher."
              spanish="La mujer con quien estoy saliendo es profesora." />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={3} />
          </div>
        </div>
      </div>
    </div>
  )
}
