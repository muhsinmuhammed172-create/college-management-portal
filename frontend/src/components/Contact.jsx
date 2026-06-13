import React from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa'

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-400 text-lg">
            Get in touch with KTM College of Science and Technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-red-500">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-red-500 text-2xl" />
                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>
                  <p className="text-gray-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-2xl" />
                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>
                  <p className="text-gray-400">
                    info@ktmcollege.edu.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500 text-2xl" />
                <div>
                  <h3 className="font-semibold">
                    Address
                  </h3>
                  <p className="text-gray-400">
                    KTM College of Science and Technology,
                    Kozhikode, Kerala, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-red-500">
              Follow Us
            </h2>

            <p className="text-gray-400 mb-8">
              Stay connected through our social media platforms.
            </p>

            <div className="flex gap-5">

              <a
                href="#"
                className="bg-red-900 p-4 rounded-full hover:scale-110 transition"
              >
                <FaFacebookF size={22} />
              </a>

                <a
                href="https://www.instagram.com/muhsin_mobz?igsh=emlkMHZubHNuOXBm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-900 p-4 rounded-full hover:scale-110 transition"
                >
                <FaInstagram size={22} />
                </a>

              <a
                href="#"
                className="bg-red-900 p-4 rounded-full hover:scale-110 transition"
              >
                <FaLinkedinIn size={22} />
              </a>

              <a
                href="#"
                className="bg-red-900 p-4 rounded-full hover:scale-110 transition"
              >
                <FaYoutube size={22} />
              </a>

            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 mt-14 pt-8 text-center text-gray-500">
          © 2026 KTM College of Science and Technology.
          All Rights Reserved.
        </div>

      </div>
    </section>
  )
}

export default Contact