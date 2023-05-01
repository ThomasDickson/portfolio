import React from 'react'

import { AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import { Box,  Container, Text, Stack, Icon, SimpleGrid, IconButton, Button} from '@chakra-ui/react';

function LandingInfo() {
  return (
    <Container maxW='6xl' h='100vh' centerContent flexDirection="row">
      <Stack>
        <Box>
          <Text fontSize='6xl'>Hi, I'm <b>Thomas Dickson.</b></Text>
          <Text fontSize='3xl'>Back-end developer and student.</Text>
          <br />
        </Box>
        <SimpleGrid columns={3} w='150px'>
          <Button 
            variant='none' 
            as='a' 
            href="https://github.com/ThomasDickson" 
            target="_blank"
            cursor='pointer'
            transition='all 1s cubic-bezier(.08,.52,.52,1)'

            _hover={{
              borderRadius: '100%',
              bg: '#ebedf0',
            }}
          >
            <Icon as={AiFillGithub} boxSize={8}/>
          </Button>
          <Button 
            variant='none' 
            as='a' 
            href="https://www.linkedin.com/in/thomas-dickson-6a4a0a229/" 
            target="_blank"
            cursor='pointer'
            transition='all 1s cubic-bezier(.08,.52,.52,1)'

            _hover={{
              borderRadius: '100%',
              bg: '#ebedf0',
            }}
          >
            <Icon as={AiFillLinkedin} boxSize={8}/>
          </Button>
          <Button 
            variant='none' 
            as='a' 
            href="https://instagram.com/tomdickson__" 
            target="_blank"
            cursor='pointer'
            transition='all 1s cubic-bezier(.08,.52,.52,1)'

            _hover={{
              borderRadius: '100%',
              bg: '#ebedf0',
            }}
          >
            <Icon as={AiFillInstagram} boxSize={8}/>
          </Button>
        </SimpleGrid>
      </Stack>
    </Container>
  )
}

export default LandingInfo