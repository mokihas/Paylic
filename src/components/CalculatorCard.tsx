import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CalculatorCard = ({ icon, title, description, href }: { icon: string, title: string, description: string, href: string }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all border ${ 
        document.documentElement.classList.contains('dark') ? 
        'bg-gray-800 border-gray-700' : 
        'bg-white border-gray-200'
      }`}
    >
      <div className={`text-5xl mb-4 w-20 h-20 rounded-2xl flex items-center justify-center ${
        document.documentElement.classList.contains('dark') ?
        'bg-gray-700' : 'bg-purple-100'
      }`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${
        document.documentElement.classList.contains('dark') ?
        'text-white' : 'text-gray-800'
      }`}>
        {title}
      </h3>
      <p className={`mb-4 ${
        document.documentElement.classList.contains('dark') ?
        'text-gray-300' : 'text-gray-600'
      }`}>
        {description}
      </p>
      <Link 
        to={href}
        className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-medium flex items-center"
      >
        Try Now →
      </Link>
    </motion.div>
  )
}

export default CalculatorCard
