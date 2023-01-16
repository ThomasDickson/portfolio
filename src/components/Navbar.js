import React from 'react'
import { Nav, 
         NavMenu,
         NavMenu2,
         Logo, 
} from './NavbarComponents';

import { FilledButton, OutlineButton } from './Buttons';
import { FiMenu } from 'react-icons/fi'

import { Link } from 'react-scroll'


function Navbar() {
  return (
    <Nav>
      <Link to="landing-wrapper" spy={true} smooth={true} offset={-84}>
        <Logo to="/">thomasdickson.</Logo>
      </Link>
      <NavMenu>
      <Link to="about-wrapper" spy={true} smooth={true} offset={-84}>
        <OutlineButton>about me</OutlineButton>
      </Link>
      <Link to="projects-wrapper" spy={true} smooth={true} offset={-84}>
        <OutlineButton>projects</OutlineButton>
      </Link>
      <Link to="contact-wrapper" spy={true} smooth={true} offset={-84}>
        <FilledButton>hire me</FilledButton>
      </Link>
      </NavMenu>
      <NavMenu2>
        <FiMenu size={32}/>
      </NavMenu2>
    </Nav>
  )
}

export default Navbar