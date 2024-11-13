import { useRouter } from 'next/router'
import React from 'react'
import Basics from '@/public/wordsGameCovers/Basics.png'
import veryBeginner from '@/public/wordsGameCovers/veryBeginner.png'
import beginner from '@/public/wordsGameCovers/beginner.png'
import uperBeginner from '@/public/wordsGameCovers/uperIntermediate.png'
import intermediateBronze from '@/public/wordsGameCovers/intermediateBronze.png'
import intermediateSilver from '@/public/wordsGameCovers/6.png'
import intermediateGold from '@/public/wordsGameCovers/7.png'
import uperIntermediate from '@/public/wordsGameCovers/8.png'
import earlyAdvanced from '@/public/wordsGameCovers/9.png'
import advanced1 from '@/public/wordsGameCovers/10.png'
import advanced2 from '@/public/wordsGameCovers/11.png'
import advanced3 from '@/public/wordsGameCovers/12.png'
import uperAdvanced from '@/public/wordsGameCovers/13.png'
import englishPro from '@/public/wordsGameCovers/14.png'
import englishMaster from '@/public/wordsGameCovers/15.png'
import champion from '@/public/wordsGameCovers/16.png'
import house from '@/public/wordsGameCovers/house.png'
import pets from '@/public/wordsGameCovers/pets.png'
import school from '@/public/wordsGameCovers/school.png'
import hotel from '@/public/wordsGameCovers/hotel.png'
import friends from '@/public/wordsGameCovers/friends.png'
import cinema from '@/public/wordsGameCovers/cinema.png'
import vacations from '@/public/wordsGameCovers/vacations.png'
import shopping from '@/public/wordsGameCovers/shopping.png'
import restaurant from '@/public/wordsGameCovers/restaurant.png'
import BackHeader from '@/components/BackHeader'
import CarouselWordsGame from '@/components/CarouselWordsGame'
import withUserData from '@/components/WithUserData'
import LoadingScreen from '@/components/LoadingScreen'
import airport from '@/public/wordsGameCovers/0.png'
import meeting from '@/public/wordsGameCovers/1.png'
import delivery from '@/public/wordsGameCovers/2.png'
import social from '@/public/wordsGameCovers/3.png'
import gym from '@/public/wordsGameCovers/4.png'
import sports from '@/public/wordsGameCovers/5.png'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const wordsGame = ({ userData }) => {
  if (!userData) {
    return <LoadingScreen />;
  }

  const { wordsGameProgress } = userData

  const router = useRouter()

  const situations = [
    {
      image: airport,
      url: "Airport"
    },
    {
      image: meeting,
      url: "Meeting"
    },
    {
      image: delivery,
      url: "Delivery"
    },
    {
      image: social,
      url: "Social"
    },
    {
      image: gym,
      url: "Gym"
    },
    {
      image: house,
      url: "house"
    },
  ]

  const enviroment = [
    {
      image: house,
      url: "house"
    },
    {
      image: cinema,
      url: "cinema"
    },
    {
      image: pets,
      url: "pets"
    },
    {
      image: vacations,
      url: "vacations"
    },
    {
      image: school,
      url: "school"
    },
    {
      image: shopping,
      url: "shopping"
    },
    {
      image: hotel,
      url: "hotel"
    },
    {
      image: restaurant,
      url: "restaurant"
    },
    {
      image: friends,
      url: "friends"
    },
  ]
  const levels = [
    {
      image: Basics,
      url: "Basics"
    },
    {
      image: veryBeginner,
      url: "veryBeginner"
    },
    {
      image: beginner,
      url: "Beginner"
    },
    {
      image: uperBeginner,
      url: "upperBeginner"
    },
    {
      image: intermediateBronze,
      url: "intermediateBronze"
    },
    {
      image: intermediateSilver,
      url: "intermediateSilver"
    },
    {
      image: intermediateGold,
      url: "intermediateGold"
    },
    {
      image: uperIntermediate,
      url: "upperIntermediate"
    },
    {
      image: earlyAdvanced,
      url: "earlyAdvanced"
    },
    {
      image: advanced1,
      url: "advanced1"
    },
    {
      image: advanced2,
      url: "advanced2"
    },
    {
      image: advanced3,
      url: "advanced3"
    },
    {
      image: uperAdvanced,
      url: "upperAdvanced"
    },
    {
      image: englishPro,
      url: "englishPro"
    },
    {
      image: englishMaster,
      url: "englishMaster"
    },
    {
      image: champion,
      url: "champion"
    },
  ]

  return (
    <div className='bg-[var(--color2)] pt-20 h-full pb-20'>
      <div className='w-full relative h-10 overflow-hidden'>
        <div className='bg-white py-2 cursor-pointer rounded-lg w-[230px] absolute hover:-right-4 -right-44 flex items-center justify-center gap-4'>
          <BsFillPatchCheckFill className=' text-xl fill-green-400' />
          <p className='text-gray-500 text-md'>
            Modules Finished: {wordsGameProgress ? wordsGameProgress.length : "0"}
          </p>
        </div>
      </div>
      <div className='px-8'>
        <BackHeader parentTitle={"Back"} largeTitle={"Words Game"} />
        {
          userData.role == "Admin" && (
            <div className='max-w-[70%] flex justify-center md:max-w-[50%] lg:max-w-[30%] mx-auto'>
              <button onClick={() => router.push(`/adminCreate/createWordsGame/`)} className="bg-white px-4 py-2 rounded-full">
                <span class="text-[var(--color2)]">Añadir Actividades</span>
              </button>
            </div>
          )
        }
        <p className='text-5xl md:text-6xl font-extrabold text-center '>
          <span className='text-orange-400 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>W</span>
          <span className='text-orange-300 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>O</span>
          <span className='text-yellow-400 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>R</span>
          <span className='text-green-200 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>D</span>
          <span className='text-green-400 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>S</span>
          <br />
          <span className='text-blue-300 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>G</span>
          <span className='text-green-800 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>A</span>
          <span className='text-blue-400 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>M</span>
          <span className='text-purple-400 hover:text-white cursor-pointer drop-shadow-xl shadow-black'>E</span>
        </p>
        <CarouselWordsGame carouselTitle="Ordered by Level" progress={wordsGameProgress} array={levels} />
        <CarouselWordsGame carouselTitle="Ordered by Enviroment" progress={wordsGameProgress} array={enviroment} />
        <CarouselWordsGame carouselTitle="Ordered by Situation" progress={wordsGameProgress} array={situations} />
      </div >
    </div>
  )
}

export default withUserData(wordsGame)
