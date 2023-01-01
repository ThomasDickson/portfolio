import React from 'react'
import { Nav, 
         NavMenu,
         Logo, 
} from './NavbarComponents';


import { FilledButton, OutlineButton } from './Buttons';

function Navbar() {
  return (
    <Nav>
      <Logo to="/">thomasdickson.</Logo>
      <NavMenu>
        <OutlineButton to="/about">about me</OutlineButton>
        <OutlineButton to="/projects">projects</OutlineButton>
        <FilledButton to="/contact">hire me</FilledButton>
      </NavMenu>
    </Nav>
  )
}

export default Navbar