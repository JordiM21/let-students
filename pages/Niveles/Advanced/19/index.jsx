import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';

export default function index() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/Niveles"
    >
      Levels
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/Niveles/Advanced"
    >
      Advanced
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 19
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>PRONOUNS & DETERMINERS  - LESSON 19</p>
        <CustomTitle title={"PRONOUNS & DETERMINERS "} titleSpanish={"Pronombres y Determinantes"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url=""
          controls={true} />
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomTitle title={"Either vs. Neither"} titleSpanish={"Podemos utilizar “either” y “neither” como pronombres, determinantes o adverbios. A continuación tienes una explicación de las diferencias entre estas dos palabras."} />
            <CustomTitle title={"Either"} titleSpanish={"“Either” implica una elección entre dos posibles opciones. Ten en cuenta que la preposición “or” se utiliza entre estas dos opciones."} />
            <SingleExample
              english="We can go to either the beach or the swimming pool."
              spanish="Podemos ir a la playa o la piscina."
            />
            <SingleExample
              english="Either we wait for the rain to stop or we must change our plans."
              spanish="Esperamos que pare de llover o debemos cambiar nuestros planes."
            />
            <CustomTitle title={"Neither"} titleSpanish={"“Neither” indica el acuerdo entre dos ideas negativas. Con “neither”, las dos ideas están separadas por la preposición “nor”."} />
            <SingleExample
              english="Neither Henry nor Chris want to go to the beach."
              spanish="Ni Henry ni Chris quieren ir a la playa."
            />
            <SingleExample
              english="Neither the school nor the parents want to take responsibility for the problem."
              spanish="Ni la escuela ni los padres quieren asumir la responsabilidad del problema."
            />
            <CustomTitle title={"Both"} titleSpanish={"Cuando queremos indicar un acuerdo entre dos ideas afirmativas, utilizamos “both”."} />
            <SingleExample
              english="Both my parents work at the hospital."
              spanish="Mis padres trabajan los dos en el hospital."
            />
            <SingleExample
              english="Both teams are preparing for the championship."
              spanish="Ambos equipos se están preparando para el campeonato."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={19} />
          </div>
        </div>
      </div>
    </div>
  )
}
