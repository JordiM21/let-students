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
      Unit 4
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>CONJUNCTIONS - LESSON 4</p>
        <CustomTitle title={"Conjuntions"} titleSpanish={"Las conjuciones"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=tUwFYcRCF2o"
          controls={true} />
        <p className='font-bold text-gray-700'>Las conjunciones son empleadas para enlazar entre sí las palabras y/o oraciones. Hay dos tipos de conjunciones y la posición que tiene dentro de una oración depende del tipo. Además, hay tres formas de conjunciones. Las conjunciones más comunes son “and,” “but” y “or”.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <p className='text-gray-400 font-bold text-md'>EJEMPLO:</p>
            <SingleExample
              english="She works at a bank and goes to university."
              spanish="Trabaja en un banco y va a la universidad." />
            <SingleExample
              english="I like to swim in the ocean, but only if the water is warm."
              spanish="Me gusta nadar en el océano, pero sólo si el agua está caliente." />
            <SingleExample
              english="We can study now or later."
              spanish="Podemos estudiar ahora o más tarde." />
            <SingleExample
              english="She likes to sing and dance."
              spanish="Le gusta cantar y bailar." />
            <SingleExample
              english="I want to move to London so I am studying English."
              spanish="Quiero mudarme a Londres, por lo tanto estoy estudiando inglés." />
            <SingleExample
              english="They are moving to Barcelona, however they really like Madrid."
              spanish="Se mudan a Barcelona sin embargo les gusta mucho Madrid." />
            <SingleExample
              english="after"
              spanish="después de" />
            <SingleExample
              english="although"
              spanish="aunque" />
            <SingleExample
              english="and"
              spanish="y" />
            <SingleExample
              english="as"
              spanish="como" />
            <SingleExample
              english="as…as"
              spanish="tan…como" />
            <SingleExample
              english="you are not as big as my father"
              spanish="tu no eres tan grande como mi padre" />
            <SingleExample
              english="as soon as"
              spanish="en cuanto,
tan pronto… como" />
            <SingleExample
              english="as soon as ir arrive i will do my homework"
              spanish="tan pronto llegue a casa harè mi tarea" />
            <SingleExample
              english="because"
              spanish="porque" />
            <SingleExample
              english="yet"
              spanish="aun" />
            <SingleExample
              english="why you have not arrive yet?"
              spanish="por que no has llegado aun?" />
            <SingleExample
              english="until"
              spanish="hasta que" />
            <SingleExample
              english="im here until my mom calls me"
              spanish="estoy aqui hasta que mi mama me llame" />
            <SingleExample
              english="though"
              spanish="aunque" />
            <SingleExample
              english="then"
              spanish="entonces" />
            <SingleExample
              english="so"
              spanish="así que" />
            <SingleExample
              english="since"
              spanish="desde que" />
            <SingleExample
              english="once"
              spanish="una vez que" />
            <SingleExample
              english="or"
              spanish="o" />
            <SingleExample
              english="in order to"
              spanish="para, con objeto de" />
            <SingleExample
              english="in case"
              spanish="en caso de que, por si" />
            <SingleExample
              english="if"
              spanish="si" />
            <SingleExample
              english="however"
              spanish="sin embargo" />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={4} />
          </div>
        </div>
      </div>
    </div>
  )
}
