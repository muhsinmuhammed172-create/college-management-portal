import React, { useState } from "react";
import { Link } from "react-router-dom";

const TeacherLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-red-900 mb-6">
          Teacher Login
        </h1>

        <form className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Teacher ID
            </label>

            <input
              type="text"
              placeholder="Enter Teacher ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-16"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-red-900 font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-gray-700">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-800"
          >
            Login
          </button>

        </form>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link
            to="/"
            className="text-red-900 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
};

export default TeacherLogin;