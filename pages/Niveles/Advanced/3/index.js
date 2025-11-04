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
      Unit 3
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Present Perfect vs Past Simple - LESSON 3</p>
        <CustomTitle
          title={'Present Perfect vs Past Simple'}
          titleSpanish={'EL PRESENTE PERFECTO Y EL PASADO SIMPLE'}
        />
        <VideoPlayer url={'https://www.youtube.com/watch?v=D9sxDL0HbnY'} />
        <p className="font-bold text-gray-700">
          Se utiliza el pasado simple para acciones que han terminado en el pasado, incluso si han ocurrido en un pasado
          reciente. Con el presente perfecto la acción está relacionada con el presente.
        </p>
        <div className="my-4">
          <small className="text-sm opacity-60">PASADO SIMPLE (EJEMPLOS)</small>
          <div className="space-y-2">
            <SingleExample
              english="Did you eat breakfast this morning?"
              spanish="Desayunaste esta mañana? [La mañana ya ha terminado.]"
            />
            <SingleExample
              english="I had three exams this week."
              spanish="Tuve tres examenes esta semana [Como en el ejemplo anterior, el uso del pasado simple significa que esta semana acaba de terminar.]"
            />
            <small className="text-sm opacity-60">PRESENTE PERFECTO (EJEMPLOS)</small>
            <SingleExample
              english="Have you eaten breakfast this morning?"
              spanish="Has desayunado esta mañana? [La mañana aún no ha terminado.]"
            />
            <SingleExample
              english="I have had three exams already this week."
              spanish="He tenido tres examenes esta semana [Como antes, el uso del presente perfecto implica que esta semana aún no ha terminado.]"
            />
            <Nota text="Recuerda también que usamos el presente perfecto para acciones en un tiempo en el pasado no específico. Si quieres limitar el tiempo de las acciones en un período, podemos usar expresiones de tiempo como “last year”." />
            <small className="text-sm opacity-60">PASADO SIMPLE (EJEMPLOS)</small>
            <SingleExample english="I went to Cuba last year." spanish="Fui a Cuba el año pasado." />
            <SingleExample english="They saw a movie yesterday." spanish="Vieron una película ayer." />
            <small className="text-sm opacity-60">PRESENTE PERFECTO (EJEMPLOS)</small>
            <SingleExample
              english="I have been to Cuba in the last year."
              spanish="He estado en Cuba este último año."
            />
            <SingleExample english="They have seen a movie." spanish="Ellos han visto una pelicula." />
            <SingleExample english="(INCORRECTO) They have seen yesterday a movie" spanish="No es correcta, porque?" />
            <Nota text="Fíjate en la diferencia entre los dos primeros ejemplos. En ambos, se usa la expresión de tiempo “last year”, pero en el segundo ejemplo añadimos la preposición “in”. En este caso, “last year” significa dentro de un período de tiempo en que la acción ocurrió, no es un tiempo específico. Sin la preposición “in”, “last year” implica un tiempo específico." />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Advanced'} unit={3} />
          </div>
        </div>
      </div>
    </div>
  )
}
