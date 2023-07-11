import AdminActivities from '@/components/AdminActivities';
import LoadingScreen from '@/components/LoadingScreen';
import StudentActivities from '@/components/StudentActivities';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Activities() {

  const router = useRouter()

  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const [allUsers, setAllUsers] = useState([])
  const [tutor, setTutor] = useState({})
  const [userMatched, setUserMatched] = useState({})

  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.find(item => item.uid == authUid);
        const tutorMatched = newData.find(item => item.uid == userMatched.asignedTutor)
        const allStudents = newData.filter(item => item.role == "Student")
        setTutor(tutorMatched)
        setAllUsers(allStudents)
        setUserMatched(userMatched)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <div className='bg-[var(--bluebg)] pb-20 h-full min-h-screen'>
      {
        userMatched.role != "Admin" && userMatched.role != "Student" &&
        (
          <LoadingScreen />
        )
      }
      {
        userMatched.role == "Admin" && (
          <AdminActivities
            allUsers={allUsers}
            userMatched={userMatched}
          />
        )
      }
      {
        userMatched.role == "Student" && (
          <StudentActivities
            tutor={tutor}
            userMatched={userMatched}
          />
        )
      }
    </div>
  )
}
