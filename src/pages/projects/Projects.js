import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, Container, Heading, Image, SimpleGrid, Stack, Text} from '@chakra-ui/react';

import { projects as data } from './ProjectData';


function Projects() {
  return (
    <Container maxW='6xl' minH='100vh' centerContent flexDirection='row'>
      <Stack>
        <Heading fontSize='6xl'>Projects</Heading>
        <Text></Text>
        <SimpleGrid 
          minChildWidth='320px' 
          spacing='12px'
        >
          {data.map(post => {
            return (
              <Card 
                key={post.id}
                variant='outline'
              >
                <CardBody>
                  <Stack>
                    <Image 
                      src={post.image}

                      borderRadius='lg'
                    />
                  
                    <Heading fontSize='2xl'>{post.title}</Heading>
                    <Text>{post.brief}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button 
                    variant='solid' 
                    as={Link} 
                    to={post.redir}
                  >
                    See more
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default Projects