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
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Advanced">
      Advanced
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 25
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Accent and Pronunciation - LESSON 25</p>
        <CustomTitle title={'Accent and Pronunciation'} titleSpanish={'Acentos y Pronunciación'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=-P-5RC17BHw'} />
        <div className="my-4">
          <div className="space-y-2">
            <p className="text-sm opacity-60">
              En esta clase te enfocarás en mejorar tu acento y en crear rutinas para mejorar tu pronunciación
            </p>
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Advanced'} unit={25} />
          </div>
        </div>
      </div>
    </div>
  )
}
