import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { CTA } from '@/components/home/CTA'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
} 