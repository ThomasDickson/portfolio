import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar';

import { projects } from './ProjectData'
import { Box, Button, ButtonGroup, Card, CardBody, Container, Heading, Progress, SimpleGrid, Stack, Table, Text, Td, Tr } from '@chakra-ui/react';

function Project() {
  const url = useParams().url;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [alt, setImgAlt] = useState("");
  const [desc, setDesc] = useState("");
  const [git, setGit] = useState("");
  const [live, setLive] = useState("");
  const [langs, setLangs] = useState([]);
  
  useEffect(() => {
    function setData() {
      for(var i = 0; i < projects.length; i++) {
        var object = projects[i];

        if(object.redir === url) {
          setTitle(object.title);
          setImage(object.image);
          setImgAlt(object.alt);
          setDesc(object.desc);

          if(object.hasOwnProperty('git'))
            setGit(object.git);

          if(object.hasOwnProperty('live'))
            setLive(object.live)

          setLangs(object.langs);
        }
      }
    }
    setData();
  })  
  return (
    <div className="project">
      <Navbar buttons={false}/>
      <Container maxW='6xl' h='100vh' centerContent flexDirection='row'>
        <Stack>
          <Heading fontSize='4xl'>{title}</Heading>
          <SimpleGrid columns={{base: 1, md: 2}} gap='12px'>
            <Box>
              <Stack>
                <Text fontSize='md'>{desc}</Text>
                <Card variant='outline'>
                  <CardBody>
                    <Heading fontSize='2xl'>Development Languages</Heading>
                    <Table>
                    { // Render a Rating Bar for each language from JSON
                    langs.map(post => {
                      return (
                        <Tr>
                            <Td p={0}>
                              <Text>{post.lang}</Text>
                            </Td>
                            <Td w='100%'>
                              <Progress
                                value={post.level}
                                borderRadius='lg'
                                colorScheme='blackAlpha'
                              />
                            </Td>
                            <Td 
                              isNumeric 
                              alignItems='right'
                              p={0}>
                                <Text fontSize='sm'>{post.level}%</Text>
                            </Td>
                          </Tr>
                      )
                    })}
                    </Table>
                  </CardBody>
                </Card>
              <ButtonGroup>
                {git && (
                    <Button as={'a'} href={git} target="_blank">View source</Button>
                )}
                {live && (
                    <Button as={'a'} href={live} target="_blank">View live</Button>
                )}
              </ButtonGroup>
              </Stack>
            </Box>
            <img src={image} alt={alt} style={{width: "100%", borderRadius: "9px"}}/>
          </SimpleGrid>
        </Stack>
      </Container>
    </div>
  )
}

export default Project