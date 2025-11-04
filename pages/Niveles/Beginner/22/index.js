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
      Unit 22
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Colors - LESSON 22</p>
      <CustomTitle title="Colors" titleSpanish="Colores" />
      <VideoPlayer url={'https://www.youtube.com/watch?v=vqNvsH-d3l8&t=73s'} />
      <div className="my-4">
        <p className="font-bold text-sm opacity-90">
          Preparate para ser un experto en los colores en ingles, aprenderàs como decir los colores y como usarlos en
          contextos de la vida real.
        </p>
        <div className="space-y-4">
          <SingleExample english="Red" spanish="rojo" />
          <SingleExample english="blue" spanish="azul" />
          <SingleExample english="yellow" spanish="amarillo" />
          <SingleExample english="green" spanish="verde" />
          <SingleExample english="black" spanish="negro" />
          <SingleExample english="pink" spanish="rosado" />
          <SingleExample english="purple" spanish="morado, purpura" />
          <SingleExample english="white" spanish="blanco" />
          <SingleExample english="orange" spanish="naranja" />
          <SingleExample english="brown" spanish="marron" />
          <SingleExample english="grey" spanish="gris" />
          <SingleExample english="light" spanish="claro, ligero" />
          <SingleExample english="dark" spanish="oscuro" />
          <SingleExample english="light blue" spanish="azul claro" />
          <SingleExample english="dark red" spanish="rojo oscuro" />
          <SingleExample english="That red car is amazing!" spanish="Ese carro rojo es increible" />
          <SingleExample english="the blue t-shirt is mine" spanish="la camisa azul es mia" />
          <SingleExample english="The ferrari is yellow" spanish="El ferrari es amarillo" />
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={22} />
          </div>
        </div>
      </div>
    </div>
  )
}
