import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { I18nextProvider } from 'react-i18next';
import './App.css'
import i18n from './utils/i18n.ts'
import Navbar from './sections/navbar'
import Hero from './sections/hero'
import About from './sections/about'
import Skills from './sections/skills'
import Portfolio from './sections/portfolio'

const Experience = lazy(() => import('./sections/experience'))
const Education = lazy(() => import('./sections/education'))
const CV = lazy(() => import('./sections/cv'))
const Contact = lazy(() => import('./sections/contact'))
const Footer = lazy(() => import('./sections/footer'))

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking.current = false
        })
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
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
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <Navbar isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Portfolio />
        <Suspense fallback={<section />}>
          <Experience />
          <Education />
          <CV />
          <Contact />
          <Footer />
        </Suspense>
      </I18nextProvider>
    </div>
  )
}

export default App
