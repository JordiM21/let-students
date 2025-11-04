import BackHeader from '@/components/BackHeader'
import LevelPreview from '@/components/LevelPreview'
import LoadingScreen from '@/components/LoadingScreen'
import WithFlashGame from '@/components/WithFlashGame'
import withUserData from '@/components/WithUserData'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const FlashCards = ({ userData, data, defaultFlash }) => {

  const router = useRouter()

  const categoriesFromData = Object.keys(data[0] || {})
    .filter((key) => key.toLowerCase() !== 'id') // 👈 Exclude "id" or "Id"
    .sort()
    .map((categoryKey) => {
      const categoryData = data[0][categoryKey]

      // Try to get a meaningful cover image — fallback to one of the level covers or a default
      const coverImg =
        categoryData.cover ||
        categoryData.levels?.easyCover ||
        categoryData.levels?.mediumCover ||
        categoryData.levels?.hardCover
      // Capitalize the first letter for display
      const displayName = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)

      return {
        name: displayName,
        url: categoryKey,
        img: coverImg,
      }
    })

  return (
    <div className="pt-20 bg-[var(--bluebg)] min-h-screen py-8">
      <BackHeader largeTitle={'Aprende Jugando'} parentTitle={'Volver'} />

      <h1 className="text-[#2bb0e0] py-4 text-5xl md:text-8xl text-center font-bold">Flash Cards</h1>

      <div className="mx-4 sm:mx-8 lg:mx-auto max-w-5xl">
        {/* Info box */}
        <div className="w-full my-4 rounded-lg p-4 max-w-[420px] bg-[var(--blueDarkbg)] mx-auto shadow-md">
          <p className="text-[var(--lightBlue)] opacity-90 text-center text-lg">
            ¡Diviértete mientras aprendes y reta a tus amigos a ver quién acierta más rápido!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {categoriesFromData && categoriesFromData.length > 0
            ? categoriesFromData.map((category) => (
                <Link key={category.name} href={`/FlashCards/${category.url}`} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    {/* Image container */}
                    <div className="relative w-full aspect-[1/1] overflow-hidden">
                      <Image
                        src={category.img}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        onLoadingComplete={(img) => {
                          img.parentElement.parentElement.style.opacity = '1' // fade in card
                        }}
                      />
                    </div>

                    {/* Category Name */}
                    <div className="bg-[var(--blueDarkbg)] text-[var(--lightBlue)] text-center text-xl sm:text-2xl font-semibold p-3 rounded-b-xl">
                      {category.name}
                    </div>
                  </div>
                </Link>
              ))
            : // Loading skeletons while data is fetching
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  {/* Image skeleton */}
                  <div className="w-full aspect-[1/1] bg-gray-200" />
                  {/* Text skeleton */}
                  <div className="h-12 bg-gray-300 mt-0.5 mx-2 rounded-b-xl" />
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default withUserData(WithFlashGame(FlashCards))
