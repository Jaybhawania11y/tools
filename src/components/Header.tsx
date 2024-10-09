import React, { useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Download className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold text-gray-800">YTShorts Downloader</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Zed Bazaar</a></li>
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Zed Bazaar</a></li>
            <li><a href="#features" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Features</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>How It Works</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-blue-600" onClick={toggleMenu}>FAQ</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header