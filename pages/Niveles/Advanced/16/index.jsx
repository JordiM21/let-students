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
      Unit 16
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Linking Words - LESSON 16</p>
        <CustomTitle title={"Linking Words"} titleSpanish={"Palabras Conectoras"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=GftTPjgpUNo"} />
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>Linking words, también conocidos como “connectors”, son palabras que vinculan o relacionan dos ideas, dentro de una oración (conectando dos cláusulas) o dentro de un párrafo (conectando dos frases). Ya hemos introducido este concepto en una lección anterior (Conjunctions), ahora profundizaremos más en ellas.</small>
            <CustomTitle title={"Agregar información"} titleSpanish={"La siguiente lista incluye linking words que se utilizan para agregar o proporcionar más información."} />
            <CustomTitle title={"And"} titleSpanish={"Traducido como ‘y’, esta linking word es la más común para añadir información. “And” se utiliza en oraciones, con frecuencia en listas separadas por comas, aunque nunca se utiliza una coma antes ni después de “and”."} />
            <SingleExample
              english="He loves sport. He plays football, basketball and tennis."
              spanish="Le encanta el deporte. Juega a fútbol, baloncesto y tenis."
            />
            <CustomTitle title={"Also"} titleSpanish={"“Also”, o ‘también’ en español, se utiliza entre el sujeto y el verbo para dar información adicional o para dar énfasis."} />
            <SingleExample
              english="
He also likes to ski."
              spanish="También le gusta esquiar."
            />
            <CustomTitle title={"In addition"} titleSpanish={"Con frecuencia se encuentra al principio de una oración, “in addition” (‘además’ en español) se usa para añadir información a la oración anterior."} />
            <SingleExample
              english="In addition to playing many sports, he coaches a handball team."
              spanish="Además de practicar muchos deportes, él entrena a un equipo de balonmano."
            />
            <CustomTitle title={"As well as"} titleSpanish={"Esta linking word, traducida como ‘además de’ en español, puede utilizarse al principio o en medio de una frase."} />
            <SingleExample
              english="He plays football as well as basketball."
              spanish="Juega a fútbol además de baloncesto."
            />
            <CustomTitle title={"Too"} titleSpanish={"“Too” puede encontrarse al final de una oración o entre el sujeto y el verbo; significa ‘también’."} />
            <SingleExample
              english="He plays tennis too."
              spanish="Juega a tenis también."
            />
            <CustomTitle title={"Besides"} titleSpanish={"Generalmente se encuentra al principio de una oración, “besides” tiene un significado muy similar a “as well”."} />
            <SingleExample
              english="Besides playing many sports, he also coaches handball."
              spanish="Además de practicar muchos deportes, él también entrena balonmano."
            />
            <CustomTitle title={"Furthermore"} titleSpanish={"Esta linking word se traduce como ‘además’, pero es más formal. Agrega información adicional a una idea y se encuentra generalmente al principio de una frase."} />
            <SingleExample
              english="He loves sports for the excitement and competition. Furthermore, the exercise is good for his health."
              spanish="Le encantan los deportes por la emoción y la competición. Además, el ejercicio es bueno para su salud."
            />
            <CustomTitle title={"Contrasting Information"} titleSpanish={"CONTRASTAR INFORMACIÓN"} />
            <CustomTitle title={"But"} titleSpanish={"La palabra más común para contrastar ideas, “but” generalmente se encuentra entre las dos ideas contrastantes dentro de una oración y siempre sigue a una coma. Se traduce como “pero” en español."} />
            <SingleExample
              english="There are signs that the economy is improving, but economists warn it will be several more years before the crisis ends."
              spanish="Hay indicios de que la economía está mejorando, pero los economistas advierten que pasarán varios años más antes de que la crisis termine."
            />
            <CustomTitle title={"Yet"} titleSpanish={"“Yet” se utiliza de la misma manera que “but”, aunque generalmente se considera más formal."} />
            <SingleExample
              english="
There are signs that the economy is improving, yet economists warn it will be several more years before the crisis ends."
              spanish="Hay indicios de que la economía está mejorando, sin embargo, los economistas advierten que pasarán varios años más antes de que la crisis termine."
            />
            <CustomTitle title={"However"} titleSpanish={"Generalmente se encuentra al principio de una frase, “however” es más formal que “but”. Se traduce como “sin embargo”."} />
            <SingleExample
              english="There are signs that the economy is improving. However, economists warn it will be several more years before the crisis ends."
              spanish="Hay indicios de que la economía está mejorando. Sin embargo, los economistas advierten que pasarán varios años más antes de que la crisis termine."
            />
            <CustomTitle title={"Although"} titleSpanish={"Esta palabra puede utilizarse al principio de una oración o entre las dos cláusulas contrastantes. Se traduce como “aunque”."} />
            <SingleExample
              english="Although there are signs that the economy is improving, economists warn it will be several more years before the crisis ends."
              spanish="Aunque hay indicios de que la economía está mejorando, los economistas advierten que pasarán varios años más antes de que la crisis termine."
            />
            <CustomTitle title={"Even though"} titleSpanish={"Generalmente se encuentra al principio de una frase, “even though” también se puede utilizar entre dos cláusulas."} />
            <SingleExample
              english="Even though there are signs that the economy is improving, economists warn it will be several more years before the crisis ends."
              spanish="Aunque hay indicios de que la economía está mejorando, los economistas advierten que pasarán varios años más antes de que la crisis termine."
            />
            <CustomTitle title={"Despite"} titleSpanish={"Esta palabra debe ir seguida por un sustantivo o un gerundio (verbo+ing). Si va a ir seguida de una cláusula (verbo sujeto), debemos usar “Despite the fact that”. Se traduce como “a pesar de”."} />
            <SingleExample
              english="Despite signs that the economy is improving, economists warn it will be several more years before the crisis ends."
              spanish="A pesar de los indicios de que la economía está mejorando, los economistas advierten que pasarán varios años más antes de que la crisis termine."
            />
            <CustomTitle title={"While"} titleSpanish={"Encontramos “while” frecuentemente al principio de la frase."} />
            <SingleExample
              english="While there are signs that the economy is improving, economists warn that it will be several years before the crisis ends."
              spanish="Si bien hay indicios de que la economía está mejorando, los economistas advierten que pasarán varios años antes de que la crisis termine."
            />
            <CustomTitle title={"As/so long as"} titleSpanish={"Esta palabra puede utilizarse en lugar de “if”, aunque suele ser más formal. Se utiliza frecuentemente con permisos y puede ser utilizada al principio o en el medio de la oración."} />
            <SingleExample
              english="We will go to the beach as long as it doesn’t rain."
              spanish="Iremos a la playa mientras no llueva."
            />
            <CustomTitle title={"Unless"} titleSpanish={"Esta palabra indica una excepción a la condición. Se utiliza siempre antes de un verbo afirmativo para expresar la idea de “if…not”. Se traduce como “a menos que”"} />
            <SingleExample
              english="We will go to the beach unless it rains."
              spanish="Iremos a la playa a menos que llueva."
            />
            <CustomTitle title={"Only if"} titleSpanish={"“Only if” se utiliza para restringir la condición, indicando que sólo hay una condición que hará realidad la cláusula principal. Se traduce como “sólo si”."} />
            <SingleExample
              english="We will go to the beach only if it doesn’t rain."
              spanish="Iremos a la playa sólo si no llueve."
            />
            <CustomTitle title={"Even if"} titleSpanish={"Esta palabra se usa para expresar la idea de que la condición es irrelevante; que los resultados serán los mismos. Se traduce como “aun si” o “incluso si”."} />
            <SingleExample
              english="We will go to the beach even if it rains."
              spanish="Iremos a la playa aun si llueve."
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={16} />
          </div>
        </div>
      </div>
    </div>
  )
}
