import { DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
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
      Unit 1
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg md:text-4xl text-[var(--color2)]'>Pronouns - LESSON 1.1</p>
      <h1 className='text-gray-800 font-bold text-4xl'>Personal Pronouns</h1>
      <p className='text-sm opacity-60 font-semibold'>(Los pronombres personales)</p>
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=cVkSndpZtN0"
        controls={true} />
      <p className='font-bold text-gray-700'>Dentro de los pronombres personales, la lengua inglesa distingue entre pronombres en función de sujeto (subject pronouns) y pronombres en función de objeto (object pronouns).</p>
      <div className='my-4'>
        <small className='text-sm opacity-60'>Pronombres (En función de sujeto) osea que, ¡reemplazan a el sujeto!</small>
        <div className='space-y-2'>
          <DoubleExample
            english1="I"
            english2="I am Ill."
            spanish1="Yo"
            spanish2="Yo estoy enfermo"
          />
          <DoubleExample
            english1="You"
            spanish1="tú, usted"
            english2="You are tall."
            spanish2="Tú eres alto. / Usted es alto."
          />
          <DoubleExample
            english1="He"
            spanish1="él"
            english2="He is handsome"
            spanish2="él es guapo"
          />
          <DoubleExample
            english1="She"
            spanish1="ella"
            english2="She is pretty"
            spanish2="Ella es bonita"
          />
          <DoubleExample
            english1="It"
            spanish1="eso (cosa)"
            english2="it is an apple"
            spanish2="eso es una manzana"
          />
          <DoubleExample
            english1="we"
            spanish1="nosotros"
            english2="We are tired"
            spanish2="Nosotros estamos cansados"
          />
          <DoubleExample
            english1="You"
            spanish1="Ustedes, vosotros"
            english2="You are angry"
            spanish2="Ustedes están enfadados"
          />
          <DoubleExample
            english1="They"
            spanish1="ellos, ellas"
            english2="They are at the cinema"
            spanish2="Ellos están en el cine"
          />
          <small className='text-center opacity-80 font-semibold'>Pronombres (En función de objeto) osea que, ¡reemplazan a el objeto!</small>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLO</p>
          <DoubleExample
            english1="me"
            spanish1="mi"
            english2="Can you help me?"
            spanish2="¿Puedes ayudarme?"
          />
          <DoubleExample
            english1="you"
            spanish1="a ti, a usted"
            english2="I can help you"
            spanish2="Puedo ayudarte./Puedo ayudarle."
          />
          <DoubleExample
            english1="him"
            spanish1="a él"
            english2="Can you see him?"
            spanish2="¿Puedes ver a él?"
          />
          <DoubleExample
            english1="her"
            spanish1="a ella"
            english2="Give it to her."
            spanish2="Dáselo a ella."
          />
          <DoubleExample
            english1="it"
            spanish1="a eso"
            english2="Give it a kick"
            spanish2="Dale una patada"
          />
          <DoubleExample
            english1="us"
            spanish1="a nosotros"
            english2="Can you see us?"
            spanish2="¿Puedes vernos? (a nosotros)"
          />
          <DoubleExample
            english1="you"
            spanish1="a vosotros, a ustedes"
            english2="I see you"
            spanish2="Os veo. / Les veo."
          />
          <DoubleExample
            english1="them"
            spanish1="a ellos"
            english2="He can help them"
            spanish2="Les puede ayudar"
          />
          <Nota text="Nota: En inglés no existe la forma “usted” o “ustedes” formal. Por lo tanto los nativos de la lengua ni siquiera lo tienen conceptualizado como una forma aquí llamada “formal”. Se tiene que entender por tanto, que la forma masculina, femenina y neutra son lo mismo, lo único que las diferencia es el género. Además, ten en cuenta que en inglés sólo existe una forma para “tú” y “vosotros”, “you”, excepto en la forma reflexiva que distingue entre el singular (yourself) y plural (yourselves)." />
          <h1 className='text-gray-800 font-bold text-4xl'>Neuter Form</h1>
          <p className='text-sm opacity-60 font-semibold'>(Forma neutra)</p>
          <p className='font-bold text-gray-700'>Los pronombres en inglés distinguen entre masculino (he), femenino (she) y neutro (it). <br />
            El pronombre personal “it” se utiliza cuando nos referimos a cosas, a animales que no sabemos su sexo o al tiempo (calendario y meteorológico). La forma plural de “it” es “they”.</p>
          <SingleExample
            english="Where is it? [the book]"
            spanish="(¿Dónde está? [el libro])"
          />
          <SingleExample
            english="What time is it? [the book]"
            spanish="(¿Qué hora es?)"
          />
          <SingleExample
            english="It is raining"
            spanish="(Esta lloviendo.)"
          />
          <Nota text="Nota: “It” es una partícula muy importante en inglés de la que los hablantes de lengua española se suelen olvidar." />
        </div>
        <div className='my-8 rounded-md p-4 bg-blue-200 '>
          <UnitTest level={"Beginner"} unit={1} />
        </div>
      </div>
    </div>
  )
}
