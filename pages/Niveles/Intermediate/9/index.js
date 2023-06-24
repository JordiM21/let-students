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
      Unit 9
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>QUESTIONS - LESSON 9</p>
        <CustomTitle title={"Questions"} titleSpanish={"Preguntas"} />
        <p className='font-bold text-gray-700'>Hay dos tipos de preguntas: las preguntas cerradas y las preguntas abiertas.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomTitle
              title="Closed Questions"
              titleSpanish="Preguntas Cerradas" />
            <p className='font-bold text-gray-700'>Las Preguntas cerradas requieren una respuesta “yes” o “no”, “right” o “wrong”. Ya hemos visto algunos ejemplos de preguntas cerradas en la lección de construir frases. Estas preguntas se forman con un verbo auxiliar (“do”, “be” o “have got”).</p>
            <SingleExample
              english="Is she tall? Yes, she is."
              spanish="¿Ella es alta? Sí, lo es." />
            <SingleExample
              english="Do you have a pen? No i don't"
              spanish="Tienes un lapicero? no, no tengo" />
            <SingleExample
              english="Does he work in a school? No, he doesn’t."
              spanish="¿Trabaja en una escuela? No, no trabaja en una escuela." />
            <SingleExample
              english="Did you like New York? Yes, I did."
              spanish="¿Te gustó Nueva York? Sí, me gustó." />
            <SingleExample
              english="Do their children play sports? Yes, they do."
              spanish="¿Sus hijos juegan deportes? Sí, juegan." />
            <CustomTitle
              title="Open Questions"
              titleSpanish="Preguntas abiertas" />
            <p className='font-bold text-gray-700'>Recuerdas la clase del nivel anterior de las W-H Questions, muy interesante por cierto! bueno, precisamente las Preguntas abiertas son esas W-H Questions que no se pueden contestar con un simple “yes” o “no”, pero obtienen información, explicación, descripción u opinión. Las preguntas abiertas se crean utilizando pronombres interrogativos o “question words”. Dentro de las preguntas abiertas, podemos distinguir entre preguntas del objeto y preguntas del sujeto.</p>
            <SingleExample
              english="What do you want?"
              spanish="¿Qué quieres?" />
            <SingleExample
              english="Where do they live?"
              spanish="¿Dónde viven ellos?" />
            <SingleExample
              english="When do you go to work?"
              spanish="¿Cuándo vas a tu trabajo?" />
            <SingleExample
              english="Who is he?"
              spanish="¿Quién es él?" />
            <SingleExample
              english="Why are they here?"
              spanish="¿Por qué están aquí?" />
            <SingleExample
              english="How are you?"
              spanish="¿Cómo estás?" />
            <SingleExample
              english="Where are you?"
              spanish="¿Dónde estás?" />
            <SingleExample
              english="
What do you like to eat?"
              spanish="¿Qué te gusta comer?" />
            <SingleExample
              english="
Where does she work?"
              spanish="¿Dónde trabaja?" />
            <SingleExample
              english="Why do you study English?"
              spanish="¿Por qué estudias inglés?" />
            <SingleExample
              english="Who did you call last night?"
              spanish="¿A quién llamaste anoche?" />
            <SingleExample
              english="Danny asks the teacher a question."
              spanish="Danny pregunta al profesor." />
            <SingleExample
              english="Who did Danny ask? The teacher."
              spanish="¿A quién preguntó Danny? Al profesor." />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={9} />
          </div>
        </div>
      </div>
    </div>
  )
}
