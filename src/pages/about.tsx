import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      
        <h1>About</h1>
        <h1 className='title'>
          ir a <Link href='/contact'>contact</Link>
        </h1>
        <p className='description'>
          Get started by editing {''}
          <code className='code'>pages/index.js</code>
        </p>
      
  </>
  )
}

AboutPage.getLayout = function getLayout(page:ReactNode): ReactNode {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}