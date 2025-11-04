import React, { useState } from 'react'
import YourProfile from './YourProfile'
import { AiFillCheckCircle, AiFillInfoCircle } from 'react-icons/ai'
import BackHeader from './BackHeader'
import Link from 'next/link'
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaMagic } from 'react-icons/fa'
import { FcFinePrint } from 'react-icons/fc'

export default function StudentActivities({ tutor, userMatched }) {
  const sortedExams = [...(userMatched.exams || [])].sort((a, b) => {
    const dateA = new Date(a.assignedDay || 0)
    const dateB = new Date(b.assignedDay || 0)
    return dateB - dateA
  })

  const [openCards, setOpenCards] = useState({}) // object to track open states per card

  const toggleDescription = (id) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const getGradeStyles = (grade) => {
    switch (grade) {
      case 'A+':
        return 'bg-yellow-500 text-yellow-900 border-yellow-400' // Gold
      case 'A':
        return 'bg-yellow-600 text-yellow-900 border-yellow-700' //Gold
      case 'B':
        return 'bg-gray-500 text-gray-800 border-gray-400' // Silver
      case 'B+':
        return 'bg-gray-300 text-gray-800 border-gray-500' // Silver
      case 'C':
        return 'bg-orange-900 text-orange-400 border-orange-600' // Bronze
      case 'D':
        return 'bg-red-700 text-red-300 border-red-500' // NA
      default:
        return 'bg-gray-200 text-gray-600 border-gray-300'
    }
  }

  return (
    <div className="mx-8 pt-20 max-w-lg md:mx-auto">
      <BackHeader largeTitle={'Historial de Exámenes'} parentTitle={'Volver'} />
      <div className="px-6 py-2 rounded-xl bg-black">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <YourProfile char={tutor.profileImg} size={'super-small'} />
            <p className="text-gray-400">{tutor.firstName} (English)</p>
          </div>
          <p className="text-white">Tutor Personal</p>
        </div>
        <div className="my-2">
          <p className="text-gray-600 text-sm">
            En esta página encontrarás los exámenes realizados por tu hijo/a con su califiación por cada mes de estudio
          </p>
        </div>
      </div>
      <div className="my-8">
        <div className="flex items-center justify-start gap-2">
          <FcFinePrint size={'25px'} />
          <h2 className="text-white">Historial de Exámenes</h2>
        </div>
        {userMatched.exams.length < 1 && (
          <p className="text-center text-gray-500 opacity-60 my-10 text-sm">Aún no tienes actividades</p>
        )}
        {sortedExams.map(
          (exam) =>
            exam.status === 'done' && (
              <div
                key={exam.assignedDay}
                className="bg-gray-950 mb-6 mt-2 hover:scale-[1.02] transition-transform cursor-pointer rounded-2xl shadow-lg overflow-hidden relative"
              >
                {/* Grade badge */}
                <div
                  className={`absolute top-3 left-3 w-10 h-10 flex items-center justify-center rounded-full border-2 font-bold text-lg leading-none ${getGradeStyles(
                    exam.grade
                  )}`}
                >
                  {exam.grade}
                </div>

                {/* Completed label */}
                <div className="bg-green-500 text-white text-xs font-semibold rounded-md px-2 py-1 absolute top-3 right-3 flex items-center gap-1">
                  <AiFillCheckCircle size={14} />
                  <span>Completado</span>
                </div>

                {/* Background-image version */}
                {exam.link && exam.link.endsWith('.png') && (
                  <div
                    className="w-full h-48 bg-center bg-no-repeat bg-contain border-b border-gray-800"
                    style={{ backgroundImage: `url(${exam.link})`, backgroundColor: '#fff' }}
                    role="img"
                    aria-label={`${exam.title} report`}
                  />
                )}

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xl text-white font-semibold">{exam.title}</p>
                      {/* 👇 Assigned day added here */}
                      <p className="text-gray-500 text-xs mt-1">
                        Fecha: <span className="text-gray-400">{exam.assignedDay}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => toggleDescription(exam.assignedDay)}
                      className="text-sm text-white rounded-full"
                    >
                      {openCards[exam.assignedDay] ? (
                        <FaArrowAltCircleUp size={24} className="fill-blue-500" />
                      ) : (
                        <FaArrowAltCircleDown size={24} className="fill-blue-500" />
                      )}
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openCards[exam.assignedDay] ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-400 text-sm">{exam.description}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-gray-400 flex items-center gap-2">
                      <FaMagic className="fill-blue-400" />
                      {exam.topic}
                    </p>
                    <p className="text-gray-400">Aciertos: {exam.correctAnswers}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}
