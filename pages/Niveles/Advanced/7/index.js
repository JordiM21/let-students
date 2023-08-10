import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import VideoPlayer from '@/components/VideoPlayer';

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
      Unit 7
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Past Perfect - LESSON 7</p>
        <CustomTitle title={"Past Perfect"} titleSpanish={"El pasado perfecto"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=UrYAkHJ4R9o"} />
        <p className='font-bold text-gray-700'>El pasado perfecto en inglés corresponde al pluscuamperfecto de español. En general, lo usamos para acciones que ocurrieron antes de otra acción en el pasado.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <Nota text="Ten cuidado porque la contracción “-’d” también se utiliza con el verbo modal “would” para formar el condicional. Como tal, la forma corta “I’d” puede tener dos significados diferentes. Podemos distinguir entre estos dos significados por la forma del verbo principal que les sigue. Si queremos decir “I’d” en el sentido de pasado perfecto, el verbo principal está en la forma de participio pasado, mientras que con el condicional, “I’d” va seguido por el verbo en infinitivo. Para más información, ver la lección sobre las frases condicionales." />
            <small className='text-sm opacity-60'>Affirmative Sentences (Frases afirmativas)</small>
            <SingleExample
              english="I had [I’d] visited the Louvre before, so I knew where the Mona Lisa was."
              spanish="Había visitado el Museo del Louvre antes, así que sabía donde estaba la Mona Lisa."
            />
            <SingleExample
              english="They had [They’d] studied English before they went to London."
              spanish="Habían estudiado inglés antes de irse a Londres."
            />
            <SingleExample
              english="Henry changed careers because he had [he’d] worked as an accountant for many years and was bored."
              spanish="Henry cambió de profesión porque había trabajado como contable durante muchos años y estaba aburrido."
            />
            <small className='text-sm opacity-60'>Negative Sentences (Frases negativas)</small>
            <SingleExample
              english="I had not [hadn’t] visited the Louvre before so I didn’t know where the Mona Lisa was."
              spanish="No había visitado el Museo del Louvre antes, así que no sabía donde estaba la Mona Lisa."
            />
            <SingleExample
              english="They had not [hadn’t] studied English before they went to London."
              spanish="No habían estudiado inglés antes de irse a Londres."
            />
            <SingleExample
              english="Henry changed careers even though he had not [hadn’t] worked as an accountant for long."
              spanish="Henry cambió de profesión a pesar de que no había trabajado como contable durante mucho tiempo."
            />
            <small className='text-sm opacity-60'>Interrogative Sentences (Frases interrogativas)</small>
            <SingleExample
              english="How did you know where the Mona Lisa was? Had you visited the Louvre before?"
              spanish="¿Cómo sabías dónde estaba la Mona Lisa? ¿Habías visitado el Museo del Louvre antes?"
            />
            <SingleExample
              english="Had they studied English before they went to London?"
              spanish="¿Habían estudiado inglés antes de irse a Londres?"
            />
            <SingleExample
              english="Had Henry worked as an accountant for long before he changed careers?"
              spanish="¿Henry había trabajado como contable durante mucho tiempo antes de cambiar de profesión?"
            />
            <small className='text-sm opacity-60'>Otros ejemplos</small>
            <SingleExample
              english="I’d read the book before I saw the movie."
              spanish="Había leído el libro antes de ver la película."
            />
            <SingleExample
              english="Donna had just left when you called."
              spanish="Donna había salido justo cuando llamaste"
            />
            <SingleExample
              english="Had you ever flown before the trip to France?"
              spanish="¿Alguna vez habías volado antes del viaje a Francia?"
            />
            <SingleExample
              english="I had already woken up when the alarm clock rang at 7am."
              spanish="Ya me había despertado cuando sonó el despertador a las 7."
            />
            <SingleExample
              english="She had only owned one car before she bought her new BMW."
              spanish="Solo había tenido un coche antes de que comprara su nuevo BMW."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={7} />
          </div>
        </div>
      </div>
    </div>
  )
}
