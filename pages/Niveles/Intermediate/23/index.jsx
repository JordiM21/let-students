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
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Intermediate">
      Intermediate
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
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">British Vocabulary - LESSON 23</p>
        <CustomTitle title={'British Vocabulary'} titleSpanish={'Vocabulario Británico'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=e33vwOw8jl0'} />
        <p className="font-bold text-gray-700">
          Acá tienes algunas de las palabras que cambian un poco depende de la región en donde estés, recuerda que no
          hay favoritos, el unico favorito es el que a ti mas te gusto, no hay uno incorrecto! todos son geniales.
          Aprendamos un poco mas de ellos y sus culturas!
        </p>
        <div className="my-4">
          <div className="space-y-2">
            <CustomTitle title="British Culture" titleSpanish="Cultura Britanica" />
            <ReactPlayer
              width={'100%'}
              className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
              url="https://www.youtube.com/watch?v=wpjspHgHU9g"
              controls={true}
            />
            <p className="font-bold text-gray-700">
              Mira este interesante video y presta atención a las cosas que hacen tipicamente las personas de United
              Kingdom [Reino Unido]
            </p>
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Intermediate'} unit={23} />
          </div>
        </div>
      </div>
    </div>
  )
}
