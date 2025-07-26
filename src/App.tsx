import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Explore from './pages/Explore'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  )
}

export default App