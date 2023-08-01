import { collection, getDocs } from "firebase/firestore";
import { db } from '@/config/firebase';
import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import AdminDashboard from '@/components/AdminDashboard';
import StudentDashboard from '@/components/StudentDashboard';
import LoadingScreen from '@/components/LoadingScreen';
import { AiFillInfoCircle } from 'react-icons/ai';
import withUserData from '@/components/WithUserData';
import YourProfile from '@/components/YourProfile';

const Dashboard = ({ userData, tutor, allUsers }) => {
  if (!userData) {
    return <LoadingScreen />;
  }
  const { id, firstName, level, role, urlMeet, likedVideos, progressBeginner, progressIntermediate, progressAdvanced, schedule, profileImg, appNotif, activities, email } = userData

  const router = useRouter()
  const [isPending, setIsPending] = useState(false)
  const [appNoti, setAppNoti] = useState(appNotif)

  return (
    <div className='bg-[var(--bluebg)] pb-16'>
      {
        role != "Admin" && role != "Student" &&
        (
          <LoadingScreen />
        )
      }
      {
        role == "Admin" && (
          <div className='flex justify-center'>
            <div onClick={() => router.push("/Activities")} className='bg-black px-8 lg:px-20 py-2 cursor-pointer hover:bg-opacity-70 rounded-b-xl'>
              <p className='text-white text-sm'>Asign Activities</p>
            </div>
          </div>
        )
      }
      {
        role == "Student" && (
          <div className='flex justify-center'>
            <div onClick={() => router.push("/Activities")} className='bg-black relative px-8 lg:px-20 py-2 cursor-pointer hover:bg-opacity-70 rounded-b-xl'>
              <p className='text-white text-sm'>My Activities</p>
              {
                isPending && (
                  <div className='bg-black absolute -bottom-0 -right-1 rounded-full'>
                    <AiFillInfoCircle className='fill-yellow-400 text-lg' />
                  </div>
                )
              }
            </div>
          </div>
        )
      }
      <div className='flex justify-start absolute -top-0 right-1 sm:right-2 items-start pt-1'>
        <h1 className='text-center text-xs sm:text-sm md:text-md mx-1 sm:mx-4 py-2 font-bold text-gray-300'>Hi {firstName}!</h1>
        <YourProfile char={profileImg} size={"super-small"} />
      </div>
      {
        role == "Admin" &&
        (
          <AdminDashboard
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
        )
      }
      {
        role == "Student" &&
        (
          <StudentDashboard
            profileImg={profileImg}
            schedule={schedule}
            firstName={firstName}
            level={level}
            role={role}
            progressB={progressBeginner}
            progressI={progressIntermediate}
            progressA={progressAdvanced}
            likedVideos={likedVideos}
            email={email}
            tutor={tutor}
            appNotif={appNoti}
            setAppNotif={setAppNoti}
            id={id}
          />
        )
      }
    </div>
  )
}

export default withUserData(Dashboard)