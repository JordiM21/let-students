import { db } from '@/config/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function () {
  const [user, setUser] = useState({})

  const router = useRouter()
  const id = router.query.id

  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.find(item => item.id == id);
        setUser(userMatched)
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  console.log(user)
  return (
    <div>
      <h1>{user.firstName}</h1>
      <p>{user.lastName}</p>
      <p>level: {user.level}</p>
      <p>phone: {user.phone}</p>
      <p>plan: {user.plan}</p>
      <p>id: {user.id}</p>
      <p>uid: {user.uid}</p>
      <p>This page will be modifyable</p>
    </div>
  )
}
