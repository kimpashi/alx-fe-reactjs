import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const appWrap = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(180deg,#f7f9fc,#ffffff)'
  }

  const contentWrap = {
    flex: 1,
    maxWidth: '1000px',
    width: '100%',
    margin: '24px auto',
    padding: '0 20px',
    boxSizing: 'border-box'
  }

  return (
    <BrowserRouter>
      <div style={appWrap}>
        <Navbar />
        <div style={contentWrap}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
