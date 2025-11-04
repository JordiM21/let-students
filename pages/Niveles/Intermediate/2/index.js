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
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Intermediate">
      Intermediate
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 2
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">INDEFINITE PRONOUNS - LESSON 2</p>
        <CustomTitle title={'Indefinite Pronouns'} titleSpanish={'Pronombres indefinidos'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=pN6SSSlAhoI'} />
        <p className="font-bold text-gray-700">
          Los pronombres indefinidos no se refieren a ninguna persona, cosa, lugar, ni cantidad específica. Por eso, se
          llaman “indefinidos”. Ya hemos visto algunos de los indefinidos relacionados a cantidad en la lección de los
          cuantificadores. A continuación, tienes una lista completa con ejemplos de los pronombres indefinidos y las
          reglas gramaticales de su uso.
        </p>
        <div className="my-4">
          <div className="space-y-2">
            <p className="text-gray-400 font-bold text-base">EJEMPLO:</p>
            <SingleExample english="all" spanish="todo" />
            <SingleExample english={'You ate all the cookies'} spanish={'Has comido todas las galletas'} />
            <SingleExample english="another" spanish="otro" />

            <SingleExample english="Another glass of wine please." spanish="Otra copa de vino por favor." />
            <SingleExample english="any" spanish="algun, ningun, cualquier" />
            <SingleExample english="Is there any milk?" spanish="¿Hay leche?" />
            <SingleExample english="anybody / anyone" spanish="alguien, nadie, cualquiera" />
            <SingleExample english="Is there anyone home?" spanish="¿Hay alguien en casa?" />
            <SingleExample
              english="anything"
              spanish="algo, nada,
cualquier"
            />
            <SingleExample
              english="It’s so dark, I can’t see anything."
              spanish="Está muy oscuro, no puedo ver nada."
            />
            <SingleExample english="anywhere" spanish="cualquier lugar" />
            <SingleExample english="We can go anywhere you want." spanish="Podemos ir donde quieras." />
            <SingleExample english="both" spanish="ambos/los dos" />
            <SingleExample english="Both of my children speak French." spanish="Mis dos hijos hablan francés." />
            <SingleExample english="each" spanish="cada, cada uno" />
            <SingleExample english="Each of them is different." spanish="cada uno de ellos es diferente" />
            <SingleExample
              english="either"
              spanish="cualquiera
(de 2)"
            />
            <SingleExample english="I’m happy to see either movie." spanish="Me da igual ver cualquier película." />
            <SingleExample english="enough" spanish="suficiente" />
            <SingleExample english="There is never enough time." spanish="Nunca hay tiempo suficiente" />
            <SingleExample english="every" spanish="cada, todos" />
            <SingleExample
              english="Every student failed the exam."
              spanish="Todos los estudiantes suspendieron el examen."
            />
            <SingleExample english="everybody / everyone" spanish="todos, todo el mundo" />
            <SingleExample english="Everybody know it!" spanish="todos lo conocen!" />
            <SingleExample english="everything" spanish="todo" />
            <SingleExample english="How’s everything? Everything is fine." spanish="¿Qué tal todo? Todo bien." />
            <SingleExample english="everywhere" spanish="todas partes" />
            <SingleExample english="The water spilled everywhere." spanish="El agua se derramó por todas partes." />
            <SingleExample english="few" spanish="pocos, unos" />
            <SingleExample english="He has few friends." spanish="Él tiene pocos amigos." />
            <SingleExample english="less" spanish="menos" />
            <SingleExample english="There is less work this year." spanish="Hay menos trabajo este año." />
            <SingleExample english="more" spanish="más" />
            <SingleExample english="There is more work this year." spanish="Hay más trabajo este año." />
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Intermediate'} unit={2} />
          </div>
        </div>
      </div>
    </div>
  )
}
