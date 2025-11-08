import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import TestimonialsContact from './components/TestimonialsContact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black min-h-screen font-['Inter',sans-serif]">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <About />
        <TestimonialsContact />
      </main>
      <Footer />
    </div>
  )
}

export default App
