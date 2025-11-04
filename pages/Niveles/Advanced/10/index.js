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
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Advanced">
      Advanced
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 10
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Future Perfect Continuous - LESSON 10</p>
        <CustomTitle title={'Future Perfect Continuous'} titleSpanish={'EL FUTURO PERFECTO CONTINUO'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=wCPU_k1kBYg'} />
        <div className="my-4">
          <div className="space-y-2">
            <small className="text-sm opacity-60">1. Affirmative Sentences (Frases afirmativas)</small>
            <SingleExample
              english="Francis will have been living in Italy for 4 years by the time he finishes his studies."
              spanish="Francis habrá estado viviendo en Italia durante 4 años, para cuando haya terminado sus estudios."
            />
            <SingleExample
              english="We’re going to have been working for 24 hours by the time we finish this project."
              spanish="Habremos estado trabajando durante 24 horas, para cuando hayamos terminado este proyecto."
            />
            <small className="text-sm opacity-60">2. Negative Sentences (Frases negativas)</small>
            <SingleExample
              english="Francis won’t have been living in Italy for long when he finishes his studies."
              spanish="Francis no habrá estado viviendo en Italia mucho tiempo, para cuando haya terminado sus estudios."
            />
            <SingleExample
              english="We’re not going to have been working too long by the time we finish this project."
              spanish="No habremos estado trabajando demasiado tiempo, para cuando hayamos terminado este proyecto."
            />
            <small className="text-sm opacity-60">3. Interrogative Sentences (Frases interrogativas)</small>
            <SingleExample
              english="Will Francis have been living in Italy for long by the time he finishes his studies?"
              spanish="¿Habrá estado viviendo Francis en Italia mucho tiempo, para cuando haya terminado sus estudios?"
            />
            <SingleExample
              english="Are you going to have been working for a long time when you finish this project?"
              spanish="¿Habremos estado trabajando mucho tiempo cuando hayamos terminado este proyecto?"
            />
            <small className="text-sm opacity-60">
              1. Utilizamos el futuro perfecto continuo para mostrar que algo va a continuar hasta otra acción o tiempo
              en el futuro.
            </small>
            <SingleExample
              english="Jessica will have been studying English for 5 years when she moves to England next April."
              spanish="Jessica habrá estado estudiando inglés durante 5 años cuando se traslade a Inglaterra el próximo abril."
            />
            <SingleExample
              english="I’m going to have been running 20 kilometers daily for at least a month before the marathon."
              spanish="Habré estado corriendo 20 kilómetros diarios durante al menos un mes antes de la maratón."
            />
            <SingleExample
              english="Will you have been living together for long before you get married?"
              spanish="¿Habréis estado conviviendo durante mucho tiempo antes de casaros?"
            />
            <small className="text-sm opacity-60">
              2. El uso del futuro perfecto continuo es una manera de mostrar causa y efecto en el futuro.
            </small>
            <SingleExample
              english="Jessica’s English will be perfect when she moves to England next year as she’ll have been studying it for five years."
              spanish="El nivel de inglés de Jessica será perfecto cuando se traslade a Inglaterra el año que viene, ya que habrá estado estudiando durante 5 años."
            />
            <SingleExample
              english="I’m not worried about the marathon as I’ll have been running 20 kilometers a day for several weeks before."
              spanish="No me preocupa la maratón, ya que habré estado corriendo 20 km diarios durante varias semanas."
            />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Advanced'} unit={10} />
          </div>
        </div>
      </div>
    </div>
  )
}
