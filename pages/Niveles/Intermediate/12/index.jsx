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
      Unit 12
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>AMONG VS BETWEEN - LESSON 12</p>
        <CustomTitle title={"Among vs Between"} titleSpanish={"Entre"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=NcPOQfzNGZ4"
          controls={true} />
        <p className='font-bold text-gray-700'>Son dos preposiciones que significan "entre" pero cada una se usa en situaciones diferentes.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomTitle
              title="Among"
              titleSpanish="Entre" />
            <p className='font-bold text-gray-700'>Se usa normalmente para indicar que alguien o algo se encuentra entre varias personas, animales u objetos. Si alguno de ustedes ha jugado el juego que es muy divertido que se llama AMONG US, significa exactamente eso! Among us: Entre nosotros, porque hace referencia a que hay un impostor entre nostros! genial, no?</p>
            <SingleExample
              english="There is an impostor among us"
              spanish="Hay un impostor entre nosotros" />
            <SingleExample
              english="Carla swims among the fish"
              spanish="Carla nada entre los peces" />
            <SingleExample
              english="Don't worry, you are among friends!"
              spanish="No te preocupes, estas entre amigos!" />
            <SingleExample
              english="I can't see you among the people"
              spanish="No te puedo ver entre las personas" />
            <SingleExample
              english="Someone is lying among us"
              spanish="Alguno esta mintiendo entre nostros" />
            <CustomTitle
              title="Between"
              titleSpanish="Entre" />
            <p className='font-bold text-gray-700'>Se usa normalmente para indicar que alguien o algo se encuentra especificamente entre dos personas, animales u objetos</p>
            <SingleExample
              english="The baby is sleeping between his mum and dad"
              spanish="El bebe esta durmiendo entre su mama y papa" />
            <SingleExample
              english="The wednesday is between tuesday and thursday"
              spanish="El miercoles esta entre el martes y el jueves" />
            <SingleExample
              english="My room is between the kitchen and the bathroom"
              spanish="Mi cuarto esta entre la cocina y el baòo" />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={12} />
          </div>
        </div>
      </div>
    </div>
  )
}
