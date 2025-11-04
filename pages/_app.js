import { useEffect } from 'react'
import { AuthContextProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import NavBar from '@/components/NavBar.jsx'
import { useRouter } from 'next/router'
import ProtectedRoutes from '@/components/ProtectedRoutes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import NextNProgress from 'nextjs-progressbar'
import Head from 'next/head'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // 👈 This ensures text appears immediately
})

const allowedUrl = ['/Login', '/', '/Info']

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-P7YLPBXYJS', {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <AuthContextProvider>
      <Head>
        <title>LET Students | Curso de Inglés para Niños</title>
        <meta
          name="description"
          content="Aprende inglés con LET Students, la plataforma diseñada para niños. Clases divertidas, juegos interactivos y progreso real con profesores expertos. ¡Comienza hoy!"
        />
      </Head>

      {/* <NextNProgress /> */}
      <ToastContainer />
      {allowedUrl.includes(router.pathname) ? (
        <div className="">
          <Component {...pageProps} />
        </div>
      ) : (
        <ProtectedRoutes>
          {/* <NavBar /> */}
          <div className="">
            <Component {...pageProps} />
          </div>
        </ProtectedRoutes>
      )}
    </AuthContextProvider>
  )
}
