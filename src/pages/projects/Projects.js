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
       {/*
      <Heading as='h3' fontSize='5xl'>Experience</Heading>
        
        <Card
          direction='row'
          variant='outline'
        >
          <Image 
              maxW={{ base: '100%', sm: '200px' }}
              src={mha}
              alt='MediaHub Australia Logo'
          />
          <Stack>
            <CardBody>
              <Heading size='lg'>MediaHub Australia</Heading>
              <Heading size='md'>Junior Software Engineer</Heading>
              <Text size='md'>
                Building and maintaining a full-stack Python web application. Implementing C# and PHP scripts for broadcast tasks. 
              </Text>
            </CardBody>
            <CardFooter>
              <HStack spacing={4}>
                {['C#', 'Python', 'PHP', 'SQL', 'Unix'].map((content) => (
                  <Tag size='md' key={content} variant='subtle' colorScheme='blue'>
                    <TagLabel>{content}</TagLabel>
                  </Tag>
                ))}
              </HStack>
            </CardFooter>
          </Stack>
        </Card>
                */}
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