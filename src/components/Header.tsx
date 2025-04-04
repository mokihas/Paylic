import React from 'react';
import { motion } from 'framer-motion';

const CalculatorCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-purple-600 font-medium hover:text-purple-800">
        Try Now →
      </button>
    </motion.div>
  );
};

export default CalculatorCard;