import BackHeader from '@/components/BackHeader';
import ProgressLesson from '@/components/ProgressLesson';
import YourFlag from '@/components/YourFlag';
import { db } from '@/config/firebase'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import {
  VictoryBar, VictoryChart,
  VictoryTheme
} from 'victory';
import ReactPlayer from 'react-player'
import LoadingScreen from '@/components/LoadingScreen';
import { toast } from 'react-toastify';
import Schedule from '@/components/Schedule';
import SendNotifScreen from '@/components/SendNotifScreen';
import withUserData from '@/components/WithUserData';
import { PiGameControllerFill } from 'react-icons/pi';
import { BsTrashFill } from 'react-icons/bs';

const Progress = ({ allUsers, likedVideos, userData, setSubmit, submit }) => {
  if (!userData) {
    return <LoadingScreen />;
  }

  const [userMatched, setUserMatched] = useState(userData)
  const [students, setStudents] = useState(allUsers)

  const router = useRouter()

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

  const deleteActivity = async (e, video) => {
    e.preventDefault();
    const { id } = userMatched
    try {
      const userRef = doc(db, "users", id);
      const updatedActivities = userMatched.likedVideos.filter(act => act !== video);
      await updateDoc(userRef, { likedVideos: updatedActivities });
      toast.success("¡Este video ya no te gusta!");
      setSubmit(!submit);
    } catch (error) {
      console.error('Error al eliminar la actividad:', error);
    }
  };

  return (
    <div className='pt-20 bg-[var(--bluebg)] h-full md:min-h-screen'>
      <BackHeader largeTitle={"Student Progress"} parentTitle={"Back"} />
      <div className=' md:fixed md:ml-24'>
        <div className='flex items-center justify-center gap-2'>
          <p className='text-center text-2xl text-gray-200 py-2'>Current Level: {userMatched.level}</p>
        </div>
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
        <div className='max-w-lg md:w-[40%] mx-auto md:ml-[60%] lg:ml-[50%] pb-24'>
          {
            userMatched.role == "Student" && (
              <div>
                <h1 className='text-3xl text-white font-bold text-center'>Your <span className='text-green-500'>Liked</span> Videos</h1>
                <p className='text-gray-300 w-[90%] mx-auto text-center'>Acá encuentras todos los videos que has <span className='text-green-500'>dado like</span>, prueba seleccionando cualquiera para reproducirlo. </p>
                {
                  likedVideos.map((video) => (
                    <div className=' hover:opacity-80 transition-all 1s ease-in cursor-pointer mx-auto rounded-md relative my-4'>
                      <div onClick={() => router.push(`/immersiveActivities/${video.id}`)} className='bg-gray-200 h-[220px] absolute z-20 w-[100%] opacity-0'></div>
                      <ReactPlayer
                        width={"90%"}
                        height={220}
                        className="mx-auto rounded-md"
                        url={video.url}
                        controls={true}
                        light={true}
                      />
                      <button className='bg-red-500 hover:scale-110 p-2 rounded-md absolute right-6 bottom-0 z-30' onClick={(e) => deleteActivity(e, video)}>
                        <BsTrashFill className='text-xl fill-white' />
                      </button>
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
                        <div className='flex relative justify-start gap-4 pb-4 items-center'>
                          <YourFlag country={student.country} />
                          <p className='text-center font-bold text-xl py-1 cursor-pointer'>{student.firstName} {student.lastName}</p>
                          <div className='absolute right-4'>
                            <p className='text-sm text-gray-600 font-bold'>({student.level})</p>
                          </div>
                        </div>
                        <a href={"https://let-students.vercel.app/ActivitiesDetail/" + student.id} target='_blank'>
                          <button class="learn-more">
                            <span class="circle bg-[var(--color3)]" aria-hidden="true">
                              <span class="icon arrow"></span>
                            </span>
                            <span class="button-text text-[var(--color3)]">Go to the Activities</span>
                          </button>
                        </a>
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
                        <SendNotifScreen
                          student={student.firstName}
                          id={student.id}
                          country={student.country}
                        />
                        <div>
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
                        <div className='my-2 flex flex-wrap'>
                          <PiGameControllerFill className=" text-3xl items-center gap-2 fill-gray-500" />
                          {student.wordsGameProgress?.map((game) => (
                            <span className='bg-gray-500 px-2 py-1 m-1 rounded-lg'>
                              {game}
                            </span>
                          ))}
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
export default withUserData(Progress) 