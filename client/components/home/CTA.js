'use client'

import Link from 'next/link'
import { ArrowRight, Star, Users, Zap, Sparkles } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
            <Sparkles className="w-4 h-4 text-white mr-2" />
            <span className="text-sm font-medium text-white">
              🚀 Join thousands of developers
            </span>
          </div>

          {/* Main Content */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to build something
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              amazing?
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start your next project with our comprehensive template. 
            Everything you need to build, deploy, and scale your application.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
                <Star className="w-8 h-8 mr-2 text-yellow-300" />
                1000+
              </div>
              <div className="text-blue-100">Happy Developers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
                <Zap className="w-8 h-8 mr-2 text-yellow-300" />
                500+
              </div>
              <div className="text-blue-100">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
                <Users className="w-8 h-8 mr-2 text-yellow-300" />
                24/7
              </div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/register"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <a
              href="https://github.com/suthakaranburaj/Nextjs_javascript_template"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Full Stack Developer",
                content: "This template saved me hours of setup time. The authentication system is rock solid!",
                rating: 5
              },
              {
                name: "Alex Rodriguez",
                role: "Startup Founder",
                content: "Perfect for rapid prototyping. We built our MVP in just 2 days using this template.",
                rating: 5
              },
              {
                name: "Emily Watson",
                role: "UI/UX Designer",
                content: "The design system is beautiful and the dark mode implementation is flawless.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                  ))}
                </div>
                <p className="text-blue-100 mb-4 text-sm">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-blue-200 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="mt-12">
            <p className="text-blue-100 text-sm">
              No credit card required • Free forever • Open source
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 