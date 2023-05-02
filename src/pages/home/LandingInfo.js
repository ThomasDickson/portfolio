import React from 'react'
import styled from 'styled-components';

import { FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'
import { IconContainer, Icon } from '../../components/Icons'
import { T1, T2, T3, T4 } from '../../components/Typography';

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    height: 50vh;
    width: 70%;

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
`

const Line = styled.hr`
    width: 100%;
    border: px inset;
    border-color: white;
`

const Portrait = styled.img`
    border-radius: 50%;
    height: 280px;
    margin-left: 50px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

function LandingInfo() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "flex-end"}}>
      <InfoContainer >
        <T2>Hi there,</T2>
        <T1>I'm Thomas Dickson!</T1>
        <T3>Software Developer</T3>
        <T4>I&#39;m a Computer Science student at the University of Wollongong, Australia and 
            I&#39;m <br/>passionate about writing beautiful code!
        </T4>
        <Line />
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
      </InfoContainer>
      {/*<Portrait src={portrait}/>*/}
    </div>
  )
}

export default LandingInfo