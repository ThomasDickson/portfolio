import React from 'react'
import { Cards, Card, CardImage} from './ProjectComponents'
import { T2, T3, T4 } from '../../components/Typography';
import { OutlineButton } from '../../components/Buttons'

import flydream from '../../images/flydream.png';
import khxmas from '../../images/karandharvey.png';
import fk from '../../images/fastkeys.png';

function Projects() {
  return (
    <>
      <T2>My Projects</T2>
      <T4>Below is a collection of my favourite projects I've developed over the years. Each project contains images as well as the languages and techniques used in development. </T4>
      <Cards>
        <Card>
          <CardImage src={flydream} alt="Fly Dream Air Image"/>
          <T3>FlyDreamAir Website</T3>
          <T4>An interactive, full-stack website for an airline developed using ReactJS and Google's Firebase.</T4>
          <OutlineButton>See more</OutlineButton>
        </Card>
        <Card>
          <CardImage src={khxmas} alt="Kara and Harvey's Xmas Adventure Image"/>
          <T3>Kara and Harvey's Xmas Adventure</T3>
          <T4>A 2D Adventure game created using Godot Engine and GDScript.</T4>
          <OutlineButton>See more</OutlineButton>
        </Card>
        <Card>
          <CardImage src={fk} alt="fast-keys Image"/>
          <T3>fast-keys</T3>
          <T4>A static typing speed test site developed using HTML, CSS, and JavaScript</T4>
          <OutlineButton>See more</OutlineButton>
        </Card>
      </Cards>
    </>
  )
}

export default Projects