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
      Unit 21
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Saludos - LESSON 21</p>
      <CustomTitle title="Saludos" titleSpanish="Greetings" />
      <div className="my-4">
        <p className="font-bold text-sm opacity-90">
          Los saludos hacen parte de nuestro dia a dia, en esta unidad aprenderàs a utilizarlos y a expresarte con ellos
        </p>
        <div className="space-y-4">
          <SingleExample english="Hi! how are you?" spanish="Hola! como estas?" />
          <SingleExample english="i'm great thank you! and you?" spanish="Estoy muy bien gracias y tu?" />
          <SingleExample english="Welcome to my house!" spanish="Bienvenido a mi casa!" />
          <SingleExample english="Thank you for your help" spanish="Gracias por tu ayuda" />
          <SingleExample english="you're welcome!" spanish="de nada" />
          <SingleExample english="please" spanish="por favor" />
          <SingleExample english="Of course!" spanish="Por supuesto!" />
          <SingleExample english="Good luck!" spanish="Buena suerte!" />
          <SingleExample english="Good morning!" spanish="Buenos dias!" />
          <SingleExample english="Good night" spanish="Buenas noches" />
          <SingleExample english="Bye!" spanish="Adios" />
          <SingleExample english="Goodbye!" spanish="adios" />
          <SingleExample english="what's your name?" spanish="Cual es tu nombre?" />
          <SingleExample english="my name's..." spanish="me llamo .." />
          <SingleExample english="What's the Wi-Fi password?" spanish="¿cuál es la clave del wifi?" />
          <SingleExample english="do you speak Spanish?" spanish="¿hablas español?" />
          <SingleExample english="I speak a little of English" spanish="hablo un poco de inglés" />
          <SingleExample english="just a little" spanish="solo un poco" />
          <SingleExample english="I'm sorry" spanish="lo siento" />
          <SingleExample english="I love you" spanish="te amo" />
          <SingleExample english="Let's go!" spanish="vamos!" />
          <SingleExample english="Good Afternoon" spanish="Buenas tardes" />
          <SingleExample english="Nice to meet you!" spanish="un placer conocerte!" />
          <SingleExample english="" spanish="" />
          <p>
            ¿Que tal estuvo? te recomendamos practicar un poco formando oraciones presentandote, dandote a conocer y en
            diferentes contextos
          </p>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={21} />
          </div>
        </div>
      </div>
    </div>
  )
}
