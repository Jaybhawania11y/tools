import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ZedBazaarInfo from './components/ZedBazaarInfo'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ZedBazaarInfo />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App