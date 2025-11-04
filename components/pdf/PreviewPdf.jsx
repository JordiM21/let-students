import React, { useState } from 'react'

const PreviewPdf = ({ fileId, title }) => {
  const [loading, setLoading] = useState(true)
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`

  return (
    <div className="w-full h-[80vh] flex justify-center items-center relative">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-200 animate-pulse rounded-2xl">
          <span className="text-gray-500">Loading PDF...</span>
        </div>
      )}
      <iframe
        src={embedUrl}
        className={`w-full h-full rounded-2xl shadow-lg ${
          loading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
        allow="autoplay"
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  )
}

export default PreviewPdf
