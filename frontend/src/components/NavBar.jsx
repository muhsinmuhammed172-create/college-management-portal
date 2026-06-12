import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md h-20 flex items-center justify-between px-10">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
            <img
            src="/logo.png"
            alt="College Logo"
            className="h-12 w-12"
            />
            <h1 className="text-xl font-bold text-red-900">
            KTM College of Science and Technology
            </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 font-medium text-gray-700">
            <li><a href="#" className="hover:text-red-900">About Us</a></li>
            <li><a href="#" className="hover:text-red-900">Departments</a></li>
            <li><a href="#" className="hover:text-red-900">Students Login</a></li>
            <li><a href="#" className="hover:text-red-900">Teachers Login</a></li>
            <li><a href="#" className="hover:text-red-900">Contact</a></li>
        </ul>

    </nav>
  )
}

export default NavBar