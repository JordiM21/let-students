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
      Unit 25
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>TRANSPORT - LESSON 25</p>
      <CustomTitle title="Transport" titleSpanish="Transporte" />
      <div className='my-4'>
        <div className='space-y-4'>
          <SingleExample
            english="A bus"
            spanish="un autobus"
          />
          <SingleExample
            english="the train"
            spanish="el tren"
          /><SingleExample
            english="taxi"
            spanish="taxi"
          /><SingleExample
            english="a bike"
            spanish="una bici, una moto"
          /><SingleExample
            english="motorbike"
            spanish="moto"
          /><SingleExample
            english="plane"
            spanish="avion"
          /><SingleExample
            english="boat"
            spanish="barca"
          /><SingleExample
            english="ferry"
            spanish="ferry"
          /><SingleExample
            english="by bus"
            spanish="en bus"
          /><SingleExample
            english="I always go home by train"
            spanish="Yo siempre voy a casa en tren"
          /><SingleExample
            english="I like to go to wotk by car"
            spanish="Me gusta ir al trabajo en carro"
          /><SingleExample
            english="airport"
            spanish="aeropuerto"
          /><SingleExample
            english="train station"
            spanish="estacion de tren"
          /><SingleExample
            english="bus stop"
            spanish="para del bus"
          /><SingleExample
            english="Sorry, do you know where is the bus stop here?"
            spanish="Disculpa, sabes donde esta la parada del bus acà?"
          /><SingleExample
            english="Sure, it is on the next street"
            spanish="Claro, esta en la siguiente calle"
          /><SingleExample
            english="i am in a hurry i don't want to lost the train"
            spanish="estoy apurado, no quiero perder el tren"
          />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={25} />
          </div>
        </div>
      </div>
    </div>
  )
}
