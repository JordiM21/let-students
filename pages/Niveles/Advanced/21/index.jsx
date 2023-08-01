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
      Unit 21
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Perfect Conditional 2 - LESSON 21</p>
        <CustomTitle title={"Perfect Conditional 2"} titleSpanish={"Condicional Perfecto 2"} />
        <div className='my-4'>
          <div className='space-y-2'>
            <p className='text-sm opacity-60'>En esta segunda clase, profundizaremos en el uso del condicional perfecto para hablar sobre acciones condicionales en el pasado y cómo estas acciones pueden haber afectado eventos posteriores. También veremos cómo se puede combinar el condicional perfecto con el condicional simple para expresar situaciones hipotéticas más complejas.</p>
            <CustomTitle title={"Acciones Condicionales del Pasado"} titleSpanish={"El condicional perfecto se usa para expresar una acción que estaba condicionada a otra en el pasado, pero que no ocurrió debido a que la primera acción no se cumplió. Es como describir 'lo que habría pasado si...' en situaciones específicas."} />
            <SingleExample
              english="If you had studied harder, you would have passed the exam."
              spanish="Si hubieras estudiado más duro, habrías aprobado el examen"
            />
            <p className='text-sm opacity-60'>En este caso, la aprobación del examen estaba condicionada al esfuerzo en el estudio, pero como no se estudió lo suficiente, no se aprobó el examen.</p>
            <CustomTitle title={"Combinación del condicional perfecto y simple"} titleSpanish={"Podemos combinar el condicional perfecto y el condicional simple en la misma oración para expresar situaciones hipotéticas más complejas en el pasado y sus posibles resultados en el presente."} />
            <SingleExample
              english="If I had won the lottery, I would be living in a luxurious mansion now."
              spanish="Si hubiera ganado la lotería, ahora estaría viviendo en una lujosa mansión."
            />
            <p className='text-sm opacity-60'>En esta frase, se utiliza el condicional perfecto ("had won") para hablar sobre la posibilidad de ganar la lotería en el pasado, y luego se usa el condicional simple ("would be living") para expresar la consecuencia en el presente, es decir, estar viviendo en una mansión.</p>
            <CustomTitle title={"Arrepentimiento o deseo del pasado"} titleSpanish={"El condicional perfecto también se puede usar para expresar arrepentimiento por no haber hecho algo en el pasado o para expresar deseos que no se cumplieron."} />
            <SingleExample
              english="I wish I had taken that job offer when it was available."
              spanish="Desearía haber aceptado esa oferta de trabajo cuando estuvo disponible."
            />
            <p className='text-sm opacity-60'>En esta oración, el uso del condicional perfecto ("had taken") muestra el deseo no cumplido de haber aceptado la oferta de trabajo en el pasado.</p>
            <CustomTitle title={"Acciones simultáneas en el pasado con resultados diferentes"} titleSpanish={"Podemos usar el condicional perfecto para hablar sobre acciones que ocurrieron al mismo tiempo en el pasado, pero que tuvieron resultados diferentes."} />
            <SingleExample
              english="While he was studying, she would have been watching TV."
              spanish="Mientras él estaba estudiando, ella habría estado viendo la televisión."
            />
            <p className='text-sm opacity-60'>Aquí, "he was studying" y "she would have been watching TV" son acciones simultáneas en el pasado, pero el condicional perfecto indica que solo la segunda acción pudo haber ocurrido debido a una condición no cumplida.</p>
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={21} />
          </div>
        </div>
      </div>
    </div>
  )
}
