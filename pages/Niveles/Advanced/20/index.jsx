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
      Unit 20
    </Typography>,
  ]

  const router = useRouter()
  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Perfect Conditional - LESSON 20</p>
        <CustomTitle title={'Perfect Conditional'} titleSpanish={'Condicional Perfecto'} />
        <VideoPlayer url={'https://www.youtube.com/watch?v=kGv_mGUCFJE'} />
        <div className="my-4">
          <div className="space-y-2">
            <p className="text-sm opacity-60">
              El condicional perfecto en inglés se forma usando "would have" seguido del participio pasado de un verbo.
              Se utiliza para hablar acerca de situaciones hipotéticas en el pasado, es decir, para expresar acciones
              que podrían haber ocurrido, pero que en realidad no sucedieron.
            </p>
            <p className="text-sm opacity-60">
              Para formar el condicional perfecto, utilizamos la siguiente estructura: Sujeto + would have + participio
              pasado del verbo
            </p>
            <SingleExample
              english="If I had studied more, I would have passed the exam."
              spanish="Si hubiera estudiado más, habría aprobado el examen."
            />
            <SingleExample
              english="She would have traveled around the world if she had won the lottery."
              spanish="Ella habría viajado alrededor del mundo si hubiera ganado la lotería."
            />
            <SingleExample
              english="They would have arrived on time if they hadn't missed the bus. "
              spanish="Ellos habrían llegado a tiempo si no hubieran perdido el autobús"
            />
            <SingleExample
              english="If you had told me about the party, I would have attended."
              spanish="Si me hubieras dicho sobre la fiesta, habría asistido."
            />
            <SingleExample
              english="She would have bought the dress if it had been on sale."
              spanish="Ella habría comprado el vestido si hubiera estado en oferta."
            />
            <SingleExample
              english="If we had known about the weather, we would have brought umbrellas."
              spanish="Si hubiéramos sabido sobre el clima, habríamos llevado paraguas."
            />
            <SingleExample
              english="He would have finished the project if he had received more support."
              spanish="Él habría terminado el proyecto si hubiera recibido más apoyo"
            />
            <SingleExample
              english="If they had studied harder, they would have passed the exam."
              spanish="Si hubieran estudiado más duro, habrían aprobado el examen."
            />
            <SingleExample
              english="We would have gone to the beach if it hadn't rained. "
              spanish="Habríamos ido a la playa si no hubiera llovido."
            />
            <SingleExample
              english="She would have accepted the job offer if the salary had been higher."
              spanish="Ella habría aceptado la oferta de trabajo si el salario hubiera sido más alto"
            />
            <SingleExample
              english="If he had saved money, he would have been able to buy a new car."
              spanish="Si hubiera ahorrado dinero, habría podido comprar un coche nuevo"
            />
            <SingleExample
              english="They would have won the game if they had played better in the second half."
              spanish="Habrían ganado el partido si hubieran jugado mejor en la segunda mitad."
            />
            <p className="text-sm opacity-60">
              Recuerda que el condicional perfecto siempre se refiere a situaciones hipotéticas en el pasado que no
              ocurrieron, pero que podrían haber sucedido si las condiciones hubieran sido diferentes.
            </p>
          </div>
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Advanced'} unit={20} />
          </div>
        </div>
      </div>
    </div>
  )
}
