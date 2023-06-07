import React, { useState } from 'react'
import ProgressLesson from './ProgressLesson'
import { useRouter } from 'next/router'
import Image from 'next/image'
import image1 from '@/public/writeAndImprove.png'
import image2 from '@/public/enviroments.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AiOutlineCopy } from 'react-icons/ai'
import { MdArrowForwardIos } from 'react-icons/md'

export default function StudentDashboard({ firstName, level, role, progress }) {
  const learnedWords = progress * 23
  const router = useRouter()
  const [details, setDetails] = useState(false)
  return (
    <div>
      <h1 className='text-center text-2xl py-2 font-bold text-[var(--color2)]'>Welcome {firstName}!</h1>
      <div className='bg-yellow-400 mx-4 pb-4 rounded-md md:flex md:pb-0 max-w-4xl md:mx-auto'>
        <div className='bg-yellow-300 font-semibold text-lg md:text-2xl px-4 py-8 rounded-md shadow-md'>
          <span className='text-[var(--color2)] md:block text-5xl md:text-8xl'>{learnedWords}</span> total words and phrases known
        </div>
        <div className='px-4 md:px-8'>
          <div className='my-4 space-y-2'>
            <p className='text-center text-xl md:text-2xl'>Your progress in the <span className='text-[var(--color2)] font-bold md:text-3xl text-2xl'>{level}</span> Level</p>
            <ProgressLesson progress={progress} />
          </div>
          <div>
            <p className='font-bold text-xl'>Learn more words and complete lessons now!</p>
            <button onClick={() => router.push(`/Niveles/${level}/${progress + 1}`)} className='my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:bg-[var(--color1)] transition-all 1s ease-in'>Go to my current Lesson</button>
          </div>
        </div>
      </div>
      <div className='mx-4 py-8 md:flex gap-8 items-center justify-center'>
        <div className='group rounded-md relative max-w-md h-72 my-8 md:max-w-xl mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer'>
          <Image src={image2} className='object-contain group-hover:scale-110 transition-all .1s ease-in' />
          <p className='bg-gradient-to-t text-white text-center from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Immersive Activities to learn while having fun</p>
        </div>
        <div className='bg-[var(--color2)] p-2 rounded-md max-w-xl'>
          <div className='group rounded-md relative max-w-sm md:max-w-full h-40 my-8 md:h-full mx-auto overflow-hidden transition-all .1s ease-in cursor-pointer'>
            <Image src={image1} className='w-full object-cover group-hover:scale-110 transition-all .1s ease-in' />
            <p className='bg-gradient-to-t text-white text-center from-[var(--color3Shadow)] to-transparent absolute z-10 transition-all .2s backdrop-blur-lg font-semibold px-4 bg-opacity-70 ease-in bottom-0 right-0 w-full'>Start Learning right now</p>
          </div>
          <p className='text-4xl text-yellow-400 font-bold'>Start using Write & Improve</p>
          <p className='font-bold text-[var(--color1)]'>Code for the level <span className='text-[var(--color3)] text-2xl'>{level}</span>:</p>
          {
            level == "Beginner" && (
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-2 hover:gap-4 transition-all 1s ease-in cursor-pointer hover:opacity-90 bg-[var(--color1)] text-white font-bold px-6 rounded-md py-2'>
                  <a href='https://writeandimprove.com/workbooks#/memberships/e405a0c1-8025-4fbb-ad94-bc0eefada543/workbooks/647f2ecc-604b-4a24-bbf9-4851f980cb85' target='_blank'>Go to the page</a>
                  <MdArrowForwardIos />
                </div>
                <div className='flex bg-white items-center px-6 py-2 rounded-md'>
                  <p>Z8M2D7GG</p>
                  <AiOutlineCopy />
                </div>
              </div>
            )
          }
          {
            level == "Intermediate" && (
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-2 hover:gap-4 transition-all 1s ease-in cursor-pointer hover:opacity-90 bg-[var(--color1)] text-white font-bold px-6 rounded-md py-2'>
                  <a href='https://writeandimprove.com/workbooks#/memberships/e405a0c1-8025-4fbb-ad94-bc0eefada543/workbooks/647f2ef1-cb66-4f4d-87ae-a842fbc28e33' target='_blank'>Go to the page</a>
                  <MdArrowForwardIos />
                </div>
                <div className='flex bg-white items-center px-6 py-2 rounded-md'>
                  <p>R2PMQGRC</p>
                  <AiOutlineCopy />
                </div>
              </div>
            )
          }
          {
            level == "Advanced" && (
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-2 hover:gap-4 transition-all 1s ease-in cursor-pointer hover:opacity-90 bg-[var(--color1)] text-white font-bold px-6 rounded-md py-2'>
                  <a href='https://writeandimprove.com/workbooks#/memberships/e405a0c1-8025-4fbb-ad94-bc0eefada543/workbooks/647f2eff-931c-4d46-84f9-2a866f69831d' target='_blank'>Go to the page</a>
                  <MdArrowForwardIos />
                </div>
                <div className='flex bg-white items-center px-6 py-2 rounded-md'>
                  <p>2DG2QZ9C</p>
                  <AiOutlineCopy />
                </div>
              </div>
            )
          }
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>See Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div>
                  <p className='text-[var(--color1)] font-bold'>Write & Improve is a tool developed by the <span className='text-[var(--color3)]'> University of Cambridge</span> that helps every student to improve while writing. From the beginning you are asigned to one of the workbooks on this platform according to your level, in this workbook you can practice as much as you want </p>
                  <p className='text-[var(--color1)] text-sm opacity-50'>Write & Improve es una herramienta desarrollada por la Universidad de Cambridge que ayuda a cada estudiante a mejorar mientras escribe. Desde el inicio eres asignado a un grupo de estudio en esta plataforma acorde a tu nivel, en este grupo podrás practicar tanto como quieras</p>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
      </div>
    </div>
  )
}
