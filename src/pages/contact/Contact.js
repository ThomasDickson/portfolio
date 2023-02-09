import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'

import { T1, T2, T3, T4 } from '../../components/Typography'
import { Form, Input, Submit, TextArea } from './FormComponents'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    <Container>
      <Form ref={form} onSubmit={sendEmail}>
        <T1>Contact Me</T1>
        <label>
          <T4>Name</T4>
        </label>
        <Input type="text" name="user_name"/>
        <label>
          <T4>Email Address</T4>
        </label>
        <Input type="email" name="user_email"/>
        <label>
          <T4>Message</T4>
        </label>
        <TextArea name="message"/>
        <Submit type="submit" value="Send Message"/>
      </Form>
    </Container>
  )
}

export default Contact