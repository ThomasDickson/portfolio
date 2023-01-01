import React from 'react'
import { Nav, 
         NavMenu,
         Logo, 
} from './NavbarComponents';


import { FilledButton, OutlineButton } from './Buttons';

function Navbar() {
  return (
    <Nav>
      <Logo to="/portfolio/">thomasdickson.</Logo>
      <NavMenu>
        <OutlineButton to="/portfolio/about">about me</OutlineButton>
        <OutlineButton to="/portfolio/projects">projects</OutlineButton>
        <FilledButton to="/portfolio/contact">hire me</FilledButton>
      </NavMenu>
    </Nav>
  )
}

export default Navbar