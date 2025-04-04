import React from 'react'
import { FiCheckCircle, FiTrendingUp, FiShield, FiBook } from 'react-icons/fi'

const About = () => {
  const features = [
    { icon: <FiCheckCircle className="w-6 h-6 text-purple-600" />, title: "No Hidden Fees", desc: "All tools are completely free" },
    { icon: <FiTrendingUp className="w-6 h-6 text-purple-600" />, title: "Accurate Calculations", desc: "Bank-grade algorithms" },
    { icon: <FiShield className="w-6 h-6 text-purple-600" />, title: "Data Privacy", desc: "We never store your data" },
    { icon: <FiBook className="w-6 h-6 text-purple-600" />, title: "Educational Resources", desc: "Learn financial concepts" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className={`text-4xl font-bold mb-4 ${
          document.documentElement.classList.contains('dark') ?
          'text-white' : 'text-gray-900'
        }`}>
          About <span className="text-purple-600">Paylic</span>
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${
          document.documentElement.classList.contains('dark') ?
          'text-gray-300' : 'text-gray-600'
        }`}>
          We're revolutionizing financial planning through accessible technology
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className={`text-3xl font-bold mb-6 ${
            document.documentElement.classList.contains('dark') ?
            'text-white' : 'text-gray-800'
          }`}>
            Our Mission
          </h2>
          <p className={`mb-8 leading-relaxed ${
            document.documentElement.classList.contains('dark') ?
            'text-gray-300' : 'text-gray-700'
          }`}>
            Founded in 2023, Paylic was born from a simple idea: financial tools should be free, 
            easy to use, and available to everyone.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-sm ${
                document.documentElement.classList.contains('dark') ?
                'bg-gray-800' : 'bg-white'
              }`}>
                <div className="flex items-start space-x-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      document.documentElement.classList.contains('dark') ?
                      'text-white' : 'text-gray-800'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`mt-1 ${
                      document.documentElement.classList.contains('dark') ?
                      'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-8 rounded-xl shadow-lg ${
          document.documentElement.classList.contains('dark') ?
          'bg-gray-800' : 'bg-white'
        }`}>
          {/* ... */}
        </div>
      </div>
    </div>
  )
}

export default About
