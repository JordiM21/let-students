import BackHeader from '@/components/BackHeader'
import React, { useEffect, useState } from 'react'
import ThumbnailPdf from '@/components/pdf/ThumbnailPdf'
import { pdfFiles } from '@/models/pdfData'
import { collection, getDocs } from 'firebase/firestore'
import { db, auth } from '@/config/firebase'
import LoadingScreen from '@/components/LoadingScreen'

export default function MaterialAdicional() {
  const [userMatched, setUserMatched] = useState(null) // start as null
  const [submit, setSubmit] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [fade, setFade] = useState(true)

  const itemsPerPage = 6
  const totalPages = Math.ceil(pdfFiles.length / itemsPerPage)

  // 1️⃣ Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      if (!auth.currentUser) return
      const authUid = auth.currentUser.uid

      try {
        const querySnapshot = await getDocs(collection(db, 'users'))
        const allUsers = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const currentUser = allUsers.find((u) => u.uid === authUid)
        setUserMatched(currentUser || { completedPdfs: [] })
      } catch (error) {
        console.error('Error fetching users:', error)
        setUserMatched({ completedPdfs: [] }) // fallback
      }
    }

    fetchUser()
  }, [submit])

  // 2️⃣ Handle pagination slice
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPdfs = pdfFiles.slice(startIndex, endIndex)

  // 3️⃣ Smooth scroll + fade animation when page changes
  useEffect(() => {
    setFade(false) // trigger fade-out
    const timer = setTimeout(() => {
      setFade(true) // fade back in
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200) // match transition duration

    return () => clearTimeout(timer)
  }, [currentPage])

  // 4️⃣ Show loading until userMatched is ready
  if (userMatched === null) {
    return <LoadingScreen />
  }

  return (
    <div className="py-12 bg-[var(--bluebg)] min-h-screen">
      <BackHeader largeTitle={'Material Adicional'} parentTitle={'Volver'} />
      <div id="body" className="mx-auto px-4 flex flex-col max-w-[600px] md:max-w-[800px] gap-8 my-6">
        <h1 className="text-[#bdbdbd] text-center">Haz click en la imagen para acceder al material de impresión</h1>

        {/* Animated container */}
        <div
          key={currentPage}
          className={`flex gap-4 flex-wrap justify-evenly items-center transition-opacity duration-500 ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {currentPdfs.map((pdf) => {
            const completedArray = userMatched.completedPdfs || []
            const isCompleted = completedArray.includes(pdf.id)

            return (
              <div
                key={pdf.id}
                className={`p-4 rounded-xl shadow-md cursor-pointer transition-colors duration-200 ${
                  isCompleted ? 'bg-green-200' : 'bg-white hover:bg-gray-100'
                }`}
              >
                <ThumbnailPdf fileId={pdf.id} title={pdf.title} completed={isCompleted} />
                <div className="flex justify-center mt-2 gap-2">
                  {isCompleted ? (
                    <span className="text-green-700 text-sm font-semibold">Completado</span>
                  ) : (
                    <span className="text-gray-500 text-sm font-semibold">Pendiente</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
