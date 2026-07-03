import { useState, useEffect, useCallback } from 'react'
import { I18nextProvider } from 'react-i18next';
import './App.css'
import i18n from './utils/i18n.ts'
import HeroBackground from './components/HeroBackground.tsx'
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

const SECTION_IDS = ['home', 'about', 'skills', 'portfolio', 'experience', 'education', 'contact']

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach(id => {
      const element = document.getElementById(id)
      if (!element) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      )
      observer.observe(element)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="app">
      <HeroBackground />
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      <Navbar isScrolled={isScrolled} activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <CV />
      <Contact />
      <Footer />
      </I18nextProvider>
    </div>
  )
}

export default App
