import React, { useRef } from 'react'
import styled from 'styled-components'

import RatingBar from '../../components/RatingBar';
import { Card } from '../../components/Cards';
import { T1, T2, T3, T4} from '../../components/Typography';

import { SiCplusplus, 
         SiJavascript, 
         SiHtml5, 
         SiCss3, 
         SiJava, 
         SiMysql, 
         SiPython,
         SiReact,
         SiGithub,
         SiFigma,
         SiMongodb,
         SiLinux } from 'react-icons/si'
import { IconContainer, IconCaption } from '../../components/Icons'

const Container = styled.div`
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DynamicContainer = styled(IconContainer)`
  @media only screen and (max-width: 860px) {
        grid-template-rows: 1fr 1fr;
  }
`

const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 24px;

  @media only screen and (max-width: 860px) {
      grid-auto-flow: row;
  }
`

function About() {
  const iconSize = useRef(window.innerWidth).current > 860 ? 85: 50;
  
  return (
    <Container>
      <T1>About Me</T1>
      <div className="text-box">
        <T4>Hi! <b>I'm Thomas Dickson, </b> a third year Computer Science student at the <b>University of Wollongong, NSW, Australia.</b></T4>
      </div>
      <Grid>
        <Card className="languages">
          <T2>Languages</T2>
          <DynamicContainer>
            <IconCaption>
              <SiCplusplus size={iconSize}/>
              <T4>C++</T4>
            </IconCaption>
            <IconCaption>
              <SiHtml5 size={iconSize}/>
              <T4>HTML</T4>
            </IconCaption>
            <IconCaption>
              <SiCss3 size={iconSize}/>
              <T4>CSS</T4>
            </IconCaption>
            <IconCaption>
              <SiJavascript size={iconSize}/>
              <T4>JavaScript</T4>
            </IconCaption>
            <IconCaption>
              <SiJava size={iconSize}/>
              <T4>Java</T4>
            </IconCaption>
            <IconCaption>
              <SiPython size={iconSize}/>
              <T4>Python</T4>
            </IconCaption>
          </DynamicContainer>
        </Card>
        <Card className="tech">
          <T2>Technologies/Frameworks</T2>
          <DynamicContainer>
            <IconCaption>
              <SiReact size={iconSize}/>
              <T4>ReactJS</T4>
            </IconCaption>
            <IconCaption>
              <SiMysql size={iconSize}/>
              <T4>MySQL</T4>
            </IconCaption>
            <IconCaption>
              <SiMongodb size={iconSize}/>
              <T4>MongoDB</T4>
            </IconCaption>
            <IconCaption>
              <SiGithub size={iconSize}/>
              <T4>GitHub</T4>
            </IconCaption>
            <IconCaption>
              <SiFigma size={iconSize}/>
              <T4>Figma</T4>
            </IconCaption>
            <IconCaption>
              <SiLinux size={iconSize}/>
              <T4>Linux/Unix</T4>
            </IconCaption>
          </DynamicContainer>
        </Card>
      </Grid>
    </Container>
  )
}

export default About