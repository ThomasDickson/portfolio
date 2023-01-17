import React from 'react'
import { Cards, Card, CardImage} from '../../components/Cards';
import { T2, T3, T4 } from '../../components/Typography';
import { OutlineButton } from '../../components/Buttons'
import { projects as data } from './ProjectData';
import { NavLink as Link } from 'react-router-dom';

function Projects() {
  return (
    <div style={{marginTop: "200px"}}>
      <T2>My Projects</T2>
      <T4>Below is a collection of my favourite projects I've developed over the years. Each project contains images as well as the languages and techniques used in development. </T4>
      <Cards>
        {data.map(post => {
          return (
            <Card key={post.id}>
              <CardImage src={post.image}/>
              <T3>{post.title}</T3>
              <T4>{post.brief}</T4>
              <OutlineButton as={Link} to={post.redir}>See more</OutlineButton>
            </Card>
          )
        })}
      </Cards>
    </div>
  )
}

export default Projects