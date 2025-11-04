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
      Unit 13
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">W-H Questions - LESSON 13</p>
      <CustomTitle title="WH Questions" titleSpanish="Preguntas con WH" />
      <VideoPlayer url={'https://www.youtube.com/watch?v=x_4AjSwTXdc'} />
      <div className="my-4">
        <p className="font-bold text-sm opacity-90">
          Las preguntas con WH son muy sencillas y forman parte de los dos tipos de pregunta en inglés, tenemos las
          preguntas con respuesta sí o no, por ejemplo: Do you like coffe?/¿Te gusta el café? esta pregunta es una
          Yes/No question. Pero en esta lección hablaremos de las WH Questions que es el segundo tipo de pregunta mejor
          conocida como PREGUNTAS ABIERTAS
        </p>
        <div className="space-y-4">
          <p className="text-[var(--blueDarkbg)] text-3xl font-bold">Wh - Questions</p>
          <SingleExample english="Who" spanish="Quien (persona)" />
          <SingleExample english="What" spanish="Que (cosa)" />
          <SingleExample english="Where" spanish="Donde (Lugar)" />
          <SingleExample english="When" spanish="Cuando (tiempo)" />
          <SingleExample english="Why " spanish="Razón (motivo)" />
          <SingleExample english="How" spanish="Como (Forma)" />
          <p className="text-gray-600 font-bold text-xl">EJEMPLOS:</p>
          <SingleExample english="Where are you?" spanish="¿Donde estas?" />
          <SingleExample english="Where do you like?" spanish="¿Donde vives tu?" />
          <SingleExample english="Where does she live?" spanish="¿Donde vive ella?" />
          <SingleExample english="Why are you here?" spanish="¿Por que estás aquí?" />
          <SingleExample english="How are you?" spanish="¿Como estás?" />
          <SingleExample english="What is her favorite movie?" spanish="¿Cual es su (ella) película favorita?" />
          <SingleExample
            english="What is your name?"
            spanish="¿Cual es tu nombre (estamos hablando de una cosa = nombre)?"
          />
          <Nota text="Lo sé, lo sé te habíamos dicho que what = que pero, en estos casos partiulares what tambien significa cual, ejemplos: what is your favorite color? / ¿cual es tu color preferido?" />
          <SingleExample english="When is your birthday?" spanish="¿Cuando es tu cumpleaños?" />
          <SingleExample english="When do you have class?" spanish="¿Cuando tienes clase?" />
          <p className="text-[var(--blueDarkbg)] text-3xl font-bold">WHICH</p>
          <p>
            Utilizamos Which que también es un WH Question pero es particularmente diferente porque se usa SOLO cuando
            se tienen pocas opciones a elegir (en general 2) entonces, cuando tenemos que decidir una opción usamos
            "which"
          </p>
          <Nota text="La traducción literal de which sería cual pero, tambien what podría significar cual entonces ¿como sabemos cual utilizar? sencillo! Which usamos cuando tenemos un numero de opciones y what cuando hablamos en general. Pero no te preocupes ambas son gramaticalmente correctas" />
          <SingleExample
            english="Which ice cream do you like most? Chocolate or Strawberry?"
            spanish="¿Cual helado te gusta más? ¿Chocholate o Fresa?"
          />
          <SingleExample english="What is your favorite ice cream?" spanish="Cual es tu helado favorito?" />
          <Nota text="Aquí vemos el uso de los dos, mientras which es elegir entre opciones, el what te pregunta en general, es por eso que no podemos decir en absolute: [WHICH IS YOUR NAME?] esto si es gramaticalmente incorrecto." />
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={13} />
          </div>
        </div>
      </div>
    </div>
  )
}
