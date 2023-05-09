import React from 'react'

import { Box, Button, Icon, SimpleGrid, Stack, Text} from '@chakra-ui/react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <Box
      bgColor='black'
      height='30vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Stack alignItems='center'>
        <Text color='white' fontSize='xl'>Find me at:</Text>
        <SimpleGrid paddingTop='12px' columns={3} w='200px' spacing={10}>
          <Button
            variant='none' 
            as='a' 
            href="https://github.com/ThomasDickson" 
            target="_blank"
            cursor='pointer'
            transition='all 0.1s ease-in-out'

            _hover={{
            
            }}
          >
            <Icon
              as={AiFillGithub} 
              boxSize={8}
              color='white'
            />
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
            <Icon 
              as={AiFillLinkedin} 
              boxSize={8}
              color='white'
            />
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
            <Icon 
              as={AiFillInstagram} 
              boxSize={8}
              color='white'
            />
          </Button>
        </SimpleGrid>
        
        <Text color='white'>© Copyright 2023 Thomas Dickson. All Rights Reserved.</Text>
      </Stack>
    </Box>
  )
}

export default Footer
