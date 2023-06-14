import BackHeader from '@/components/BackHeader';
import ProgressLesson from '@/components/ProgressLesson';
import YourFlag from '@/components/YourFlag';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { ChevronRightRounded } from '@mui/icons-material';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {
  VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme
} from 'victory';

export default function Progress() {
  const [userMatched, setUserMatched] = useState({})
  const [students, setStudents] = useState([])

  const router = useRouter()

  const { user, logout } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatch = newData.find(item => item.uid == authUid);
        setUserMatched(userMatch)
        const studentsAsigned = newData.filter(item => item.asignedTutor == authUid)
        setStudents(studentsAsigned)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  const data = [
    { x: 'Beginner', y: userMatched.progressBeginner, y0: 0 },
    { x: 'Intermediate', y: userMatched.progressIntermediate, y0: 0 },
    { x: 'Advanced', y: userMatched.progressAdvanced, y0: 0 },
  ];

  const colorScale = ['rgb(10, 132, 255)', 'rgb(255, 159, 10)', 'rgb(255, 59, 48)'];

  return (
    <div className='pt-32 bg-[var(--bluebg)] h-full md:min-h-screen'>
      {
        !userMatched &&
        (
          <LoadingScreen />
        )
      }
      <BackHeader largeTitle={"Student Progress"} parentTitle={"back"} />
      <div>
        <p className='text-center text-2xl text-gray-200 py-2'>Current Level: {userMatched.level}</p>
        {
          userMatched.level == "Beginner" && (
            <ProgressLesson progress={userMatched.progressBeginner} />
          )
        }
        {
          userMatched.level == "Intermediate" && (
            <ProgressLesson progress={userMatched.progressIntermediate} />
          )
        }
        {
          userMatched.level == "Advanced" && (
            <ProgressLesson progress={userMatched.progressAdvanced} />
          )
        }
      </div>
      <div className='md:flex'>
        <div className='max-w-sm mx-auto md:fixed md:ml-20 bg-white my-4 rounded-xl'>
          <h2 className='text-lg font-bold pt-2 pl-8 text-gray-600'>Lessons Completed</h2>
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ y: [0, 20] }}
            domainPadding={20}
          >
            <VictoryBar
              data={data}
              x="x"
              y="y"
              y0="y0"
              barWidth={20}
              cornerRadius={{ top: 10, bottom: 0 }}
              style={{
                data: {
                  fill: ({ datum }) => colorScale[data.findIndex(item => item.x === datum.x)],
                },
              }}
            />
          </VictoryChart>
        </div>
        <div className='max-w-md mx-auto pb-24'>
          {
            userMatched.role == "Admin" && (
              <div className='mx-14'>
                <h1 className='text-3xl text-white font-bold text-center'>Your students</h1>
                {
                  students.map((student) => (
                    <div onClick={() => router.push(`/adminCreate/studentDetails/${student.id}`)} className='relative p-2 flex justify-start pr-16 gap-4 items-center  bg-gray-300 rounded-md my-2 max-w-md mx-auto hover:scale-105 hover:opacity-60 transition-all 1s ease-in cursor-pointer'>
                      <YourFlag country={student.country} />
                      <p className='text-center font-bold text-xl py-1 cursor-pointer'>{student.firstName}</p>
                      <div className='absolute right-16'>
                        <ChevronRightRounded />
                      </div>
                    </div>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
