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
      Unit 18
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Prefixes and Suffixes - LESSON 18</p>
        <CustomTitle title={"Prefixes and Suffixes"} titleSpanish={"LOS PREFIJOS Y SUFIJOS"} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url=""
          controls={true} />
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'>Los prefijos y sufijos son letras o grupos de letras que se añaden al principio de una palabra (prefijo) o al final de una palabra (sufijo) para cambiar el significado y/o función de la palabra. Muchos prefijos y sufijos tienen raíces latinas. La comprensión de los diversos significados de prefijos y sufijos puede ayudarnos a determinar el significado de palabras nuevas que nos encontremos.</small>
            <CustomTitle title={"Prefixes"} titleSpanish={"Los prefijos se adjuntan al principio de una palabra para cambiar su significado."} />
            <SingleExample
              english="modern → postmodern"
              spanish="moderno → postmoderno"
            />
            <SingleExample
              english="wrap → unwrap"
              spanish="envolver → desenvolver"
            />
            <SingleExample
              english="atypical"
              spanish="atípico"
            />
            <SingleExample
              english="bi-lingual"
              spanish="bilingüe"
            />
            <SingleExample
              english="codependent"
              spanish="codependiente"
            />
            <SingleExample
              english="compassion, conjoin"
              spanish="compasión, unir"
            />
            <SingleExample
              english="disintegrate"
              spanish="desintegrarse"
            />
            <SingleExample
              english="extraordinary"
              spanish="extraordinario"
            />
            <SingleExample
              english="impotent, irregular"
              spanish="impotente, irregular"
            />
            <SingleExample
              english="microwave"
              spanish="microonda"
            />
            <SingleExample
              english="misunderstanding"
              spanish="malentendido"
            />
            <SingleExample
              english="reuse"
              spanish="reutilizar"
            />
            <SingleExample
              english="unhelpful"
              spanish="poco servicial, inútil"
            />
            <CustomTitle title={"Suffixes"} titleSpanish={"Los sufijos se adjuntan al final de una palabra para crear una nueva palabra o para cambiar la función de la palabra. Por ejemplo, los verbos pueden modificarse para convertirse en adjetivos o sustantivos con la adición de un sufijo."} />
            <SingleExample
              english="maintain [v.] → maintenence [n.]"
              spanish="mantener → mantenimiento"
            />
            <SingleExample
              english="bright [adj.] → brighten [v.]"
              spanish="brillante → iluminar"
            />
            <SingleExample
              english="enjoy [v.] → enjoyable [adj.]"
              spanish="disfrutar → agradable"
            />
            <SingleExample
              english="free-dom"
              spanish="libertad"
            />
            <SingleExample
              english="teach-er, act-or"
              spanish="profesor, actor"
            />
            <SingleExample
              english="national-ism"
              spanish="nacionalismo"
            />
            <SingleExample
              english="national-ist"
              spanish="nacionalista"
            />
            <SingleExample
              english="complicity"
              spanish="complicidad"
            />
            <SingleExample
              english="treat-ment"
              spanish="tratamiento"
            />
            <SingleExample
              english="relation-ship"
              spanish="relación, parentesco"
            />
            <SingleExample
              english="terrify"
              spanish="aterrar, aterrorizar"
            />
            <SingleExample
              english="sens-ible"
              spanish="sensato"
            />
            <SingleExample
              english="beautiful"
              spanish="bonita, preciosa, hermosa"
            />
            <SingleExample
              english="scientific, magical"
              spanish="científica, mágico"
            />
            <SingleExample
              english="hopeless"
              spanish="sin esperanza, desesperado"
            />
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={18} />
          </div>
        </div>
      </div>
    </div>
  )
}
