import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Header = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <header className={`shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-purple-600' : 'bg-purple-600'} text-white font-bold text-xl`}>
            P
          </div>
          <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            PAYLIC
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-purple-600'}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-purple-600'}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-purple-600'}`}
          >
            Contact
          </Link>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </nav>

        <button className="md:hidden text-gray-500">
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header
