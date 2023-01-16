import React from 'react'
import { T1, T2, T3, T4 } from '../../components/Typography';

function About() {
  return (
    <div style={{marginTop: "200px", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <T1>About Me</T1>
      <T4>Hi! I'm Thomas Dickson, a third year Computer Science student at the University of Wollongong, NSW, Australia.</T4>
      <div className="skills" style={{display: "grid", gridAutoFlow: "column", columnGap: "100px"}}>
        <div className="languages">
          <T2>Languages</T2>
          <ul style={{color: "white"}}>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>MySQL</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="tech">
          <T2>Technologies/Frameworks</T2>
          <ul style={{color: "white"}}>
            <li>ReactJS</li>
            <li>MongoDB</li>
            <li>GitHub</li>
            <li>Figma</li>
            <li>Unix</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About