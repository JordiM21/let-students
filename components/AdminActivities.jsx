import React, { useMemo, useState } from 'react'
import BackHeader from './BackHeader'
import YourProfile from './YourProfile'
import { BsChevronRight } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import { FiSearch, FiX } from 'react-icons/fi'
import { getCurrentMonthWithAdjustment } from './getCurrentMonth'

const levelNames = [
  { range: [1, 3], name: 'Principiante', icon: '🌱' },
  { range: [4, 6], name: 'Básico', icon: '🧮' },
  { range: [7, 10], name: 'Explorador', icon: '🧭' },
  { range: [11, 13], name: 'Intermedio', icon: '🎖️' },
  { range: [14, 16], name: 'Avanzado', icon: '🚀' },
  { range: [17, 20], name: 'Maestro', icon: '🏆' },
]

const getLevelDisplay = (month) => {
  const lvl = levelNames.find((l) => month >= l.range[0] && month <= l.range[1])
  return lvl || { name: 'Sin asignar', icon: '❓' }
}

// ---------------------------
export default function AdminActivities({ allUsers = [] }) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const visibleStudents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    // Map with computed month & progress to avoid recomputing in render
    const mapped = allUsers.map((s) => {
      const currentMonth = getCurrentMonthWithAdjustment(s.startDate, s.dateVariable)
      const progressPercent = Math.round((currentMonth / 20) * 100)
      const level = getLevelDisplay(currentMonth)
      return {
        ...s,
        currentMonth,
        progressPercent,
        levelName: level.name,
        levelIcon: level.icon,
      }
    })

    // Filter by name if query provided
    const filtered = normalizedQuery
      ? mapped.filter((s) => {
          const full = `${s.firstName ?? ''} ${s.lastName ?? ''}`.toLowerCase()
          return full.includes(normalizedQuery)
        })
      : mapped

    // Sort by currentMonth desc (higher level on top). If tie, fallback to startDate newest first.
    filtered.sort((a, b) => {
      if (b.currentMonth !== a.currentMonth) return b.currentMonth - a.currentMonth
      // fallback: newest startDate first
      return new Date(b.startDate) - new Date(a.startDate)
    })

    return filtered
  }, [allUsers, query])

  return (
    <div className="mx-4 md:mx-auto pt-20 max-w-3xl">
      <BackHeader largeTitle="Asigna Exámenes" parentTitle="Volver" />

      {/* Top: heading + search */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[var(--lightBlue)] mb-2">Tus estudiantes</h1>
        <p className="text-gray-400 text-sm mb-4">
          {visibleStudents.length} {visibleStudents.length === 1 ? 'estudiante' : 'estudiantes'}
        </p>

        <div className="max-w-md w-full">
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nombre o apellido..."
            variant="filled"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch size={18} className="text-gray-500 mb-4" />
                </InputAdornment>
              ),
              endAdornment: query ? (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setQuery('')}>
                    <FiX size={18} className="text-gray-500" />
                  </IconButton>
                </InputAdornment>
              ) : null,
              disableUnderline: true, // removes underline so it feels more like a modern card input
            }}
            sx={{
              '& .MuiFilledInput-root': {
                backgroundColor: '#fff',
                borderRadius: '8px',
                height: '44px',
                padding: '0 12px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: '#f9f9f9',
                },
                '&.Mui-focused': {
                  boxShadow: '0 0 0 2px var(--lightBlue)',
                  backgroundColor: '#fff',
                },
              },
              '& .MuiInputBase-input': {
                padding: 0,
                fontSize: '0.95rem',
                lineHeight: 1.4,
              },
              '& .MuiInputAdornment-root': {
                marginTop: 0, // vertically center icons
              },
            }}
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {visibleStudents.map((student) => (
          <div
            key={student.id}
            onClick={() => router.push(`/ActivitiesDetail/${student.id}`)}
            className="relative bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-all duration-200
                   hover:scale-[101%] cursor-pointer rounded-2xl p-5 md:p-6 
                   flex flex-col gap-3 shadow-md"
          >
            {/* Top: profile + names */}
            <div className="flex items-center gap-4">
              <YourProfile char={student.profileImg} size="small" />
              <div>
                <p className="text-lg md:text-xl font-semibold text-white">
                  {student.firstName} {student.lastName}
                </p>
                <p className="text-xs text-gray-400">
                  Inició:{' '}
                  {student.startDate
                    ? new Date(student.startDate).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })
                    : '—'}
                </p>
                <p className="text-gray-300 text-sm">
                  Mes actual: <span className="text-white font-medium">{student.currentMonth}</span>
                </p>
              </div>
            </div>

            {/* Middle: level + progress */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="text-gray-300 text-sm">
                  Nivel actual:{' '}
                  <span className="font-medium text-white">
                    {student.levelIcon} {student.levelName}
                  </span>
                </p>
                <p className="text-gray-400 text-xs">{student.progressPercent}%</p>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    student.progressPercent < 40
                      ? 'bg-red-500'
                      : student.progressPercent < 80
                      ? 'bg-yellow-400'
                      : 'bg-green-500'
                  }`}
                  style={{ width: `${student.progressPercent}%` }}
                />
              </div>
            </div>

            {/* Bottom: quote date + exams */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2 text-sm">
              <p className="text-gray-400">
                Último Mensaje:{' '}
                <span className="text-white">
                  {student?.quoteDate
                    ? new Date(student.quoteDate.seconds * 1000).toLocaleString('es-ES', {
                        timeZone: 'America/Santo_Domingo',
                        dateStyle: 'medium',
                      })
                    : '—'}
                </span>
              </p>
              <p className="text-gray-400">
                Exámenes:{' '}
                <span className="text-white font-medium">
                  {Array.isArray(student?.exams)
                    ? `${student.exams.length} examen${student.exams.length !== 1 ? 'es' : ''}`
                    : 'No exams'}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
