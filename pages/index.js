import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <a href='/Register'>Register</a>
      <a href='/Login'>Login</a>
    </>
  )
}
