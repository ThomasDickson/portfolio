import React from 'react'
import styled from 'styled-components'
import RatingBar from '../../components/RatingBar';
import { Card } from '../../components/Cards';
import { T1, T2, T4} from '../../components/Typography';

const Grid = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 24px;

  @media only screen and (max-width: 860px) {
      grid-auto-flow: row;
      row-gap: 24px;
  }
`

function About() {
  return (
    <div style={{marginTop: "200px", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <T1>About Me</T1>
      <div className="text-box">
        <T4>Hi! <b>I'm Thomas Dickson, </b> a third year Computer Science student at the <b>University of Wollongong, NSW, Australia.</b></T4>
      </div>
      <Grid>
        <Card className="languages">
          <T2>Languages</T2>
          <RatingBar desc="C++" percent={"90%"}/>
          <RatingBar desc="HTML" percent={"90%"}/>
          <RatingBar desc="CSS" percent={"90%"}/>
          <RatingBar desc="JavaScript" percent={"75%"}/>
          <RatingBar desc="MySQL" percent={"70%"}/>
          <RatingBar desc="Java" percent={"60%"}/>
          <RatingBar desc="Python" percent={"20%"}/>
        </Card>
        <Card className="tech">
          <T2>Technologies/Frameworks</T2>
          <RatingBar desc="ReactJS" percent={"90%"}/>
          <RatingBar desc="Photoshop" percent={"90%"}/>
          <RatingBar desc="GitHub" percent={"90%"}/>
          <RatingBar desc="Figma" percent={"70%"}/>
          <RatingBar desc="Linux/Unix" percent={"60%"}/>
          <RatingBar desc="MongoDB" percent={"40%"}/>
          <RatingBar desc="Agile" percent={"40%"}/>
        </Card>
      </Grid>
    </div>
  )
}

export default About