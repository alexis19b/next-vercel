import { MainLayout } from "../components/layouts/MainLayout"
import Link from "next/link"

export default function PricingPage () {
  return (
    <MainLayout>
    <h1>Pricing</h1>
    <h1 className='title'>
      ir a <Link href='/contact'>contact</Link>
    </h1>
    <p className='description'>
      Get started by editing {''}
      <code className='code'>pages/index.js</code>
    </p>
    </MainLayout>
  )
}
