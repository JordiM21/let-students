import { AuthContextProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import NavBar from '@/components/NavBar.jsx'
import { useRouter } from 'next/router'
import ProtectedRoutes from '@/components/ProtectedRoutes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';

const allowedUrl = ["/Login", "/"]

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <NavBar />
      <NextNProgress />
      <ToastContainer />
      {allowedUrl.includes(router.pathname) ? (
        <div className='md:pl-[50px]'>
          < Component  {...pageProps} />
        </div>
      ) : (
        <ProtectedRoutes>
          <div className='md:pl-[50px]'>
            < Component {...pageProps} />
          </div>
        </ProtectedRoutes>
      )
      }

    </AuthContextProvider>

  )
}
