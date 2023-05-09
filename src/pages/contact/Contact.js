import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

import { Button, Container, FormLabel, Heading, Input, Stack, Textarea } from '@chakra-ui/react'
import styled from 'styled-components'

const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

function Contact() {
  const form = useRef([]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    );

    e.target.reset();
  }

  return (
    <Container maxW='6xl' h='100vh' centerContent flexDirection='row'>
      <Form ref={form} onSubmit={sendEmail}>
        <Stack>
          <Heading fontSize='6xl'>Contact Me</Heading>
          <FormLabel fontSize='lg'>Name</FormLabel>
          <Input type="text" name="user_name"/>
          <FormLabel fontSize='lg'>Email Address</FormLabel>
          <Input type="email" name="user_email"/>
          <FormLabel fontSize='lg'>Message</FormLabel>
          <Textarea name="message"/>
          <Button type="submit">Send Message</Button>
        </Stack>
      </Form>
    </Container>
  )
}

export default Contact