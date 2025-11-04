import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useEffect } from 'react'
import { useState } from 'react'
import emoji from "@/public/animations/emoji.json"
import dynamic from 'next/dynamic'

// Dynamically import lottie only on the client side
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function CtaAnimationPage({ title, setMeetingRoom, subTitle, animation, cta, bg, btn, link, test }) {
  const router = useRouter()
  const congrats = [
    'Good job!',
    'Well done!',
    'Great!',
    'Awesome!',
    'Super Cool!',
    'Nice work!',
    'You did it!',
    'Super Nice!',
    'Fantastic!',
    'Amazing!',
    'Excellent!',
    'Way to go!',
    'Keep it up!',
    "You're good!",
    'Perfect!',
    'Brilliant!',
    'Good one!',
  ]

  const [finalText, setFinalText] = useState('');

  useEffect(() => {
    setFinalText(getRandomCongrats());
  }, []);

  const getRandomCongrats = () => congrats[Math.floor(Math.random() * congrats.length)];

  return (
    <div
      className={`fixed z-50 top-0 right-0 ${
        test ? 'bg-opacity-40 backdrop-blur-lg' : 'bg-opacity-100'
      } flex flex-col justify-between pb-20 h-screen w-screen ${bg == 'green' ? 'bg-green-600' : 'bg-blue-700'}`}
    >
      {test && (
        <div className="mx-auto max-w-[350px] mt-8">
          <div class="results-summary-container">
            <div class="confetti">
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
              <div class="confetti-piece"></div>
            </div>
            <div class="results-summary-container__result">
              <div class="heading-tertiary">{title}</div>
              <div class="result-box relative">
                <div class="heading-primary">100%</div>
                <p class="result">Puntuación: 8/8</p>
                <Lottie className="h-28 w-28 absolute -right-12 -bottom-10" animationData={emoji} />
              </div>
              <div class="result-text-box">
                {finalText && <div className="heading-secondary">{finalText}</div>}
                <p class="paragraph">{subTitle}</p>
              </div>
              <div class="summary__cta">
                <button onClick={() => router.push(link)} className="bg-[#F17024] z-50 hover:scale-105 active:scale-95 px-12 py-4 mt-4 rounded-full text-white font-extrabold text-lg cursor-pointer uppercase">
                  {cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!test && (
        <div>
          <AiFillCloseCircle
            onClick={() => setMeetingRoom(false)}
            className="text-white cursor-pointer right-2 top-2 absolute text-2xl fill-white"
          />
          <div className="md:mx-auto md:max-w-lg mx-8 -mb-16 mt-8">
            <p className="text-center text-2xl text-white font-bold">{title}</p>
          </div>
          <div className="mx-auto max-w-[350px] mt-16 mb-8">
            <Lottie animationData={animation} />
          </div>
          <div className="md:mx-auto -mt-4 md:max-w-lg mx-8 ">
            <p className="text-center text-gray-300">{subTitle}</p>
            {btn == 'router' ? (
              <button
                onClick={() => router.push(link)}
                className="w-full py-6 text-center bg-white text-blue-800 rounded-full mt-10 hover:opacity-80 hover:scale-95 font-bold text-xl"
              >
                {cta}{' '}
              </button>
            ) : (
              <Link href={link} target="_blank">
                <div
                  className={`w-full py-6 text-center bg-white rounded-full mt-8 hover:opacity-80 hover:scale-95 font-bold text-xl ${
                    bg == 'green' ? 'text-green-800' : 'text-blue-800'
                  }`}
                >
                  {cta}
                </div>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
