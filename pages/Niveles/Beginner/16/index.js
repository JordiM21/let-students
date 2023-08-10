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
      href="/Niveles/Beginner"
    >
      Beginner
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 16
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>FEELINGS AND EMOTIONS - LESSON 16</p>
      <CustomTitle title="Feelings and emotions" titleSpanish="Sentimientos y emociones" />
      <VideoPlayer url={"https://www.youtube.com/watch?v=3gFqSktCxB8"} />
      <div className='my-4'>
        <p className='font-bold text-sm opacity-90'>En esta lección aprenderemos a expresar lo que sentimos y a diferenciar nuestras emociones en inglés usando adjetivos de sentimientos o feeling adjectives.</p>
        <div className='space-y-4'>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="Annoyed"
            spanish="Molesto / Irritado"
          />
          <SingleExample
            english="Bored"
            spanish="Aburrido"
          />
          <SingleExample
            english="Comfortable"
            spanish="Cómodo"
          />
          <SingleExample
            english="Confused"
            spanish="Confuso"
          />
          <SingleExample
            english="Devastated"
            spanish="Devastado"
          />
          <SingleExample
            english="Sad"
            spanish="Triste"
          />
          <SingleExample
            english="Happy"
            spanish="Feliz"
          />
          <SingleExample
            english="Awesome"
            spanish="Increíble"
          />
          <SingleExample
            english="Disappointed"
            spanish="decepcionado"
          />
          <SingleExample
            english="Frustrated"
            spanish="Frustado"
          />
          <SingleExample
            english="Jealous"
            spanish="Celoso"
          />
          <SingleExample
            english="Nervous"
            spanish="Nervioso"
          />
          <SingleExample
            english="Proud"
            spanish="Orgulloso"
          />
          <SingleExample
            english="Scared"
            spanish="Asustado"
          />
          <SingleExample
            english="Shocked"
            spanish="Sorprendido/Conmocionado"
          />
          <SingleExample
            english="Surprised"
            spanish="Sorprendido"
          />
          <SingleExample
            english="Excited"
            spanish="Emocionada"
          />
          <SingleExample
            english="Afraid"
            spanish="Asustado"
          />
          <SingleExample
            english="Brave"
            spanish="Valiente"
          />
          <SingleExample
            english="Angry"
            spanish="Molesto"
          />
          <SingleExample
            english="Furious"
            spanish="Furioso"
          />
          <p className='font-bold text-sm opacity-90'>Veamos algunos ejemplos en la vida real!</p>
          <ReactPlayer
            width={"100%"}
            className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
            url="https://www.youtube.com/watch?v=7uY2HrQ9qQ8"
            controls={true} />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={16} />
          </div>
        </div>
      </div>
    </div>
  )
}
