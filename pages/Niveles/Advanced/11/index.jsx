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
      Unit 11
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Conditional Sentences - LESSON 11</p>
        <CustomTitle title={"Conditional Sentences"} titleSpanish={"LAS FRASES CONDICIONALES"} />
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>El uso del condicional significa que una acción depende de otra. Los condicionales se utilizan para hablar sobre situaciones reales o irreales. En general, las frases condicionales llevan la palabra “if” (si). Ten en cuenta que no existe un tiempo verbal para el condicional en inglés como existe en español. A la vez, se usa el verbo auxiliar “would” para formar el condicional en inglés. Hay cuatro tipos de frases condicionales y el uso de uno u otro refleja la probabilidad de la acción.</small>
            <CustomTitle title={"Zero Conditional (Tipo 0)"} titleSpanish={"Se usa este tipo de condicional cuando la condición y el resultado siempre es verdad, como por ejemplo los hechos científicos."} />
            <ReactPlayer
              width={"100%"}
              className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
              url="https://www.youtube.com/watch?v=LLam0xSFLe8"
              controls={true} />
            <SingleExample
              english="if + present simple + present simple"
              spanish="id + condition + result"
            />
            <small className='text-sm opacity-60'>EJEMPLOS</small>
            <SingleExample
              english="If you heat water to 100° C, it boils. / Water boils if you heat it to 100° C."
              spanish="Si calientas agua a 100 ° C hierve."
            />
            <SingleExample
              english="If I don’t practice the piano everyday I play poorly. / I play the piano poorly if I don’t practice everyday."
              spanish="Si no practico el piano cada día toco mal."
            />
            <SingleExample
              english="Does your mom get mad if you don’t call her? / If you don’t call your mom, does she get mad?"
              spanish="¿Si no llamas a tu madre, se enoja?"
            />
            <CustomTitle title={"First Conditional (Tipo 1)"} titleSpanish={"Este tipo de condicional se utiliza para el futuro y en los casos en que es muy probable que la condición pasará."} />
            <ReactPlayer
              width={"100%"}
              className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
              url="https://www.youtube.com/watch?v=rvmcGCDYhvQ"
              controls={true} />
            <SingleExample
              english="if + present simple + will"
              spanish="if + condfition + result"
            />
            <small className='text-sm opacity-60'>EJEMPLOS</small>
            <SingleExample
              english="if Bill studies, he will pass the exam. / Bill will pass the exam if he studies."
              spanish="Si Bill estudia, aprobará el examen."
            />
            <SingleExample
              english="If it doesn’t rain, we will go to the beach. / We will go to the beach if it doesn’t rain."
              spanish="Si no llueve, iremos a la playa."
            />
            <SingleExample
              english="Will you take the train if you miss the bus? If you miss the bus, will you take the train?"
              spanish="¿Cogerás el tren si pierdes el bus?"
            />
            <CustomTitle title={"Second Conditional (Tipo 2)"} titleSpanish={"Se utiliza el tipo 2 para expresar una posibilidad irreal en el presente, como un deseo o un sueño, o para una acción en el futuro no tan probable."} />
            <ReactPlayer
              width={"100%"}
              className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
              url="https://www.youtube.com/watch?v=PAHBHVycKVU"
              controls={true} />
            <SingleExample
              english="if + past simple + would + infinitivo"
              spanish="if + condition + result"
            />
            <SingleExample
              english="If I won the lottery, I would travel around the world. / I would travel around the world if I won the lottery."
              spanish="Si ganara la lotería, viajaría alrededor del mundo."
            />
            <SingleExample
              english="If Rachel had more time, she would learn to play the guitar. / Rachel would learn to play the guitar if she had more time."
              spanish="Si Rachel tuviera más tiempo, aprendería a tocar la guitarra."
            />
            <SingleExample
              english="Would you be happy if you were to get married? / If you were to get married, would you be happy?"
              spanish="¿Estarías feliz si te casaras?"
            />
            <CustomTitle title={"Third Conditional (Tipo 3)"} titleSpanish={"A diferencia a los tipos 1 y 2, se utiliza el tercer tipo de condicional cuando hablamos de una condición en el pasado que no ha sucedido."} />
            <SingleExample
              english="if + past perfect + would have + past participle"
              spanish="if + condition + result"
            />
            <SingleExample
              english="
If I had known then what I know now, I would have done things differently. / I would have done things differently if I had known then what I know now."
              spanish="Si hubiera sabido en el pasado lo que sé ahora, habría hecho las cosas de manera diferente."
            />
            <SingleExample
              english="Suzanne wouldn’t have had the heart attack if she had gone on a diet as her doctor recommended. / If Suzanne had gone on a diet as her doctor recommended she wouldn’t have had the heart attack."
              spanish="Suzanne no hubiera tenido el infarto si hubiera hecho dieta como su médico le recomendó."
            />
            <SingleExample
              english="Would you have liked to go to university if you had been able to afford it? / If you had been able to afford it, would you have liked to go to university?"
              spanish="¿Te habría gustado ir a la universidad si te lo hubieras permitido pagar?"
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={11} />
          </div>
        </div>
      </div>
    </div>
  )
}
