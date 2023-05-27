import { AuthContextProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import NavBar from '@/components/NavBar.jsx'
import { useRouter } from 'next/router'
import ProtectedRoutes from '@/components/ProtectedRoutes'

const allowedUrl = ["/Login", "/Register"]

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <NavBar />
      {allowedUrl.includes(router.pathname) ? (
        < Component {...pageProps} />
      ) : (
        <ProtectedRoutes>
          < Component {...pageProps} />
        </ProtectedRoutes>
      )
      }
    </AuthContextProvider>

  )
}
