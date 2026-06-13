import React from "react";
import academicsData from "../data/academicsData";

import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";

const Academics = () => {
  return (
    <div>
      <TopBar />
      <NavBar />

      <section className="bg-gray-100 min-h-screen py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-red-900 mb-4">
              Academics
            </h1>

            <p className="text-gray-600 text-lg">
              Explore our departments and academic programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {academicsData.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  {dept.department}
                </h2>

                <ul className="space-y-3 text-gray-700">
                  {dept.courses.map((course, i) => (
                    <li key={i}>
                      • {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;