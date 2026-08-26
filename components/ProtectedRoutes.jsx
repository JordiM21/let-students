import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function ProtectedRoutes({ children }) {

  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/Login")
    }
  }, [router, user, loading])

  return <>{user ? children : null}</>
}
