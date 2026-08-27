import { useEffect } from 'react'
import { AuthContextProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import ProtectedRoutes from '@/components/ProtectedRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import { Fredoka, Karla } from 'next/font/google'
import { initFacebookPixel, trackPageView } from '@/config/fbpixel'

const fredoka = Fredoka({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-fredoka' })
const karla = Karla({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-karla' })

const allowedUrl = ['/Login', '/', '/Info', '/verify', '/verify/[id]', '/advices', '/advices/[slug]']// new added allowed URLs that don't require authentication

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
      <div className={`${fredoka.variable} ${karla.variable}`}>
      <Head>
        <title>LET Junior | Curso de Inglés para Niños</title>
        <meta
          name="description"
          content="Aprende inglés con LET Junior (LET Academy), la plataforma diseñada para niños. Clases divertidas, juegos interactivos y progreso real con profesores expertos. ¡Comienza hoy!"
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
      </div>
    </AuthContextProvider>
  )
}
