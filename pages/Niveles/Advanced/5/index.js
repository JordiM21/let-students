import { CustomSubTitle, CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
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
      Unit 5
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>For/Since/Ago - LESSON 5</p>
        <CustomTitle title={"For/Since/Ago"} titleSpanish={"FOR/SINCE/AGO"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=ooFDf15dH_A"} />
        <p className='font-bold text-gray-700'>Utilizamos “for”, “since” y “ago” para expresar una relación al tiempo. Los utilizamos con tiempos verbales diferentes. Usamos “for” y “since” en respuesta a la pregunta de "¿Cuánto tiempo…?.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomSubTitle title={"For"} />
            <small className='text-sm opacity-60'>“For” indica duración o un período de tiempo, así se puede traducir como “durante” en español. No se puede utilizar como “todo”, en el sentido de “todo el día” o “todo el tiempo”. Podemos utilizar "for*" con todos los tiempos verbales.*</small>
            <SingleExample
              english="
We always run for at least one hour every day."
              spanish="Siempre corremos durante al menos una hora cada día."
            />
            <SingleExample
              english="Heather will be practicing the piano for a couple of hours this afternoon."
              spanish="Heather practicará el piano durante un par de horas esta tarde."
            />
            <SingleExample
              english="I played tennis for years before I injured my knee."
              spanish="Jugué al tenis durante años antes de que me lesionara la rodilla."
            />
            <SingleExample
              english="They have lived in Paris for ten years."
              spanish="Han vivido en París durante diez años."
            />
            <SingleExample
              english="He has been studying English for a long time."
              spanish="Ha estado estudiando inglés durante mucho tiempo."
            />
            <Nota text="Nota: Ten en cuenta que “durante” también puede ser traducido como “during”, sin embargo “during” es una preposición de tiempo que significa “en el transcurso de una acción o evento.”" />
            <CustomSubTitle title={"Since"} />
            <small className='text-sm opacity-60'>“Since” se utiliza para indicar el principio de un período de tiempo que sigue al presente. Como tal, puede ser traducido como “desde” en español y se usa como un punto de tiempo específico en el pasado. Como este período de tiempo sigue al presente, solemos utilizar "since*" con los tiempos perfectos.*</small>
            <SingleExample
              english="I have lived in Spain since April 2010."
              spanish="He vivido en España desde abril de 2010."
            />
            <SingleExample
              english="My brother has been sick since Friday."
              spanish="Mi hermano está enfermo desde el viernes."
            />
            <SingleExample
              english="They have been studying English since last year."
              spanish="Ellos llevan estudiando inglés desde el año pasado."
            />
            <SingleExample
              english="We have been waiting for you since 3 o’clock."
              spanish="Te esperamos desde las 3."
            />
            <Nota text="Nota: Ten en cuenta que “for” y “since” también tienen otros significados no relacionados con el tiempo." />
            <CustomSubTitle title={"Ago"} />
            <small className='text-sm opacity-60'>“Ago” se refiere a un tiempo en el pasado o un tiempo antes del actual y va al final de la frase. Se traduce como “hace” en español y se usa con el pasado simple.</small>
            <SingleExample
              english="Richard finished university three years ago."
              spanish="Richard terminó la universidad hace tres años."
            />
            <SingleExample
              english="I called you ten minutes ago."
              spanish="Te llamé hace diez minutos."
            />
            <SingleExample
              english="She quit smoking a long time ago."
              spanish="Dejó de fumar hace mucho tiempo."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={5} />
          </div>
        </div>
      </div>
    </div>
  )
}
