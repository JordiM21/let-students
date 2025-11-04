import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
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
      Unit 20
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="mx-6 md:max-w-xl md:mx-auto">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Listening Comprehension - LESSON 20</p>
      <CustomTitle title="Listening Comprehension" titleSpanish="Comprensión Auditiva" />
      <VideoPlayer url={'https://www.youtube.com/watch?v=JwGnCIsLOpU'} />
      <div className="my-4">
        <p className="font-bold text-sm opacity-90">
          A continuación vas a escuchar y ver todas las actividades mostradas en el video con mucha atención y luego
          responder las preguntas al final
        </p>
        <div className="space-y-4">
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Beginner'} unit={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
