import LoadingScreen from '@/components/LoadingScreen';
import { db } from '@/config/firebase';
import { useAuth } from '@/context/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Image from 'next/image'
import image1 from '@/public/intermediate-cover.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function index() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/Dashboard">
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/Niveles"

    >
      Levels
    </Link>,
    <Typography
      key="3"
      color="text.primary">
      Intermediate
    </Typography>,
  ];
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
        if (userMatched[0].level == "Beginner") {
          router.push("/Niveles")
          toast.error("¡Ups! Parece que no eres aún nivel Intermediate.", {
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
    <div>
      {
        level != "Intermediate" || level !== "Advanced" &&
        (
          <LoadingScreen />
        )
      }
      <div>
        <div className='max-w-3xl mx-auto bg-[var(--color3Shadow)]'>
          <Image src={image1} className='w-full h-48 md:h-72 object-cover' />
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </div>
      </div></div>
  )

}

