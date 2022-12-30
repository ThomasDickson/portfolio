import React from 'react'
import { Nav, 
         NavMenu,
         Logo, 
         OutlineButton, 
         FilledButton 
} from './NavbarComponents'

function Navbar() {
  return (
    <Nav>
      <Logo>thomasdickson.</Logo>
      <NavMenu>
        <OutlineButton to="/about">about me</OutlineButton>
        <OutlineButton to="/projects">projects</OutlineButton>
        <FilledButton to="/contact">hire me</FilledButton>
      </NavMenu>
    </Nav>
  )
}

export default Navbar