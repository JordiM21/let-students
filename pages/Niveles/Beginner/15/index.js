import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import UnitWithTroubleBtn from '@/components/UnitWithTroubleBtn';

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
      href="/Niveles/Beginner"
    >
      Beginner
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 15
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>SENTENCE STRUCTURE - LESSON 15</p>
      <CustomTitle title="Constructing Sentences" titleSpanish="Construir Frases" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=nvVdIJ0las0"
        controls={true} />
      <div className='my-4'>
        <p className='font-bold text-sm opacity-90'>A continuación se presenta una revisión de la estructura básica de las frases afirmativas, negativas e interrogativas. Para más información sobre la estructura de frases, ver las lecciones de los tiempos verbales.</p>
        <div className='space-y-4'>
          <p className='text-[var(--blueDarkbg)] text-2xl font-bold'>Affirmative Sentences (Frases afirmativas)</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="I’m happy."
            spanish="Estoy contento."
          />
          <SingleExample
            english="She likes ice cream."
            spanish="Le gusta el helado."
          />
          <SingleExample
            english="We live in Madrid."
            spanish="Vivimos en Madrid."
          />
          <SingleExample
            english="They have a car"
            spanish="Ellos tienen un coche"
          />
          <p className='text-[var(--blueDarkbg)] text-2xl font-bold'>Negative Sentences (Frases negativas)</p>
          <SingleExample
            english="She does not [doesn’t] like ice cream."
            spanish="A ella no le gusta el helado."
          />
          <Nota text="LIKE = GUSTAR es particular este verbo y la forma de usarlo en inglés. Ejemplo: en español decimos: A mi me gusta Sara PERO, En inglés decimos: Sara likes me ¿PORQUE? En inglés los objetos son los que gustan del sujeto. Por esto no recomendamos traducir LITERAL" />
          <SingleExample
            english="We do not [don’t] live in Madrid."
            spanish="No vivimos en Madrid."
          />
          <SingleExample
            english="They do not [don’t] have a car."
            spanish="No tienen un coche."
          />
          <SingleExample
            english="I’m not happy."
            spanish="No estoy contento."
          />
          <p className='text-[var(--blueDarkbg)] text-2xl font-bold'>Interrogative Sentences (Frases interrogatives)</p>
          <SingleExample
            english="Does she like ice cream?"
            spanish="¿Le gusta el helado?"
          />
          <SingleExample
            english="Do you live in Madrid?"
            spanish="¿Vives en Madrid?"
          />
          <SingleExample
            english="Do they have a car?"
            spanish="¿Tienen un coche?"
          />
          <SingleExample
            english="Is he happy?"
            spanish="¿Está contento?"
          />
          <SingleExample
            english="Do you have a car?"
            spanish="¿Tienes un coche?"
          />
          <SingleExample
            english="Does she live on Miami?"
            spanish="¿Ella vive en Miami?"
          />
          <SingleExample
            english="Do you study English everyday?"
            spanish="¿Estudias inglés todos los días?"
          />
          <SingleExample
            english="Does he work hard?"
            spanish="¿El trabaja duro?"
          />
          <UnitWithTroubleBtn unit={15} />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={15} />
          </div>
        </div>
      </div>
    </div>
  )
}
