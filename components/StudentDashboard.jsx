import React from 'react'
import ProgressLesson from './ProgressLesson'

export default function StudentDashboard({ firstName, level, role, progress }) {
  const learnedWords = progress * 23
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
            <button className='my-2 bg-[var(--color2)] w-full text-white font-bold text-2xl py-4 rounded-md hover:bg-[var(--color1)] transition-all 1s ease-in'>Go to my current Lesson</button>
          </div>
        </div>
      </div>
    </div>
  )
}
