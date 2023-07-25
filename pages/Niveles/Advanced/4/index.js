import { CustomTitle, CustomSubTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
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
      Unit 4
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Already/Just/Still/Yet - LESSON 4</p>
        <CustomTitle title={"Already/Just/Still/Yet"} titleSpanish={"ALREADY/JUST/STILL/YET"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=KZA_v0lzq_U"
          controls={true} />
        <p className='font-bold text-gray-700'>Utilizamos los adverbios “already”, “just”, “still” y “yet” más a menudo en el presente perfecto, aunque podemos usarlos en otros tiempos verbales. Estos adverbios se utilizan en referencia a tiempo y su posición dentro de la oración depende de cuál de ellos estemos utilizando.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomSubTitle title={"Already"} />
            <small className='text-sm opacity-60'>“Already” se refiere a algo que ha pasado antes o más pronto de lo que se esperaba y es traducido como “ya” en español. “Already” generalmente va entre el verbo auxiliar y el verbo.</small>
            <SingleExample
              english="They have already finished their homework."
              spanish="Ya han acabado sus deberes."
            />
            <SingleExample
              english="Jacob has already left work."
              spanish="Jacob ya se ha ido del trabajo."
            />
            <SingleExample
              english="The train has already arrived."
              spanish="El tren ya ha llegado."
            />
            <CustomSubTitle title={"Just"} />
            <small className='text-sm opacity-60'>“Just” se utiliza para acciones que han ocurrido hace poco tiempo y se traduce como “acabar de” o “justo”. Al igual que con “already”, “just” va antes del verbo o entre el auxiliar y el verbo en la frase.</small>
            <SingleExample
              english="I just ate, but I’m already hungry again."
              spanish="Acabo de comer pero ya tengo hambre de nuevo."
            />
            <SingleExample
              english="Where’s Jacob? He’s just left."
              spanish="¿Donde está Jacob? Acaba de irse."
            />
            <SingleExample
              english="Beth has just moved to New York."
              spanish="Beth acaba de trasladarse a Nueva York."
            />
            <CustomSubTitle title={"Still"} />
            <small className='text-sm opacity-60'>Usamos “still” para acciones o acontecimientos que todavía no han ocurrido, sobre todo cuando esperamos que ya hubieran ocurrido. Se traduce como “aún” o “todavía”. Es con frecuencia usado también con otros tiempos verbales, pero “still” siempre va antes del verbo, independientemente del tiempo verbal que utilicemos.</small>
            <SingleExample
              english="I took two pills, but I still have a headache."
              spanish="He tomado dos pastillas, pero todavía tengo dolor de cabeza."
            />
            <SingleExample
              english="Is Jacob still working at the hospital?"
              spanish="¿Jacob aún trabaja en el hospital?"
            />
            <SingleExample
              english="
They still haven’t finished their homework."
              spanish="Todavía no han acabado sus deberes."
            />
            <CustomSubTitle title={"Yet"} />
            <small className='text-sm opacity-60'>“Yet” es usado para algo que esperabamos que sucediera, pero todavía no ha pasado. Tendemos a usarlo en frases negativas e interrogativas. En frases negativas puede ser traducido como "aún"’ o “todavía” y en preguntas como “ya”. En contraste con los otros adverbios de esta lección, “yet” va al final de la frase.</small>
            <SingleExample
              english="I’m really hungry. I haven’t eaten yet."
              spanish="Tengo mucha hambre. Todavía no he comido."
            />
            <SingleExample
              english="Jacob hasn’t left his job at the hospital yet."
              spanish="Jacob todavía no se ha ido de su trabajo en el hospital."
            />
            <SingleExample
              english="Have they finished their homework yet?"
              spanish="¿Ya han terminado sus deberes?"
            />
            <SingleExample
              english="Has the train arrived yet?"
              spanish="¿Ya ha llegado el tren?"
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={4} />
          </div>
        </div>
      </div>
    </div>
  )
}
