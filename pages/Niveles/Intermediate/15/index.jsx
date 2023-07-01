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
      Unit 15
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>USE TO - LESSON 15</p>
        <CustomTitle title={"Used to"} titleSpanish={"SOLER/ESTAR ACOSTUMBRADO A"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=OWuFkCPb9oE"
          controls={true} />
        <p className='font-bold text-gray-700'>El verbo “use” significa “usar” o “utilizar”. Sin embargo, cuando utilizamos este verbo en el pasado simple, más la preposición “to”, como verbo modal, el significado cambia. Además, se puede utilizar “used to” como adjetivo. A continuación tienes una explicación de los diferentes usos.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomTitle
              title="Used to"
              titleSpanish="Soler" />
            <p className='font-bold text-gray-700'>Esta frase es genial, usala para sonar como todo un nativo! Usamos el verbo modal “used to” para indicar algo que ocurría o sucedía en el pasado de manera habitual. También, se utiliza para algo que antes era verdad pero ya no lo es. Como con los otros verbos modales, “used to” está seguido por la forma base del verbo (el infinitivo sin “to”).</p>
            <SingleExample
              english="I used to play videogames"
              spanish="Yo solía jugar videojuegos" />
            <p className='font-bold text-gray-700'>Como puedes ver en esta frase, solía hacerlo pero, ya no lo hago!</p>
            <SingleExample
              english="We used to go to the beach every summer when I was young."
              spanish="Cuando era joven solíamos ir a la playa cada verano." />
            <SingleExample
              english="He used to smoke a pack of cigarettes a day, but he quit last year."
              spanish="El solía fumar un paquete de cigarrillos al día, pero lo dejó el año pasado." />
            <SingleExample
              english="I used to like mushrooms, but not anymore."
              spanish="Antes me gustaban las setas, pero ya no." />
            <SingleExample
              english="There used to be a great restaurant here, but it closed a few years ago."
              spanish="Había un buen restaurante aquí, pero cerró hace unos años." />
            <SingleExample
              english="
I didn’t use to like mushrooms, but now I do."
              spanish="Antes no me gustaban las setas, pero ahora sí." />
            <SingleExample
              english="Food didn’t use to be so expensive."
              spanish="La comida no solía ser tan cara." />
            <SingleExample
              english="Did you use to live here?"
              spanish="¿Vivías aquí antes?" />
            <SingleExample
              english="Did they use to go to the beach in the summers?"
              spanish="¿Solían ir a la playa durante los veranos?" />
            <Nota text="nota: No utilizamos (used to) para acciones habituales en el presente. En vez de este verbo modal, se usa un adverbio como (usually) o (normally) por ejemplo." />
            <p className='font-bold text-gray-700'>STOP THERE! tengo otro secreto para ti, no se si lo recuerdas pero vengo a recordarte que las palabras terminadas en -ly como usually y normally se traduce siempre con lly = mente. Entonces normal = normal / normally = normalmente || usual = usual / usually = usualmente, QUE FAAAACIIIL</p>
            <SingleExample
              english="We usually go to the beach every summer."
              spanish="Solemos ir a la playa cada verano." />
            <SingleExample
              english="He normally smokes a pack of cigarettes every day."
              spanish="Normalmente él fuma un paquete de cigarrillos cada día." />
            <SingleExample
              english="They usually play football on the weekends."
              spanish="Suelen jugar a fútbol los fines de semana." />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={15} />
          </div>
        </div>
      </div>
    </div>
  )
}
