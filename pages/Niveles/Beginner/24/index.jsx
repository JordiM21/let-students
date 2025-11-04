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
      Unit 24
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Interests - LESSON 24</p>
      <CustomTitle title="Interests" titleSpanish="Intereses" />
      <div className="my-4">
        <div className="space-y-4">
          <SingleExample english="news" spanish="noticias" />
          <SingleExample english="a newspaper" spanish="un periodico" />
          <SingleExample english="a magazine" spanish="una revista" />
          <SingleExample english="a film" spanish="una pelicula" />
          <SingleExample english="a TV" spanish="una television" />
          <SingleExample english="a show" spanish="un espectaculo" />
          <SingleExample english="a TV show" spanish="un programa de television" />
          <SingleExample english="I want to watch TV" spanish="Quiero ver la television" />
          <SingleExample english="read" spanish="leer" />
          <SingleExample english="love" spanish="amar" />
          <SingleExample english="hate" spanish="odiar" />
          <SingleExample english="interested" spanish="interesado" />
          <SingleExample english="free time" spanish="tiempo libre" />
          <SingleExample
            english="What do you like to do on your free time?"
            spanish="Que te gusta hacer en tu tiempo libre?"
          />
          <SingleExample english="Well, i love to play football" spanish="Bueno, me encanta jugar futbol" />
          <SingleExample english="What are you interested in?" spanish="en que estas interesado?" />
          <SingleExample english="He hates reading the newspapper" spanish="el odia leer el periodico" />
          <SingleExample english="are you interested in art?" spanish="Estas interesado en arte?" />
          <SingleExample english="My mom always watches the TV" spanish="Mi madre siempre ve television" />
          <SingleExample
            english="What is your favorite movie on Netflix?"
            spanish="Cual es tu peli favorita en netflix?"
          />
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={24} />
          </div>
        </div>
      </div>
    </div>
  )
}
