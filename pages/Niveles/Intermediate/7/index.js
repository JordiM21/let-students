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
      Unit 7
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Like vs. As - LESSON 7</p>
        <CustomTitle title={'Like vs. As'} titleSpanish={'Como'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=wkQYbZHAYac'} />
        <p className="font-bold text-gray-700">
          “Like” y “as” a menudo se confunden en inglés. Ambas se pueden utilizar para hacer comparaciones o hablar de
          similitudes. Es muy común en inglés americano utilizar “like” en lugar de “as”. Sin embargo, es generalmente
          considerado informal utilizarla en esta forma. La siguiente es una explicación de los diversos usos de estas
          dos palabras.
        </p>
        <div className="my-4">
          <div className="space-y-2">
            <CustomTitle title="Like" titleSpanish="Como" />
            <p className="text-gray-400 font-bold text-base">EJEMPLO:</p>
            <SingleExample
              english="
She dances like a professional."
              spanish="Baila como una profesional."
            />
            <SingleExample
              english="Like me, my friend John loves the cinema."
              spanish="Como yo, a mi amigo John le encanta el cine."
            />
            <SingleExample
              english="Michael speaks English like a native."
              spanish="Michael habla inglés como un nativo."
            />
            <SingleExample english="It’s so like Ben to be late." spanish="Es tan típico de Ben llegar tarde." />
            <SingleExample
              english="It’s just like Helen to laugh in uncomfortable situations."
              spanish="Es tan típico de Helen reír en situaciones incómodas."
            />
            <SingleExample english="I look like my mother." spanish="Me parezco a mi madre" />
            <SingleExample english="It looks like it is going to rain." spanish="Parece que va a llover." />
            <SingleExample
              english="I play many sports like football, basketball and tennis."
              spanish="Juego muchos deportes como fútbol, baloncesto y tenis."
            />
            <SingleExample
              english="Some people, like my friend Carol, don’t like to travel."
              spanish="A algunas personas, como mi amiga Carol, no les gusta viajar."
            />
            <CustomTitle title="As" titleSpanish="Como" />

            <SingleExample english="Nobody paints as Picasso did." spanish="Nadie pinta como Picasso lo hizo." />
            <SingleExample
              english="John can run as fast as Peter."
              spanish="John puede correr tan rápido como Peter."
            />
            <SingleExample
              english="My dad doesn’t have as much energy as he used to have."
              spanish="Mi padre no tiene tanta energía como solía tener."
            />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Intermediate'} unit={7} />
          </div>
        </div>
      </div>
    </div>
  )
}
