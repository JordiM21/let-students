import BackHeader from '@/components/BackHeader';
import ProgressLesson from '@/components/ProgressLesson';
import YourFlag from '@/components/YourFlag';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {
  VictoryBar, VictoryChart,
  VictoryTheme
} from 'victory';
import ReactPlayer from 'react-player'
import LoadingScreen from '@/components/LoadingScreen';
import { BsQuestionCircle } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import Schedule from '@/components/Schedule';

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

  const [question, setQuestion] = useState(false)

  const updateUnitInTrouble = async (id) => {
    const nameRef = doc(db, "users", id);
    await updateDoc(nameRef, {
      unitInTrouble: [],
    });
    toast.success("Well Done! Resolviste todas las dudas de tu estudiante")
    setTimeout(() => {
      router.reload()
    }, 2000)
  }

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
        <div className='flex items-center justify-center gap-2'>
          <p className='text-center text-2xl text-gray-200 py-2'>Current Level: {userMatched.level}</p>
          <div onClick={() => setQuestion(!question)} className='bg-gray-200 rounded-full cursor-pointer'>
            <BsQuestionCircle className='w-5 h-5' />
          </div>
        </div>
        {
          question && (
            <div className='bg-gray-200 backdrop-blur-sm bg-opacity-60 p-6 shadow-gray-500 z-50 rounded-md shadow-lg max-w-[250px] absolute right-0'>
              <AiFillCloseCircle className='absolute top-2 cursor-pointer right-2 w-6 h-6' onClick={() => setQuestion(!question)} />
              <p>En este cuadro encuentras tus estadisticas por nivel, a medida que completes units y sus tests se actualizara tu progreso al igual que le notificaremos a tu profesor. <br />Por cierto, tambien encuentras los videos que te han gustado para verlos mas facilmente </p>
            </div>
          )
        }
        {
          userMatched.level == "Beginner" && userMatched.role == "Student" && (
            <ProgressLesson progress={userMatched.progressBeginner} />
          )
        }
        {
          userMatched.level == "Intermediate" && userMatched.role == "Student" && (
            <ProgressLesson progress={userMatched.progressIntermediate} />
          )
        }
        {
          userMatched.level == "Advanced" && userMatched.role == "Student" && (
            <ProgressLesson progress={userMatched.progressAdvanced} />
          )
        }
      </div>
      <div className='md:flex'>
        <div className='max-w-sm mx-auto md:fixed md:ml-20 md:mt-20 bg-white my-4 rounded-xl'>
          <div className='h-[400px] max-w-full z-30 absolute bg-transparent'></div>
          <h2 className='text-lg font-bold pt-2 pl-8 text-gray-600'>Lessons Completed</h2>
          <VictoryChart
            theme={VictoryTheme.material}
            domain={{ y: [0, 25] }}
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
                    <div className=' hover:opacity-70 transition-all 1s ease-in cursor-pointer mx-auto rounded-md relative my-4'>
                      <div onClick={() => router.push(`/immersiveActivities/${video.id}`)} className='bg-gray-200 h-[220px] absolute z-20 w-[100%] opacity-0'></div>
                      <ReactPlayer
                        width={"90%"}
                        height={220}
                        className="mx-auto rounded-md"
                        url={video.url}
                        controls={true}
                        light={true}
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
                    <>
                      {
                        student.unitInTrouble?.length > 0 && (
                          <div className='bg-yellow-300 py-4 -mb-2 px-4 rounded-lg'>
                            <p>{student.firstName} ha solicitado tu ayuda!</p>
                            <p className='text-xs text-gray-800'>Ayudale en la leccion {student.unitInTrouble[0]} del nivel {student.level} </p>
                            <div className='flex items-center justify-around py-2'>
                              <button onClick={() => router.push(`/Niveles/${student.level}/${student.unitInTrouble[0]}`)} className='py-2 border-[var(--color2)] border-4 rounded-full px-3'>
                                <p>Ir a la leccion</p>
                              </button>
                              <button onClick={() => updateUnitInTrouble(student.id)} className='py-2 border-4 border-[var(--color2)] bg-[var(--color2)] rounded-full px-3'>
                                <p className='text-white'>Marcar como completa</p>
                              </button>
                            </div>
                          </div>
                        )
                      }
                      <div className='relative p-4 bg-gray-300 rounded-md mb-4 w-full mx-auto transition-all 1s ease-in cursor-pointer'>
                        {
                          student.unitInTrouble?.length > 0 && (
                            <div class="loader">
                              <div class="circle circle-1"></div>
                              <div class="circle circle-2"></div>
                              <div class="circle circle-3"></div>
                              <div class="circle circle-4"></div>
                            </div>
                          )
                        }
                        <div className='flex justify-start gap-4 items-center'>
                          <YourFlag country={student.country} />
                          <p className='text-center font-bold text-xl py-1 cursor-pointer'>{student.firstName} {student.lastName}</p>
                          <div className='absolute right-4'>
                            <p className='text-sm text-gray-600 font-bold'>({student.level})</p>
                          </div>
                        </div>
                        <div className='bg-[var(--blueDarkbg)] cursor-pointer hover:bg-slate-800 overflow-hidden w-full rounded-t-xl mt-4 flex gap-8 items-center justify-between py-2 px-4'>
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
                        {
                          student.schedule && (
                            <Schedule schedule={student.schedule} />
                          )
                        }
                        <button onClick={() => router.push(`StudentDetail/${student.id}`)} className='w-full py-4 rounded-full my-4 bg-[var(--blueDarkbg)] hover:bg-white border-4 hover:text-[var(--blueDarkbg)] border-[var(--blueDarkbg)] text-white'>
                          MODIFY
                        </button>
                      </div>
                    </>
                  ))
                }
              </div>
            )
          }
        </div>
      </div>
    </div >
  )
}
