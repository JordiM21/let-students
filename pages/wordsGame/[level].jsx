import BackHeader from '@/components/BackHeader';
import LoadingScreen from '@/components/LoadingScreen';
import VideoWordsGame from '@/components/VideoWordsGame';
import WithWordsGame from '@/components/WithWordsGame';
import { Box, Fade, Modal, TextField, useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import { TfiReload } from 'react-icons/tfi'
import Lottie from 'lottie-react'
import astronauta from '@/public/animations/gameAstronauta.json'
import withUserData from '@/components/WithUserData';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';

const wordsGamePage = ({ data, userData }) => {
  if (!data) {
    return <LoadingScreen />;
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isScreenBig = useMediaQuery('(min-width: 550px)');

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: isScreenBig ? '400px' : '90%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
  };
  const router = useRouter();
  const level = router.query.level;
  const filteredData = data.filter(item => item.level === level);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = filteredData[currentIndex];  // Usamos el índice actual en lugar de lessonNumber

  // Función para avanzar al siguiente elemento
  const handleNext = () => {
    const nextIndex = (currentIndex + 1);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = (currentIndex - 1);
    setCurrentIndex(nextIndex);
  };

  const noPrev = () => {
    toast.info("This is the first one, Go ahead!")
  }

  const completeModule = async (e) => {
    if (userData.wordsGameProgress.includes(level)) {
      toast.info("Ya completaste este modulo");
      router.back()
    } else {
      const nameRef = doc(db, "users", userData.id);
      await updateDoc(nameRef, {
        wordsGameProgress: [...userData.wordsGameProgress, level],
      }).then(() => {
        toast.success("Progress updated successfully!");
        router.back();
      });
    }
  };


  return (
    <div className='bg-[var(--color2)] pt-20 h-screen'>
      <BackHeader largeTitle={`Game of Words: ${level}`} parentTitle={"Back"} />
      {
        !currentItem && (
          <LoadingScreen />
        )
      }
      <div className='xl:flex justify-center xl:px-12'>
        <div className='w-11/12 xl:w-1/2 xl:mx-8 mx-auto'>
          <VideoWordsGame url={currentItem?.url} />
        </div>
        <div className='px-4 xl:w-1/2 xl:px-0'>
          <p onClick={handleOpen} className='text-3xl xl:text-6xl text-white'>{currentItem?.textEng}</p>
          <p className='text-gray-300 xl:text-2xl'>{currentItem?.textSpa}</p>
          <p className='xl:text-md text-sm text-gray-900'>{currentItem?.description}</p>
        </div>
      </div>
      <div className='flex px-8 justify-between w-full right-0 xl:px-20 overflow-hidden bg-[var(--color2Shadow)] absolute pb-20 sm:pb-24 md:pb-4 xl:pb-6 pt-2 sm:pt-4 xl:pt-6 rounded-t-xl bottom-0'>
        <button onClick={currentIndex === 0 ? noPrev : handlePrev} className={`group w-[20%] sm:w-[45%] xl:w-[30%] xl:py-7 sm:py-3 py-2 px-1 flex gap-4 items-center justify-center rounded-xl bg-white hover:shadow-md hover:shadow-gray-700 hover:-translate-y-1 ${currentIndex == 0 && "disabled grayscale hover:translate-y-0"}`}>
          <p className='text-[var(--color3)] xl:text-3xl hidden sm:block'>
            ANTERIOR
          </p>
          <BsFillArrowLeftCircleFill className='text-3xl fill-[var(--color3)] group-hover:-translate-x-1' />
        </button>
        <button onClick={currentIndex === filteredData.length - 1 ? handleOpen : handleNext} className='group w-[20%] sm:w-[45%] xl:w-[30%] xl:py-7 sm:py-3 py-2 px-1 flex gap-4 items-center justify-center rounded-xl bg-[var(--color3)] hover:shadow-md hover:shadow-gray-700 hover:-translate-y-1'>
          <BsFillArrowRightCircleFill className='group-hover:translate-x-1 text-3xl fill-white' />
          <p className='text-white xl:text-3xl hidden sm:block'>
            SIGUIENTE
          </p>
        </button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <small className='text-gray-500 text-xs'>Recomendamos practicar un modulo más de 3 o 4 veces.</small>
            <p className='text-2xl my-2 text-[var(--color2)]'>Has Completado Exitosamente: {" "}
              <small className='text-[var(--color3)] text-4xl'>
                {level}
              </small>
            </p>
            <Lottie
              className='h-64 w-64 mx-auto'
              animationData={astronauta} />
            <p className='text-gray-700 my-4'>
              Sigue practicando y aprendiendo más palabras para mejorar tu pronunciación y tu fluidez!
            </p>
            <div className='flex justify-around gap-4 my-4'>
              <button onClick={() => router.reload()} type='submit' className='bg-[var(--color3)] group hover:shadow-md hover:shadow-gray-700 hover:scale-105 flex items-center gap-3 justify-center  py-2 px-5 text-lg text-white rounded-md'>
                <p className='text-orange-100'>
                  Repetir
                </p>
                <TfiReload className='bg-orange-100 group-hover:rotate-180 text-4xl p-2 rounded-full fill-orange-600' />
              </button>
              <button onClick={completeModule} type='submit' className='bg-green-600 hover:shadow-md hover:shadow-gray-700 hover:scale-105 flex items-center gap-3 justify-center  py-2 px-5 text-lg text-white rounded-md'>
                <p className='text-green-200'>
                  Completado
                </p>
                <AiFillCheckCircle className='text-4xl fill-green-200' />
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default withUserData(WithWordsGame(wordsGamePage))
