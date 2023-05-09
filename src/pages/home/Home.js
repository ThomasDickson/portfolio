import React from 'react'
import LandingInfo from './LandingInfo'
import About from '../about/About'
import Projects from '../projects/Projects'
import Contact from '../contact/Contact'
import Navbar from '../../components/Navbar'

import { Stack } from '@chakra-ui/react'

function Home() {
  return (
    <Stack className="home">
      <Navbar buttons={true}/>
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
    </Stack>
  )
}

export default Home