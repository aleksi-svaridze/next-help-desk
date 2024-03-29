import './globals.css'
import { Rubik } from 'next/font/google'
import Image from 'next/image'
import Logo from './components/dojo-logo.png'

// Components
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Help Desk',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <h1 className='capitalize flex items-center justify-center gap-x-3'>
          <Image width={70} quality={100} src={Logo} alt='help desk logo' />
          help desk
        </h1>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
