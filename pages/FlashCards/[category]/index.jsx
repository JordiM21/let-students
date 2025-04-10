import BackHeader from '@/components/BackHeader'
import LoadingScreen from '@/components/LoadingScreen'
import WithFlashGame from '@/components/WithFlashGame'
import withUserData from '@/components/WithUserData'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FlashCategory = ({ userData, data }) => {
  if (!userData) {
    return <LoadingScreen />
  }

  const router = useRouter()
  const category = router.query.category
  const records = userData?.FlashProgress?.[category]
  console.log(data[0].animals.levels)

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  const levels = [
    {
      name: 'First',
      img: data[0][category].levels.easyCover,
      url: 'First',
      record: userData.FlashProgress[category].First,
    },
    {
      name: 'Second',
      img: data[0][category].levels.mediumCover,
      url: 'Second',
      record: userData.FlashProgress[category].Second,
    },
    {
      name: 'Third',
      img: data[0][category].levels.hardCover,
      url: 'Third',
      record: userData.FlashProgress[category].Third,
    },
  ]

  return (
    <div className="bg-[var(--bluebg)] min-h-screen py-20">
      <BackHeader largeTitle={category} parentTitle={'Back'} />
      <div className="mx-10 lg:mx-auto max-w-5xl">
        <div className="w-full h-32 my-4 rounded-lg p-3 bg-[var(--blueDarkbg)]">
          <p className="text-[var(--lightBlue)] opacity-90">
            Responde lo más rápido posible para superar tu record anterior, inténtalo las veces que quieras hasta que alcances la mayor puntuación
          </p>
        </div>
        <div className="flex justify-around gap-4 flex-wrap">
          {levels.map((level) => (
            <div className="group relative">
              <Link key={level.name} className="text-[var(--lightBlue)]" href={`/FlashCards/${category}/${level.url}`}>
                <div className="bg-white rounded-t-md overflow-hidden">
                  <Image
                    width={300}
                    height={300}
                    src={level.img}
                    className="object-cover group-hover:scale-110 transition-all .1s ease-in"
                  />
                </div>
                <div className="bg-[var(--blueDarkbg)] flex justify-around items-center w-full p-2 rounded-b-md text-[var(--lightBlue)]">
                  <div>
                    <p className="text-white text-xl">🏆 {formatTime(records?.[level.name])} </p>
                  </div>
                  <div>
                    <button className="btn-shine !bg-[var(--color3)] text-xl font-extrabold !py-2 !px-4">Play</button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default withUserData(WithFlashGame(FlashCategory))
