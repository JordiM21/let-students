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
      Unit 8
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Past Perfect Continuous - LESSON 8</p>
        <CustomTitle title={"Past Perfect Continuous"} titleSpanish={"El pasado perfecto continuo"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=dbZp385yYvk"
          controls={true} />
        <p className='font-bold text-gray-700'>El pasado perfecto continuo en inglés corresponde al pluscuamperfecto de español en el que se usa el indicativo del verbo “estar” y el verbo+ing. En general, lo usamos para acciones en proceso de realización en el pasado antes de otra acción ocurrida.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>Affirmative Sentences (Frases afirmativas)</small>
            <SingleExample
              english="I had [I’d] been studying English for 2 years when I went to London."
              spanish="Había estado estudiando inglés durante 2 años cuando fui a Londres."
            />
            <SingleExample
              english="Lindsay had been working at the store since 2005 when it closed."
              spanish="Lindsay había estado trabajando en la tienda desde el año 2005 cuando se cerró."
            />
            <SingleExample
              english="They were surprised when the airline lost their baggage as they had [they’d] been traveling for weeks without a problem."
              spanish="Se sorprendieron cuando la aerolínea perdió su equipaje ya que habían estado viajando durante semanas sin problemas."
            />
            <small className='text-sm opacity-60'>Negative Sentences (Frases negativas)</small>
            <SingleExample
              english="
I had not [hadn’t] been studying English long when I went to London."
              spanish="No había estado estudiando inglés mucho tiempo cuando fui a Londres."
            />
            <SingleExample
              english="Lindsay had not [hadn’t] been working at the store for long when it closed."
              spanish="Lindsay no había estado trabajando en la tienda mucho tiempo cuando se cerró."
            />
            <SingleExample
              english="
They had not [hadn’t] been traveling long before they had their first problem."
              spanish="No habían estado viajando mucho antes de que tuvieran su primer problema"
            />
            <small className='text-sm opacity-60'>Interrogative Sentences (Frases interrogativas)</small>
            <SingleExample
              english="Had you been studying English for a long time before you went to London?"
              spanish="¿Habías estado estudiando inglés mucho tiempo antes de irte a Londres?"
            />
            <SingleExample
              english="Had Lindsay been working at the store for a long time when it closed?"
              spanish="¿Lindsay había estado trabajando mucho tiempo cuando se cerró?"
            />
            <SingleExample
              english="Had they been traveling for a long time when the airline lost their luggage?"
              spanish="¿Habían estado viajando mucho tiempo cuando la aerolínea perdió su equipaje?"
            />
            <small className='text-sm opacity-60'>Usamos el pasado perfecto continuo para referirnos a algo que habíamos estado haciendo (en proceso) cuando otra acción lo interrumpió. El pasado perfecto continuo se utiliza para la acción en proceso y el pasado simple para la acción que interrumpe. Cuando nos referimos a algo que hemos estado haciendo en un período de tiempo, por lo tanto, solemos usar las preposiciones de tiempo “for” o “since”.</small>
            <SingleExample
              english="I’d been working for hours when I fell asleep at my desk."
              spanish="Había estado trabajando durante horas cuando me quedé dormido en mi escritorio."
            />
            <SingleExample
              english="Frank bought a new car. He’d been looking for one since last year."
              spanish="Frank compró un nuevo coche. Lo había estado buscando desde el año pasado."
            />
            <SingleExample
              english="We’d been arguing for days when Elizabeth found a resolution."
              spanish="Habíamos estado discutiendo durante días cuando Elizabeth encontró una resolución."
            />
            <small className='text-sm opacity-60'>Tambien se utiliza para demostrar causa y efecto en el pasado.</small>
            <SingleExample
              english="She was tired because she’d been working too much."
              spanish="Estaba cansado porque había estado trabajando demasiado."
            />
            <SingleExample
              english="They were angry because they’d been waiting for me for hours."
              spanish="Estaban enfadados porque habían estado esperándome durante horas."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={8} />
          </div>
        </div>
      </div>
    </div>
  )
}
