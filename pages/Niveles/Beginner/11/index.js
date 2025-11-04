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
      Unit 11
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">TO BE - LESSON 11</p>
      <CustomTitle title="To Be" titleSpanish="SER/ESTAR" />
      <VideoPlayer url={'https://www.youtube.com/watch?v=uQWgJGHwF0Y'} />
      <div className="my-4">
        <p className="font-bold text-xs opacity-90">
          El verbo “to be” es el verbo más importante del inglés y al mismo tiempo, el más complicado. Se utiliza tanto
          como un verbo principal como un verbo auxiliar y es irregular en el presente y el pasado.
        </p>
        <div className="space-y-4">
          <p className="text-gray-600 font-bold text-xl">EJEMPLOS:</p>
          <p className="text-[var(blueDarkbg)] font-bold text-2xl">Positive (Positivo)</p>
          <SingleExample english="I am / I'm" spanish="yo soy/yo estoy" />
          <SingleExample english="you are / you're" spanish="tú eres/estás" />
          <SingleExample english="He is / He's" spanish="él es/está" />
          <SingleExample english="She is / She's" spanish="ella es/está" />
          <SingleExample english="It is / It's" spanish="eso es/está" />
          <SingleExample english="We are / We're" spanish="ellos son/están" />
          <SingleExample english="They are / They're" spanish="ellos son/están" />
          <p className="text-[var(blueDarkbg)] font-bold text-2xl">Negative (Negativo)</p>
          <SingleExample english="I am not / I'm not" spanish="yo no soy/yo estoy" />
          <SingleExample english="you are not / you aren't" spanish="tú no eres/estás" />
          <SingleExample english="He is not / He isn't" spanish="él es/está" />
          <SingleExample english="She is not / She isn't" spanish="ella no es/está" />
          <SingleExample english="It is not / It isn't" spanish="eso es/está" />
          <SingleExample english="We are not / We aren't" spanish="ellos no son/están" />
          <SingleExample english="They are not / They aren't" spanish="ellos no son/están" />
          <p className="text-[var(blueDarkbg)] font-bold text-2xl">Interrogative (Interrogativo)</p>
          <Nota text="Nota: En preguntas con el verbo “to be”, el sujeto y el verbo cambian posiciones." />
          <SingleExample english="Am i?" spanish="¿Yo soy/estoy?" />
          <SingleExample english="Are you?" spanish="¿Tu eres/estas?" />
          <SingleExample english="Is he?" spanish="¿El es/esta?" />
          <SingleExample english="Is she?" spanish="¿Ella es/está?" />
          <SingleExample english="Is it?" spanish="¿eso es/está?" />
          <SingleExample english="Are we?" spanish="¿Nosotros somos/estamos?" />
          <SingleExample english="Are they?" spanish="¿Ellos son/están?" />
          <p className="text-gray-600 font-bold text-xl">EJEMPLOS:</p>
          <SingleExample english="I am teacher" spanish="Soy un profesor" />
          <SingleExample english="You aren't a student" spanish="Tu no eres un estudiante" />
          <SingleExample english="Is he a doctor?" spanish="¿Es el un doctor?" />
          <SingleExample english="She is in New York" spanish="Ella está en Nueva York" />
          <SingleExample english="Is the book on the table?" spanish="¿El libro está en la mesa?" />
          <SingleExample english="We are happy" spanish="Nosotros estamos felices" />
          <SingleExample english="He isn't sad" spanish="El no está triste" />
          <SingleExample english="You are busy" spanish="Tu estás ocupado" />
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={11} />
          </div>
        </div>
      </div>
    </div>
  )
}
