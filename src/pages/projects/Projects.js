import React from 'react'
import { Cards, Card, CardImage} from './ProjectComponents'
import { T2, T3, T4 } from '../../components/Typography';
import { OutlineButton } from '../../components/Buttons'

import flydream from '../../images/flydream.png';
import khxmas from '../../images/karandharvey.png';
import fk from '../../images/fastkeys.png';

const data = [
  {
    id: 1,
    title: "FlyDreamAir Website",
    brief: "An interactive, full-stack website for an airline developed using ReactJS and Google's Firebase.",
    image: flydream,
    alt: "FlyDreamAir Website Image",
    redir: "/projects/flydreamair"
  },
  {
    id: 2,
    title: "Kara and Harvey's Xmas Adventure",
    brief: "A 2D Adventure game created using Godot Engine and GDScript.",
    image: khxmas,
    alt: "Kara and Harvey's Xmas Adventure Image",
    redir: "/projects/kara-and-harvey-adventure"
  },
  {
    id: 3,
    title: "fast-keys",
    brief: "A static typing speed test site developed using HTML, CSS, and JavaScript",
    image: fk,
    alt: "fast-keys Website Image",
    redir: "/projects/fast-keys"
  }
]

function Projects() {
  return (
    <>
      <T2>My Projects</T2>
      <T4>Below is a collection of my favourite projects I've developed over the years. Each project contains images as well as the languages and techniques used in development. </T4>
      <Cards>
        {data.map(post => {
          return (
            <Card key={post.id}>
              <CardImage src={post.image}/>
              <T3>{post.title}</T3>
              <T4>{post.brief}</T4>
              <OutlineButton to={post.redir}>See more</OutlineButton>
            </Card>
          )
        })}
      </Cards>
    </>
  )
}

export default Projects