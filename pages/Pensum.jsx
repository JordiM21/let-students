import BackHeader from '@/components/BackHeader'
import LoadingScreen from '@/components/LoadingScreen'
import withUserData from '@/components/WithUserData'
import React, { useState } from 'react'

const Pensum = ({ userData, tutor }) => {
    if (!userData) {
        return <LoadingScreen />
      }
  const [userMatched, setUserMatched] = useState(userData)

  return (
    <>
      <BackHeader largeTitle={'Pensum de Actividades'} parentTitle={'Volver'} />
      <div className="bg-[var(--bluebg)] h-full min-h-screen shadow-2xl mx-auto py-24 md:pb-0">
        <div className="w-11/12 mx-auto md:w-[500px]">
          <iframe
            src="https://drive.google.com/file/d/1x4AbbmCCZpDigqdr4dEUy_Muj0pitFUK/preview"
            className="w-full h-[600px] rounded-md"
            title="PDF Viewer"
          />
        </div>
      </div>
    </>
  )
}

export default withUserData(Pensum)
