import React from 'react';
import { useRef } from 'react';
import Image from 'next/image'
import { useSpringCarousel } from 'react-spring-carousel'
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'
import { useRouter } from 'next/router';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const CarouselWordsGame = ({ carouselTitle, array, progress }) => {
  const carouselRef = useRef(null);
  const router = useRouter()

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    slideType: 'fluid',
    // slideAmount: 350,
    freeScroll: true,
    enableFreeScrollDrag: true,
    items: array.map((char) => {
      const isProgressCompleted = progress?.includes(char.url)
      return {
        id: char.value,
        renderItem: (
          <div key={char.value} className='w-[170px] md:w-[220px] relative'>
            {isProgressCompleted && <BsFillPatchCheckFill className='absolute -top-0 z-10 right-4 text-2xl fill-green-400' />}
            <Image onClick={() => router.push(`/wordsGame/${char.url}`)} src={char.image} alt={`Character ${char.url}`} className='w-[150px] shadow-lg hover:scale-95 shadow-black cursor-pointer hover:opacity-80 h-[150px] md:h-[200px] md:w-[200px] object-cover rounded-lg' />
          </div>
        ),
      }
    }),
  });

  return (
    <div className='flex mt-4 gap-2'>
      <div className='w-full'>
        <p className='text-xl text-sky-950'>
          {carouselTitle}
        </p>
        <div className='flex justify-between relative'>
          <button className='absolute z-10 top-0 h-[150px] md:h-[200px] -left-5 bg-[var(--color2Shadow)] hover:bg-sky-950 rounded-l-lg' onClick={slideToPrevItem}><ChevronLeftRounded className='stroke-white text-lg' /></button>
          <button className='absolute z-10 top-0 h-[150px] md:h-[200px] -right-5 bg-[var(--color2Shadow)] hover:bg-sky-950 rounded-r-lg' onClick={slideToNextItem}><ChevronRightRounded className='stroke-white text-lg' /></button>
        </div>
        <div ref={carouselRef}>{carouselFragment}</div>
      </div>
    </div>
  );
}

export default CarouselWordsGame;
