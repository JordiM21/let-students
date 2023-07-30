import AdminActivities from '@/components/AdminActivities';
import LoadingScreen from '@/components/LoadingScreen';
import StudentActivities from '@/components/StudentActivities';
import withUserData from '@/components/WithUserData';
import React from 'react'

const Activities = ({ tutor, allUsers, userData }) => {
  if (!userData) {
    return <LoadingScreen />;
  }

  return (
    <div className='bg-[var(--bluebg)] pb-20 h-full min-h-screen'>
      {
        userData.role == "Admin" && (
          <AdminActivities
            allUsers={allUsers}
            userMatched={userData}
          />
        )
      }
      {
        userData.role == "Student" && (
          <StudentActivities
            tutor={tutor}
            userMatched={userData}
          />
        )
      }
    </div>
  )
}

export default withUserData(Activities)