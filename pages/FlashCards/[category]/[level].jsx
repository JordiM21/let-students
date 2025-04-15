import BackHeader from '@/components/BackHeader'
import LoadingScreen from '@/components/LoadingScreen'
import WithFlashGame from '@/components/WithFlashGame'
import withUserData from '@/components/WithUserData'
import { db } from '@/config/firebase'
import { updateDoc, doc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import trophy from '@/public/trofeos/nobg-trophy.png'
import handTrophy from '@/public/trofeos/hand-trophy.png'
import lose from '@/public/trofeos/lose.png'
import prize from '@/public/trofeos/prize.png'

import Image from 'next/image'

const FlashLevel = ({ userData, data }) => {
  const correctSound = new Audio('/audio/sfx/right.mp3')
  const wrongSound = new Audio('/audio/sfx/wrong.mp3')
  const newRecord = new Audio('/audio/sfx/new-record.mp3')
  const loseRecord = new Audio('/audio/sfx/mario-victory.mp3')
  const ps5 = new Audio('/audio/sfx/ps5.mp3')
  const ps5Back = new Audio('/audio/sfx/ps5-back.mp3')


  const router = useRouter()
  const { category, level } = router.query

  const [isTransitioning, setIsTransitioning] = useState(false)
  const [highlightCorrect, setHighlightCorrect] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [feedback, setFeedback] = useState(null) // 'correct' | 'wrong' | null
  const [isDisabled, setIsDisabled] = useState(false)
  const [isNewRecord, setIsNewRecord] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [totalWords, setTotalWords] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [time, setTime] = useState(0)
  const [timerInterval, setTimerInterval] = useState(null)
  const [shuffledWords, setShuffledWords] = useState([])
  const [currentWord, setCurrentWord] = useState(null)
  const [options, setOptions] = useState([])

  const rawWords = React.useMemo(() => {
    if (data.length === 0 || !category || !level) return []
    return data[0][category]?.levels[level] || []
  }, [data, category, level])

  useEffect(() => {
    if (rawWords.length > 0) {
      const shuffled = [...rawWords].sort(() => Math.random() - 0.5)
      setShuffledWords(shuffled)
      setTotalWords(shuffled.length)
      console.log(
        '🔀 shuffledWords:',
        shuffled.map((item, i) => `#${i + 1}: ${item.word}`)
      )
      console.log('🧮 Total:', shuffled.length)
    }
  }, [rawWords])

  useEffect(() => {
    if (hasStarted) {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
      setTimerInterval(interval)

      return () => clearInterval(interval)
    }
  }, [hasStarted])

  useEffect(() => {
    if (!currentWord && hasStarted) {
      clearInterval(timerInterval)
    }
  }, [currentWord])

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  const originalWords = rawWords.map((word) => ({ ...word })) // Clone the original array to avoid mutation

  useEffect(() => {
    if (shuffledWords.length > 0) {
      const [first, ...rest] = shuffledWords

      // Randomly select 3 incorrect answers from the full originalWords array (not shuffledWords)
      const incorrectOptions = originalWords
        .filter((item) => item.word !== first.word) // Ensure we don't pick the correct answer
        .sort(() => Math.random() - 0.5) // Shuffle the rest of the words
        .slice(0, 3) // Select the first 3 incorrect options

      // Combine the correct answer with the 3 incorrect answers
      const allOptions = [
        ...incorrectOptions.map((item) => item.word), // Store only the words
        first.word, // Store the correct answer word
      ].sort(() => Math.random() - 0.5) // Shuffle all options to randomize their order

      setOptions(allOptions) // This stores the words in the options
      setCurrentWord(first) // Set the current word to display
    } else {
      setCurrentWord(null) // No more words, end the game
    }
  }, [shuffledWords]) // This useEffect depends on shuffledWords, which updates every time the words are shuffled

  useEffect(() => {
    if (!currentWord && hasStarted && totalWords > 0) {
      const previousTime = userData?.FlashProgress?.[category]?.[level]
      const currentTime = time

      if (!previousTime || currentTime < previousTime) {
        setIsNewRecord(true)

        const userRef = doc(db, 'users', userData.id)
        updateDoc(userRef, {
          [`FlashProgress.${category}.${level}`]: currentTime,
        })
          .then(() => {
            console.log('🏆 New record saved to Firestore!')
            // 🔥 Trigger sound + animation here
            newRecord.play()
          })
          .catch((err) => console.error('Error updating record:', err))
      } else {
        loseRecord.play()
      }
    }
  }, [currentWord, hasStarted])

  const handleAnswer = (selected) => {
    if (!currentWord || isDisabled) return

    setIsDisabled(true)
    setSelectedAnswer(selected)

    const isCorrect = selected === currentWord.word
    const remaining = shuffledWords.slice(1)
    if (typeof window !== 'undefined' && remaining[0]?.img) {
      const img = new window.Image()
      img.src = remaining[0].img
    }

    if (isCorrect) {
      correctSound.play()
      setFeedback('correct')
      setHighlightCorrect(currentWord.word)
      setIsTransitioning(true)

      setTimeout(() => {
        setShuffledWords(remaining)
        if (currentIndex !== totalWords) {
          setCurrentIndex((prev) => prev + 1)
        }
        setSelectedAnswer(null)
        setFeedback(null)
        setIsDisabled(false)
        setHighlightCorrect(null)
        setIsTransitioning(false)
      }, 500)
    } else {
      wrongSound.play()
      setFeedback('wrong')
      setHighlightCorrect(currentWord.word)

      setTimeout(() => {
        setShuffledWords([...remaining, currentWord])
        setSelectedAnswer(null)
        setFeedback(null)
        setIsDisabled(false)
        setHighlightCorrect(null)
      }, 1000)
    }
    console.log(shuffledWords)
  }

  if (!router.isReady || !userData) return <LoadingScreen />

  const startGame = () => {
    setHasStarted(true)
    ps5.play()
  }

  const resetGame = () => {
    ps5Back.play()
    const reshuffled = [...rawWords].sort(() => Math.random() - 0.5)
    setShuffledWords(reshuffled)
    setTotalWords(reshuffled.length)
    setCurrentIndex(0)
    setCurrentWord(null)
    setSelectedAnswer(null)
    setFeedback(null)
    setIsDisabled(false)
    setIsNewRecord(false)
    setTime(0)
    setHighlightCorrect(null)
    setOptions([])
    setHasStarted(false)
    clearInterval(timerInterval)
  }

  return (
    <div className="bg-[var(--bluebg)] min-h-screen pt-20 text-white">
      <BackHeader largeTitle={level + ' level'} parentTitle="Back" />

      {/* Progress Bar */}
      <div className="w-full mx-auto max-w-sm my-2 sm:max-w-md lg:max-w-xl h-5 bg-white rounded-full overflow-hidden shadow-md border">
        <div
          className="h-full bg-green-500 transition-all 0.4s ease-out duration-300"
          style={{ width: `${(currentIndex / totalWords) * 100}%` }}
        />
      </div>

      {/* Pre-Start Screen */}
      {!hasStarted && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center text-white px-4 transition-opacity duration-500 ease-out opacity-100">
          <div className="bg-[var(--bluebg)] p-8 rounded-lg flex flex-col items-center justify-center">
            <h2 className="text-2xl text-white text-center max-w-md mb-6">
              Aprende palabras nuevas. <br />
              Recuerda las que ya sabías <br />
              Responde lo más rápido posible. <br />
            </h2>
            <Image src={handTrophy} className="w-40 p-2" />
            <button onClick={() => startGame()} className="btn-shine !bg-[var(--color3)] !py-4 !px-6">
              <span>Comenzar</span>
            </button>
          </div>
        </div>
      )}

      {/* In-Progress Screen */}
      {hasStarted && (
        <div>
          <div className="absolute top-28 md:top-20 left-4 md:left-20 bg-black/40 px-3 py-1 rounded text-white text-lg font-mono">
            📚 {currentIndex} / {totalWords}
          </div>
          <div className="absolute top-28 md:top-20 right-4 bg-black/40 px-3 py-1 rounded text-lg font-mono">
            <div className="text-white">⏱ {formatTime(time)}</div>
            <div>
              <button
                onClick={resetGame}
                className="absolute top-12 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final Screen */}
      {!currentWord ? (
        <div className="text-center mt-20">
          <p className="text-4xl text-white">🎉 ¡Completado! 😎</p>
          <button
            onClick={resetGame}
            className="bg-blue-500 text-white px-4 py-2 my-4 rounded hover:bg-blue-600 transition mt-4"
          >
            Try Again
          </button>
          <>
            {isNewRecord ? (
              <div>
                <p className="text-xl mt-2 text-green-300">⏰Nuevo Record: {formatTime(time)}⌛</p>
                <Image src={prize} alt="Celebration!" className="animate-bounce mt-20 w-52 md:w-72 mx-auto" />
                <p className="pt-36 md:pt-40 text-white">Muy bien hecho, ¡Sigue así!</p>
              </div>
            ) : (
              <div>
                <p className="text-sm text-red-300 mt-1">
                  Tu Mejor Tiempo: {formatTime(userData?.FlashProgress?.[category]?.[level])}
                </p>
                <Image src={lose} alt="Lose!" className="animate-bounce mt-20 w-56 md:w-72 mx-auto" />
                <p className="pt-36 md:pt-40 text-white">Lo hiciste muy bien, pero puedes hacerlo mejor!</p>
              </div>
            )}
          </>
        </div>
      ) : (
        <div className="mx-auto max-w-5xl text-center">
          <img
            key={currentWord.img}
            src={currentWord.img}
            alt="Guess"
            className="w-40 sm:w-56 md:w-72 lg:w-96 mx-auto my-8 rounded"
          />
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.currentTarget.blur() // <-- removes focus right after click
                  handleAnswer(option)
                }}
                disabled={isDisabled}
                className={`btn-shine
      ${isDisabled ? 'cursor-not-allowed opacity-70 no-hover' : 'hover:bg-[var(--color3)]'}
      ${
        selectedAnswer === option
          ? feedback === 'correct'
            ? '!bg-green-400'
            : feedback === 'wrong'
            ? '!bg-red-400 animate-shake'
            : ''
          : highlightCorrect === option
          ? '!bg-green-400'
          : 'bg-[var(--color2)]'
      }`}
              >
                <span>{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default withUserData(WithFlashGame(FlashLevel))
