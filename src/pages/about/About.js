import React, { useRef } from 'react'
import mha from '../../images/mbmgbmvgkbkvkdjtqxsg.png'

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
import { Box, Card, CardBody, CardFooter, Container, HStack, Heading, Image, SimpleGrid, Stack, Tag, TagLabel, Text } from '@chakra-ui/react';

function About() {
  const iconSize = useRef(window.innerWidth).current > 860 ? 85: 50;
  
  return (
    <Container maxW='6xl' h='100vh'>
      <Heading as='h2' fontSize='5xl'>About Me</Heading>
      <SimpleGrid columns={{base: 1, md: 2}}>
        <Box>
          <Text fontSize='xl'>Hi! I'm Thomas Dickson, a third year Computer Science student at the University of Wollongong, NSW, Australia.</Text>      
        </Box>
        <Box>
          <Heading as='h3' fontSize='3xl'>Languages</Heading>
          <SimpleGrid columns={{base: 3, md:6}} spacing={5} p={4}>
            <Box>
              <SiCplusplus size={iconSize}/>
              <Text>C++</Text>
            </Box>
            <Box>
                <SiHtml5 size={iconSize}/>
                <Text>HTML</Text>
            </Box>
            <Box>
                <SiCss3 size={iconSize}/>
                <Text>CSS</Text>
            </Box>
            <Box>
                <SiJavascript size={iconSize}/>
                <Text>JavaScript</Text>
            </Box>
            <Box>
              <SiJava size={iconSize}/>
              <Text>Java</Text>
            </Box>
            <Box>
              <SiPython size={iconSize}/>
              <Text>Python</Text>
            </Box>
          </SimpleGrid>
          <Heading as='h3' fontSize='3xl'>Technologies/Frameworks</Heading>
          <SimpleGrid columns={{base: 3, md:6}} spacing={5} p={4}>
            <Box>
              <SiReact size={iconSize}/>
              <Text>ReactJS</Text>
            </Box>
            <Box>
              <SiMysql size={iconSize}/>
              <Text>MySQL</Text>
            </Box>
            <Box>  
              <SiMongodb size={iconSize}/>
              <Text>MongoDB</Text>
            </Box>
            <Box>
              <SiGithub size={iconSize}/>
              <Text>GitHub</Text>
            </Box>
            <Box>
              <SiFigma size={iconSize}/>
              <Text>Figma</Text>
            </Box>
            <Box>
              <SiLinux size={iconSize}/>
              <Text>Linux/Unix</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      <Heading as='h3' fontSize='3xl'>Experience</Heading>
      
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
    </Container>
  )
}

export default About