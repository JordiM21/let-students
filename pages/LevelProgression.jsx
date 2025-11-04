import withUserData from '@/components/WithUserData'
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { getCurrentMonthWithAdjustment } from '@/components/getCurrentMonth'
import NextImage from 'next/image'
import LoadingScreen from '@/components/LoadingScreen'
import YourProfile from '@/components/YourProfile'
import BackHeader from '@/components/BackHeader'

const levelNames = [
  {
    range: [1, 3],
    name: 'Principiante',
    icon: '🌱',
    description:
      'En este rango el estudiante está dando sus primeros pasos en el aprendizaje. Se enfoca en reconocer palabras, repetir estructuras simples y ganar confianza en su participación.',
  },
  {
    range: [4, 6],
    name: 'Básico',
    icon: '🧮',
    description:
      'El niño comienza a comprender frases más largas, identificar vocabulario clave y expresarse con oraciones cortas. Aquí se desarrolla la base de su comunicación y su vocabulario.',
  },
  {
    range: [7, 10],
    name: 'Explorador',
    icon: '🧭',
    description:
      'El estudiante explora nuevas formas de comunicación, tiempos verbales variables (Pasado, Presente y Futuro) y se atreve a hacer preguntas o dar respuestas con mayor independencia.',
  },
  {
    range: [11, 13],
    name: 'Intermedio',
    icon: '🎖️',
    description:
      'En este nivel ya se observa una comprensión más sólida. El niño empieza a construir párrafos cortos, narrar experiencias y mostrar mayor seguridad en conversaciones guiadas.',
  },
  {
    range: [14, 16],
    name: 'Avanzado',
    icon: '🚀',
    description:
      'El estudiante demuestra fluidez creciente, utiliza vocabulario variado y puede mantener conversaciones más largas. Se le motiva a expresar opiniones y justificar ideas.',
  },
  {
    range: [17, 20],
    name: 'Maestro',
    icon: '🏆',
    description:
      'Fluidez Máxima: aquí el niño demuestra dominio avanzado conversacional, participa activamente usando el inglés, comprende instrucciones complejas y puede aplicar el idioma en distintos contextos y situaciones cotidianas.',
  },
]

const LevelsProgression = ({ userData }) => {
  if (!userData) {
    return <LoadingScreen />
  }
  const { firstName, startDate, profileImg, dateVariable } = userData

  const router = useRouter()
  const currentMonth = getCurrentMonthWithAdjustment(startDate, dateVariable)
  // 3️⃣ Función para obtener nivel actual
  const getLevelDisplay = (month) => {
    const lvl = levelNames.find((l) => month >= l.range[0] && month <= l.range[1])
    return lvl || { name: 'Sin asignar', icon: '❓', description: 'Nivel aún no asignado.' }
  }

  const { name: levelName, icon: levelIcon } = getLevelDisplay(currentMonth)

  // 4️⃣ Calcular progreso
  const progressPercent = Math.round((currentMonth / 20) * 100)

  return (
    <div className="mx-auto px-4 max-w-3xl py-20">
      <BackHeader largeTitle={'Progreso del Estudiante'} parentTitle={'Volver'} />
      {/* Encabezado */}
      <div className="text-center mb-10">
        <div className="w-24 h-24 mx-auto flex items-center justify-center bg-blue-400 rounded-full">
          <YourProfile char={profileImg} size={'small'} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Progreso de {firstName}</h1>
        <p className="text-gray-500">Nivel {currentMonth} de 20</p>
      </div>

      {/* Barra de progreso */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-lg font-semibold mb-2">
          {levelIcon} Rango actual: {levelName}
        </h2>
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="h-4 bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Progreso total: {progressPercent}%</p>
      </div>

      {/* Lista detallada de niveles */}
      <div className="space-y-4">
        {levelNames.map(({ range, name, icon, description }) => {
          const isCurrent = currentMonth >= range[0] && currentMonth <= range[1]
          const isPast = currentMonth > range[1]

          return (
            <div
              key={name}
              className={`p-4 rounded-lg cursor-pointer hover:scale-105 ease-in-out .5s shadow-md transition-all ${
                isCurrent
                  ? 'bg-blue-50 border border-blue-300'
                  : isPast
                  ? 'bg-green-50 border border-green-300'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-lg font-semibold text-gray-800">
                  {name} {isCurrent && <span className="text-blue-600 text-sm">(Rango actual)</span>}
                  {isPast && <span className="text-green-600 text-sm">(Superado)</span>}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
              <p className="text-xs text-gray-400 mt-1">
                Niveles {range[0]} - {range[1]}
              </p>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => router.push('/Exams')}
          className="bg-blue-950 hover:opacity-90 hover:scale-105 shadow-md rounded-lg p-4 my-10 mx-auto max-w-[200px]"
        >
          <h2 className="text-lg text-center font-semibold text-white">Sección Exámenes</h2>
        </button>
      </div>
    </div>
  )
}

export default withUserData(LevelsProgression)
