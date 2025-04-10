import BackHeader from '@/components/BackHeader'
import LevelPreview from '@/components/LevelPreview'
import LoadingScreen from '@/components/LoadingScreen'
import WithFlashGame from '@/components/WithFlashGame'
import withUserData from '@/components/WithUserData'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const FlashCards = ({ userData, data }) => {
  if (!userData) {
    return <LoadingScreen />
  }

  console.log(data[0].food.levels.First[0])

  const router = useRouter()

  const categories = [
    {
      name: 'Animals',
      img: 'https://res.cloudinary.com/djllpk0tt/image/upload/v1743694938/Animals_Cover_fwt6qh.png',
      url: 'animals',
    },
    {
      name: 'Food',
      img: 'https://res.cloudinary.com/djllpk0tt/image/upload/v1743694943/Food_Cover_utvjpm.png',
      url: 'food',
    },
  ]

  return (
    <div className="pt-20 bg-[var(--bluebg)] h-screen py-8">
      <BackHeader largeTitle={'Games Lobby'} parentTitle={'Back'} />
      <h1 className="text-[var(--lightBlue)] text-4xl text-center">FLASH CARDS</h1>
      <div className="mx-10 sm:mx-auto max-w-2xl">
        <div className="w-full my-4 rounded-lg p-3 bg-[var(--blueDarkbg)]">
          <p className="text-[var(--lightBlue)] opacity-90">
            Hello Student! Do you want to learn new words and have fun at the same time? <br />
            Great, let's start playing some flash cards with vocabulary. the fastest, the better!
          </p>
        </div>
        <div className="flex justify-around gap-4 flex-wrap">
          {categories.map((category) => (
            <div className="group relative">
              <Link key={category.name} className="text-[var(--lightBlue)]" href={`/FlashCards/${category.url}`}>
                <div className="bg-white rounded-t-md overflow-hidden">
                  <Image
                    width={300}
                    height={300}
                    src={category.img}
                    className="object-cover group-hover:scale-[118%] transition-all .2s ease-in-out"
                  />
                </div>
                <div className="bg-[var(--blueDarkbg)] text-2xl w-full p-3 rounded-b-md text-[var(--lightBlue)]">
                  {category.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withUserData(WithFlashGame(FlashCards))
