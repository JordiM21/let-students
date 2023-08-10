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
      href="/Niveles/Beginner"
    >
      Beginner
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 2
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>POSSESIVES PRONOUNS - LESSON 2</p>
      <CustomTitle title="Possesives" titleSpanish="Los posesivos" />
      <VideoPlayer url={"https://www.youtube.com/watch?v=pbpnnvwb5wQ"} />
      <p className='font-bold text-gray-700'>Los posesivos se clasifican en dos tipos según su función en la oración.</p>
      <div className='my-4'>
        <p className='text-sm opacity-60 mt-8'>PRONOMBRES POSESIVOS (EN FUNCIÓN DE DETERMINANTE)</p>
        <div className='space-y-4'>
          <DoubleExample
            english1="my"
            english2="This is my house."
            spanish1="mi(s)"
            spanish2="Ésta es mi casa."
          />
          <DoubleExample
            english1="your"
            english2="This is your book."
            spanish1="tu(s), de ti / su(s), de usted"
            spanish2="Éste es tu libro. / Éste es su libro."
          />
          <DoubleExample
            english1="his"
            english2="This is his bicycle."
            spanish1="su(s), de él"
            spanish2="Ésta es su bicicleta."
          />
          <DoubleExample
            english1="her"
            english2="This is her dress."
            spanish1="su(s), de ella"
            spanish2="Éste es su vestido."
          />
          <DoubleExample
            english1="its"
            english2="The dog doesn’t like to be on its own."
            spanish1="su(s)"
            spanish2="El perro no le gusta estar solo."
          />
          <DoubleExample
            english1="our"
            english2="These are our suitcases."
            spanish1="nuestro(s), de nosotros"
            spanish2="Éstas son nuestras maletas."
          />
          <DoubleExample
            english1="your"
            english2="These are your seats."
            spanish1="vuestro(s) / su(s), de ustedes"
            spanish2="Éstos son vuestros asientos. / Éstos son sus asientos."
          />
          <DoubleExample
            english1="their"
            english2="These are their books."
            spanish1="su(s), de ellos"
            spanish2="Éstos son sus libros."
          />
          <Nota text="Nota: Sólo utilizamos el pronombre posesivo “its” con el adjetivo “own”." />
          <p className='text-sm opacity-60 mt-8'>PRONOMBRES POSESIVOS (EN FUNCIÓN DE PRONOMBRE)</p>
          <DoubleExample
            english1="mine"
            english2="This book is mine."
            spanish1="mío(s)"
            spanish2="Este libro es mío."
          />
          <DoubleExample
            english1="yours"
            english2="Is this book yours?"
            spanish1="tuyo(s) / suyo(s)"
            spanish2="¿Este libro es tuyo? / ¿Este libro es suyo?"
          />
          <DoubleExample
            english1="his"
            english2="This bicycle is his."
            spanish1="suyo(s)"
            spanish2="Esta bicicleta es de él."
          />
          <DoubleExample
            english1="hers"
            english2="The dress is hers."
            spanish1="suyo(s)"
            spanish2="El vestido es de ella."
          />
          <DoubleExample
            english1="its"
            english2="The house is its (the cat´s)."
            spanish1="su(s)"
            spanish2="La casa es suya (del gato)."
          />
          <DoubleExample
            english1="ours"
            english2="The suitcases are ours."
            spanish1="nuestro(s)"
            spanish2="Las maletas son nuestras."
          />
          <DoubleExample
            english1="theirs"
            english2="This pencil is theirs."
            spanish1="suyo(s)"
            spanish2="Este lápiz es de ellos."
          />
          <p className='font-bold opacity-75'>Los posesivos varían según el que posee y no según la cantidad poseida:</p>
          <DoubleExample
            english1="My book"
            english2="My books"
            spanish1="Mi libro"
            spanish2="Mis libros"
          />
          <DoubleExample
            english1="Your book"
            english2="Your books"
            spanish1="tu libro"
            spanish2="tus libros"
          />
          <p className='text-[var(--color2)] font-bold text-lg opacity-75'>EXAMPLES:</p>
          <SingleExample
            english="My car is blue."
            spanish="Mi coche/carro es azul."
          />
          <SingleExample
            english="His house is big"
            spanish="Su (hombre) casa es grande"
          />
          <SingleExample
            english="Her friend is kind"
            spanish="Su (mujer) amiga es amigable"
          />
          <SingleExample
            english="The blue car is mine"
            spanish="El carro azul es mío"
          />
          <SingleExample
            english="The big house is his"
            spanish="La casa grande es suya. (hombre)"
          />
          <Nota text="Nota: estos ejemplos responden a la pregunta, ¿De quién es?. algo así: ¿De quien es el carro? / Whose is the car? -> La respuesta sería: (El carro es mío)/(The car is mine)  " />
          <CustomTitle title="Possessive Pronouns vs. the Genitive Case" titleSpanish="Pronombres posesivos y el genitivo" />
          <p className='font-bold opacity-75'>El genitivo por dificil que suene es solo agregar una “-s” al final de un sujeto para decir que es el propietario del siguiente sustantivo, no te quiero confundir, ¡mira los ejemplos!:</p>
          <SingleExample
            english="Her dress…"
            spanish="Su vestido... [de ella]"
          />
          <p className='text-sm font-bold opacity-75'>O podemos usar el genitivo "-s"</p>
          <SingleExample
            english="Andrea’s dress…"
            spanish="El vestido de Andrea"
          />
          <SingleExample
            english="Giuseppe's Pizzeria"
            spanish="La pizzeria de giuseppe"
          />
          <SingleExample
            english="My friend's car"
            spanish="El carro de mi amigo"
          />
          <p className='text-sm font-bold opacity-75'>Es muy importante que recuerdes que el genitivo "-s" solo lo usamos con personas:</p>

          <SingleExample
            english="Paul's house..."
            spanish="La casa de Paul"
          />
          <p className='text-sm font-bold opacity-75'>Cuando nos referimos a cosas o lugares que pertenecen a otra cosa usamos "of":</p>
          <SingleExample
            english="The wheel of the bike…"
            spanish="La rueda de la bicicleta…"
          />
          <SingleExample
            english="
            Washington is the capital of the United States."
            spanish="Washington es la capital de los Estados Unidos."
          />
          <Nota text="Cuando el nombre del poseedor termina en una “s”, el genitivo se añade a final del poseedor, pero sólo añadiendo el apóstrofo y no la “-s” del genitivo." />
          <p className='text-[var(--color2)] font-bold text-lg opacity-75'>EXAMPLES:</p>
          <SingleExample
            english="Luis' house"
            spanish=" La casa de Luis.."
          />
          <SingleExample
            english="The students’ exams…"
            spanish="los exámenes de los estudiantes…"
          />
        </div>
        <div className='my-8 rounded-md p-4 bg-blue-200 '>
          <UnitTest level={"Beginner"} unit={2} />
        </div>
      </div>
    </div>
  )
}
