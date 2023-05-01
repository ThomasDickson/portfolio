import React from 'react'
import styled from 'styled-components';
import { NavLink} from 'react-router-dom'
import { Link } from 'react-scroll'

import { Box, Button, ButtonGroup, Container, HStack, Heading } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io'

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
      <ButtonGroup>
        <Button as={Link} to="about-wrapper" spy={true} smooth={true} offset={-84} cursor='pointer'>About Me</Button>
        <Button as={Link} to="projects-wrapper" spy={true} smooth={true} offset={-84} cursor='pointer'>Projects</Button>
        <Button as={Link} to="contact-wrapper" spy={true} smooth={true} offset={-84} cursor='pointer'>Hire Me</Button>
      </ButtonGroup>
    )
  } else {
    menu = (
      <Icon to="/">
        <IoIosArrowBack size={40}/>
      </Icon>
    )
  }
  return (
    <Box as="nav" p={4} boxShadow="sm" position="fixed" w='100%' backgroundColor="white">
      <HStack spacing="10" justify="space-between">
        <Button
          variant="link"
          colorScheme="black" 
          as={Link} 
          to="landing-wrapper" 
          spy={true} 
          smooth={true} 
          offset={-84}
        >
          <Heading>thomasdickson.</Heading>
        </Button>
        {menu}
      </HStack>
    </Box>
  )
}

export default Navbar