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
      Unit 10
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg md:text-4xl text-[var(--color2)]'>VERBS - LESSON 10</p>
      <CustomTitle title="Verbs" titleSpanish="LOS VERBOS" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=jOx8sGmKyIE"
        controls={true} />
      <div className='my-4'>
        <p className='font-bold text-xs opacity-90'>Los verbos son palabras que indican acciones, existencia (ser/estar), posesión (tener) o ánimo.</p>
        <div className='space-y-4'>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="Be"
            spanish="ser/estar"
          />
          <SingleExample
            english="have"
            spanish="tener/estar"
          />
          <SingleExample
            english="do"
            spanish="hacer"
          />
          <SingleExample
            english="make"
            spanish="hacer(elaborar o crear)"
          />
          <SingleExample
            english="take"
            spanish="tomar/coger/agarrar"
          />
          <SingleExample
            english="get"
            spanish="conseguir"
          />
          <SingleExample
            english="go"
            spanish="ir"
          />
          <SingleExample
            english="come"
            spanish="venir"
          />
          <SingleExample
            english="leave"
            spanish="salir/irse"
          />
          <SingleExample
            english="know"
            spanish="saber/conocer"
          />
          <SingleExample
            english="like"
            spanish="gustar"
          />
          <SingleExample
            english="want"
            spanish="querer"
          />
          <SingleExample
            english="feel"
            spanish="sentir (sentimientos)"
          />
          <SingleExample
            english="begin, start"
            spanish="empezar"
          />
          <SingleExample
            english="end, finish"
            spanish="acabar/terminar"
          />
          <SingleExample
            english="learn"
            spanish="aprender"
          />
          <SingleExample
            english="teach"
            spanish="enseñar"
          />
          <SingleExample
            english="drink"
            spanish="beber"
          />
          <CustomTitle title="Auxiliary Verbs" titleSpanish="LOS VERBOS AUXILIARES" />
          <p className='font-bold text-xs opacity-90'>Hay tres verbos importantes en inglés que se pueden usar como verbos principales o verbos auxiliares: “to be”, “to have” y “to do”. Dependiendo del uso, el significado cambia pero la conjugación es siempre la misma.</p>
          <CustomTitle title="To Be" titleSpanish="ser/estar" />
          <p className='font-bold text-xs opacity-90'>Como en español, este verbo es muy importante y lo usamos mucho. Al mismo tiempo, es un verbo irregular en todos los tiempos. Además, la construcción de frases negativas e interrogativas es diferente a como construimos las de los otros verbos, como veremos en la lección de construir frases. También, usamos este verbo para construir el presente continuo, como veremos luego. Por lo tanto, es importante entender bien la conjugación de este verbo.</p>
          <DoubleExample
            english1="I"
            spanish1="Yo"
            english2="am"
            spanish2="soy/estoy"
          />
          <DoubleExample
            english1="You, we, they"
            spanish1="Tu/ustedes, nosotros, ellos"
            english2="are"
            spanish2="estas/eres, están/son, estamos/somos"
          />
          <DoubleExample
            english1="He, She, it"
            spanish1="El, ella, eso"
            english2="is"
            spanish2="es/está"
          />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="I am playing football"
            spanish="Yo estoy jugando futból"
          />
          <SingleExample
            english="She is pretty"
            spanish="Ella es linda"
          />
          <SingleExample
            english="They are not in the classroom"
            spanish="Ellos no están en el salón de clases"
          />
          <CustomTitle title="To Have" titleSpanish="haber/tener" />
          <p className='font-bold text-xs opacity-90'>Este verbo significa “tener” cuando lo usamos como verbo principal y significa “haber” cuando se usa como verbo auxiliar. Aprenderemos más sobre el uso del verbo “to have” como auxiliar en la lección sobre presente perfecto. Por ahora es importante tener en cuenta que se puede usar este verbo en las dos situaciones y es un verbo irregular.</p>
          <DoubleExample
            english1="I, you, we, they"
            spanish1="Yo, tu, nosotros, ellos"
            english2="have"
            spanish2="tengo, tienes, tenemos, tienen"
          />
          <DoubleExample
            english1="he, she, it"
            spanish1="el, ella, eso"
            english2="has"
            spanish2="tiene"
          />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="I have a big bike"
            spanish="Yo tengo una moto grande"
          />
          <SingleExample
            english="He has a nice laptop"
            spanish="El tiene una laptop genial"
          />
          <SingleExample
            english="We have the same shirt"
            spanish="Nosotros tenemos la misma camisa"
          />
          <CustomTitle title="To Do" titleSpanish="hacer" />
          <p className='font-bold text-xs opacity-90'>Este verbo significa “hacer” cuando lo usamos como verbo principal. No hay una traducción directa en español para este verbo cuando se usa como verbo auxiliar. Este verbo auxiliar además es necesario para construir las frases negativas e interrogativas. También se puede usar en frases afirmativas para dar énfasis.</p>
          <DoubleExample
            english1="I, you, we, they"
            spanish1="Yo, tu, nosotros, ellos"
            english2="do"
            spanish2="hago, haces, hacemos, hacen"
          />
          <DoubleExample
            english1="he, she, it"
            spanish1="el, ella, eso"
            english2="does"
            spanish2="hace"
          />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="I don't know your father"
            spanish="Yo no conozco a tu padre"
          />
          <SingleExample
            english="You are doing yoga"
            spanish="Tu estas haciendo yoga"
          />
          <SingleExample
            english="She does the homework"
            spanish="Ella hace la tarea"
          />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={10} />
          </div>
        </div>
      </div>
    </div>
  )
}
