import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-6 h-6 text-purple-600" />,
      title: "Email Us",
      details: "support@paylic.com",
      action: "mailto:support@paylic.com"
    },
    {
      icon: <FiPhone className="w-6 h-6 text-purple-600" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <FiMapPin className="w-6 h-6 text-purple-600" />,
      title: "Visit Us",
      details: "123 Finance Street, San Francisco, CA",
      action: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-purple-600">Paylic</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help!
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.action}
                className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-6">
                  <div className="mt-1">{method.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{method.title}</h3>
                    <p className="text-gray-600 mt-1">{method.details}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
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
      </main>

      <Footer />
    </div>
  );
};

export default Contact;