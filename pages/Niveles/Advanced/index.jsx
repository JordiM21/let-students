import LoadingScreen from '@/components/LoadingScreen';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function index() {
  const router = useRouter()

  const [level, setLevel] = useState("")
  const [role, setRole] = useState("")

  const toastId = "customId"

  const { user } = useAuth();
  const [authUid, setAuthUid] = useState(user.uid)
  const fetchPost = async () => {
    await getDocs(collection(db, "users"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        const userMatched = newData.filter(item => item.uid == authUid);
        if (userMatched[0].level !== "Advanced") {
          router.push("/Niveles")
          toast.error("¡Ups! Parece que no eres aún nivel Avanzado.", {
            toastId,
          })
        }
        setLevel(userMatched[0].level);
        setRole(userMatched[0].role);
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])


  return (
    <>
      {
        level != "Advanced" &&
        (
          <LoadingScreen />
        )
      }
      <h1>Eres avanzado!</h1>
    </>
  )
}
