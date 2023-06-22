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
      href="/Niveles/Beginner"
    >
      Beginner
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 5
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>ARTICLES - LESSON 5</p>
      <CustomTitle title="The Definite Article" titleSpanish="El artículo determinado" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=ZBxF4wlXR0c"
        controls={true} />
      <p className='font-bold text-gray-700'>Los artículos definen a un nombre y siempre están situados delante del nombre. En inglés, a diferencia del castellano, no tienen género ni forma plural. En castellano decimos “el coche” (género masculino, singular) o “las casas” (género femenino, plural) y en inglés es “the car” y “the houses”. “The” corresponde a los siguientes artículos en español: el, la, los, las.</p>
      <div className='my-4'>
        <p className='text-sm opacity-60 mt-8'>Masculino/Singular: (EL)</p>
        <div className='space-y-4'>
          <SingleExample
            english="The boy"
            spanish="el niño"
          />
          <SingleExample
            english="The book"
            spanish="el libro"
          />
          <p className='text-sm opacity-60 mt-8'>Masculino/Plural: (LOS)</p>
          <SingleExample
            english="The books"
            spanish="Los libros"
          />
          <SingleExample
            english="The boys"
            spanish="Los niños"
          />
          <p className='text-sm opacity-60 mt-8'>Femenino/Singular: (la)</p>
          <SingleExample
            english="The girl"
            spanish="La niña"
          />
          <SingleExample
            english="The table"
            spanish="La mesa"
          />
          <p className='text-sm opacity-60 mt-8'>Femenino/plural: (las)</p>
          <SingleExample
            english="The tables"
            spanish="Las mesas"
          />
          <SingleExample
            english="The girls"
            spanish="Las niñas"
          />
          <p className='font-bold opacity-60 mt-8'>Este artículo puede ir precedido de las preposiciones “of” o “to”. En inglés no hay contracción de preposición y artículo (“Del” = “of the” y “al” = “to the”).</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLO</p>
          <SingleExample
            english="The days of the week"
            spanish="Los días de la semana"
          />
          <SingleExample
            english="I am going to the garden"
            spanish="Me voy al jardín."
          />
          <CustomTitle
            title="Uses of the Definite Article"
            titleSpanish="Usos del artículo determinado" />
          <p className='font-bold text-gray-700 text-sm opacity-75'>1. Cuando sabemos de quién o de qué estamos hablando. Utilizamos “the” para indicar algo o alguien en particular, por ello se llama definido. Hablamos de algo o alguien concreto que tanto el emisor como el receptor del mensaje conocen porque ya ha salido anteriormente en la conversación o porque los dos lo conocen previamente.</p>
          <SingleExample
            english="What is the name of the restaurant?"
            spanish="¿Cuál es el nombre del restaurante?"
          />
          <SingleExample
            english="Do you remember the day we went to New York?"
            spanish="¿Recuerdas el día que fuimos a Nueva York?"
          />
          <SingleExample
            english="Who is the president of the United States?"
            spanish="¿Quién es el presidente de los Estados Unidos?"
          />
          <SingleExample
            english="The doctor is very good."
            spanish="El médico es muy bueno."
          />
          <p className='font-bold text-gray-700 text-sm opacity-75'>2. Con los nombres de regiones geológicas, cadenas de montañas, mares, océanos, grupos de islas, ríos y países en plural.</p>
          <SingleExample
            english="The United States"
            spanish="Los Estados Unidos"
          />
          <SingleExample
            english="The Netherlands"
            spanish="Los Países Bajos"
          />
          <SingleExample
            english="The Andes"
            spanish="Las montañas Andes"
          />
          <SingleExample
            english="The Atlantic Ocean"
            spanish="El océano Atlántico"
          />
          <p className='font-bold text-gray-700 text-sm opacity-75'>3. Para hacer referencia a direcciones (right, left, top, bottom) y a los puntos cardinales (north, south, east, west).</p>
          <SingleExample
            english="the south of France"
            spanish="el sur de Francia"
          />
          <SingleExample
            english="
the house on the left"
            spanish="la casa de la izquierda"
          />
          <SingleExample
            english="
the top of the page"
            spanish="la parte superior de la página"
          />
          <p className='font-bold text-gray-700 text-sm opacity-75'>4. Con los adjetivos en grado superlativo y números ordinales.</p>
          <SingleExample
            english="the tallest building"
            spanish="el edificio más alto"
          />
          <SingleExample
            english="the strongest man"
            spanish="el hombre más fuerte"
          />
          <SingleExample
            english="the first time"
            spanish="la primera vez"
          />
          <SingleExample
            english="the second floor"
            spanish="el segundo piso"
          />
          <CustomTitle title="When Not To Use The Definite Article" titleSpanish="Cuando no usamos el artículo determinado" />
          <p className='font-bold text-gray-700 text-sm opacity-75'>1. Cuando hablamos de algo en general.</p>
          <SingleExample
            english="
I like ice cream."
            spanish="Me gusta el helado"
          />
          <SingleExample
            english="Math is difficult"
            spanish="Las matemáticas son difíciles"
          />
          <p className='font-bold text-gray-700 text-sm opacity-75'>2. Nunca utilizaremos “the” cuando nos referimos a la televisión, las horas de las comidas, los días de la semana, la hora, los meses del año, las estaciones o los años.</p>

          <SingleExample
            english="
I do not like to watch television [TV]."
            spanish="No me gusta ver la televisión [tele]."
          />
          <SingleExample
            english="I have an appointment on Monday."
            spanish="Tengo una cita el lunes."
          />
          <SingleExample
            english="We eat breakfast at 9:00"
            spanish="Comemos el desayuno [Desayunamos] a las 9:00."
          />
          <p className='font-bold text-gray-700 text-sm opacity-75'>3. Con instituciones y modos de transporte, cuando estamos hablando en general.</p>
          <SingleExample
            english="We like school."
            spanish="Nos gusta la escuela."
          />
          <SingleExample
            english="I go to work by train."
            spanish="Voy al trabajo en tren"
          />
          <SingleExample
            english="They go to church on Sundays"
            spanish="Van a la iglesia los domingos."
          />
          <p className='font-bold text-gray-700 text-sm opacity-75'>4. No se utiliza el artículo con nombres de ciudades ni nombres de lugares en general, aunque hay algunas excepciones como hemos visto en el apartado anterior. Además, no se utiliza el artículo con lagos o calles.</p>
          <SingleExample
            english="I went to Lake Titicaca."
            spanish="Fui al lago Titicaca."
          />
          <SingleExample
            english="She lives on Flores Street."
            spanish="Vive en la calle Flores"
          />
        </div>
        <div className='my-8 rounded-md p-4 bg-blue-200 '>
          <UnitTest level={"Beginner"} unit={5} />
        </div>
      </div>
    </div>
  )
}
