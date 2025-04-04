import React from 'react'
import { motion } from 'framer-motion'
import CalculatorCard from '../components/CalculatorCard'

const Home = () => {
  const tools = [
    { name: 'EMI Calculator', icon: '🧮', desc: 'Calculate loan repayments with amortization', href: '/emi-calculator' },
    { name: 'SIP Calculator', icon: '📈', desc: 'Project mutual fund investment growth', href: '/sip-calculator' },
    { name: 'Compound Interest', icon: '💸', desc: 'See how your money grows over time', href: '/compound-interest' },
  ]

  return (
    <>
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 dark:text-white"
        >
          <span className="text-purple-600">Paylic</span> Financial Tools
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto dark:text-gray-300"
        >
          Free calculators for smarter money decisions
        </motion.p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <CalculatorCard 
            key={index}
            icon={tool.icon}
            title={tool.name}
            description={tool.desc}
            href={tool.href}
          />
        ))}
      </div>
    </>
  )
}

export default Home
