import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyPortfolio</span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link to="/Home" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white">Home</Link>
            </li>
            <li>
              <Link to="/skills" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white">Skills</Link>
            </li>
            <li>
              <Link to="/Projects" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white">Projects</Link>
            </li>
            <li>
              <Link to="/Contact" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white">Contact</Link>
            </li>
            <li>
              <Link to="/About" className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
