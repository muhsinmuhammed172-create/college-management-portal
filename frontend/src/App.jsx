import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import PrincipalMessage from './components/PrincipalMessage';

function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Principal Message Page */}
      <Route
        path="/principal-message"
        element={<PrincipalMessage />}
      />

    </Routes>
  )
}

export default App