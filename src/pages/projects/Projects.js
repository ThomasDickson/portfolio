import React from 'react'
import styled from 'styled-components';

import { Cards, Card, CardImage} from '../../components/Cards';
import { T1, T3, T4 } from '../../components/Typography';
import { OutlineButton } from '../../components/Buttons'
import { projects as data } from './ProjectData';
import { NavLink as Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px auto;
  width: 70%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

function Projects() {
  return (
    <Container>
      <T1 style={{alignSelf: "center"}}>Projects</T1>
      <p/>
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
    </Container>
  )
}

export default Projects