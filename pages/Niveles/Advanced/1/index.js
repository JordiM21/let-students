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
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Present Perfect - LESSON 1</p>
        <CustomTitle title={'Present Perfect'} titleSpanish={'El presente perfecto'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=7aw7bQtPYCE'} />
        <p className="font-bold text-gray-700">
          El presente perfecto equivale más o menos al pretérito perfecto del español. Veremos las diferencias en la
          sección sobre usos. En general, es una mezcla entre el presente y el pasado. Lo usamos para acciones en el
          pasado que tienen importancia en el presente.
        </p>
        <div className="my-4">
          <div className="space-y-2">
            <SingleExample
              english="
I have [I’ve] talked to Peter."
              spanish="He hablado con Peter."
            />
            <SingleExample english="She has [She’s] gone to work." spanish="Ha ido a su trabajo." />
            <SingleExample english="We have [We’ve] been to London." spanish="Hemos ido a Londres." />
            <SingleExample english="They have [They’ve] learned English." spanish="Han aprendido inglés." />
            <small className="text-sm opacity-60">Negative Sentences (Frases Negativas)</small>
            <SingleExample
              english="
I haven’t talked to Peter."
              spanish="No he hablado con Peter."
            />
            <SingleExample english="She hasn’t gone to work." spanish="No ha ido a su trabajo." />
            <SingleExample english="We haven’t been to London." spanish="No hemos ido a Londres." />
            <SingleExample english="They haven’t learned English." spanish="No han aprendido inglés." />
            <small className="text-sm opacity-60">Interrogative Sentences (Frases Interrogativas)</small>
            <SingleExample english="Have you talked to Peter?" spanish="¿Has hablado con Peter?" />
            <SingleExample
              english="
Has she gone to work?"
              spanish="¿Ha ido a su trabajo?"
            />
            <SingleExample english="Have you been to London?" spanish="¿Has ido a Londres?" />
            <SingleExample english="Have they learned English?" spanish="¿Han aprendido inglés?" />
            <small className="text-sm opacity-60">Ejemplos prácticos</small>
            <SingleExample english="I have never flown in a plane." spanish="Nunca he volado en un avión." />
            <SingleExample
              english="He has worked in many different museums."
              spanish="Ha trabajado en muchos museos diferentes."
            />
            <SingleExample
              english="
We have been to Río de Janeiro."
              spanish="Hemos ido a Río de Janeiro."
            />
            <SingleExample
              english="
I have become more timid in my old age."
              spanish="Me he vuelto más tímido en mi vejez."
            />
            <SingleExample
              english="Their English has improved a lot this year."
              spanish="Su inglés ha mejorado mucho este año."
            />
            <SingleExample english="He has learned to be more patient." spanish="Ha aprendido a ser más paciente." />
            <SingleExample
              english="
Our football team has won the championship three times."
              spanish="Nuestro equipo de fútbol ha ganado el campeonato tres veces."
            />
            <SingleExample
              english="Dan has finished writing his first novel."
              spanish="Dan ha terminado de escribir su primera novela."
            />
            <SingleExample
              english="Scientists have succeeded in curing many illnesses."
              spanish="Los científicos han tenido éxito en la curación de muchas enfermedades."
            />
            <SingleExample english="The plane hasn’t arrived yet." spanish="El avión no ha llegado todavía." />
            <SingleExample
              english="Our team still hasn’t won a championship."
              spanish="Nuestro equipo aún no ha ganado un campeonato"
            />
            <SingleExample
              english="You haven’t finished your homework yet?"
              spanish="¿No has acabado todavía los deberes?"
            />
            <SingleExample
              english="
Our team has played 4 games so far this year."
              spanish="Nuestro equipo ya ha jugado 4 partidos este año."
            />
            <SingleExample
              english="How long has Michael been in Barcelona?"
              spanish="¿Cuánto tiempo ha estado Michael en Barcelona?"
            />
            <SingleExample
              english="I have loved you since the day I met you."
              spanish="Te he querido desde el día que te conocí."
            />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Advanced'} unit={1} />
          </div>
        </div>
      </div>
    </div>
  )
}
