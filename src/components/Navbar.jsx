import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-4 px-6 sm:px-8 backdrop-blur-lg bg-white/80 border-b border-gray-200 z-50 
      transition-shadow duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-xl font-semibold text-gray-800 transition-colors duration-300">
          Developer Tool
        </Link>

        <a
          href="https://github.com/IshantSomani/DeveloperTool"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
          aria-label="GitHub Repository"
        >
          <FiGithub className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium hidden sm:inline-block">GitHub</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar