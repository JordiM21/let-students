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
      href="/Niveles/Intermediate"
    >
      Intermediate
    </Link>,
    <Typography
      key="4"
      color="text.primary">
      Unit 13
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>PAST SIMPLE - LESSON 13</p>
        <CustomTitle title={"Past Simple"} titleSpanish={"EL PASADO SIMPLE"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=DQlzxDz5T0w"
          controls={true} />
        <p className='font-bold text-gray-700'>Hay muchas maneras de hablar del pasado en inglés, pero el pasado simple es la forma más común. El pasado simple en inglés es equivalente al pretérito imperfecto y pretérito indefinido del español. Usamos el pasado simple para acciones completas en el pasado. El período de tiempo de estas acciones no es importante como en el español. En el pasado simple hay verbos regulares y verbos irregulares.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomTitle
              title="Regular Verbs"
              titleSpanish="Verbos regulares" />
            <p className='font-bold text-gray-700'>Para formar el pasado simple con verbos regulares, usamos el infinitivo y añadimos la terminación “-ed”. La forma es la misma para todas las personas (I, you, he, she, it, we, they).</p>
            <DoubleExample
              english1="want"
              spanish1="quiero"
              english2="wanted"
              spanish2="quería" />
            <DoubleExample
              english1="learn"
              spanish1="aprender"
              english2="learned"
              spanish2="aprendí" />
            <DoubleExample
              english1="walk"
              spanish1="caminar"
              english2="walked"
              spanish2="caminé" />
            <DoubleExample
              english1="show"
              spanish1="mostrar"
              english2="showed"
              spanish2="mostré" />
            <DoubleExample
              english1="change"
              spanish1="cambiar"
              english2="changed"
              spanish2="cambié" />
            <DoubleExample
              english1="stop"
              spanish1="parar"
              english2="stopped"
              spanish2="paré" />
            <DoubleExample
              english1="study"
              spanish1="estudiar"
              english2="studied"
              spanish2="estudié" />
            <CustomTitle
              title="Irregular Verbs"
              titleSpanish="Verbos irregulares " />
            <p className='font-bold text-gray-700'>Significa que no podemos hacer la forma pasada solo colocando "-ed" al final, se escribe de una forma totalmente diferente, lastimosamente no hay una regla y debes aprender cada uno para usarlos, veamos algunos!</p>
            <DoubleExample
              english1="Buy"
              spanish1="Comprar"
              english2="Bought"
              spanish2="Compré" />
            <DoubleExample
              english1="be"
              spanish1="ser/estar"
              english2="was/were"
              spanish2="era/estaba" />
            <DoubleExample
              english1="find"
              spanish1="encontrar"
              english2="found"
              spanish2="encontré" />
            <DoubleExample
              english1="feel"
              spanish1="sentir"
              english2="felt"
              spanish2="sentí" />
            <DoubleExample
              english1="come"
              spanish1="venir"
              english2="came"
              spanish2="vine" />
            <p className='font-bold text-gray-700'>Sé que estas pensando que son super dificiles pero, tranquilo no tienes que aprenderlas todas al momento, aprende algunas y con el tiempo iràs usando otras, ahora veamos algunas frases en pasado!</p>
            <SingleExample
              english="She was a doctor."
              spanish="Era doctora." />
            <p className='font-bold text-gray-700'>Hey tu! te doy un secreto: Mira la frase anterior, She was a doctor. la cual en presente sería: She is a doctor. Significa que para cambiar el tiempo basta con sustituit el verbo to be en presente con el pasado! SENCILLíSIMO, veamos mas ejemplos</p>
            <DoubleExample
              english1="I am in the room"
              spanish1="Yo estoy en el cuarto"
              english2="I was in the room"
              spanish2="Yo estaba en el cuarto" />
            <DoubleExample
              english1="I am good at football"
              spanish1="Yo soy bueno al futbol"
              english2="I was good at football"
              spanish2="Yo era bueno al futbol" />
            <DoubleExample
              english1="You [are] my friend"
              spanish1="Tu eres mi amigo"
              english2="You [were] my friend"
              spanish2="Tu eras mi amigo" />
            <p className='font-bold text-gray-700'>Veamos algunos ejemplos aun mas faciles, solo colocamos el verbo y al final -ed para pasarlo a pasado, que faaacil!</p>
            <SingleExample
              english="
I wanted to dance."
              spanish="Yo Quería bailar." />
            <SingleExample
              english="
They learned English."
              spanish="Aprendieron inglés." />
            <SingleExample
              english="I worked here"
              spanish="Yo trabajé aqui" />
            <SingleExample
              english="You studied here"
              spanish="tu estudiaste aquí" />
            <SingleExample
              english="She wasn’t a doctor."
              spanish="Ella no era doctora." />
            <p className='font-bold text-gray-700'>Otra forma de hacer las frases al tiempo pasado es con el magico "did" que es el hermano mejor de "do" [nuestro auxiliar para el presente] solo sustituimos el did por el do y ya esta pasado (mayormente utilizado en preguntas y negaciones: YES igual que el "do": "Do you have a pencil?" [Tienes un lapiz?] / "Did you have a pencil? [Tenías un lapiz?]" )</p>
            <SingleExample
              english="I didn’t want to dance."
              spanish="No quería bailar." />
            <SingleExample
              english="They didn’t learn English."
              spanish="No aprendieron inglés" />
            <SingleExample
              english="I didn’t buy a blue car."
              spanish="No compré un coche azul." />
            <SingleExample
              english="Did they learn English?"
              spanish="¿Aprendieron inglés?" />
            <SingleExample
              english="Did you want to dance?"
              spanish="¿Querías bailar?" />
            <SingleExample
              english="Did you believe him?"
              spanish="¿Le creíste?" />
            <SingleExample
              english="Did you buy a blue car?"
              spanish="¿Compraste un coche azul?" />
            <SingleExample
              english="
Tom stayed at home last night."
              spanish="Tom se quedó en casa anoche." />
            <SingleExample
              english="Kate worked last Saturday."
              spanish="Kate trabajó el sábado pasado." />
            <SingleExample
              english="I didn’t go to the party yesterday."
              spanish="No fui a la fiesta ayer." />
            <SingleExample
              english="Did they walk to school this morning?"
              spanish="¿Han andado a la escuela esta mañana?" />
            <SingleExample
              english="I worked for many years in a museum."
              spanish="Trabajaba en un museo durante muchos años." />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={13} />
          </div>
        </div>
      </div>
    </div>
  )
}
