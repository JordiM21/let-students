import { CustomTitle, DoubleExample, SingleExample } from '@/components/DoubleExample'
import Nota from '@/components/Nota'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import UnitTest from '@/components/UnitTest'
import { useRouter } from 'next/router'
import { Breadcrumbs, Link, Typography } from '@mui/material'

export default function index() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Inicio
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/Niveles">
      Niveles
    </Link>,
    <Link underline="hover" key="3" color="inherit" href="/Niveles/Intermediate">
      Intermediate
    </Link>,
    <Typography key="4" color="text.primary">
      Unit 19
    </Typography>,
  ]

  const router = useRouter()

  return (
    <div className="bg-gray-100">
      <div className="mx-6 md:max-w-xl md:mx-auto">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className="opacity-60 font-bold text-lg text-[var(--color2)]">Reading Comprehension - LESSON 19</p>
        <CustomTitle title={'The city where I live'} titleSpanish={'La ciudad donde vivo'} />
        <p className="font-bold text-gray-700">
          My name is Clark, and I will tell you about my city. <br />
          I live in an apartment. In my city, there is a post office where people mail letters. <br /> On Monday, I go
          to work. I work at the post office. Everyone shops for food at the grocery store. They also eat at the
          restaurant. <br /> The restaurant serves pizza and ice cream. My friends and I go to the park. <br /> We like
          to play soccer at the park. On Fridays, we go to the cinema to see a movie. Children don't go to school on the
          weekend. Each day, people go to the hospital when they are sick. <br /> The doctors and nurses take care of
          them. The police keep everyone safe. I am happy to live in my city.
        </p>
        <div className="my-4">
          <div className="my-8 rounded-md p-4 bg-blue-200 ">
            <UnitTest level={'Intermediate'} unit={19} />
          </div>
        </div>
      </div>
    </div>
  )
}
