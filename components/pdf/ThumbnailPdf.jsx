import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ThumbnailPdf = ({ fileId, title }) => {
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}`

  return (
    <Link href={`/MaterialAdicional/${fileId}`} className="block">
      <div className="w-[200px] flex flex-col items-center">
        <p className="mb-2 text-center font-bold text-gray-800">{title}</p>
        <Image
          loading="lazy"
          src={thumbnailUrl}
          className="w-full h-64 object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition"
        />
      </div>
    </Link>
  )
}

export default ThumbnailPdf
