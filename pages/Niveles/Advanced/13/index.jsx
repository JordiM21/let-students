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
      Unit 13
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Direct and Reported Speech - LESSON 13</p>
        <CustomTitle title={"Direct and Reported Speech"} titleSpanish={"EL ESTILO DIRECTO Y INDIRECTO"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url=""
          controls={true} />
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>Cuando queremos comunicar o informar de lo que otra persona ha dicho, hay dos maneras de hacerlo: utilizando el estilo directo o el estilo indirecto.</small>
            <CustomTitle title={"Direct Speech"} titleSpanish={"Cuando queremos informar exactamente de lo que otra persona ha dicho, utilizamos el estilo directo. Con este estilo lo que la persona ha dicho se coloca entre comillas (“…”) y deberá ser palabra por palabra."} />
            <SingleExample
              english="
“I am going to London next week,” she said."
              spanish="“Voy a Londres la semana que viene,” ella dijo."
            />
            <SingleExample
              english="
“Do you have a pen I could borrow,” he asked."
              spanish="“¿Tienes un bolígrafo que puedas prestarme?,” él preguntó."
            />
            <SingleExample
              english="Alice said, “I love to dance.”"
              spanish="Alice dijo, “Me encanta bailar.”"
            />
            <CustomTitle title={"Reported Speech"} titleSpanish={"El estilo indirecto, a diferencia del estilo directo, no utiliza las comillas y no necesita ser palabra por palabra. En general, cuando se usa el estilo indirecto, el tiempo verbal cambia. A continuación tienes una explicación de los cambios que sufren los tiempos verbales. A veces se usa “that” en las frases afirmativas y negativas para introducir lo que ha dicho la otra persona. Por otro lado, en las frases interrogativas se puede usar “if” o “whether”."} />
            <SingleExample
              english="Mary said that she was happy to see me."
              spanish="Mary dijo que ella estaba feliz de verme"
            />
            <SingleExample
              english="He asked me if I was busy that night."
              spanish="El me pregunto si estaba ocupada esa noche"
            />
            <SingleExample
              english="She said Dan was living in San Francisco."
              spanish="Ella me dijo que Dan estaba viviendo en San Francisco"
            />
            <SingleExample
              english="He told me that he was making dinner."
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />
            <SingleExample
              english=""
              spanish=""
            />

            <small className='text-sm opacity-60'></small>

          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={13} />
          </div>
        </div>
      </div>
    </div>
  )
}
