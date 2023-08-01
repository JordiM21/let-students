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
      Unit 22
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Passive Voice 2 - LESSON 22</p>
        <CustomTitle title={"Passive Voice 2"} titleSpanish={"Voz Pasiva 2"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url=""
          controls={true} />
        <div className='my-4'>
          <div className='space-y-2'>
            <p className='text-sm opacity-60'> En esta segunda clase sobre la voz pasiva, profundizaremos en el uso de la voz pasiva en diferentes tiempos verbales y cómo cambiar una oración activa a voz pasiva puede cambiar el enfoque y la estructura de la frase.</p>
            <p className='text-sm opacity-60'>Uso de la voz pasiva en diferentes tiempos verbales:
              La voz pasiva se puede utilizar en diferentes tiempos verbales para enfocarse en la acción recibida en lugar del sujeto que realiza la acción. A continuación, presentaré algunos ejemplos en diferentes tiempos verbales:</p>
            <p className='text-sm opacity-60'>Presente simple:</p>
            <SingleExample
              english="Articles are written by John for the newspaper."
              spanish="Artículos son escritos por John para el periódico."
            />
            <p className='text-sm opacity-60'>Pasado simple:</p>
            <SingleExample
              english="The car was repaired yesterday."
              spanish="El coche fue reparado ayer."
            />
            <p className='text-sm opacity-60'>Presente perfecto:</p>
            <SingleExample
              english="The report has been prepared by her."
              spanish="El informe ha sido preparado por ella."
            />
            <CustomTitle title={"Cambio del objeto directo al sujeto"} titleSpanish={"En la voz pasiva, el objeto directo de la oración activa se convierte en el sujeto de la oración pasiva. La persona o cosa que realiza la acción se introduce con 'by' (por) o simplemente se omite si no es relevante."} />
            <SingleExample
              english="The bridge was built (by them)."
              spanish="El puente fue construido (por ellos)."
            />
            <CustomTitle title={"Voz Pasiva para enfatizar la acción"} titleSpanish={"La voz pasiva se utiliza cuando queremos enfocarnos en la acción en sí misma en lugar de quién o qué realiza la acción. Esto puede ser útil cuando el sujeto que realiza la acción es desconocido o no es importante."} />
            <SingleExample
              english="My bike was stolen"
              spanish="Mi bicicleta fue robada."
            />
            <CustomTitle title={"Voz Pasiva con Verbos Modales"} titleSpanish={"En la voz pasiva, también podemos usar verbos modales como 'can,' 'should,' 'must,' etc., para expresar posibilidad, obligación o habilidad."} />
            <SingleExample
              english="The report must be submitted by Friday."
              spanish="El informe debe ser entregado antes del viernes."
            />
            <small className='text-sm opacity-60'>Recuerda que la voz pasiva se utiliza para cambiar el enfoque de una oración activa, poniendo más énfasis en la acción recibida en lugar del sujeto que realiza la acción. También permite cambiar el tiempo verbal de la oración original y se usa comúnmente en diferentes contextos para dar variedad y fluidez al lenguaje escrito y hablado.</small>
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={22} />
          </div>
        </div>
      </div>
    </div>
  )
}
