import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import profileBg from '@/public/profile-bg.webp'
import letbgWEBP from '@/public/let-bg.webp'
import progreso from '@/public/Luggage.webp'
import recursos from '@/public/Recursos.webp'
import funZone from '@/public/fun-zone.webp'
import NextImage from 'next/image'
import YourProfile from './YourProfile'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { getCurrentMonthWithAdjustment } from './getCurrentMonth'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { Box, Modal } from '@mui/material'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Chip } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { MdArrowForwardIos } from 'react-icons/md'

export default function StudentDashboard({
  firstName,
  startDate,
  dateVariable,
  tutorQuote,
  quoteDate,
  profileImg,
  tutor,
  progressB,
  progressI,
  progressA,
  flashProgress,
  exams,
}) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const router = useRouter()
  // Keep track of which accordion is expanded
  const [expanded, setExpanded] = useState(() => {
    // Default to the first category if available
    const firstCategory = Object.keys(flashProgress || {})[0]
    return firstCategory || false
  })

  const handleChange = (category) => (event, isExpanded) => {
    // Only allow one open at a time
    setExpanded(isExpanded ? category : false)
  }

  const currentMonth = getCurrentMonthWithAdjustment(startDate, dateVariable)

  // 2️⃣ Mapear nivel a nombres visuales
  const levelNames = [
    { range: [1, 3], name: 'Principiante', icon: '🌱' },
    { range: [4, 6], name: 'Básico', icon: '🧮' },
    { range: [7, 10], name: 'Explorador', icon: '🧭' },
    { range: [11, 13], name: 'Intermedio', icon: '🎖️' },
    { range: [14, 16], name: 'Avanzado', icon: '🚀' },
    { range: [17, 20], name: 'Maestro', icon: '🏆' },
  ]

  const categoryColors = ['#dbeafe', '#dcfce7']

  const getLevelDisplay = (month) => {
    const lvl = levelNames.find((l) => month >= l.range[0] && month <= l.range[1])
    return lvl || { name: 'Sin asignar', icon: '❓' }
  }

  const { name: levelName, icon: levelIcon } = getLevelDisplay(currentMonth)

  // ------------------------------
  // 3️⃣ Calcular barra de progreso
  const progressPercent = Math.round((currentMonth / 20) * 100)

  const renderProgress = (label, value) => (
    <p className="text-gray-500 text-sm">
      {label}: <span className="text-gray-800 text-sm">{value === 0 ? 'Pendiente' : `${value}/25`}</span>
    </p>
  )

  return (
    <div className="my-0">
      <div id="cover" className="relative">
        <div
          className="flex absolute cursor-pointer hover:bg-white/40 w-[180px] h-12 left-1/2 mt-2 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
        rounded-full shadow-lg border border-white/20 items-center justify-around"
        >
          <p>Portal para Padres</p>
        </div>
        <NextImage
          priority
          src={letbgWEBP} //bg
          className="w-full h-[250px] rounded-b-2xl object-cover pt-0 bg-[#2D878D] overflow-hidden"
          fetchPriority="high"
          quality={80}
        />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 ">
          <YourProfile char={profileImg} />
        </div>
      </div>
      <div
        className="flex absolute cursor-pointer hover:bg-white/40 w-[120px] h-8 left-1/2 mt-8 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
        rounded-full shadow-lg border border-white/20 items-center justify-around"
      >
        {firstName}
      </div>
      <div id="body" className="mx-auto relative px-4 flex flex-col max-w-[600px] md:max-w-[960px] gap-4 sm:gap-8 my-20">
        {/* First Row */}
        <div className="flex gap-4 sm:gap-8 justify-between">
          <button
            onClick={() => router.push(`/Profile`)}
            className="bg-white relative group overflow-hidden rounded-xl w-full h-16 sm:h-20 md:h-36"
          >
            <div
              className="flex cursor-pointer hover:bg-white/40 w-[60px] sm:w-[80px] md:w-[130px] h-6 md:h-8 absolute left-1/2 mt-[38px] sm:mt-[52px] md:mt-[106px] -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
        rounded-xl shadow-lg text-xs md:text-sm border border-white/20 items-center justify-around"
            >
              Mi Perfil
            </div>
            <NextImage
              priority
              src={profileBg} //bg
              className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover pt-0 "
              fetchPriority="high"
              quality={80}
            />
          </button>
          <button
            className="bg-white relative group overflow-hidden rounded-xl w-full  h-16 sm:h-20 md:h-36"
            onClick={() => router.push(`/funZone/`)}
          >
            <div
              className="flex cursor-pointer hover:bg-white/40 w-[60px] sm:w-[80px] md:w-[130px] h-6 md:h-8 absolute left-1/2 mt-[38px] sm:mt-[52px] md:mt-[106px] -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
              rounded-xl text-xs md:text-sm shadow-lg border border-white/20 items-center justify-around"
            >
              Juegos
            </div>
            <NextImage
              priority
              src={funZone} //bg
              className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover pt-0 "
              fetchPriority="high"
              quality={80}
            />
          </button>

          <button
            className="bg-white relative group overflow-hidden rounded-xl w-full  h-16 sm:h-20 md:h-36"
            onClick={() => router.push(`/Progress/`)}
          >
            <div
              className="flex cursor-pointer hover:bg-white/40 w-[60px] sm:w-[80px] md:w-[130px] h-6 md:h-8 absolute left-1/2 mt-[38px] sm:mt-[52px] md:mt-[106px] -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
              rounded-xl shadow-lg text-xs md:text-sm border border-white/20 items-center justify-around"
            >
              Progreso
            </div>
            <NextImage
              priority
              src={progreso} //bg
              className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover pt-0 "
              fetchPriority="high"
              quality={80}
            />
          </button>
          <button
            onClick={() => router.push(`/Resources/`)}
            className="bg-white relative group overflow-hidden rounded-xl w-full  h-16 sm:h-20 md:h-36"
          >
            <div
              className="flex cursor-pointer hover:bg-white/40 w-[60px] sm:w-[80px] md:w-[130px] h-6 md:h-8 absolute left-1/2 mt-[38px] sm:mt-[52px] md:mt-[106px] -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
        rounded-xl shadow-lg border text-xs md:text-sm border-white/20 items-center justify-around"
            >
              Recursos
            </div>
            <NextImage
              priority
              src={recursos} //bg
              className="h-full group-hover:scale-110 cursor-pointer z-0 object-cover pt-0 "
              fetchPriority="high"
              quality={80}
            />
          </button>
        </div>

        {/* White Bg Progress Section */}
        <div className="flex flex-col-reverse md:flex-row gap-6 my-0">
          {/* Left column – Category Progress (60%) */}
          <div className="bg-white shadow-md rounded-xl p-4 space-y-4 w-full md:w-[50%] h-[350px] flex flex-col overflow-hidden">
            <h3 className="text-lg font-semibold flex items-center py-1 gap-2">🎮 Progreso: Juegos</h3>

            <div className="flex-1 overflow-y-auto space-y-4">
              {Object.entries(flashProgress || {})
                // Sort alphabetically by category name
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([category, rounds], index) => {
                  const totalRounds = Object.keys(rounds).length
                  const completedRounds = Object.values(rounds).filter((v) => v < 60).length
                  const bgColor = categoryColors[index % categoryColors.length] // cycle colors

                  return (
                    <Accordion
                      key={category}
                      expanded={expanded === category}
                      onChange={handleChange(category)}
                      sx={{
                        boxShadow: 'none', // MUI-only
                        backgroundColor: bgColor, // MUI-only
                        borderRadius: '0.5rem', // MUI-only
                      }}
                      className="transition-all duration-300"
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          padding: '0px 20px',
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <p className="text-md font-semibold capitalize text-blue-700">{category}</p>
                          <p className="text-gray-500 text-xs">
                            {completedRounds} de {totalRounds} completado
                          </p>
                        </div>
                      </AccordionSummary>

                      <AccordionDetails className="space-y-2 -my-2">
                        {Object.entries(rounds)
                          .sort(([a], [b]) => {
                            const order = ['First', 'Second', 'Third']
                            return order.indexOf(a) - order.indexOf(b)
                          })
                          .map(([roundName, value]) => {
                            const timeValue = value ?? 60
                            const isPending = timeValue === 60

                            let chipColor = 'default'
                            if (!isPending) {
                              if (timeValue < 20) chipColor = 'success'
                              else if (timeValue < 50) chipColor = 'warning'
                              else chipColor = 'error'
                            }

                            const label = isPending ? 'Pendiente' : `${timeValue}s`
                            const roundNumberMap = { First: 1, Second: 2, Third: 3 }
                            const displayName = `Nivel ${roundNumberMap[roundName]}`

                            return (
                              <div key={roundName} className="flex justify-between items-center gap-2">
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => router.push(`/FlashCards/${category}/${roundName}`)}
                                    className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 rounded-md"
                                  >
                                    <MdArrowForwardIos size={16} />
                                  </button>
                                  <span className="text-sm text-gray-600 font-medium">{displayName}</span>
                                </div>

                                <Chip
                                  icon={<AccessTimeIcon className="!text-gray-700" />}
                                  label={label}
                                  color={chipColor}
                                  variant={isPending ? 'outlined' : 'filled'}
                                  size="small"
                                  className="!rounded-xl"
                                />
                              </div>
                            )
                          })}
                      </AccordionDetails>
                    </Accordion>
                  )
                })}
            </div>
          </div>

          {/* Right column – Rango (40%) */}
          <div className="bg-white shadow-md rounded-2xl p-4 space-y-4 h-[350px] w-full md:w-[50%] relative flex flex-col justify-between">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  {levelIcon} Rango: {levelName}
                </h3>
                <button onClick={handleOpen} className="text-gray-500 hover:text-blue-600 transition-colors">
                  <AiOutlineQuestionCircle size={22} />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">Nivel {currentMonth} de 20</p>

              {/* Progress bar */}
              <div className="w-full bg-gray-100 h-3 rounded-xl overflow-hidden mt-2">
                <div
                  className="h-3 bg-green-500 rounded-xl transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>

            {/* Promedio (Average Grade) */}
            <div className="bg-blue-50 border relative border-blue-100 rounded-xl p-3">
              <h4 className="text-md font-semibold text-blue-700 flex items-center gap-2">🏆 Exámenes:</h4>
              {exams && exams.length > 0 ? (
                <>
                  {/* Calculate promedio */}
                  {(() => {
                    const gradeToNumber = (grade) => {
                      switch (grade) {
                        case 'C':
                          return 2
                        case 'B':
                          return 3
                        case 'B+':
                          return 4
                        case 'A':
                          return 4.5
                        case 'A+':
                          return 5
                        default:
                          return 0
                      }
                    }

                    // Calculate numeric average
                    const avg = exams.reduce((sum, exam) => sum + gradeToNumber(exam.grade), 0) / exams.length

                    // (Optional) Keep this if you still want to convert numeric averages to letters
                    const numberToGrade = (num) => {
                      if (num >= 4.5) return 'A+'
                      if (num >= 3.5) return 'A'
                      if (num >= 2.5) return 'B+'
                      if (num >= 1.5) return 'B'
                      return 'C'
                    }

                    // You can now choose what to return
                    const promedioNumerico = avg // → e.g. 4.5
                    const promedioLetra = numberToGrade(avg) // → e.g. 'A'

                    return (
                      <div className="mt-2">
                        <p className="text-gray-700 text-sm">
                          Promedio actual:{' '}
                          <span className="font-bold text-gray-700">
                            <span className="font-bold text-blue-700">{promedioLetra}</span> ({promedioNumerico}/5)
                          </span>
                        </p>
                        <p className="text-gray-500 text-sm">Test Realizados: {exams.length}</p>
                      </div>
                    )
                  })()}
                </>
              ) : (
                <p className="text-gray-500 text-sm mt-1">Sin exámenes registrados</p>
              )}
              {/* Button bottom-right */}
              <div className="absolute right-2 top-2 sm:bottom-2">
                <div
                  onClick={() => router.push('/Exams')}
                  className="bg-blue-600 text-white text-xs sm:text-sm md:text-base px-2 cursor-pointer hover:bg-blue-700 py-2 rounded-xl"
                >
                  Historial de Exámenes
                </div>
              </div>
            </div>

            {/* Grammar Progress */}
            <div className="bg-green-50 relative border border-green-100 rounded-xl p-3">
              <h4 className="text-md font-semibold text-green-700 flex items-center gap-2">📚 Gramática:</h4>

              <div className="text-sm text-gray-600 mt-1 space-y-1">
                {renderProgress('Principiante', progressB)}
                {renderProgress('Intermedio', progressI)}
                {renderProgress('Avanzado', progressA)}
              </div>

              {/* Button bottom-right */}
              <div className="absolute right-2 top-2 sm:bottom-2">
                <div
                  onClick={() => router.push('/Niveles')}
                  className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-2 cursor-pointer hover:bg-green-700 py-2 rounded-xl"
                >
                  Niveles de Gramática
                </div>
              </div>
            </div>
            <Modal open={open} onClose={handleClose} disableScrollLock>
              <Box className="absolute top-1/2 left-1/2 bg-white rounded-xl shadow-lg p-4 w-[90%] max-w-md transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-xl font-bold mb-1 text-gray-800">¿Qué significa este rango?</h2>
                <p className="text-gray-600 mb-2">
                  El rango de tu hijo/a refleja el progreso alcanzado en las actividades del mes. Se asigna según la
                  participación, los logros obtenidos y la constancia.
                </p>

                <div className="space-y-2">
                  {levelNames.map(({ range, name, icon }) => {
                    const isCurrent = currentMonth >= range[0] && currentMonth <= range[1]
                    const isPast = currentMonth > range[1]

                    return (
                      <div
                        key={name}
                        className={`flex items-center gap-2 p-2 rounded-xl ${
                          isCurrent
                            ? 'bg-blue-100 border border-blue-400'
                            : isPast
                            ? 'bg-green-100 border border-green-300'
                            : 'bg-gray-100 border border-gray-200'
                        }`}
                      >
                        <span className="text-xl">{icon}</span>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {name} {isCurrent && <span className="text-blue-600">(Rango actual)</span>}
                            {isPast && <span className="text-green-600">(Superado)</span>}
                          </p>
                          <p className="text-xs text-gray-500">
                            Niveles {range[0]} - {range[1]}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleClose}
                    className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
                  >
                    Entendido
                  </button>
                </div>
              </Box>
            </Modal>
          </div>
        </div>

        {/* Teacher commentary */}
        <div className="overflow-y-auto w-full border-white border-[12px] text-center bg-[#ececec] h-48 p-4 rounded-xl">
          <div
            className="flex cursor-pointer text-lg hover:bg-white/40 w-[220px] h-8 absolute left-1/2 mt-0 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md
        rounded-xl shadow-lg border border-white/20 items-center justify-around"
          >
            Comentario del Tutor
          </div>
          <p className="pt-8 text-gray-800">{tutorQuote}</p>
        </div>
      </div>
    </div>
  )
}
