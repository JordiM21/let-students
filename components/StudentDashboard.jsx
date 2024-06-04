import React, { useEffect, useState } from 'react'
import ProgressLesson from './ProgressLesson'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { AiFillPieChart, AiFillYoutube, AiFillLike } from 'react-icons/ai'
import { MdFaceRetouchingNatural, MdTaskAlt } from 'react-icons/md'
import { FcCalendar } from 'react-icons/fc'
import Schedule from './Schedule'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import YourProfile from './YourProfile'
import student from '@/public/animations/student.json'
import CtaAnimationPage from './CtaAnimationPage'
import ExternalApps from './ExternalApps'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { PiGameControllerFill, PiMagicWandFill } from 'react-icons/pi'
import { GiBrain, GiGamepadCross } from 'react-icons/gi'
import { FaUserEdit } from 'react-icons/fa'
import { FaTrophy } from 'react-icons/fa'
import { PiPhoneCallFill } from 'react-icons/pi'
import { FaTasks } from 'react-icons/fa'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import ReactPlayer from 'react-player'
import Link from 'next/link'
import bg from '@/public/bg-square.png'

export default function StudentDashboard({
  id,
  wordsGameProgress,
  setAppNotif,
  appNotif,
  level,
  likedVideos,
  tutor,
  schedule,
  progressB,
  progressI,
  progressA,
  count,
}) {
  const router = useRouter()

  const firstThreeLikedVideos = likedVideos.slice(0, 3)

  const [meetingRoom, setMeetingRoom] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(intervalId)
  }, []) // Run only once on mount

  const dayOfWeek = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(currentDate)
  const dayOfMonth = currentDate.getDate()

  const currentMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(currentDate)

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 700)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className="my-7 ">
      <div
        onClick={() => setMeetingRoom(true)}
        className="flex bg-green-500 px-2 py-1 sm:px-3 absolute top-1 left-1 md:left-16 cursor-pointer hover:opacity-80 rounded-full w-[50px] sm:w-[150px]   justify-center sm:justify-between items-center "
      >
        {/* <YourProfile char={tutor.profileImg} size={'super-small'} /> */}
        <p className={`hidden md:block text-white text-lg`}>Call Tutor</p>
        <BsFillCameraVideoFill fill="white" size={20} />
      </div>
      {meetingRoom == true && (
        <CtaAnimationPage
          title={'Conéctate con tu tutor personal y resuelve todas tus dudas!'}
          subTitle={`Recuerda solo entrar en los horarios establecidos con tu tutor. Este botón te llevará directamente a su sala de reuniones en WhereBy`}
          animation={student}
          cta={'Entrar a la Reunión'}
          btn="link"
          link={tutor.urlMeet}
          setMeetingRoom={setMeetingRoom}
          bg="green"
        />
      )}
      <section className="mx-4 max-w-5xl md:mx-auto my-4 flex justify-between gap-1 md:gap-2">
        <div className="bg-[var(--blueDarkbg)] h-36 lg:h-56 w-[70%] rounded-lg flex items-start justify-around">
          <div className=" flex items-center flex-col p-2 md:p-4">
            <p className="md:text-2xl text-[var(--yellowElectric)]">{dayOfWeek}</p>
            <p className="text-6xl md:text-8xl lg:text-[10rem] text-[var(--lightBlue)]">{dayOfMonth}</p>
          </div>
          <div className="p-2 w-11/12">
            <div className="bg-[var(--bluebg)] h-[7.8rem] lg:h-[12rem] w-full rounded-lg flex flex-col-reverse items-center gap-2 pb-2">
              <button
                onClick={() => router.push('/Activities')}
                className="bg-[var(--yellowElectric)] flex justify-center items-center gap-2 rounded-md text-[var(--blueSuperDark)] w-11/12 p-2.5 lg:p-4 lg:mt-2 hover:opacity-80 active:scale-95"
              >
                <p className="text-center whitespace-nowrap">My Activities</p>
                <FaTasks className="text-xl text-center -rotate-180 text-[var(--blueSuperDark)]" />
              </button>
              <div className="bg-[var(--blueSuperDark)] opacity-40 rounded-md px-3 lg:py-3 text-[var(--lightBlue)] w-11/12">
                {count} Pending Tasks
              </div>
              <div className="bg-[var(--blueSuperDark)] rounded-md px-3 lg:py-3 text-[var(--lightBlue)] w-11/12">
                {currentMonth}
              </div>
            </div>
          </div>
        </div>
        <div className=" h-36 lg:h-56 bg-[var(--blueDarkbg)] group cursor-pointer relative w-[28%] overflow-hidden rounded-lg">
        <Link href={"https://sso.prodigygame.com/game/login?rid=6d9c384f-52f8-4b96-adcb-4378e942b743"} target='_blank'>
          <div className='absolute bg-[var(--blueSuperDark)] md:text-3xl font-black w-full z-30 text-center p-2 bottom-0 text-white'>Play</div>
          <Image src={bg} className="w-full object-cover absolute top-0 sm:-top-8 group-hover:scale-110" />
        </Link>
        </div>
      </section>
      {/* Call Tutor section  */}
      <section className="mx-4 max-w-5xl md:mx-auto my-4 flex gap-4">
        <div className="bg-[var(--blueDarkbg)] relative h-36 lg:h-56 w-1/3 rounded-lg flex flex-col justify-between pt-2 items-center">
          {isSmallScreen ? (
            <YourProfile char={tutor.profileImg} size={'small'} />
          ) : (
            <YourProfile char={tutor.profileImg} size={'big'} />
          )}
          <p className="absolute bg-[var(--blueSuperDark)] text-[var(--lightBlue)] px-3 rounded-md text-sm lg:text-lg right-2 ">
            {tutor.firstName}
          </p>
          <button
            onClick={() => setMeetingRoom(true)}
            className="bg-[var(--yellowElectric)] lg:absolute lg:bottom-0 mb-2 max-lg:hover:opacity-70 lg:hover:shadow-xl shadow-black active:scale-95 w-11/12 rounded-md h-10 flex gap-2 items-center justify-center"
          >
            <p className="md:text-lg text-center">Call</p>
            <PiPhoneCallFill className="text-xl text-center -rotate-180 text-[var(--blueSuperDark)]" />
          </button>
        </div>
        <div className="bg-[var(--blueDarkbg)] h-36 lg:h-56 w-[70%] rounded-lg p-3">
          {/* // schedule.day, topic and time */}
          <p className="text-[var(--lightBlue)] text-2xl">My Calendar</p>
          <div className="flex gap-2 py-2">
            {/* MONDAY */}
            <div
              className={`w-1/6 h-16 lg:h-36 overflow-hidden rounded-md ${
                schedule.some((item) => item.day === 'Monday')
                  ? 'bg-[var(--yellowElectric)]'
                  : 'bg-[var(--blueSuperDark)] opacity-60'
              }`}
            >
              <p
                className={`text-center text-xs lg:text-lg ${
                  schedule.some((item) => item.day === 'Monday')
                    ? 'text-[var(--blueSuperDark)]'
                    : 'text-[var(--lightBlue)]'
                }`}
              >
                Mon
                <br />
                {schedule.find((item) => item.day === 'Monday') && (
                  <div className="bg-[var(--blueSuperDark)] rounded-sm text-[var(--lightBlue)] mt-4 p-1">
                    {schedule.find((item) => item.day === 'Monday').time}
                  </div>
                )}
              </p>
            </div>
            {/* TUESDAY */}
            <div
              className={`w-1/6 overflow-hidden h-16 lg:h-36 rounded-md ${
                schedule.some((item) => item.day === 'Tuesday')
                  ? 'bg-[var(--yellowElectric)]'
                  : 'bg-[var(--blueSuperDark)] opacity-60'
              }`}
            >
              <p
                className={`text-center text-xs lg:text-lg ${
                  schedule.some((item) => item.day === 'Tuesday')
                    ? 'text-[var(--blueSuperDark)]'
                    : 'text-[var(--lightBlue)]'
                }`}
              >
                Tue
                <br />
                {schedule.find((item) => item.day === 'Tuesday') && (
                  <div className="bg-[var(--blueSuperDark)] rounded-sm text-[var(--lightBlue)] mt-4 p-1">
                    {schedule.find((item) => item.day === 'Tuesday').time}
                  </div>
                )}
              </p>
            </div>

            <div
              className={`w-1/6 overflow-hidden h-16 lg:h-36 rounded-md ${
                schedule.some((item) => item.day === 'Wednesday')
                  ? 'bg-[var(--yellowElectric)]'
                  : 'bg-[var(--blueSuperDark)] opacity-60'
              }`}
            >
              <p
                className={`text-center text-xs lg:text-lg ${
                  schedule.some((item) => item.day === 'Wednesday')
                    ? 'text-[var(--blueSuperDark)]'
                    : 'text-[var(--lightBlue)]'
                }`}
              >
                Wed
                <br />
                {schedule.find((item) => item.day === 'Wednesday') && (
                  <div className="bg-[var(--blueSuperDark)] rounded-sm text-[var(--lightBlue)] mt-4 p-1">
                    {schedule.find((item) => item.day === 'Wednesday').time}
                  </div>
                )}
              </p>
            </div>

            <div
              className={`w-1/6  overflow-hidden h-16 lg:h-36 rounded-md ${
                schedule.some((item) => item.day === 'Thursday')
                  ? 'bg-[var(--yellowElectric)]'
                  : 'bg-[var(--blueSuperDark)] opacity-60'
              }`}
            >
              <p
                className={`text-center text-xs lg:text-lg ${
                  schedule.some((item) => item.day === 'Thursday')
                    ? 'text-[var(--blueSuperDark)]'
                    : 'text-[var(--lightBlue)]'
                }`}
              >
                Thu
                <br />
                {schedule.find((item) => item.day === 'Thursday') && (
                  <div className="bg-[var(--blueSuperDark)] rounded-sm text-[var(--lightBlue)] mt-4 p-1">
                    {schedule.find((item) => item.day === 'Thursday').time}
                  </div>
                )}
              </p>
            </div>

            <div
              className={`w-1/6  overflow-hidden h-16 lg:h-36 rounded-md ${
                schedule.some((item) => item.day === 'Friday')
                  ? 'bg-[var(--yellowElectric)]'
                  : 'bg-[var(--blueSuperDark)] opacity-60'
              }`}
            >
              <p
                className={`text-center text-xs lg:text-lg ${
                  schedule.some((item) => item.day === 'Friday')
                    ? 'text-[var(--blueSuperDark)]'
                    : 'text-[var(--lightBlue)]'
                }`}
              >
                Fri
                <br />
                {schedule.find((item) => item.day === 'Friday') && (
                  <div className="bg-[var(--blueSuperDark)] rounded-sm text-[var(--lightBlue)] mt-4 p-1">
                    {schedule.find((item) => item.day === 'Friday').time}
                  </div>
                )}
              </p>
            </div>

            <div
              className={`w-1/6 overflow-hidden h-16 lg:h-36 rounded-md ${
                schedule.some((item) => item.day === 'Saturday')
                  ? 'bg-[var(--yellowElectric)]'
                  : 'bg-[var(--blueSuperDark)] opacity-60'
              }`}
            >
              <p
                className={`text-center text-xs lg:text-lg ${
                  schedule.some((item) => item.day === 'Saturday')
                    ? 'text-[var(--blueSuperDark)]'
                    : 'text-[var(--lightBlue)]'
                }`}
              >
                Sat
                <br />
                {schedule.find((item) => item.day === 'Saturday') && (
                  <div className="bg-[var(--blueSuperDark)] rounded-sm text-[var(--lightBlue)] mt-4 p-1">
                    {schedule.find((item) => item.day === 'Saturday').time}
                  </div>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-4 max-w-5xl md:mx-auto my-4 flex gap-4">
        <div className="bg-[var(--blueDarkbg)] h-36 lg:h-56 w-[70%] rounded-lg">
          <div className="bg-[var(--blueSuperDark)] rounded-t-lg px-2 py-1">
            <p className="text-[var(--lightBlue)] text-lg">My Progress</p>
          </div>
          <div className="lg:my-6">
            <p className="text-[var(--yellowElectric)] text-xs lg:text-2xl opacity-70 text-end pr-10 lg:pr-48">
              {level} Level
            </p>
            {level == 'Beginner' && <ProgressLesson progress={progressB} />}
            {level == 'Intermediate' && <ProgressLesson progress={progressI} />}
            {level == 'Advanced' && <ProgressLesson progress={progressA} />}
          </div>
          <div className="flex justify-center items-center mt-3">
            <button
              onClick={() => router.push(`/Niveles/${level}`)}
              className="bg-[var(--yellowElectric)] flex items-center justify-center gap-2 hover:opacity-80 active:scale-95 rounded-lg w-10/12 p-2 lg:p-5"
            >
              <p className=" text-lg text-center">Check Next Lesson</p>
              <TbPlayerTrackNextFilled className="text-2xl text-center text-[var(--blueSuperDark)]" />
            </button>
          </div>
        </div>
        <div className="bg-[var(--blueDarkbg)] h-36 lg:h-56 w-1/3 rounded-lg">
          <div className="w-full bg-[var(--blueSuperDark)] rounded-t-lg p-2 flex justify-between items-center gap-1">
            <p className="text-[var(--lightBlue)] text-xs md:text-xl">New Words</p>
            <PiMagicWandFill className="fill-[var(--lightBlue)]" />
          </div>
          <div>
            <p className="text-5xl md:text-7xl lg:text-9xl text-center text-[var(--lightBlue)] opacity-40">
              {level == 'Beginner' && progressB * 18}
              {level == 'Intermediate' && progressI * 23}
              {level == 'Advanced' && progressA * 23}
            </p>
          </div>
          {/* footer */}
          <p className="text-md lg:text-2xl text-[var(--yellowElectric)] opacity-40 text-center">{level}</p>
        </div>
      </section>
      <section className="mx-4 max-w-5xl md:mx-auto my-4 flex gap-4">
        <div className="bg-[var(--blueDarkbg)] h-36 w-full relative rounded-lg">
          <div className="w-full bg-[var(--blueSuperDark)] rounded-t-lg p-2 flex items-center gap-2">
            <p className="text-[var(--lightBlue)] lg:text-lg">My Liked Videos</p>
            <AiFillLike className="fill-[var(--lightBlue)]" />
          </div>
          <button
            onClick={() => router.push(`/Immersive`)}
            className="bg-[var(--yellowElectric)] w-20 lg:w-40 text-center rounded-md hover:opacity-80 active:scale-95 absolute lg:top-16 lg:p-5 right-2 lg:right-4 top-2"
          >
            See All
          </button>
          <div className="flex mt-0">
            {firstThreeLikedVideos.length < 1 ? (
              <p className="text-[var(--lightBlue)] opacity-50 text-center mx-auto my-4">No liked videos available</p>
            ) : (
              firstThreeLikedVideos.map((video) => (
                <div className=" hover:opacity-80 hover:scale-110 flex ease-in cursor-pointer lg:mx-16 mx-auto rounded-md my-4">
                  <div className="relative bg-gray-200 w-[80px] md:w-[120px] rounded-md overflow-hidden">
                    <div
                      onClick={() => router.push(`/immersiveActivities/${video.id}`)}
                      className="absolute inset-0 z-20 opacity-0 hover:opacity-40 transition-opacity duration-300"
                    ></div>
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      className="rounded-md"
                      url={video.url}
                      controls={true}
                      light={true}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-[var(--lightBlue)] text-2xl text-center">¿Quieres seguir aprendiendo?</h2>
        {/* <div className="flex justify-evenly my-2">
          <ReactPlayer
            width={'135px'}
            height={240}
            className="rounded-md"
            url={'https://youtube.com/shorts/NOALotm250c?si=OV5aL4dSDMfCzbbh'}
            controls={true}
            muted={false}
          />
          <ReactPlayer
            width={'135px'}
            height={240}
            className="rounded-md"
            url={'https://www.youtube.com/shorts/jF65bmvxnmE'}
            controls={true}
            muted={false}
          />
          <ReactPlayer
            width={'135px'}
            height={240}
            className="rounded-md"
            url={'https://www.youtube.com/shorts/lXO5u-2RVRw'}
            controls={true}
            muted={false}
          />
        </div> */}
      </section>
    </div>
  )
}
