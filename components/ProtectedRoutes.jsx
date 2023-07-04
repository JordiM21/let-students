import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function ProtectedRoutes({ children }) {

  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/Login")
    }
  }, [router, user])

  return <>{user ? children : null}</>
}
