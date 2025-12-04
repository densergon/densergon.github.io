import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './sections/navbar'
import Hero from './sections/hero'
import About from './sections/about'
import Skills from './sections/skills'
import Portfolio from './sections/portfolio'
import Experience from './sections/experience'
import Education from './sections/education'
import CV from './sections/cv'
import Contact from './sections/contact'
import Footer from './sections/footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Navbar isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <CV />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
