import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import GallerySection from './components/GallerySection'
import ReservationForm from './components/ReservationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MenuSection />
      <GallerySection />
      <ReservationForm />
      <Footer />
    </div>
  )
}

export default App