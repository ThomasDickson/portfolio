import React from 'react'
import LandingInfo from './LandingInfo'
import About from '../about/About'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div className="home">
      <div id="landing-wrapper">
        <LandingInfo />
      </div>
      <div id="about-wrapper">
        <About />
      </div>
      <div id="projects-wrapper">
        <Projects />
      </div>
      <div id="contact-wrapper">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home