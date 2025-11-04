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
      Unit 24
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">American Vocabulary - LESSON 24</p>
        <CustomTitle
          title={'American - British - Australian - Canadian English'}
          titleSpanish={'Inglés Americano - Britanico - Australiano - Candiense'}
        />
        <VideoPlayer url={'https://www.youtube.com/watch?v=ajmH5iXWUPU'} />
        <p className="font-bold text-gray-700">
          Hey! En esta lección veremos las diferencias entre estos 4 paises de habla inglesa, Australia, Reino Unido,
          Canada y como se relacionan con Estados Unidos (USA), Escucha atentamente la conversacion de las chicas y
          responde las preguntas
        </p>
        <CustomTitle title={'The different accents!'} titleSpanish={'Los diferentes acentos!'} />
        <ReactPlayer
          width={'100%'}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=R1lmeSIhLxc"
          controls={true}
        />
        <p className="font-bold text-gray-700">
          Al igual que en español tambien en inglés tenemos muchos acentos diferentes, mira este corto video con estas
          tres chicas y trata de imitar sus acentos e intenta entender lo que dicen.
        </p>
        <div className="my-8 rounded-md p-4 bg-blue-200 ">
          <UnitTest level={'Intermediate'} unit={24} />
        </div>
      </div>
    </div>
  )
}
