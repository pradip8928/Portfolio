import React from 'react'
import HeroSection from '../components/HeroSection'
import About from './About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <>

      <HeroSection />
      <main id='main'>
        <About />
        <Skills />
       <Projects />
      </main>

    </>
  )
}

export default Home