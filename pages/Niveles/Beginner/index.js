import Image from 'next/image'
import React from 'react'
import image1 from '@/public/beginner-cover.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

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
    <Typography
      key="3"
      color="text.primary">
      Beginner
    </Typography>,
  ];
  return (
    <div>
      <div className='max-w-3xl mx-auto bg-[var(--color3Shadow)]'>
        <Image src={image1} className='w-full h-48 md:h-72 object-cover' />
        <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
    </div>
  )
}
