import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AdminDashboard from '@/components/AdminDashboard'
import StudentDashboard from '@/components/StudentDashboard'
import LoadingScreen from '@/components/LoadingScreen'
import withUserData from '@/components/WithUserData'
import YourProfile from '@/components/YourProfile'

const Dashboard = ({ userData, tutor, allUsers }) => {
  if (!userData) {
    return <LoadingScreen />
  }
  const {
    id,
    wordsGameProgress,
    FlashProgress,
    firstName,
    parentName,
    level,
    role,
    urlMeet,
    likedVideos,
    progressBeginner,
    progressIntermediate,
    progressAdvanced,
    schedule,
    profileImg,
    exams,
    tutorQuote,
    quoteDate,
    email,
    classDojo,
    startDate,
    dateVariable,
  } = userData

  const router = useRouter()

  return (
    <div className="bg-[var(--bluebg)] pb-16">
      {role != 'Admin' && role != 'Student' && <LoadingScreen />}
      {role == 'Admin' && (
        <div className="flex justify-center">
          <div
            onClick={() => router.push('/Exams')}
            className="bg-black px-8 lg:px-20 py-2 cursor-pointer hover:bg-opacity-70 rounded-b-xl"
          >
            <p className="text-white text-sm">Asigna Exámenes</p>
          </div>
        </div>
      )}

      {role == 'Admin' && (
        <AdminDashboard
          wordsGameProgress={wordsGameProgress}
          profileImg={profileImg}
          firstName={firstName}
          level={level}
          role={role}
          likedVideos={likedVideos}
          email={email}
          id={id}
          url={urlMeet}
          allUsers={allUsers}
        />
      )}
      {role == 'Student' && (
        <StudentDashboard
          exams={exams}
          tutorQuote={tutorQuote}
          quoteDate={quoteDate}
          wordsGameProgress={wordsGameProgress}
          profileImg={profileImg}
          schedule={schedule}
          firstName={firstName}
          parentName={parentName}
          flashProgress={FlashProgress}
          level={level}
          role={role}
          progressB={progressBeginner}
          progressI={progressIntermediate}
          progressA={progressAdvanced}
          likedVideos={likedVideos}
          email={email}
          tutor={tutor}
          id={id}
          classDojo={classDojo}
          startDate={startDate}
          dateVariable={dateVariable}
        />
      )}
    </div>
  )
}

export default withUserData(Dashboard)
