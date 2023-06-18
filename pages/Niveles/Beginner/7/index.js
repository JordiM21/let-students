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
      Unit 7
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>NOUNS - LESSON 7</p>
      <CustomTitle title="Nouns" titleSpanish="Los nombres" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=L4B7XxuJO6A"
        controls={true} />

      <div className='my-4'>
        <p className='font-bold text-gray-700'>Los nombres se usan para referirse a personas, animales, cosas y objetos, eventos, lugares o ideas abstractas. Como hemos visto en la lección sobre los artículos, los nombres no tienen género.</p>
        <div className='space-y-4'>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="camera → cameras"
            spanish="cámara/s"
          />
          <SingleExample
            english="pen → pens"
            spanish="bolígrafo/s"
          />
          <SingleExample
            english="house → houses"
            spanish="casa/s"
          />
          <SingleExample
            english="car → cars"
            spanish="coche/s"
          />
          <Nota text="1. Palabras que terminan en consonante + “y”: la “y” cambia a “i” y añadimos “es”." />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="party → parties"
            spanish="fiesta/s"
          />
          <SingleExample
            english="city → cities"
            spanish="ciudad/es"
          />
          <Nota text="2. Palabras que terminan en vocal + “y”: añadimos una “s”." />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>

          <SingleExample
            english="boy → boys"
            spanish="chico/s"
          />
          <SingleExample
            english="toy → toys"
            spanish="juguete/s"
          />
          <Nota text="3. Palabras que terminan en “s”, “ss”, “sh”, “ch”, “x”, “o”: añadimos “es”." />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="bus → buses"
            spanish="bus/es"
          />
          <SingleExample
            english="glass → glasses"
            spanish="copa/s"
          />
          <SingleExample
            english="brush → brushes"
            spanish="cepillo/s"
          />
          <SingleExample
            english={"watch → watches"}
            spanish={"reloj/es"} />
          <Nota text="4. Palabras que terminan en “f” o “fe”: cambiamos la “f” o “fe” por “ves”." />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="leaf → leaves"
            spanish="hoja/s" />
          <SingleExample
            english="wife → wives"
            spanish="esposa/s" />
          <CustomTitle title="Irregular Plural Nouns" titleSpanish="Plurales irregulares" />
          <p className='text-gray-700 font-bold text-xs'>Muchos sustantivos se pluralizan de un modo irregular. Existen dos casos:</p>
          <p className='text-gray-700 font-bold text-md'>1. Cuando el singular y plural no cambian.</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <p className='text-blue-600 font-bold'>SINGULAR</p>
          <SingleExample
            english="fish"
            spanish="pez o pescado" />
          <SingleExample
            english="sheep"
            spanish="oveja" />
          <p className='text-blue-600 font-bold'>PLURAL</p>
          <SingleExample
            english="fish"
            spanish="peces o pescados" />
          <SingleExample
            english="Sheep"
            spanish="ovejas" />
          <SingleExample
            english="We can NOT say ´FISHES´ or ´Sheeps´ "
            spanish="No podemos decir ´fishes´ o ´sheeps´" />
          <p className='text-gray-700 font-bold text-md'>2. Cuando el plural varía de modo irregular. Por lo tanto, no existe regla la cual se pueda seguir y hay que aprenderse las formas irregulares de cada uno.</p>
          <DoubleExample
            english1="man"
            spanish1="hombre"
            english2="men"
            spanish2="hombres" />
          <DoubleExample
            english1="woman"
            spanish1="mujer"
            english2="women"
            spanish2="mujeres" />
          <DoubleExample
            english1="child"
            spanish1="niño"
            english2="children"
            spanish2="niños" />
          <DoubleExample
            english1="person"
            spanish1="persona"
            english2="people"
            spanish2="personas / gente" />
          <DoubleExample
            english1="tooth"
            spanish1="diente"
            english2="teeth"
            spanish2="dientes" />
          <DoubleExample
            english1="foot"
            spanish1="pie"
            english2="feet"
            spanish2="pies" />
          <UnitWithTroubleBtn unit={7} />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={7} />
          </div>
        </div>
      </div>
    </div>
  )
}
