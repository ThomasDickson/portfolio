import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import styled, { css } from 'styled-components'

import { T1, T4 } from '../../components/Typography'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Field = css`
  /* border */
  
  border: 2px solid black;
  border-radius: 12px;
  border-color: #41e2ba;

  /* sizing */
  padding: 16px;
  font-size: 16px;

  /* misc */
  font-family: 'Ubuntu';
  color: white;
  background-color: rgb(0, 0, 0, 0);
  outline: 0;
`

const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 40%;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`

const Input = styled.input`
  ${Field}
`

const TextArea = styled.textarea`
  ${Field}

  resize: vertical;
  height: 100px;
`

const Submit = styled.input`
  cursor: pointer;

  /* Font Settings */
  font-family: 'Ubuntu';
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #1e1e1e;

  /* Background Settings */
  background-color: #41e2ba;
  padding: 16px;
  width: fit-content;

  /* Border Settings */
  border: 2px solid black;
  border-color: #41e2ba;
  border-radius: 6px;

  /* Positioning */
  margin-top: 24px;

  /* Hover Animation */
  &:hover {
    transition: all 0.4s ease-in-out;
    background: #2b2d42;
    color: #41e2ba;
  }
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
        <T1 style={{alignSelf: "center"}}>Contact Me</T1>
        <T4>Name</T4>
        <Input type="text" name="user_name"/>
        <T4>Email Address</T4>
        <Input type="email" name="user_email"/>
        <T4>Message</T4>
        <TextArea name="message"/>
        <Submit type="submit" value="Send Message"/>
      </Form>
    </Container>
  )
}

export default Contact