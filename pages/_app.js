import { AuthContextProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import NavBar from '@/components/NavBar.jsx'
import { useRouter } from 'next/router'
import ProtectedRoutes from '@/components/ProtectedRoutes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar';

const allowedUrl = ["/Login", "/", "/Info"]

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      {/* <NextNProgress /> */}
      <ToastContainer />
      {allowedUrl.includes(router.pathname) ? (
        <div className=''>
          < Component  {...pageProps} />
        </div>
      ) : (
        <ProtectedRoutes>
          <NavBar />
          <div className='md:pl-[50px]'>
            < Component {...pageProps} />
          </div>
        </ProtectedRoutes>
      )
      }

    </AuthContextProvider>

  )
}
