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
      Unit 1
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">ADVERBS - LESSON 1.1</p>
        <CustomTitle title={'Adverbs: Form and Function'} titleSpanish={'LOS ADVERBIOS: FORMA Y FUNCIONAMIENTO'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=WC2tzXPIWMs'} />
        <p className="font-bold text-gray-700">
          Un adverbio es una palabra que acompaña al verbo para modificar su significado. Un adverbio también puede
          modificar a los adjetivos, a los nombres o a otros adverbios.
        </p>
        <p className="text-gray-400 font-bold text-base">EJEMPLO:</p>
        <SingleExample english={'She speaks quickly.'} spanish={'Ella habla rápido.'} />
        <p className="font-bold text-gray-700">
          En este ejemplo “quickly” es un adverbio de modo que modifica al verbo “to speak” para expresar cómo habla
          ella.
        </p>
        <div className="my-4">
          <CustomTitle title={'Grammatical Rules'} titleSpanish={'Reglas gramaticales'} />
          <small className="text-sm opacity-60">
            1. La regla general para formar adverbios es añadir la terminación “-ly” a un adjetivo, que equivale a la
            terminación en castellano de (“‑mente”).
          </small>
          <div className="space-y-2">
            <DoubleExample english1="quick" english2="quickly" spanish1="rapido" spanish2="rapidamente" />
            <DoubleExample
              english1="honest"
              english2="honestly"
              spanish1="honrado/honesto"
              spanish2="honradamente/honestamente"
            />
            <small className="text-sm opacity-60">
              2. Para los adjetivos que terminan en consonante + “-y,” se cambia “-y” por “-ily.”
            </small>
            <DoubleExample english1="easy" english2="easily" spanish1="facil" spanish2="facilmente" />
            <DoubleExample english1="happy" english2="happily" spanish1="alegre" spanish2="alegremente" />
            <small className="text-sm opacity-60">
              3. Adjetivos terminados en “-ic” se cambia la terminación “-ic” por “-ically.”
            </small>
            <DoubleExample
              english1="automatic "
              english2="automatically"
              spanish1="automático"
              spanish2="automáticamente"
            />
            <DoubleExample english1="tragic" english2="tragically" spanish1="tragico" spanish2="tragicamente" />
            <small className="text-sm opacity-60">
              4. Adjetivos terminados en “-le,” se cambia la terminación “-le” por “-ly.”
            </small>
            <DoubleExample english1="terrible" english2="terribly" spanish1="terrible" spanish2="terriblemente" />
            <DoubleExample
              english1="incredible"
              english2="incredibly"
              spanish1="increíble "
              spanish2="increíblemente"
            />
            <small className="text-sm opacity-60">5. Algunos adverbios irregulares no terminan en “-ly.”</small>
            <SingleExample english={'hard'} spanish={'difícil, duro o fuerte'} />
            <SingleExample english={'fast'} spanish={'rápido'} />
            <CustomTitle title={'Function of Adverbs'} titleSpanish={'La funcion de los adverbios'} />
            <p className="font-bold text-gray-700">
              Como hemos visto, los adjetivos nos dicen algo sobre un nombre (una persona, una cosa, un lugar, etc.).
              Los adverbios por otro lado, nos dicen algo sobre el modo de hacer una acción. Pueden modificar a los
              verbos, a los adjetivos o a otros adverbios.
            </p>
            <SingleExample english={'Miguel runs fast.'} spanish={'Miguel corre rápido.'} />
            <SingleExample english={'You speak loudly.'} spanish={'Hablas alto.'} />
            <Nota
              text={'En los siguientes usamos incrementadores como: very, really, so and pretty para decir muuuuyyy'}
            />
            <SingleExample english={'He runs really fast.'} spanish={'Él corre muy rápido.'} />
            <SingleExample english={'You speak very loudly.'} spanish={'Hablas muy alto.'} />
            <SingleExample english={'I am very happy.'} spanish={'Estoy muy contenta.'} />
            <SingleExample english={'She is really nice.'} spanish={'Ella es muy simpática.'} />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Intermediate'} unit={1} />
          </div>
        </div>
      </div>
    </div>
  )
}
