import React from 'react';
import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';


function Home() {
  return (
    <div>

      <TopBar />
      <NavBar />

      {/* Hero Section */}
      <section className="h-screen bg-blue-900 text-white flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            KTM College of Science and Technology
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Excellence in Education, Innovation and Research
          </p>

          <div className="space-x-4">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Apply Now
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
              Explore Courses
            </button>
          </div>
        </div>
      </section>

      {/* Rest of your sections... */}

    </div>
  );
}

export default Home;