import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest'
import { useRouter } from 'next/router'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import VideoPlayer from '@/components/VideoPlayer'

export default function index() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Inicio
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/Niveles">
      Niveles
    </Link>,
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Intermediate">
      Intermediate
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 16
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">FUTURE SIMPLE - LESSON 16</p>
        <CustomTitle title={'Future Simple'} titleSpanish={'EL FUTURO SIMPLE'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=L7y43hYxSkc'} />
        <p className="font-bold text-gray-700">
          Hay dos formas principales para expresar el futuro. A veces son intercambiables, pero a menudo pueden tener
          significados diferentes.
        </p>
        <div className="my-4">
          <div className="space-y-2">
            <CustomTitle title="Future: (Will)" titleSpanish="Structure (Estructura)" />
            <SingleExample english="I will [I’ll] call you tonight." spanish="Te llamaré esta noche." />
            <SingleExample english="I will not [won't] call you tonight" spanish="Yo no te llamaré esta noche" />
            <p className="font-bold text-gray-700">
              Acabas de ver las abreviaciones que usamos en ingles para el will, examples: She'll [She will], They'll
              [They will], I'll [I will] o tambien la negacion usamos won't para decir will not{' '}
            </p>
            <SingleExample english="She will [She’ll] arrive late." spanish="Ella llegará tarde" />
            <SingleExample english="They will [They’ll] be happy to see you." spanish="Estarán felices de verte." />
            <SingleExample english="She will not [won’t] arrive late." spanish=" Ella no llegará tarde." />
            <SingleExample english="They will not [won’t] be happy to see you." spanish="No estarán felices de verte" />
            <SingleExample english="Will you call me tonight?" spanish="¿Me llamarás esta noche?" />
            <SingleExample english="Will she arrive late?" spanish="¿Ella llegará tarde?" />
            <SingleExample english="Will they be happy to see you?" spanish="¿Estarán felices de verte?" />
            <CustomTitle title="Future: (Going to)" titleSpanish="“Going to” equivale a “ir a” en español." />
            <SingleExample
              english="
I am going to call you tonight."
              spanish="Voy a llamarte esta noche."
            />
            <SingleExample english="She is going to arrive late." spanish="Va a llegar tarde." />
            <p className="font-bold text-gray-700">
              Ahi te va un super tip, todos los nativos utilizamos going to en la forma abreviada que es "gonna" es
              bastante informal pero se usa en el ingles hablado y te harà sonar como un profesional!
            </p>
            <SingleExample english="I am not going to call you tonight." spanish="No voy a llamarte esta noche." />
            <SingleExample english="She is not going to arrive late." spanish="Ella no va a llegar tarde." />
            <SingleExample
              english="
They are not going to be happy to see you."
              spanish="Ellos no van a estar felices de verte."
            />
            <SingleExample english="Are you going to call me tonight?" spanish="¿Vas a llamarme esta noche?" />
            <SingleExample
              english="
Is she going to arrive late?"
              spanish="¿Va a llegar tarde?"
            />
            <SingleExample english="Are they going to be happy to see you?" spanish="¿Van a estar felices de verte?" />
            <SingleExample english="They will clean their rooms." spanish="Limpiarán sus habitaciones." />
            <SingleExample english="She won’t work with Paul." spanish="No trabajará con Paul." />
            <SingleExample
              english="We are going to have a party tonight."
              spanish="Vamos a dar una fiesta esta noche."
            />
            <SingleExample
              english="Richard is going to take an English class."
              spanish="Richard va a realizar un clase de inglés."
            />
            <SingleExample english="Are they going to play football later?" spanish="¿Van a jugar a fútbol luego?" />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Intermediate'} unit={16} />
          </div>
        </div>
      </div>
    </div>
  )
}
