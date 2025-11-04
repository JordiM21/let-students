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
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Beginner">
      Beginner
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 14
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Continuous Verbs - LESSON 14</p>
      <CustomTitle title="Continuous Verbs" titleSpanish="Verbos continuos" />
      <VideoPlayer url={'https://www.youtube.com/watch?v=AKzG_ZS-Ydgs'} />
      <div className="my-4">
        <p className="font-bold text-sm opacity-90">
          Verbos continuos, super facil! Son todos los verbos que terminan en -ing que traducidos al español serían los
          verbos que terminan en -ando -endo y son acciones que estamos realizando ahora mismo en presente
        </p>
        <div className="space-y-4">
          <p className="text-gray-600 font-bold text-xl">EJEMPLOS:</p>
          <SingleExample english="I am talking." spanish="Estoy hablando." />
          <SingleExample english="He is eating" spanish="El está comiendo" />
          <SingleExample english="They are learning" spanish="Ellos están aprendiendo" />
          <SingleExample english="you are working" spanish="tu estás trabajando" />
          <SingleExample english="I am not talking" spanish="yo no estoy hablando" />
          <SingleExample english="You are not driving" spanish="No estás manejando" />
          <SingleExample english="Are you playing?" spanish="¿Estás (tu) jugando?" />
          <SingleExample english="Is he eating?" spanish="¿Está comiendo?" />
          <SingleExample english="Are they learning?" spanish="¿Están aprendiendo?" />
          <SingleExample english="I’m studying now." spanish="Estoy estudiando ahora." />
          <SingleExample english="He’s eating at the moment." spanish="Está comiendo en este momento." />
          <SingleExample english="Is it raining?" spanish="¿Está lloviendo?" />
          <SingleExample english="They’re learning English." spanish="Están aprendiendo inglés." />
          <SingleExample english="She’s currently looking for a job." spanish="Actualmente está buscando un trabajo." />
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={14} />
          </div>
        </div>
      </div>
    </div>
  )
}
