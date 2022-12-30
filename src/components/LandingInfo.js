import React from 'react'
import { FiGithub } from 'react-icons/fi'

import { InfoContainer, T1, T2, T3, T4, Line, Icon } from './InfoComponents'

function LandingInfo() {
  return (
    <InfoContainer>
        <T2>Hi there,</T2>
        <T1>I'm Thomas Dickson</T1>
        <T3>Full-stack Developer</T3>
        <T4>I’m a Computer Science student at the University of Wollongong, Australia. 
            I’m <br/>passionate about writing beautiful code!
        </T4>
        <Line />
        <Icon href="https://github.com/ThomasDickson" target="_blank">
            <FiGithub size={30}/>
        </Icon>
    </InfoContainer>
  )
}

export default LandingInfo