import React from 'react'
import styled from "styled-components";

import { T3, T4 } from './Typography';
import { IconContainer, Icon } from './Icons';
import { FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'

const Container = styled.footer`
    margin-top: 96px;
    margin-left: -24px;
    margin-right: -24px;
    
    height: 252px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #41e2ba;
    padding: 6px;
`

const IconCircle = styled.div`
    padding: 18px;
    display: flex;
    align-items: center;
    background-color: #2b2d42;
    border-radius: 24px;;
`

function Footer() {
  return (
    <Container>
      <T3>Find me at:</T3>
      <IconContainer>
        <IconCircle>
          <Icon href="https://github.com/ThomasDickson" target="_blank">
            <FiGithub size={30}/>
          </Icon>
        </IconCircle>
        <IconCircle>
        <Icon href="https://www.linkedin.com/in/thomas-dickson-6a4a0a229/" target="_blank">
          <FiLinkedin size={30}/>
        </Icon>
        </IconCircle>
        <IconCircle>
        <Icon href="https://instagram.com/tomdickson__" target="_blank">
          <FiInstagram size={30}/>
        </Icon>
        </IconCircle>
      </IconContainer>
      <T4>© Copyright 2023 Thomas Dickson. All Rights Reserved.</T4>
    </Container>
  )
}

export default Footer
