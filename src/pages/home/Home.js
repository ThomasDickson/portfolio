import React, { useRef } from 'react'
import LandingInfo from './LandingInfo'
import About from '../about/About'
import Projects from '../projects/Projects'


function Home() {
  return (
    <div className="home">
      <div id="landing-wrapper">
        <LandingInfo />
      </div>
      <div id="about-wrapper">
        <About id="about"/>
      </div>
      <div id="projects-wrapper">
        <Projects />
      </div>
    </div>
  )
}

export default Home