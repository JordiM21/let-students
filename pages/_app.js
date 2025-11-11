import { useEffect } from 'react'
import { AuthContextProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import ProtectedRoutes from '@/components/ProtectedRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import { initFacebookPixel, trackPageView } from '@/config/fbpixel'

const allowedUrl = ['/Login', '/', '/Info']

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    initFacebookPixel()
    trackPageView()
  }, [])

  useEffect(() => {
    const handleRouteChange = () => trackPageView()
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

      <ToastContainer />
      {allowedUrl.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoutes>
          <Component {...pageProps} />
        </ProtectedRoutes>
      )}
    </AuthContextProvider>
  )
}
