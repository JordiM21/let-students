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
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Advanced">
      Advanced
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 17
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Phrasal and Prepositional Verbs - LESSON 17</p>
        <CustomTitle
          title={'Phrasal and Prepositional Verbs'}
          titleSpanish={'PHRASAL VERBS Y VERBOS PREPOSICIONALES'}
        />
        <div className="my-4">
          <div className="space-y-2">
            <p className="text-sm opacity-60">
              En inglés hay muchos verbos que constan de dos partes: el verbo y una preposición o partícula adverbial.
            </p>
            <p className="text-sm opacity-60">
              La diferencia entre una preposición y una partícula adverbial es que la preposición está unida a un
              sustantivo o pronombre y una partícula adverbial forma parte y depende sólo del verbo. Veamos la
              diferencia con el ejemplo “live down” que puede actuar como verbo preposicional y también como verbo
              adverbial.
            </p>
            <small className="text-sm opacity-60">Preposicional:</small>
            <SingleExample english="He lives down the street." spanish="Vive más abajo en esta calle." />
            <small className="text-sm opacity-60">Adverbial:</small>
            <SingleExample
              english="I couldn’t live down that incident."
              spanish="No podía conseguir olvidarme de ese incidente."
            />
            <p className="text-sm opacity-60">
              Los verbos compuestos pueden ser transitivos o intransitivos, según lleven o no, un complemento de objeto
              directo en forma de sintagma nominal. De ello dependerá el orden de la frase.
            </p>
            <p className="text-sm opacity-60">
              No vamos a fijarnos en las diferencias entre los diferentes tipos de verbos compuestos. Por ahora, lo que
              es más importante es tener en cuenta que los verbos frasales y preposicionales son verbos y en general
              tienen significados distintos de los verbos que los forman.
            </p>
            <p className="text-sm opacity-60">
              Por ejemplo, el verbo “give” significa “dar”, pero si añadimos la preposición “up”, el significado
              cambiará: “Give up” significa “abandonar”, “dejar de” o “rendirse”. Por lo tanto, “give” y “give up” son
              dos verbos distintos.
            </p>
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Advanced'} unit={17} />
          </div>
        </div>
      </div>
    </div>
  )
}
