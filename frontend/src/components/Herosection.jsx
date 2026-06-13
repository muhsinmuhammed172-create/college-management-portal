import React from 'react'
import { Link } from 'react-router-dom'
import principal from '../assets/principal.png'

const HeroSection = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 py-16 px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side Image */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={principal}
            alt="Principal"
            className="rounded-3xl w-full shadow-lg"
          />

          {/* Name Box */}
          {/* <div className="absolute bottom-5 left-5 bg-red-700 text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="font-semibold text-lg">
              Prof. (Dr) Arjun Menon
            </p>
          </div> */}
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Welcome to KTM College!
          </h1>

          <p className="text-gray-700 mt-6 text-lg leading-8">
            Higher Education has progressively evolved over the years,
            and KTM College has lived up to its mission of producing
            competent individuals capable of meeting challenges in line
            with the growing needs of society.
          </p>

          <Link to="/principal-message">
            <button className="mt-8 text-red-700 font-semibold text-xl hover:underline">
                Read More →
            </button>
            </Link>
        </div>

      </div>
    </section>
  )
}

export default HeroSection