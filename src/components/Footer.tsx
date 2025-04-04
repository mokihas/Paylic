import React from 'react'
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className={`py-12 ${
      document.documentElement.classList.contains('dark') ?
      'bg-gray-800' : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                document.documentElement.classList.contains('dark') ?
                'bg-purple-600' : 'bg-purple-600'
              } text-white font-bold`}>
                P
              </div>
              <span className={`text-xl font-bold ${
                document.documentElement.classList.contains('dark') ?
                'text-white' : 'text-gray-800'
              }`}>
                PAYLIC
              </span>
            </div>
            <p className={`${
              document.documentElement.classList.contains('dark') ?
              'text-gray-400' : 'text-gray-600'
            }`}>
              Making finance simple for everyone.
            </p>
          </div>
          
          {/* Footer columns remain same but with dark mode text colors */}
          {/* ... */}
        </div>

        <div className={`border-t pt-8 text-center ${
          document.documentElement.classList.contains('dark') ?
          'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'
        }`}>
          © {new Date().getFullYear()} Paylic. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
