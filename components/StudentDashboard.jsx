import React, { useRef, useState } from 'react'
import ProgressLesson from './ProgressLesson'
import { useRouter } from 'next/router'
import Image from 'next/image'
import image1 from '@/public/cambridgeandlet.png'
import image3 from '@/public/enviroments.png'
import { AiOutlineCopy } from 'react-icons/ai'
import { MdArrowForwardIos } from 'react-icons/md'
import ReactPlayer from 'react-player'
import { useSpringCarousel } from 'react-spring-carousel'

export default function StudentDashboard({ firstName, level, likedVideos, progress }) {
  const carouselRef = useRef(null);

  const learnedWords = progress * 23
  const router = useRouter()

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    slideType: 'fluid',
    // slideAmount: 350,
    freeScroll: true,
    enableFreeScrollDrag: true,
    items: likedVideos.map((char) => ({
      id: char,
      renderItem: (
        <div key={char} className='w-[170px] relative'>
          <div className='h-[120px] mx-auto w-[180px] absolute bg-gray-100 opacity-0'></div>
          <ReactPlayer
            width={150}
            height={120}
            className="mx-auto md:my-4 rounded-md"
            url={char}
            controls={false}
            light={true}
          />
        </div>
        // <div className='w-[80%] mx-auto my-4 rounded-md'>
        //   <ReactPlayer
        //     width={"100%"}
        //     height={"180px"}
        //     className="mx-auto md:my-4 rounded-md"
        //     url={char}
        //     controls={false}
        //     light={true}
        //   />
        // </div>
      ),
    })),
    // Customize other options as needed
  });

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
      <div className='md:flex md:gap-4 mx-8'>
        <div ref={carouselRef}>{carouselFragment}</div>
      </div>
      <div className='mx-4 py-8 md:flex gap-8 items-center max-md:space-y-6 justify-center'>
        <div className='rounded-lg bg-black'>
          <Image src={image3} className='rounded-t-lg h-[350px] object-cover bg-left' />
          <div className='p-4'>
            <p className='text-white text-xs md:text-sm font-bold opacity-30'>New Immersive activities</p>
            <h2 className='text-white font-bold text-lg'>A NEW WAY TO LEARN</h2>
            <p className='text-white opacity-60 text-sm md:text-md' >Actividades didácticas en video que te ayudarán a mejorar tu inglés y aprender muchas cosas nuevas, diviértete mientras aprendes y practicas inglés.</p>
            <button onClick={() => router.push("/Immersive")} className='w-full bg-white mt-2 rounded-full py-3 hover:opacity-80 active:scale-95'>
              Start Learning
            </button>
          </div>
        </div>
        <div className='rounded-lg bg-black w-full'>
          <Image src={image1} className='rounded-t-lg h-[320px] object-cover' />
          <div className='p-4'>
            <p className='text-white text-xs md:text-sm font-bold opacity-30'>New Learning Tool</p>
            <h2 className='text-white font-bold text-lg'>WRITE & IMPROVE BY CAMBRIDGE</h2>
            <p className='text-white opacity-60 text-sm md:text-md mb-4' >herramienta desarrollada por la Universidad de Cambridge que ayuda a cada estudiante a mejorar mientras escribe. Desde el inicio eres asignado a un grupo de estudio en esta plataforma acorde a tu nivel, en este grupo podrás practicar tanto como quieras</p>
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
                  <div className='flex bg-white items-center px-6 py-2 rounded-md'>
                    <p>R2PMQGRC</p>
                    <AiOutlineCopy />
                  </div>
                  <div className='flex items-center gap-2 hover:gap-4 transition-all 1s ease-in cursor-pointer hover:opacity-90 text-white border-4 border-white font-bold px-6 rounded-full py-2'>
                    <a href='https://writeandimprove.com/workbooks#/memberships/e405a0c1-8025-4fbb-ad94-bc0eefada543/workbooks/647f2ef1-cb66-4f4d-87ae-a842fbc28e33' target='_blank'>Go to page</a>
                    <MdArrowForwardIos fill='white' />
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
          </div>
        </div>
        {/* <Accordion>
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
        </Accordion> */}

      </div>
    </div>
  )
}
