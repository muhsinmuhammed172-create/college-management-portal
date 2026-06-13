import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="bg-white shadow-md h-20 flex items-center justify-between px-10 sticky top-0 z-50">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="College Logo"
            className="h-10 w-10 object-contain"
          />

          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold text-red-900 leading-tight">
              KTM College
            </h1>

            <p className="text-xs md:text-sm text-gray-600">
              Science and Technology
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 font-medium text-gray-700">
            <li><a href="#about" className="hover:text-red-900 hover:scale-110 transition-all duration-300 inline-block">About Us</a></li>
            <Link to="/academics" className="hover:text-red-900 hover:scale-110 transition-all duration-300 inline-block"> Academics </Link>
            <li><a href="#" className="hover:text-red-900 hover:scale-110 transition-all duration-300 inline-block">Admissions</a></li>
            <li><a href="#contact" className="hover:text-red-900 hover:scale-110 transition-all duration-300 inline-block">Contact</a></li>
            <li className="relative group">
            <button className="hover:text-red-900">Login ▼</button>
            <div className="absolute right-0 top-full pt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block z-50">
              <a href="#" className="block px-4 py-3 hover:bg-gray-100">
                Student Login
              </a>
              <a href="#" className="block px-4 py-3 hover:bg-gray-100">
                Teacher Login
              </a>
            </div>
          </li>
        </ul>

    </nav>
  )
}

export default NavBar