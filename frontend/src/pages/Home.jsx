import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';
import HeroSection from '../components/HeroSection';
import Contact from '../components/Contact';

import img_college from '../assets/img_college.png';

function Home() {
  return (
    <div>

      <TopBar />
      <NavBar />

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${img_college})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-6">

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              KTM College of Science and Technology
            </h1>

            <p className="text-xl md:text-2xl mb-8">
              Excellence in Education, Innovation and Research
            </p>

            <div className="space-x-4">

              <button className="bg-red-900 hover:bg-red-800 px-8 py-3 rounded-lg font-semibold transition">
                Apply Now
              </button>

              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                Explore Programs
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Principal Section */}
      <HeroSection />

      {/* Contact Section */}
      <Contact />

    </div>
  );
}

export default Home;