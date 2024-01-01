import Navbar from '@/components/Navbar'
import '../css/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import NextNProgress from 'nextjs-progressbar';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Homepage - Hussnain Ahmad',
  description: 'Porfolio of Hussnain Ahmad',
}

export default function RootLayout({ children }) {
  return (
    <html  data-theme="business" lang="en">
      <body>
        <NextTopLoader/>
    <Navbar/>
        
    {children}
    <Footer/>
      </body>
    </html>
  )
}
