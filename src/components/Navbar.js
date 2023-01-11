import React from 'react'
import { Nav, 
         NavMenu,
         NavMenu2,
         Logo, 
} from './NavbarComponents';

import { FilledButton, OutlineButton } from './Buttons';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  return (
    <Nav>
      <Logo to="/">thomasdickson.</Logo>
      <NavMenu>
        <OutlineButton to="/about">about me</OutlineButton>
        <OutlineButton to="/projects">projects</OutlineButton>
        <FilledButton to="/contact">hire me</FilledButton>
      </NavMenu>
      <NavMenu2>
        <FiMenu size={32}/>
      </NavMenu2>
    </Nav>
  )
}

export default Navbar