import React from 'react'
import styled from 'styled-components';
import { NavLink} from 'react-router-dom'
import { Link } from 'react-scroll'

import { FilledButton, OutlineButton } from './Buttons';

import { IoIosArrowBack } from 'react-icons/io'

const Nav = styled.nav`
  background-color: #2b2d42;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
      display: none;
  }
`

const Logo = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;
  color: #41e2ba;
`

const Icon = styled(NavLink)`
  color: #41e2ba;

  /* Hover animation */
    &:hover {
        transition: 0.4s ease-in-out;
        transform: scale(1.1);
  }
`

function Navbar(props) {
  let menu;
  const showButtons = props.buttons;

  if(showButtons) {
    menu = (
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
    )
  } else {
    menu = (
      <Icon to="/">
        <IoIosArrowBack size={40}/>
      </Icon>
    )
  }
  return (
    <Nav>
      <Link to="landing-wrapper" spy={true} smooth={true} offset={-84}>
        <Logo to="/">thomasdickson.</Logo>
      </Link>
      {menu}
    </Nav>
    
  )
}

export default Navbar