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
      Unit 23
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Indirect Questions - LESSON 23</p>
        <CustomTitle title={'Indirect Questions'} titleSpanish={'Preguntas Indirectas'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=6muaUJHMnFg'} />
        <div className="my-4">
          <div className="space-y-2">
            <p className="text-sm opacity-60">
              Ahora aprenderemos acerca de las "indirect questions" o "preguntas indirectas". Las preguntas indirectas
              son una forma más educada y formal de hacer una pregunta en inglés. En lugar de usar la estructura de
              pregunta directa con el verbo auxiliar antes del sujeto, en las preguntas indirectas, el verbo auxiliar se
              coloca después del sujeto, como en una oración afirmativa. Las preguntas indirectas suelen usarse en
              situaciones más formales, en escritura académica, en entrevistas, y cuando queremos ser más corteses o
              menos directos.
            </p>
            <p className="text-sm opacity-60">Ejemplo de pregunta directa:</p>
            <SingleExample english="What time is the meeting?" spanish="¿A qué hora es la reunión?" />
            <p className="text-sm opacity-60">Ejemplo de pregunta indirecta:</p>
            <SingleExample
              english="Can you tell me what time the meeting is?"
              spanish="¿Puedes decirme a qué hora es la reunión?"
            />
            <CustomTitle
              title={'Steps to create Indirect Questions'}
              titleSpanish={'Pasos a seguir para crear correctamente preguntas indirectas'}
            />
            <p className="text-sm opacity-60">
              1. Comenzamos con una palabra interrogativa como "what" (qué), "where" (dónde), "when" (cuándo), "who"
              (quién), "how" (cómo) o "why" (por qué).
            </p>
            <p className="text-sm opacity-60">
              2. Luego, usamos un verbo introductorio como "ask," "tell," "wonder," "know," "explain," o "show."
            </p>
            <p className="text-sm opacity-60">
              3. Finalmente, formamos la pregunta indirecta como una oración afirmativa, manteniendo el orden del sujeto
              y el verbo.
            </p>
            <p className="text-sm opacity-60">¡Veamos algunos ejemplos!</p>
            <SingleExample english="Could you tell me where she lives?" spanish="¿Podrías decirme dónde vive ella?" />
            <SingleExample
              english="I wonder what time the concert starts."
              spanish="Me pregunto a qué hora comienza el concierto"
            />
            <SingleExample
              english="Do you know why they canceled the event?"
              spanish="¿Sabes por qué cancelaron el evento?"
            />
            <SingleExample
              english="Please, could you show me how I can get to the museum?"
              spanish="Por favor, ¿podrías mostrarme cómo puedo llegar al museo?"
            />
            <p className="text-sm opacity-60">
              Es importante tener en cuenta que las preguntas indirectas suelen llevar una estructura más formal y
              educada, lo que puede ser especialmente útil en situaciones profesionales o en interacciones con personas
              que no conocemos bien. Con las preguntas indirectas, podemos expresar nuestras inquietudes o solicitar
              información de manera más amable y respetuosa.
            </p>
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Advanced'} unit={23} />
          </div>
        </div>
      </div>
    </div>
  )
}
