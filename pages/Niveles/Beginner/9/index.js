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
      href="/Niveles/Beginner"
    >
      Beginner
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 9
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg md:text-4xl text-[var(--color2)]'>ADJECTIVES - LESSON 9</p>
      <CustomTitle title="Adjectives" titleSpanish="LOS ADJETIVOS" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=LiYxv0vudmc"
        controls={true} />
      <div className='my-4'>
        <p className='font-bold text-xs opacity-90'>Un adjetivo es una palabra que acompaña y modifica al nombre. Puede ampliar, complementar o cuantificar su tamaño. Son palabras que nombran o indican cualidades, rasgos y propiedades de los nombres o sustantivos a los que acompañan.</p>
        <div className='space-y-4'>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="the tall man"
            spanish="el hombre alto"
          />
          <SingleExample
            english="
a happy child"
            spanish="un niño contento"
          />
          <SingleExample
            english="a dark street"
            spanish="una calle oscura"
          />
          <SingleExample
            english="a Spanish woman"
            spanish="una mujer española"
          />
          <Nota text="Recuerda, en español usamos el adjetivo después, ejemplo: ´el chico rubio´. Que en inglés es al contrario! ejemplo: ´The blond guy´" />
          <SingleExample
            english="the red ball"
            spanish="la pelota roja"
          />
          <SingleExample
            english="a cold winter"
            spanish="un invierno frío"
          />
          <SingleExample
            english="The young lady"
            spanish="La chica joven"
          />
          <SingleExample
            english="The fat dog"
            spanish="El perro gordo"
          />
          <SingleExample
            english="The long street"
            spanish="La calle larga"
          />
          <SingleExample
            english="Hot dog!"
            spanish="Perro caliente!"
          />
          <SingleExample
            english="a wonderful old city"
            spanish="Una ciudad antigua y maravillosa"
          />
          <SingleExample
            english="The delicious pizza"
            spanish="La pizza deliciosa"
          />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={9} />
          </div>
        </div>
      </div>
    </div>
  )
}
