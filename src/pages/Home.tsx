import React from 'react';
import Header from '/components/Header';
import Footer from '/components/Footer';
import CalculatorCard from '../components/CalculatorCard';

const Home = () => {
  const tools = [
    { name: 'EMI Calculator', icon: '🧮', desc: 'Calculate loan payments' },
    { name: 'SIP Calculator', icon: '📈', desc: 'Mutual fund growth' },
    { name: 'Compound Interest', icon: '💸', desc: 'Investment growth' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-purple-600">Paylic</span> Financial Tools
          </h1>
          <p className="text-xl text-gray-600">
            Free calculators for smarter money decisions
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <CalculatorCard 
              key={index}
              icon={tool.icon}
              title={tool.name}
              description={tool.desc}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
