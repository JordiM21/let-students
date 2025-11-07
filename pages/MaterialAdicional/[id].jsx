import React, { useEffect, useState } from 'react'
import PreviewPdf from '@/components/pdf/PreviewPdf'
import { pdfFiles } from '@/models/pdfData'
import BackHeader from '@/components/BackHeader'
import { useRouter } from 'next/router'
import { db, auth } from '@/config/firebase'
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import LoadingScreen from '@/components/LoadingScreen'
import Switch from '@mui/material/Switch'

export default function PdfPage() {
  const router = useRouter()
  const { id } = router.query
  const [pdf, setPdf] = useState(null)

  const [userMatched, setUserMatched] = useState(null)
  const [completed, setCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  // Find the PDF when router is ready
  useEffect(() => {
    if (!id) return
    const found = pdfFiles.find((file) => file.id === id)
    setPdf(found)
  }, [id])

  // Fetch user and completed PDFs
  useEffect(() => {
    const fetchUser = async () => {
      if (!auth.currentUser) return
      const authUid = auth.currentUser.uid

      try {
        const querySnapshot = await getDocs(collection(db, 'users'))
        const allUsers = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        const currentUser = allUsers.find((u) => u.uid === authUid)
        setUserMatched(currentUser || { completedPdfs: [] })
        setCompleted(currentUser?.completedPdfs?.includes(id) || false)
      } catch (error) {
        console.error('Error fetching user:', error)
        setUserMatched({ completedPdfs: [] })
        setCompleted(false)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchUser()
  }, [id])

  // Toggle completed status
  const toggleCompleted = async () => {
    if (!userMatched?.id) return

    const completedArray = userMatched.completedPdfs || []
    let updatedCompleted

    if (completed) {
      // remove from completed
      updatedCompleted = completedArray.filter((pdfId) => pdfId !== id)
    } else {
      // add to completed
      updatedCompleted = [...completedArray, id]
    }

    try {
      const userRef = doc(db, 'users', userMatched.id)
      await updateDoc(userRef, { completedPdfs: updatedCompleted })
      setCompleted(!completed)
      toast.success(`Marked as ${!completed ? 'completed' : 'incomplete'}!`)
    } catch (error) {
      console.error('Error updating completion:', error)
      toast.error('Failed to update status')
    }
  }

  if (loading) return <LoadingScreen />
  if (!pdf) return <div className="py-12 text-center text-red-500">PDF not found</div>

  return (
    <div className="py-16 bg-[var(--bluebg)] min-h-screen">
      <BackHeader largeTitle={pdf.title} parentTitle={'Volver'} />
      <div className="mx-auto max-w-[800px] px-4 flex flex-col gap-4">
        <div className="flex items-center mx-auto rounded-md w-[280px] justify-center bg-white gap-3 mt-4">
          <Switch checked={completed} onChange={toggleCompleted} color="success" />
          <span className={`${completed ? 'text-green-700 font-semibold' : 'text-gray-700'}`}>
            Estado: {completed ? 'Completado ✅' : 'No Completado'}
          </span>
        </div>
        <PreviewPdf fileId={id} />
      </div>
    </div>
  )
}
