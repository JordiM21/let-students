import React from 'react'
import Lottie from 'lottie-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useEffect } from 'react'
import { useState } from 'react'
import emoji from "@/public/animations/emoji.json"

export default function CtaAnimationPage({ title, setMeetingRoom, subTitle, animation, cta, bg, btn, link, test }) {
  const router = useRouter()
  const congrats = ["excellent", "well done", "amazing", "so cool", "great job", "Too Easy?", "hilarious!", "You're good!", "stellar", "incredible", "remarkable", "phenomenal", "wonderful", "impressive",
    "spectacular", "marvelous", "great job", "good work", "perfect", "top-notch", "fabulous", "beautiful",
    "tremendous", "exceptional", "first-class", "jaw-dropping", "flawless", "extraordinary", "ace", "super",
    "supreme", "breathtaking", "dazzling", "genius", "unbelievable", "mind-blowing", "stunning", "genius at work",
    "astounding", "incredible job", "unreal", "world-class", "magnificent", "top-of-the-line", "legendary",
    "splendiferous", "mind-boggling", "awe-inspiring", "champion", "formidable", "remarkable work", "bravo!",
    "way to go", "exemplary", "amazing performance", "exquisite", "perfectly executed", "stellar work",
    "kudos to you", "impeccable", "well-executed", "exceptional talent", "flawless victory", "remarkable effort",
    "outstanding performance", "job well done", "truly impressive", "standing ovation", "incredible skills",
    "captivating", "sensational", "majestic", "mind-blowing skills", "exceedingly well", "brilliantly done",
    "masterful", "fascinating", "unmatched", "distinguished", "astoundingly good", "first-rate", "prodigious",
    "amazing talent", "spectacular display", "extraordinary skill", "phenomenal effort", "stunning performance",
    "excellent craftsmanship", "awe-inspiring work", "impressive talent", "outstanding abilities",
    "impeccable performance", "excellent achievement", "stupendous job", "fantastically done", "incredible talent",
    "brilliant performance", "impressive display", "remarkable skills", "exemplary work", "flawlessly executed",
    "excellent job", "truly remarkable", "top-tier performance", "exceptional display", "masterpiece",
    "exceptionally talented", "virtuoso", "breathtakingly good", "amazing abilities", "unbelievable skills",
    "expertly done", "astounding performance", "captivating performance", "jaw-dropping skills",
    "superb performance", "astounding talent", "remarkable creativity", "unmatched talent",
    "exceptional creativity", "amazing aptitude", "outstanding show", "unbelievably good", "truly exceptional",
    "top-level talent", "unrivaled performance", "impressive abilities", "flawless execution", "excellent skills",
    "extraordinarily gifted", "first-rate talent", "stunning abilities", "incredible craftsmanship",
    "remarkable aptitude", "astonishing show", "incredibly skilled", "unparalleled performance",
    "fantastically talented", "exceptional aptitude", "remarkable artistry", "unmatched creativity",
    "impeccable abilities", "spectacularly talented", "extraordinary performance", "exceptional execution",
    "amazing performance", "wonderfully talented", "remarkable expertise", "excellent display",
    "incredibly talented", "extraordinary show", "unmatched abilities", "impeccable craftsmanship",
    "brilliant craftsmanship", "outstanding talent", "remarkable talent", "flawless performance",
    "astonishing craftsmanship", "incredible talent", "fantastically gifted", "extraordinary skills",
    "remarkable creativity", "amazing abilities", "outstanding performance", "unbelievable aptitude",
    "stunning craftsmanship", "impressive show", "exceptionally talented", "breathtaking talent",
    "remarkable skills", "astonishing performance", "impeccable execution", "fantastic job",
    "remarkable talent", "impressive aptitude", "astounding abilities", "stupendous performance",
    "extraordinarily talented", "brilliantly executed", "top-notch talent", "unbelievably skilled",
    "exceptionally gifted", "impressive craftsmanship", "truly talented", "astonishing skill",
    "masterfully executed", "outstanding craftsmanship", "excellent abilities", "incredible show",
    "fantastically skilled", "remarkable performance", "unrivaled talent", "amazing craftsmanship",
    "astonishing abilities", "stunning talent"]
  const [finalText, setFinalText] = useState('');

  useEffect(() => {
    setFinalText(getRandomCongrats());
  }, []);

  const getRandomCongrats = () => congrats[Math.floor(Math.random() * congrats.length)];

  return (
    <div className={`fixed z-50 top-0 right-0 ${test ? "bg-opacity-40 backdrop-blur-lg" : "bg-opacity-100"} flex flex-col justify-between pb-20 h-screen w-screen ${bg == "green" ? "bg-green-600" : "bg-blue-700"}`}>
      {
        test && (
          <div className='mx-auto max-w-[350px] mt-8'>
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
                  <p class="result">Your score: 8/8</p>
                  <Lottie
                    className='h-28 w-28 absolute -right-12 -bottom-10'
                    animationData={emoji} />
                </div>
                <div class="result-text-box">
                  {finalText && <div className="heading-secondary">{finalText}</div>}
                  <p class="paragraph">
                    {subTitle}
                  </p>
                </div>
                <div class="summary__cta">
                  <button onClick={() => router.push(link)} class="btn btn__continue">Next Lesson
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {
        !test && (
          <div>
            <AiFillCloseCircle onClick={() => setMeetingRoom(false)} className='text-white cursor-pointer right-2 top-2 absolute text-2xl fill-white' />
            <div className='md:mx-auto md:max-w-lg mx-8 -mb-16 mt-8'>
              <p className='text-center text-2xl text-white font-bold'>{title}</p>
            </div>
            <div className='mx-auto max-w-[350px] mt-16 mb-8'>
              <Lottie
                animationData={animation} />
            </div>
            <div className='md:mx-auto -mt-4 md:max-w-lg mx-8 '>
              <p className='text-center text-gray-300'>{subTitle}</p>
              {
                btn == "router" ? (
                  <button onClick={() => router.push(link)} className='w-full py-6 text-center bg-white text-blue-800 rounded-full mt-10 hover:opacity-80 hover:scale-95 font-bold text-xl'>{cta} </button>
                ) : (
                  <Link href={link} target='_blank'>
                    <div className={`w-full py-6 text-center bg-white rounded-full mt-8 hover:opacity-80 hover:scale-95 font-bold text-xl ${bg == "green" ? "text-green-800" : "text-blue-800"}`}  >
                      {cta}
                    </div>
                  </Link>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  )
}
