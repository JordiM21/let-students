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
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Beginner">
      Beginner
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 19
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Reading Comprehension - LESSON 19</p>
      <CustomTitle title="Reading Comprehension" titleSpanish="Comprensión Lectora" />
      <div className="my-4">
        <p className="font-bold text-sm opacity-90 my-8">
          A continuación vas a leer el siguiente texto y responder las preguntas que al final, recuerda leerlo varias
          veces si es necesario, también puedes pedir ayuda a tu tutor o buscar palabras en el traductor que no
          entiendas. Good luck!
        </p>
        <div className="space-y-4">
          <p className="text-gray-600 font-bold text-xl">
            Hi student! my name is Richard and i will tell you about me. I live in a house near the mountains. I have
            two brothers and one sister, and I was born last. My father teaches mathematics, and my mother is a nurse at
            a big hospital. My brothers are very smart and work hard in school. My sister is a nervous girl, but she is
            very kind. My grandmother also lives with us. She came from Italy when I was two years old. She has grown
            old, but she is still very strong. She cooks the best food! My family is very important to me. We do lots of
            things together. My brothers and I like to go on long walks in the mountains. My sister likes to cook with
            my grandmother. On the weekends we all play board games together. We laugh and always have a good time. I
            love my family very much.
          </p>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={19} />
          </div>
        </div>
      </div>
    </div>
  )
}
