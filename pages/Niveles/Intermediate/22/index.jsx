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
      Unit 22
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Phrasal Verbs 2 - LESSON 22</p>
        <CustomTitle title={"Phrasal Verbs 2"} titleSpanish={"Segunda parte de verbos frasales"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url="https://www.youtube.com/watch?v=oUY2gvr9fac&t=79s"
          controls={true} />
        <p className='font-bold text-gray-700'>Los Phrasal Verbs se tienen que aprender de memoria ya que son dos palabras que separadas significan cosas diferentes pero, cuando las unimos hacen referencia a algo especifico, asi que demosles la importancia que merecen</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <CustomTitle
              title="Phrasal Verbs con GET"
              titleSpanish="verbos frasales con GET" />
            <SingleExample
              english="Get Away"
              spanish="Escaparse / alejarse" />
            <SingleExample
              english="You have to get away from me "
              spanish="Tienes que alejarte de mi" />
            <SingleExample
              english="Get Up"
              spanish="Levantarse" />
            <SingleExample
              english="I always get up late"
              spanish="Yo siempre me levanto tarde" />
            <SingleExample
              english="Get about"
              spanish="Desplazarse / Divulgar" />
            <SingleExample
              english="Get in"
              spanish="entrar" />
            <SingleExample
              english="My father got in the taxi and went home (verbos en pasado)"
              spanish="Mi padre entrò en el taxi y se fue a casa" />
            <SingleExample
              english="Get off"
              spanish="Salir del trabajo / bajarse de un transporte (bus)" />
            <SingleExample
              english="Get along"
              spanish="Llevarse bien" />
            <SingleExample
              english="My mother get along well with yours"
              spanish="Mi madre se lleva bien con la tuya" />
            <SingleExample
              english="Get across"
              spanish="Cruzar / hacerse entender" />
            <SingleExample
              english="Videos are a great way to get your message across"
              spanish="Los videos son una excelente manera de transmitir tu mensaje" />
            <Nota text={"Como puedes ver en esta frase en la mitad del GET - ACROSS hay unas palabras, esto sucede a menudo con los phrasal verbs, que dividimos el phrasal verb en 2 partes y en medio colocamos mas info, algo asì: Take your socks off! [quitate las medias] El phrasal verb en esta oracion es 'take off' que significa 'quitarse' una prenda mas que todo."} />
            <SingleExample
              english="Get over"
              spanish="Recuperarse" />
            <SingleExample
              english="She is sad, he still hasn't 'got over' failing the exam"
              spanish="Esta triste. Aún no ha superado el haber suspendido el examen" />
            <SingleExample
              english="Get out"
              spanish="Salir" />
            <SingleExample
              english="Get out of the house!"
              spanish="Sal de la casa!" />
            <SingleExample
              english="Take out"
              spanish="Sacar algo de un bolso o mochila" />
            <SingleExample
              english="I took out the phone for a minute"
              spanish="Yo saqué el telefono por un minuto" />
            <SingleExample
              english="Put Away"
              spanish="Guardarlo en el bolso o mochila (lo contrario a la anterior ;))" />
            <SingleExample
              english="He had to Put his phone away because the teacher was mad!"
              spanish="El tuvo que guardar su celular porque el profe estaba enfadado!" />
            <SingleExample
              english="Turn up / Turn Down"
              spanish="Subir volumen / bajar volumen" />
            <SingleExample
              english="Could you please turn down the volume? I can't hear you!"
              spanish="Puedes porfavor bajar el volumen? no te puedo escuchar" />
            <SingleExample
              english="Break up"
              spanish="Terminar una relacion" />
            <SingleExample
              english="She just broke up with me! I'm gonna cry! [I am going to cry]"
              spanish="Ella terminó conmigo, voy a llorar!" />
            <SingleExample
              english="Chill out"
              spanish="Relajate" />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={22} />
          </div>
        </div>
      </div>
    </div>
  )
}
