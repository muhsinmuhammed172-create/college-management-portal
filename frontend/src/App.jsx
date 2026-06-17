import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from "./pages/Home"
import PrincipalMessage from './components/PrincipalMessage'
import Academics from "./pages/Academics"
import StudentLogin from "./pages/StudentLogin"
import TeacherLogin from "./pages/TeacherLogin"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Academics Page */}
        <Route path="/academics" element={<Academics />} />

        {/* Principal Message Page */}
        <Route
          path="/principal-message"
          element={<PrincipalMessage />}
        />
        {/* Student Login Page */}
        <Route path="/student-login" element={<StudentLogin />} />

        {/* Teacher Login Page */}
        <Route path="/teacher-login" element={<TeacherLogin />} />
        
      </Routes>
    </>
  )
}

export default App