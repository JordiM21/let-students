import BackHeader from '@/components/BackHeader'
import LoadingScreen from '@/components/LoadingScreen'
import WithFlashGame from '@/components/WithFlashGame'
import withUserData from '@/components/WithUserData'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useEffect, useState } from 'react'

const FlashCategory = ({ userData, data }) => {
  const router = useRouter()
  const category = router.query.category
  const [synced, setSynced] = useState(false)
  const [loadedImages, setLoadedImages] = useState({}) // track loaded images

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  const categoryProgress = userData?.FlashProgress?.[category]
  const categoryMissing = userData && !categoryProgress

  useEffect(() => {
    if (!userData || !category) return

    const userRef = doc(db, 'users', userData.id)

    if (!userData.FlashProgress?.[category]) {
      const newCategoryProgress = { First: 60, Second: 60, Third: 60 }

      updateDoc(userRef, {
        [`FlashProgress.${category}`]: newCategoryProgress,
      })
        .then(() => {
          console.log(`✅ FlashProgress initialized for category: ${category}`)
          setSynced(true)
        })
        .catch(async (error) => {
          console.error('⚠️ updateDoc error:', error)
          if (error.code === 'not-found') {
            console.log('📄 User document does not exist, creating document...')
            await setDoc(userRef, {
              FlashProgress: { [category]: newCategoryProgress },
            })
            console.log(`✅ User document created and FlashProgress initialized for category: ${category}`)
            setSynced(true)
          }
        })
    } else {
      console.log('ℹ️ Category already exists:', userData.FlashProgress[category])
      setSynced(true)
    }
  }, [userData, category])


  if (!userData) {
    return <LoadingScreen />
  }

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  const levelMap = [
    { key: 'First', coverKey: 'easyCover' },
    { key: 'Second', coverKey: 'mediumCover' },
    { key: 'Third', coverKey: 'hardCover' },
  ]

  const levels = levelMap.map(({ key, coverKey }) => ({
    name: key,
    img: data?.[0]?.[category]?.levels?.[coverKey] || '/fallback.jpg',
    record: categoryProgress?.[key] ?? 60,
    url: key,
  }))

   return (
     <div className="bg-[var(--bluebg)] min-h-screen py-20">
       <BackHeader largeTitle={category} parentTitle={'Volver'} />
       <div className="mx-10 lg:mx-auto max-w-5xl">
         <div className="w-full my-4 rounded-lg p-3 bg-[var(--blueDarkbg)]">
           <p className="text-[var(--lightBlue)] opacity-90">
             ⚡ Responde lo más rápido que puedas para superar tu record anterior <br />
             🏆 Inténtalo las veces que quieras hasta que alcances el menor tiempo posible.
           </p>
         </div>

         <div className="flex flex-wrap justify-around gap-4">
           {levels.map((level, idx) => (
             <Link
               key={level.name}
               href={`/FlashCards/${category}/${level.url}`}
               className="group w-[280px] sm:w-[300px] md:w-[320px]"
             >
               <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
                 {/* Image Container */}
                 <div className="relative w-full aspect-[1/1] overflow-hidden">
                   {/* Skeleton placeholder */}
                   <div
                     className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500 ${
                       loadedImages[idx] ? 'opacity-0' : 'opacity-100'
                     }`}
                   />

                   {/* Actual image */}
                   <Image
                     src={level.img}
                     alt={level.name}
                     fill
                     className={`object-cover  duration-200 transition-all group-hover:scale-110 ${
                       loadedImages[idx] ? 'opacity-100' : 'opacity-0'
                     }`}
                     onLoadingComplete={() => handleImageLoad(idx)}
                   />
                 </div>

                 {/* Info / Button */}
                 <div className="bg-[var(--blueDarkbg)] flex justify-between items-center w-full p-3 rounded-b-xl text-[var(--lightBlue)]">
                   <p className="text-white text-xl">🏆 {level.record === 60 ? 'Pending' : formatTime(level.record)}</p>
                   <button className="btn-shine !bg-[var(--color3)] text-xl font-extrabold !py-2 !px-4">Play</button>
                 </div>
               </div>
             </Link>
           ))}
         </div>
       </div>
     </div>
   )
}
export default withUserData(WithFlashGame(FlashCategory))
