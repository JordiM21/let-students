import { adviceList } from '@/models/adviceData'
import { useRouter } from 'next/router'
import BackHeader from '@/components/BackHeader'
import Image from 'next/image'

export default function AdviceDetail() {
  const router = useRouter()
  const { slug } = router.query

  const advice = adviceList.find((item) => item.slug === slug)

  if (!advice) {
    return <div className="text-center py-24 text-red-500">Advice not found</div>
  }

  return (
    <div className="min-h-screen bg-[var(--bluebg)] py-24 px-4">
      <BackHeader largeTitle={advice.title} parentTitle="Volver" />

      <div className="max-w-[800px] mx-auto bg-slate-200 p-6 rounded-xl shadow-md flex flex-col gap-6">
        {/* Imagen asociada al consejo */}
        {advice.image && (
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image src={advice.image} alt={advice.title} fill className="object-cover" priority />
          </div>
        )}

        {/* Contenido */}
        <div className="prose prose-gray max-w-full" dangerouslySetInnerHTML={{ __html: advice.content }} />
      </div>
    </div>
  )
}
