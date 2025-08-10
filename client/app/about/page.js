import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Code, Users, Zap, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About This Template
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Built for developers who want to focus on building, not setting up
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Modern Tech Stack
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Built with Next.js 14, Tailwind CSS, and Material-UI. This template 
                provides a solid foundation for modern web applications with the latest 
                technologies and best practices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Security First
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                JWT authentication, password hashing, OTP verification, and protected 
                routes ensure your application is secure from the ground up.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Fast Development
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Pre-built components, authentication system, and responsive design 
                let you focus on your core features instead of boilerplate code.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Community Driven
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Built for the hackathon community. Share, contribute, and help 
                others build amazing applications faster.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why This Template?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                <strong>Time-Saving:</strong> Skip the tedious setup process and jump straight into building your features. 
                This template includes authentication, database setup, email functionality, and responsive design out of the box.
              </p>
              <p>
                <strong>Production-Ready:</strong> Built with security, performance, and scalability in mind. 
                The code follows best practices and is ready for deployment.
              </p>
              <p>
                <strong>Customizable:</strong> Easy to modify and extend. All components are modular and well-documented, 
                making it simple to adapt to your specific needs.
              </p>
              <p>
                <strong>Modern:</strong> Uses the latest technologies and frameworks, ensuring your application 
                stays current and maintainable.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 