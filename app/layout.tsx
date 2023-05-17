import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Profession from './pages/profession/Profession'
import Experience from './pages/experience/Experience'
import Contact from './pages/contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jovino Monterde',
  description: 'Front-End Wen Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
   
      </head>

      <body className={inter.className}>

        <Navbar />
        <Home />
        <About />
        <Profession />
        <Experience />
        <Contact />
     

        
        {children}
        
        </body>
    </html>
  )
}
