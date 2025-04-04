import React from 'react';
import Header from '/components/Header';
import Footer from '/components/Footer';
import { FiCheckCircle, FiTrendingUp, FiShield, FiBook } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCheckCircle className="w-6 h-6 text-purple-600" />,
      title: "No Hidden Fees",
      desc: "All our tools are completely free with no upsells"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-purple-600" />,
      title: "Accurate Calculations",
      desc: "Bank-grade algorithms for precise results"
    },
    {
      icon: <FiShield className="w-6 h-6 text-purple-600" />,
      title: "Data Privacy",
      desc: "We never store your personal financial data"
    },
    {
      icon: <FiBook className="w-6 h-6 text-purple-600" />,
      title: "Educational Resources",
      desc: "Learn financial concepts with our guides"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-purple-600">Paylic</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing financial planning through accessible technology
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Founded in 2023, Paylic was born from a simple idea: financial tools should be free, 
              easy to use, and available to everyone. We combine cutting-edge technology with 
              financial expertise to simplify complex calculations.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-100 to-blue-50 rounded-lg overflow-hidden">
              <div className="h-full flex items-center justify-center text-purple-600">
                <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
