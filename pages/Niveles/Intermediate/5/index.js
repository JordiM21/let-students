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
      Unit 5
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>COMPARATIVE & SUPERLATIVE - LESSON 5</p>
        <CustomTitle title={"Comparatives and Superlatives"} titleSpanish={"LOS COMPARATIVOS Y SUPERLATIVOS"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=3C49nBmsVbI"
          controls={true} />
        <p className='font-bold text-gray-700'>Como hemos visto, los adjetivos describen cualidades de sustantivos. Algunas de estas cualidades pueden variar en el grado o intensidad. Al igual que en español, cuando queremos hacer comparaciones contrastamos cualidades o atributos por medio de adjetivos en sus diversos grados.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <p className='font-bold text-gray-700'>1. Comparativos de superioridad. En las comparaciones de superioridad, el adjetivo, que está en la forma comparativa (véase más adelante), es seguido por “than”.</p>
            <p className='text-gray-400 font-bold text-md'>EJEMPLO:</p>
            <SingleExample
              english="Juan runs faster than Mark."
              spanish="Juan corre más rápido que Mark." />
            <SingleExample
              english="Angela’s room is cleaner than Sue’s."
              spanish="La habitación de Angela está más limpia que la de Sue." />
            <SingleExample
              english="I am taller than Beth."
              spanish="Soy más alto que Beth." />
            <SingleExample
              english="
New York is bigger than Los Angeles."
              spanish="Nueva York es más grande que Los Angeles." />
            <p className='font-bold text-gray-700'>2. Comparativos de inferioridad. Para formar este tipo de comparación podemos usar las conjunciones “not as…as” or “less…than”. En ambos casos, el adjetivo está en el grado positivo.</p>
            <SingleExample
              english="Mark is not as fast as Juan."
              spanish="Mark no corre tan rápido como Juan." />
            <SingleExample
              english="Sue’s room is less clean than Angela’s."
              spanish="La habitación de Sue no es tan limpia como la de Angela." />
            <SingleExample
              english="Beth is not as tall as me."
              spanish="Beth no es tan alta como yo." />
            <SingleExample
              english="Los Angeles is not as big as New York."
              spanish="Los Angeles no es tan grande como Nueva York." />
            <p className='font-bold text-gray-700'>3. Comparativos de igualdad. Con el adjetivo en el grado positivo, utilizamos la conjunción “as…as” para formar las comparaciones de igualdad.</p>
            <SingleExample
              english="Mark is as fast as Juan."
              spanish="Mark corre tan rápido como Juan." />
            <SingleExample
              english="Sue’s room is as clean as Angela’s."
              spanish="La habitación de Sue es tan limpia como la de Angela." />
            <SingleExample
              english="Beth is as tall as I am."
              spanish="Beth es tan alta como yo." />
            <SingleExample
              english="
Los Angeles is as big as New York."
              spanish="Los Angeles es tan grande como Nueva York." />
            <p className='font-bold text-gray-700'>El grado superlativo denota la calidad en el grado más alto y como en español, se usa “the” delante del adjetivo en la forma superlativa (véase más adelante).</p>
            <SingleExample
              english="
Juan is the fastest ."
              spanish="Juan es el más rápido." />
            <SingleExample
              english="Angela’s room is the cleanest."
              spanish="La habitación de Angela es la más limpia." />
            <SingleExample
              english="
I am the tallest."
              spanish="Soy el más alto." />
            <SingleExample
              english="New York is the biggest city in the United States."
              spanish="Nueva York es la ciudad más grande de los Estados Unidos." />
            <SingleExample
              english="New York is the most beautiful city in the United States"
              spanish="New York es la ciudad mas bonita de Estados Unidos" />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={5} />
          </div>
        </div>
      </div>
    </div>
  )
}
