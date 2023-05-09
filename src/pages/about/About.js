import React, { useRef } from 'react'
//import mha from '../../images/mha.png'

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
  const iconSize = useRef(window.innerWidth).current > 860 ? 80: 40;
  
  return (
    <Container maxW='6xl' minH='100vh' centerContent flexDirection="row">
      <Box>
        <Heading as='h2' fontSize='6xl'>About Me</Heading>
        <Stack>
          <Box>
            <Text fontSize='xl'>
              Hi! I'm Thomas Dickson, a third year Computer Science 
              student at the University of Wollongong, NSW, Australia. 
              My interests include UI/UX design, machine learning, 
              artificial intelligence and natural language processing.
            </Text>      
          </Box>
          <Card
            variant='outline'
          >
            <CardBody>
              <Stack>
                <Heading as='h3' fontSize='3xl'>Languages</Heading>
                <SimpleGrid columns={{base: 3, md: 6}} spacing='12px'>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                    <SiCplusplus size={iconSize}/>
                    <Text fontSize='lg'>C++</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                    <SiPython size={iconSize}/>
                    <Text fontSize='lg'>Python</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                      <SiHtml5 size={iconSize}/>
                      <Text fontSize='lg'>HTML</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                      <SiCss3 size={iconSize}/>
                      <Text fontSize='lg'>CSS</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                      <SiJavascript size={iconSize}/>
                      <Text fontSize='lg'>JavaScript</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                    <SiJava size={iconSize}/>
                    <Text fontSize='lg'>Java</Text>
                  </Box>
                </SimpleGrid>
                <Heading as='h3' fontSize='3xl'>Technologies/Frameworks</Heading>
                <SimpleGrid columns={{base: 3, md: 6}} spacing='12px'>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'
                    
                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                    <SiReact size={iconSize}/>
                    <Text fontSize='lg'>ReactJS</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{ 
                      bgColor:'gray.100'
                    }}
                  >
                    <SiMysql size={iconSize}/>
                    <Text fontSize='lg'>MySQL</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  > 
                    <SiMongodb size={iconSize}/>
                    <Text fontSize='lg'>MongoDB</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                    <SiGithub size={iconSize}/>
                    <Text fontSize='lg'>GitHub</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                    <SiFigma size={iconSize}/>
                    <Text fontSize='lg'>Figma</Text>
                  </Box>
                  <Box
                    p='12px'
                    borderRadius='lg'
                    display='flex' 
                    flexDirection='column' 
                    alignItems='center' 
                    justifyContent='center'
                    transition='all 0.2s ease-in-out'
                    gap='12px'

                    _hover={{
                      bgColor:'gray.100'
                    }}
                  >
                    <SiLinux size={iconSize}/>
                    <Text fontSize='lg'>Linux/Unix</Text>
                  </Box>
                </SimpleGrid>
              </Stack>
            </CardBody>
          </Card>
        {/*
          <Heading as='h3' fontSize='5xl'>Experience</Heading>
        
        <Card
          direction='row'
          variant='outline'
        >
          <Image
            maxW={{ base: '100%'}}
            maxH={{ base: '100%'}}
            src={mha}
            alt='MediaHub Australia Logo'
          />
          <Stack>
            <CardBody>
              <Heading size='lg'>MediaHub Australia</Heading>
              <Heading size='md'>Junior Software Engineer</Heading>
              <Text size='sm' color='GrayText'>March 2023 - Present</Text>
              <Text fontSize='xl'>
                Building and maintaining a full-stack Python web application. 
                Implementing C# and PHP scripts for broadcast tasks. 
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
        </Stack>
      </Box>
    </Container>
  )
}

export default About