import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest';
import { useRouter } from 'next/router';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import UnitWithTroubleBtn from '@/components/UnitWithTroubleBtn';

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
      href="/Niveles/Beginner"
    >
      Beginner
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 6
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold md:text-4xl text-[var(--color2)]'>PREPOSITIONS - LESSON 6</p>
      <CustomTitle title="The Prepositions" titleSpanish="Las preposiciones" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=XzkbcWh8s4w"
        controls={true} />
      <div className='my-4 space-y-4'>
        <p className='font-bold text-gray-700 mb-4'>Las preposiciones son una de las partes del inglés que más cuesta aprender a los hablantes de lengua española porque la traducción directa a menudo es imposible. Las preposiciones pueden ser traducidas de manera distinta según la situación o el contexto de su uso. Por ello es recomendable memorizar las diferentes variaciones y usos dependiendo de si hablamos de preposiciones de lugar, movimiento o tiempo. Veremos que muchas de las preposiciones se repiten en los diferentes apartados.</p>
        <Nota text="Nota: Las preposiciones siempre van seguidas por un sustantivo, no un verbo (excepto en la forma de gerundio)." />
        <p className='text-3xl text-blue-700 font-bold'>In / At / On</p>
        <p>Son unas de las preposiciones más comunes que se pueden usar para indicar lugar o tiempo: in, at y on.</p>
        <p className='text-2xl font-bold text-blue-600'>IN</p>
        <p className='text-xs font-bold'>significado: en, dentro, dentro de</p>
        <p>Uso (lugar): Se usa para indicar tanto espacios cerrados como espacios abiertos. Lo utilizamos para indicar que algo está dentro de una cosa, en un lugar cerrado, o en el interior de algo físicamente. Sin embargo, como vemos en los ejemplos, también se utiliza para indicar que se está en un lugar geográfico.</p>
        <div className='space-y-4'>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="I live in Brighton."
            spanish="Vivo en Brighton."
          />
          <SingleExample
            english="The cat is in the box."
            spanish="El gato está dentro la caja."
          />
          <SingleExample
            english="I found your address in the phone book"
            spanish="He encontrado tu dirección en la guía telefónica."
          />
          <SingleExample
            english="My parents arrive in France on Monday."
            spanish="Mis padres llegan a Francia el lunes."
          />
          <p>Uso (lugar): Se usa para indicar tanto espacios cerrados como espacios abiertos. Lo utilizamos para indicar que algo está dentro de una cosa, en un lugar cerrado, o en el interior de algo físicamente. Sin embargo, como vemos en los ejemplos, también se utiliza para indicar que se está en un lugar geográfico.</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="We went to Mexico in May."
            spanish="Fuimos a México en mayo."
          />
          <SingleExample
            english="I always run in the mornings."
            spanish="Siempre corro por las mañanas."
          />
          <SingleExample
            english="I will see him in a week."
            spanish="Le veré en una semana."
          />
          <p className='text-2xl font-bold text-blue-600'>AT</p>
          <p className='text-xs font-bold'>significado: en, a, al, cerca de, tocando</p>
          <p>Uso (lugar): Se usa delante de edificios como casas, aeropuertos, universidades, para acontecimientos como reuniones, fiestas, conciertos, deportes, etc., antes de “top” (parte superior), “bottom” (parte inferior), “the end of” (al final de) y detrás de “arrive” (llegar) cuando nos referimos a lugares que no sean ciudades o países.</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="He is at home."
            spanish="Él está en casa."
          />
          <SingleExample
            english="I always visit my sister at work."
            spanish="Siempre visito a mi hermana en el trabajo."
          />
          <SingleExample
            english="We eat at the table."
            spanish="Comemos en la mesa."
          />
          <SingleExample
            english="She will see him at the theatre."
            spanish="Le verá en el teatro."
          />
          <p className='text-xs font-bold'>uso(tiempo): Lo utilizamos delante de la hora y de fiestas.</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="He runs every morning at 6."
            spanish="Él corre cada mañana a las 6."
          />
          <SingleExample
            english="I will see them at Christmas."
            spanish="Les veré en Navidad."
          />
          <p className='text-2xl font-bold text-blue-600'>ON</p>
          <p className='text-xs font-bold'>Significado: sobre, encima de algo, tocando</p>
          <p>Uso (lugar): Se coloca delante de nombres de lugares con base como mesas, suelos, etc., cuando nos referimos a partes de una habitación como el techo o la pared y para indicar que alguien está dentro de un transporte público o en una planta de un edificio.</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="The pen is on the table."
            spanish="El bolígrafo está sobre la mesa."
          />
          <SingleExample
            english="They have a photograph of Paris on the wall."
            spanish="Tienen una foto de París en la pared."
          />
          <SingleExample
            english="
I am on the bus."
            spanish="Estoy en el autobús."
          />
          <SingleExample
            english="Her apartment is on the second floor."
            spanish="Su piso está en la segunda planta."
          />
          <p className='text-xs font-bold'>Uso (tiempo): Lo utilizamos con días de la semana, fechas y fiestas.</p>
          <SingleExample
            english="
They went to Mexico on the first of May."
            spanish="Fueron a Méjico el día uno de mayo."
          />
          <SingleExample
            english="He runs on Mondays and Fridays."
            spanish="Él corre los lunes y los viernes."
          />
          <SingleExample
            english="I will see Luis on his birthday."
            spanish="Veré a Luis en su cumpleaños."
          />
        </div>
        <CustomTitle title="Prepositions of Movement or Direction" titleSpanish="LAS PREPOSICIONES DE MOVIMIENTO O DIRECCIÓN" />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=ZYl5WQCvLoU"
          controls={true} />
        <p className="opacity-90 text-xs">Las preposiciones de movimiento o dirección se utilizan para mostrar movimiento de un lugar a otro. Estas preposiciones se usan con mayor frecuencia con los verbos de movimiento y se encuentran después del verbo.</p>
        <p className='text-2xl font-bold text-blue-600'>TO</p>
        <p className='text-md font-bold'>“To” es la preposición de movimiento o dirección más común.</p>
        <p className='text-md font-bold'>Significado: a, hacia, dirección a (siempre indica movimiento)</p>
        <p className='text-md font-bold'>Uso: Se utiliza “to” para mostrar movimiento en una dirección específica.</p>
        <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
        <SingleExample
          english="I go to school by bus."
          spanish="Voy a la escuela en autobús." />
        <SingleExample
          english="You walk to work every day."
          spanish="Caminas al trabajo cada día." />
        <SingleExample
          english="They came to the wedding.
"
          spanish="Vinieron a la boda." />
        <p className='text-2xl font-bold text-blue-600'>ACROSS</p>
        <p className='text-md font-bold'>Significado: al otro lado de; de un lado a otro</p>
        <p className='text-md font-bold'>Uso: “Across” se utiliza para indicar movimiento hacia el lado opuesto.</p>
        <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
        <SingleExample
          english="
The boat will take you across the river."
          spanish="(El barco te llevará al otro lado del río.)" />
        <SingleExample
          english="
You must walk across the street at the crosswalk."
          spanish="Tienes que cruzar la calle por el cruce peatonal." />
        <p className='text-2xl font-bold text-blue-600'>ALONG</p>
        <p className='text-sm font-bold'>Significado: A lo largo de</p>

        <SingleExample
          english="He’s walking along the path."
          spanish="Él está caminando a lo largo del camino." />
        <SingleExample
          english="The street runs along the seafront."
          spanish="La calle va junto al paseo marítimo." />
        <p className='text-2xl font-bold text-blue-600'>AROUND</p>
        <p className='text-sm font-bold'>Significado: Alrededor de</p>

        <SingleExample
          english="
You must drive around the city center to reach the cinema."
          spanish="Tienes que conducir alrededor del centro de la ciudad para llegar al cine." />
        <SingleExample
          english="Let’s go for a walk around the park."
          spanish="Vamos a pasear por el parque." />
        <p className='text-2xl font-bold text-blue-600'>INTO</p>
        <p className='text-sm font-bold'>Significado: en, dentro de</p>
        <SingleExample
          english="Don’t go into your sister’s room!"
          spanish="¡No entres en la habitación de tu hermana!" />
        <SingleExample
          english="We went into the shop on the corner."
          spanish="Entramos en la tienda de la esquina." />
        <p>These are not all of the prepositions but we will see more soon!</p>
        <p className='text-xs'>Estos no son todas las preposiciones pero, veremos mas muy pronto!</p>
        <UnitWithTroubleBtn unit={6} />
        <div className='my-8 rounded-md p-4 bg-blue-200 '>
          <UnitTest level={"Beginner"} unit={6} />
        </div>
      </div>
    </div>
  )
}
