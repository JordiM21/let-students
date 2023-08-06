import React from 'react'
import { BsFillTrophyFill } from 'react-icons/bs'
import { GiDiamondTrophy, GiLaurelsTrophy, GiStarMedal, GiTrophyCup } from 'react-icons/gi'
import { FaMedal } from "react-icons/fa"
import { BsStarFill } from "react-icons/bs"
import { AiFillHeart, AiFillLike } from 'react-icons/ai'

export default function Rewards({ user, progressB, progressI, progressA, likes }) {
  if (!user) {
    return <p>Cargando premios...</p>;
  }
  const totalProgress = progressB + progressI + progressA;

  return (
    <div>
      <div className='flex items-center flex-wrap gap-1 justify-center'>
        <div className={`group border-2 ${totalProgress >= 5 ? "bg-green-400 border-green-700" : "bg-gray-700 border-gray-700"} hover:bg-white relative h-10 w-10 rounded-full flex items-center justify-center flex-col`}>
          <p className='text-xs font-extrabold'>5</p>
          <FaMedal />
          <div className='absolute hidden group-hover:block rounded-full w-40 z-20 bg-slate-300 right-0 -bottom-5'>
            <p className='text-xs text-center'>¡Tus primeras 5 lecciones!</p>
          </div>
        </div>
        <div className={`group border-2 ${totalProgress >= 15 ? "bg-green-400 border-green-700" : "bg-gray-700 border-gray-700"} hover:bg-white relative h-10 w-10 rounded-full flex items-center justify-center flex-col`}>
          <p className='text-xs font-extrabold'>15</p>
          <BsStarFill />
          <div className='absolute hidden group-hover:block rounded-full w-40 z-20 bg-slate-300 right-0 -bottom-5'>
            <p className='text-xs text-center'>¡Tus primeras 15 lecciones!</p>
          </div>
        </div>
        <div className={`group border-2 ${totalProgress >= 25 ? "bg-green-400 border-green-700" : "bg-gray-700 border-gray-700"} hover:bg-white relative h-10 w-10 rounded-full flex items-center justify-center flex-col`}>
          <p className='text-xs font-extrabold'>25</p>
          <BsFillTrophyFill />
          <div className='absolute hidden group-hover:block rounded-full w-40 z-20 bg-slate-300 right-0 -bottom-5'>
            <p className='text-xs text-center'>¡Tus primeras 25 lecciones!</p>
          </div>
        </div>
        <div className={`group border-2 ${likes >= 5 ? "bg-green-400 border-green-700" : "bg-gray-700 border-gray-700"} hover:bg-white relative h-10 w-10 rounded-full flex items-center justify-center flex-col`}>
          <p className='text-xs font-extrabold'>5</p>
          <AiFillLike />
          <div className='absolute hidden group-hover:block rounded-full w-40 z-20 bg-slate-300 right-0 -bottom-5'>
            <p className='text-xs text-center'>Dale like a 5 videos</p>
          </div>
        </div>
        <div className={`group border-2 ${likes >= 15 ? "bg-green-400 border-green-700" : "bg-gray-700 border-gray-700"} hover:bg-white relative h-10 w-10 rounded-full flex items-center justify-center flex-col`}>
          <p className='text-xs font-extrabold'>15</p>
          <AiFillHeart />
          <div className='absolute hidden group-hover:block rounded-full w-40 z-20 bg-slate-300 right-0 -bottom-5'>
            <p className='text-xs text-center'>Dale like a 15 videos</p>
          </div>
        </div>
        <div className={`group border-2 ${progressB >= 25 ? "bg-green-400 border-green-700" : "bg-gray-700 border-gray-700"} hover:bg-white relative h-10 w-10 rounded-full flex items-center justify-center flex-col`}>
          <p className='text-xs font-extrabold'>B</p>
          <GiLaurelsTrophy />
          <div className='absolute hidden group-hover:block rounded-full w-40 z-20 bg-slate-300 right-0 -bottom-5'>
            <p className='text-xs text-center'>Completa el nivel Beginner</p>
          </div>
        </div>
        <div className={`group border-2 ${progressI >= 25 ? "bg-green-400 border-green-700" : "bg-gray-700 border-gray-700"} hover:bg-white relative h-10 w-10 rounded-full flex items-center justify-center flex-col`}>
          <p className='text-xs font-extrabold'>I</p>
          <GiTrophyCup className='text-xl' />
          <div className='absolute hidden group-hover:block rounded-full w-40 z-20 bg-slate-300 right-0 -bottom-5'>
            <p className='text-xs text-center'>Completa el nivel Medio</p>
          </div>
        </div>
        <div className={`group border-2 ${progressA >= 25 ? "bg-green-400 border-green-700" : "bg-gray-700 border-gray-700"} hover:bg-white relative h-10 w-10 rounded-full flex items-center justify-center flex-col`}>
          <p className='text-xs font-extrabold'>A</p>
          <GiDiamondTrophy className='text-xl' />
          <div className='absolute hidden group-hover:block rounded-full w-40 z-20 bg-slate-300 right-0 -bottom-5'>
            <p className='text-xs text-center'>Completa el nivel Advanced</p>
          </div>
        </div>
      </div>
    </div>
  )
}
