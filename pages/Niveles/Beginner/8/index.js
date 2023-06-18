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
      Unit 8
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='mx-6 md:max-w-xl md:mx-auto'>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>NOUNS - LESSON 8</p>
      <CustomTitle title="Countable and Uncountable Nouns" titleSpanish="LOS NOMBRES/SUSTANTIVOS CONTABLES E INCONTABLES" />
      <ReactPlayer
        width={"100%"}
        className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
        url="https://www.youtube.com/watch?v=rYLM2xM3ybM"
        controls={true} />

      <div className='my-4'>
        <p className='font-bold text-gray-700'>Los nombres en inglés pueden ser contables o incontables.</p>
        <CustomTitle title="Countable Nouns" titleSpanish="Los nombres contables" />
        <p className='text-gray-800 font-bold text-sm'>Los nombres o sustantivos contables son aquellos que se pueden contar.</p>
        <div className='space-y-4'>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="one [a] pencil"
            spanish="un lápiz"
          />
          <SingleExample
            english="Two cats"
            spanish="dos gatos"
          />
          <SingleExample
            english="three houses"
            spanish="tres casas"
          />
          <CustomTitle title="Uncountable Nouns" titleSpanish="Los nombres incontables" />
          <p className='text-gray-800 font-bold text-sm'>Los nombres o sustantivos incontables son aquellos que no podemos contar porque no los podemos delimitar individualmente sino que forman parte de un todo. Son tratados como singulares (no se pueden hacer plurales añadiendo “-s”).</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="tea"
            spanish="té"
          />
          <SingleExample
            english="salt"
            spanish="sal"
          />
          <SingleExample
            english="wood"
            spanish="madera"
          />
          <SingleExample
            english="wine"
            spanish="vino"
          />
          <SingleExample
            english="sugar"
            spanish="bread"
          />
          <SingleExample
            english="money"
            spanish="dinero"
          />
          <p className='text-gray-800 font-bold text-sm'>Sin embargo, en el momento que los delimitamos, estos mismos nombres o sustantivos pasan a ser contables. Deberán ir precedidos, si quieren individualizarse, de alguna palabra con valor partitivo.</p>
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="a gram of salt"
            spanish="un gramo de sal"
          />
          <SingleExample
            english="a piece of wood"
            spanish="un trozo de madera"
          />
          <SingleExample
            english="two cups of tea"
            spanish="dos tazas de té"
          />
          <SingleExample
            english="three glasses of wine"
            spanish="tres vasos de vino"
          />
          <Nota text="Recuerda que los nombres o sustantivos contables tienen una forma plural, como egg -> eggs" />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="bicycle → bicycles"
            spanish="bicicleta/s"
          />
          <SingleExample
            english="dress → dresses"
            spanish="vestido/s"
          />
          <Nota text="En cambio, los incontables no tienen forma plural (porque no se pueden contar). Es como si dijeras ´los dineros´" />
          <p className='text-gray-600 font-bold text-xl'>EJEMPLOS:</p>
          <SingleExample
            english="rice"
            spanish="arroz"
          />
          <SingleExample
            english="milk"
            spanish="leche"
          />
          <SingleExample
            english="water"
            spanish="agua"
          />
          <UnitWithTroubleBtn unit={8} />
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Beginner"} unit={8} />
          </div>
        </div>
      </div>
    </div>
  )
}
