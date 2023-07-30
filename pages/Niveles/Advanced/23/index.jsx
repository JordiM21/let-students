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
      Unit 23
    </Typography>,
  ];

  const router = useRouter()

  return (
    <div className='bg-gray-100'>
      <div className='mx-6 md:max-w-xl md:mx-auto'>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <p className='opacity-60 font-bold text-lg text-[var(--color2)]'> - LESSON 23</p>
        <CustomTitle title={""} titleSpanish={""} />
        <ReactPlayer
          width={"100%"}
          className="max-w-2xl mx-auto my-8 border-8 rounded-md bg-blue-600 border-blue-600"
          url=""
          controls={true} />
        <div className='my-4'>
          <div className='space-y-2'>
            <small className='text-sm opacity-60'></small>
            <SingleExample
              english=""
              spanish=""
            />
            <small className='text-sm opacity-60'></small>

          </div>
          <div className='my-8 rounded-md p-4 bg-blue-200 '>
            <UnitTest level={"Advanced"} unit={23} />
          </div>
        </div>
      </div>
    </div>
  )
}
