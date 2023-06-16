import BackHeader from '@/components/BackHeader';
import ProgressLesson from '@/components/ProgressLesson';
import YourFlag from '@/components/YourFlag';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {
  VictoryBar, VictoryChart,
  VictoryTheme
} from 'victory';
import ReactPlayer from 'react-player'
import LoadingScreen from '@/components/LoadingScreen';

export default function Progress() {
  const [userMatched, setUserMatched] = useState({})
  const [students, setStudents] = useState([])
  const [likedVideos, setLikedVideos] = useState([])

  const router = useRouter()

  const { user, logout } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatch = newData.find(item => item.uid == authUid);
        setLikedVideos(userMatch.likedVideos?.reverse())
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
    <div className='pt-20 bg-[var(--bluebg)] h-full md:min-h-screen'>
      {
        !userMatched &&
        (
          <LoadingScreen />
        )
      }
      <BackHeader largeTitle={"Student Progress"} parentTitle={"back"} />
      <div className=' md:fixed md:ml-24'>
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
        <div className='max-w-sm mx-auto md:fixed md:ml-20 md:mt-20 bg-white my-4 rounded-xl'>
          <div className='h-[400px] opacity-0 w-[350px] bg-gray-300 absolute'></div>
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
        <div className='max-w-2xl md:w-[40%] mx-auto md:ml-[60%] lg:ml-[50%] pb-24'>
          {
            userMatched.role == "Student" && (
              <div>
                <h1 className='text-3xl text-white font-bold text-center'>Your <span className='text-green-500'>Liked</span> Videos</h1>
                <p className='text-gray-300 w-[90%] mx-auto text-center'>Acá encuentras todos los videos que has <span className='text-green-500'>dado like</span>, prueba seleccionando cualquiera para reproducirlo. </p>
                {
                  likedVideos.map((video) => (
                    <div className='my-6'>
                      <ReactPlayer
                        width={"90%"}
                        height={220}
                        className="mx-auto rounded-md"
                        url={video}
                        controls={true}
                        light={false}
                      />
                    </div>
                  ))
                }
              </div>
            )
          }
          {
            userMatched.role == "Admin" && (
              <div className='mx-8 md:mx-1'>
                <h1 className='text-3xl text-white font-bold text-center'>Your students</h1>
                {
                  students.map((student) => (
                    <div className='relative p-4 bg-gray-300 rounded-md my-4 w-full mx-auto transition-all 1s ease-in cursor-pointer'>
                      <div className='flex justify-start gap-4 items-center'>
                        <YourFlag country={student.country} />
                        <p className='text-center font-bold text-xl py-1 cursor-pointer'>{student.firstName} {student.lastName}</p>
                        <div className='absolute right-4'>
                          <p className='text-sm text-gray-600 font-bold'>({student.level})</p>
                        </div>
                      </div>
                      <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center rounded-t-xl mt-4 justify-between py-2 px-4'>
                        <p className='text-white'>Email</p>
                        <div className='flex items-center justify-center'>
                          <p className='text-gray-400 opacity-80'>{student.email}</p>
                        </div>
                      </div>
                      <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center justify-between py-2 px-4'>
                        <p className='text-white'>Phone</p>
                        <div className='flex items-center justify-center'>
                          <p className='text-gray-400 opacity-80'>{student.phone}</p>
                        </div>
                      </div>
                      <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 w-full flex items-center rounded-b-xl mb-4 justify-between py-2 px-4'>
                        <p className='text-white'>Age</p>
                        <div className='flex items-center justify-center'>
                          <p className='text-gray-400 opacity-80'>{student.age}</p>
                        </div>
                      </div>
                      <div className=''>
                        <p>Beginner: </p>
                        <ProgressLesson progress={student.progressBeginner} />
                      </div>
                      <div className=''>
                        <p>Intermediate: </p>
                        <ProgressLesson progress={student.progressIntermediate} />
                      </div>
                      <div className=''>
                        <p>Advanced: </p>
                        <ProgressLesson progress={student.progressAdvanced} />
                      </div>
                      <button onClick={() => router.push(`StudentDetail/${student.id}`)} className='w-full py-4 rounded-full my-4 bg-[var(--blueDarkbg)] hover:bg-white border-4 hover:text-[var(--blueDarkbg)] border-[var(--blueDarkbg)] text-white'>
                        MODIFY
                      </button>
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
