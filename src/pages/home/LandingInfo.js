import React from 'react'
import styled from 'styled-components';

import { FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'
import { IconContainer, Icon } from '../../components/Icons'
import { Box, Heading, Text, Stack, Container, Divider } from '@chakra-ui/react';

function LandingInfo() {
  return (
    <Container maxW='7xl' h='2xl' centerContent flexDirection="row">
      <Stack>
        <Box>
          <Text fontSize='4xl'>Hi there!</Text>
          <Heading as='h1' size='4xl'>I'm Thomas Dickson!</Heading>
          <Heading as='h3' size='lg'>Software Developer</Heading>
          <Text fontSize='xl'>I&#39;m a Computer Science student at the University of Wollongong, Australia and 
              I&#39;m <br/>passionate about writing beautiful code!
          </Text>
          <br />
          <Divider />
        </Box>
        <IconContainer>
          <Icon href="https://github.com/ThomasDickson" target="_blank">
            <FiGithub size={30}/>
          </Icon>
          <Icon href="https://www.linkedin.com/in/thomas-dickson-6a4a0a229/" target="_blank">
            <FiLinkedin size={30}/>
          </Icon>
          <Icon href="https://instagram.com/tomdickson__" target="_blank">
            <FiInstagram size={30}/>
          </Icon>
        </IconContainer>
      </Stack>
      {/*<Portrait src={portrait}/>*/}
    </Container>
  )
}

export default LandingInfo