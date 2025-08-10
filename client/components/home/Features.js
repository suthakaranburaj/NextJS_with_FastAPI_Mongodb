'use client'

import { useState } from 'react'
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Palette, 
  Database, 
  Code, 
  Users, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

export function Features() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      id: 0,
      title: 'Authentication',
      description: 'Complete user authentication system with JWT and OTP verification main branch changes',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      features: [
        'JWT-based authentication',
        'Email OTP verification',
        'Password hashing with bcrypt',
        'Protected routes middleware',
        'Session management',
        'Social login ready'
      ]
    },
    {
      id: 1,
      title: 'Modern UI/UX',
      description: 'Beautiful, responsive design with dark/light theme support and Material-UI components',
      icon: Palette,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Responsive design',
        'Dark/light theme toggle',
        'Material-UI components',
        'Smooth animations',
        'Modern icons',
        'Accessibility compliant'
      ]
    },
    {
      id: 2,
      title: 'Performance',
      description: 'Optimized for speed and scalability with Next.js 14 features',
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Next.js 14 App Router',
        'Server-side rendering',
        'Static generation',
        'Image optimization',
        'Code splitting',
        'Performance monitoring main branch changes'
      ]
    },
    {
      id: 3,
      title: 'Developer Experience',
      description: 'Clean code structure and comprehensive documentation',
      icon: Code,
      color: 'from-orange-500 to-red-600',
      features: [
        'TypeScript ready',
        'ESLint configuration',
        'Prettier formatting',
        'Component library',
        'API documentation',
        'Deployment guides'
      ]
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              build amazing apps
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive template includes all the essential features and components 
            you need to create production-ready applications in record time.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tab Navigation */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                    activeTab === index
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                      activeTab === index 
                        ? 'text-blue-500 transform translate-x-1' 
                        : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                    }`} />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feature Content */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeTab].color} flex items-center justify-center shadow-lg mr-4`}>
                  {(() => {
                    const Icon = features[activeTab].icon
                    return <Icon className="w-8 h-8 text-white" />
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {features[activeTab].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ready to get started?
                    </p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Start building today
                    </p>
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <Rocket className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            More amazing features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Database Ready',
                description: 'MongoDB integration with Mongoose ODM for data persistence',
                color: 'from-emerald-500 to-teal-600'
              },
              {
                icon: Smartphone,
                title: 'Mobile First',
                description: 'Responsive design that works perfectly on all devices',
                color: 'from-indigo-500 to-purple-600'
              },
              {
                icon: Users,
                title: 'User Management',
                description: 'Complete user profile and account management system',
                color: 'from-pink-500 to-rose-600'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 