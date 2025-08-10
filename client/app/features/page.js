import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Features } from '@/components/home/Features'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Features
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to build amazing applications
            </p>
          </div>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  )
} 