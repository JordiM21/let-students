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
      Unit 3
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>DEMONSTRATIVE - LESSON 3</p>
      <CustomTitle title="Demonstrative Pronouns" titleSpanish="LOS PRONOMBRES DEMOSTRATIVOS" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=cnNB_ThNukc"
        controls={true} />
      <p className='font-bold text-gray-700'>Es importante comenzar señalando que los pronombres pueden estar en singular o plural y que pueden hacer referencia a la distancia.</p>
      <div className='my-4'>
        <p className='text-sm opacity-60 mt-8'>Singular/Cerca</p>
        <div className='space-y-4'>
          <SingleExample english="This" spanish="este/a/o" />
          <p className='text-sm opacity-60 mt-8'>Singular/Lejos</p>
          <SingleExample english="That" spanish="este/a/o, aquel, aquello/a" />
          <p className='font-bold text-gray-700'>Ahora sabemos como señalar 1 objeto estando lejos o cerca, el referente para saber si decir "this" or "that" es comunmente si lo puedo tocar "this" y si está lejos a la distancia digo "that" simple no? PERO ahora veamos como decimos más de un objeto:</p>
          <p className='text-sm opacity-60 mt-8'>Plural/Cerca</p>
          <SingleExample english="These" spanish="estos/as" />
          <p className='text-sm opacity-60 mt-8'>Plural/Lejos</p>
          <SingleExample english="Those" spanish="esos/as, aquellos/as" />
          <p className='font-bold text-gray-700'>Estos ultimos dos ejemplos serían con objetos a diversas distancias, igual aplica la regla de si lo puedo tocar digo "these" y si no digo "those", así de simple!</p>
          <p className='text-[var(--color2)] font-bold text-lg opacity-75'>EXAMPLES:</p>
          <SingleExample english="I like this car" spanish="Me gusta este coche/carro." />
          <p className='text-sm opacity-60 mt-8'>Me gusta este carro que está aquí, es decir lo puedo tocar o es facilmente alcanzable.</p>
          <SingleExample english="I like that car" spanish="Me gusta ese coche/carro." />
          <p className='text-sm opacity-60 mt-8'>Me gusta ese carro que está allí/allá, es decir está alejado de mi posición</p>
          <p className='text-[var(--color2)] font-bold text-lg opacity-75'>MORE EXAMPLES:</p>
          <SingleExample english="These are my pencils" spanish="Estos (cerca) son mis lapices" />
          <SingleExample english="This is my friend" spanish="Este(cerca) es my amigo" />
          <SingleExample english="That is my father" spanish="Ese(lejos) es mi padre" />
          <SingleExample english="Is that your phone?" spanish="Es ese(lejos) tu celular?" />
          <Nota text="Así hacemos preguntas intercambiando el verbo to be al inicio, no te preocupes lo veremos a detalle mas adelante" />

        </div>
        <UnitWithTroubleBtn unit={3} />
        <div className='my-8 rounded-md p-4 bg-blue-200 '>
          <UnitTest level={"Beginner"} unit={3} />
        </div>
      </div>
    </div>
  )
}
