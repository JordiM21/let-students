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
      Unit 23
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>The family - LESSON 23</p>
      <CustomTitle title="THE FAMILY" titleSpanish="La familia" />
      <div className='my-4'>
        <p className='font-bold text-sm opacity-90'>En esta unidad aprenderàs con la familia y sus miembros, usaras estas palabras en diversos contextos y haras preguntas</p>
        <div className='space-y-4'>
          <SingleExample
            english="Mother / Mom"
            spanish="Madre"
          />
          <SingleExample
            english="Father / Dad"
            spanish="Padre"
          />
          <SingleExample
            english="Parents"
            spanish="Padres"
          />
          <SingleExample
            english="Wife"
            spanish="Esposa"
          />
          <SingleExample
            english="Husband"
            spanish="Marido"
          />
          <SingleExample
            english="daughter"
            spanish="hija"
          />
          <SingleExample
            english="son"
            spanish="hijo"
          />
          <SingleExample
            english="brother"
            spanish="hermano"
          />
          <SingleExample
            english="sister"
            spanish="hermana"
          />
          <SingleExample
            english="grandmother"
            spanish="abuela"
          />
          <SingleExample
            english="grandfather"
            spanish="abuelo"
          />
          <SingleExample
            english="granddaughter"
            spanish="nieta"
          />
          <SingleExample
            english="grandson"
            spanish="nieto"
          />
          <SingleExample
            spanish="tia"
            english="aunt"
          />
          <SingleExample
            spanish="tio"
            english="uncle"
          />
          <SingleExample
            spanish="primo/a"
            english="cousin"
          />
          <SingleExample
            spanish="Sobrino"
            english="Nephew"
          />
          <SingleExample
            spanish="Sobrina"
            english="niece"
          />
          <SingleExample
            spanish="El hermano de mi mama es mi tio"
            english="The brother of my mother is my uncle"
          />
          <SingleExample
            spanish="El hijo de mi tio es mi primo"
            english="The son of my uncle is my cousin"
          />
          <SingleExample
            spanish="Mi padre tiene tres hermanos"
            english="My father has three brothers"
          />
          <SingleExample
            spanish="El marido de mi abuela es mi abuelo"
            english="The husband of my grandmother is my grandfather"
          />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={23} />
          </div>
        </div>
      </div>
    </div>
  )
}
