import React from 'react'
import principal from '../assets/principal.png'

const PrincipalMessage = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">

        <div className="flex flex-col lg:flex-row">

          {/* Left Side - Principal Image */}
          <div className="lg:w-1/3 bg-red-900 text-white flex flex-col items-center justify-center p-10">
            <img
              src={principal}
              alt="Principal"
              className="w-64 h-80 object-cover rounded-2xl shadow-lg border-4 border-white"
            />

            <h2 className="text-2xl font-bold mt-6">
              Prof. (Dr.) Arjun Menon
            </h2>

            <p className="text-gray-200 text-lg">
              Principal
            </p>

            <p className="text-center mt-4 text-sm text-gray-300">
              KTM College of Science and Technology
            </p>
          </div>

          {/* Right Side - Principal Message */}
          <div className="lg:w-2/3 p-10 md:p-14">

            <h1 className="text-4xl font-bold text-red-900 mb-6">
              Principal’s Message
            </h1>

            <p className="text-gray-700 text-lg leading-8 mb-5">
              Welcome to <span className="font-semibold">
              KTM College of Science and Technology
              </span>, a place where knowledge meets innovation,
              and dreams transform into achievements. It gives me
              immense pleasure to welcome students, parents, and
              visitors to our academic community.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-5">
              At KTM College, we believe education is not merely
              the accumulation of knowledge but the holistic
              development of an individual. Our institution is
              committed to nurturing young minds with academic
              excellence, ethical values, creativity, and
              leadership qualities required to thrive in today’s
              rapidly evolving world.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-5">
              We strive to provide a vibrant learning environment
              supported by experienced faculty, modern
              infrastructure, advanced laboratories, and a
              student-centered approach to education. Our mission
              is to empower students with confidence, technical
              skills, and determination to contribute meaningfully
              to society.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-5">
              We encourage students to think critically,
              innovate fearlessly, and embrace lifelong learning.
              Alongside academics, we focus on character building,
              leadership, teamwork, and professional ethics.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              At KTM College, every student is viewed as a future
              leader, innovator, and changemaker. Together,
              let us build a brighter future through education
              and excellence.
            </p>

            <blockquote className="border-l-4 border-red-900 pl-4 italic text-xl text-gray-800">
              “Education is the foundation upon which we build our future.”
            </blockquote>

            <div className="mt-8">
              <h3 className="font-bold text-xl text-red-900">
                Warm Regards,
              </h3>

              <p className="text-lg font-semibold text-gray-800">
                Prof. (Dr.) Arjun Menon
              </p>

              <p className="text-gray-600">
                Principal, KTM College of Science and Technology
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipalMessage