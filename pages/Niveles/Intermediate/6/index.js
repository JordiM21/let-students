import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest'
import { useRouter } from 'next/router'
import { Breadcrumbs, Link, Typography } from '@mui/material'

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
      Unit 6
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">INTENSIFIERS & MITIGATORS - LESSON 6</p>
        <CustomTitle title={'Intensifiers and Mitigators'} titleSpanish={'Los intensificadores y mitigadores'} />
        <p className="font-bold text-gray-700">
          Los intensificadores y mitigadores se usan para variar el grado o fuerza de un adjetivo, verbo o adverbio.
        </p>
        <div className="my-4">
          <div className="space-y-2">
            <CustomTitle title="Intensifiers" titleSpanish="Los intensificadores" />
            <p className="text-gray-400 font-bold text-base">EJEMPLO:</p>
            <SingleExample english="very" spanish="muy" />
            <SingleExample english="really" spanish="verdaderamente" />
            <SingleExample english="extremely" spanish="extremadamente" />
            <SingleExample english="amazingly" spanish="sorprendentemente" />
            <SingleExample english="enough" spanish="suficiente" />
            <SingleExample english="Kate is really beautiful." spanish="Kate es verdaderamente guapa." />
            <SingleExample english="Michael can run very fast." spanish="Michael puede correr muy rápido." />
            <SingleExample
              english="Sharks are extremely dangerous."
              spanish="Los tiburones son extremadamente peligrosos."
            />
            <Nota text="Ten cuidado al usar “Enough” se puede usar como intensificador, pero ten cuidado porque “enough” se encuentra detrás del adjetivo que modifica." />
            <SingleExample
              english="Dan is not old enough to vote."
              spanish="Dan no tiene la edad suficiente para votar"
            />
            <SingleExample
              english="My sister isn’t tall enough to ride on the roller coaster."
              spanish="Mi hermana no es suficientemente alta para subir a la montaña rusa."
            />
            <SingleExample
              english="Her son is exceptionally brilliant."
              spanish="Su hijo es excepcionalmente brillante."
            />
            <SingleExample english="Dave is much faster than me." spanish="Dave es mucho más rápido que yo." />
            <SingleExample
              english="My brother is a lot taller than my father."
              spanish="Mi hermano es mucho más grande que mi padre."
            />
            <CustomTitle title="Mitigators" titleSpanish="Los mitigadores" />
            <p className="font-bold text-gray-700">
              Mientras los intensificadores refuerzan el sentido de un adjetivo, los mitigadores los debilitan.
            </p>
            <SingleExample english="fairly" spanish="bastante" />
            <SingleExample english="rather" spanish="bastante" />
            <SingleExample english="quite" spanish="bastante" />
            <SingleExample english="pretty" spanish="bastante" />
            <SingleExample english="The movie was fairly boring." spanish="La película era bastante aburrida." />
            <SingleExample
              english="The students were rather quiet in class."
              spanish="Los estudiantes eran bastante tranquilos en clase."
            />
            <SingleExample english="It’s a pretty nice day." spanish="Es un día bastante bonito." />
            <SingleExample english="Dave is a bit faster than me." spanish="Dave es un poco más rápido que yo." />
            <SingleExample
              english="My brother is slightly taller than my father."
              spanish="Mi hermano es un poco más alto que mi padre"
            />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Intermediate'} unit={6} />
          </div>
        </div>
      </div>
    </div>
  )
}
