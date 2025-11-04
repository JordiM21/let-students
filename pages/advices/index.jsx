import Link from 'next/link'
import { adviceList } from '@/models/adviceData'
import BackHeader from '@/components/BackHeader'
import Image from 'next/image'
import { useState } from 'react'

export default function AdviceIndex() {
  return (
    <div className="min-h-screen bg-[var(--bluebg)] py-24 px-4">
      <BackHeader largeTitle={'Consejos para Padres'} parentTitle={'Volver'} />

      <div className="max-w-[400px] md:max-w-[800px] mx-auto flex flex-col gap-6">
        <p className="text-slate-300 text-center">
          Tips y recomendaciones de expertos para que los padres acompañen, motiven y guíen a sus hijos en el
          aprendizaje del inglés de forma efectiva y divertida.
        </p>

        {adviceList.map((advice) => (
          <Link key={advice.slug} href={`/advices/${advice.slug}`}>
            <section className="p-4 rounded-xl shadow-md bg-white hover:shadow-2xl shadow-black hover:bg-gray-200 hover:scale-105 transition flex flex-col md:flex-row gap-4">
              {/* Imagen con skeleton */}
              {advice.image && <ImageWithSkeleton src={advice.image} alt={advice.title} />}

              {/* Texto */}
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-1">{advice.title}</h2>
                <p className="text-gray-600">{advice.summary}</p>
              </div>
            </section>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Componente auxiliar para imagen con skeleton
function ImageWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full md:w-40 h-32 flex-shrink-0 rounded-lg overflow-hidden">
      {!loaded && <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover rounded-lg transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  )
}
