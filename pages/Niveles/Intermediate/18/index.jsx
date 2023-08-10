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
      href="/Niveles/Intermediate"
    >
      Intermediate
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
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'>Native Speaker Phrases - LESSON 18</p>
        <CustomTitle title={"Native Speaker Phrases"} titleSpanish={"Frases de nativos"} />
        <VideoPlayer url={"https://www.youtube.com/watch?v=iAxfnBlaQ9s"} />
        <p className='font-bold text-gray-700'>These are some of the most commons phrases and expressions that native speakers use.</p>
        <div className='my-4'>
          <div className='space-y-2'>
            <SingleExample
              english="I'm all ears"
              spanish="I am listening to you" />
            <SingleExample
              english="I don't get it"
              spanish="I don't understand" />
            <SingleExample
              english="I'm very hungry"
              spanish="I'm starving" />
            <SingleExample
              english="No clue"
              spanish="I don't know" />
            <SingleExample
              english="It's on me"
              spanish="I'll pay the bill" />
            <SingleExample
              english="pissed off"
              spanish="angry" />
            <SingleExample
              english="Watch out!"
              spanish="Be careful" />
            <SingleExample
              english="Me too"
              spanish="So am i" />
            <SingleExample
              english="Give me a break"
              spanish="Leave me alone" />
            <SingleExample
              english="It's up to you"
              spanish="It's your choice" />
            <SingleExample
              english="It's a piece of cake"
              spanish="it's easy" />
            <SingleExample
              english="hit the books"
              spanish="study" />
            <SingleExample
              english="i screwed up"
              spanish="i made a big mistake" />
            <SingleExample
              english="Break a leg"
              spanish="Good luck" />
            <SingleExample
              english="How is it going?"
              spanish="How are you?" />
            <p className='font-bold text-gray-700'>Obviamente hay muchos mas y no los tienes que aprender todos pero te hacen sonar mas seguro y avanzado!</p>
          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Intermediate"} unit={18} />
          </div>
        </div>
      </div>
    </div>
  )
}
