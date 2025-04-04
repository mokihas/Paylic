import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const Contact = () => {
  const contactMethods = [
    { icon: <FiMail className="w-6 h-6 text-purple-600" />, title: "Email Us", details: "support@paylic.com", action: "mailto:support@paylic.com" },
    { icon: <FiPhone className="w-6 h-6 text-purple-600" />, title: "Call Us", details: "+1 (555) 123-4567", action: "tel:+15551234567" },
    { icon: <FiMapPin className="w-6 h-6 text-purple-600" />, title: "Visit Us", details: "123 Finance Street, San Francisco, CA", action: "#" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className={`text-4xl font-bold mb-4 ${
          document.documentElement.classList.contains('dark') ?
          'text-white' : 'text-gray-900'
        }`}>
          Contact <span className="text-purple-600">Paylic</span>
        </h1>
        <p className={`text-xl max-w-3xl mx-auto ${
          document.documentElement.classList.contains('dark') ?
          'text-gray-300' : 'text-gray-600'
        }`}>
          Have questions? We're here to help!
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.action}
              className={`block p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${
                document.documentElement.classList.contains('dark') ?
                'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex items-start space-x-6">
                <div className="mt-1">{method.icon}</div>
                <div>
                  <h3 className={`text-xl font-semibold ${
                    document.documentElement.classList.contains('dark') ?
                    'text-white' : 'text-gray-800'
                  }`}>
                    {method.title}
                  </h3>
                  <p className={`mt-1 ${
                    document.documentElement.classList.contains('dark') ?
                    'text-gray-400' : 'text-gray-600'
                  }`}>
                    {method.details}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={`p-8 rounded-xl shadow-lg ${
          document.documentElement.classList.contains('dark') ?
          'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            document.documentElement.classList.contains('dark') ?
            'text-white' : 'text-gray-800'
          }`}>
            Send Us a Message
          </h2>
          <form className="space-y-6">
            {/* Form fields with dark mode styles */}
            {/* ... */}
            <button
              type="submit"
              className="flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              <FiSend className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
