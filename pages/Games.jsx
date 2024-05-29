import React from 'react'

export default function Games() {
  return (
    <div className="bg-[var(--bluebg)] h-screen py-8">
      <h1 className="text-[var(--lightBlue)] text-4xl text-center">MY GAMES</h1>
      <div className="mx-4 max-w-5xl">
        <div className="w-full h-32 my-4 rounded-lg p-3 bg-[var(--blueDarkbg)]">
          <p className="text-[var(--blueSuperDark)] opacity-90">
            Hey What's Up! This is your Games Hub, where you can find all your available games and fun activities, Checl it out!.{' '}
            <br /> <span className="opacity-95 text-[var(--lightBlue)]">Hey que tal! Esta es tu sección de juegos, donde podrás encontrar todos tus juegos disponibles y cosas divertidas. Dale un vistazo!</span>
          </p>
        </div>
      </div>
    </div>
  )
}
