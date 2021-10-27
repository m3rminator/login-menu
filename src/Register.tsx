import React, { useState } from "react";
import './App.css';
import styled from 'styled-components'

function About() {

  const [password, setPassword] = useState<string>("");
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const [confirmpassword, setConfirmpassword] = useState<string>("");
  const onChangeConfirmpassword = (event: any) => {
    setConfirmpassword(event.target.value);
  };


  return (
    <Container>
      <Wrapper>
        <H1>Register</H1>
        <Form>

          <Emailinput type="email" placeholder='your email' required></Emailinput>

          <Passinput type='password' placeholder='your password' required value={password}
            onChange={onChangePassword}></Passinput>

          <Confirmpassinput type='password' placeholder='confirm your password' required
            value={confirmpassword} onChange={onChangeConfirmpassword}></Confirmpassinput>

          <Button type="submit" placeholder="login" disabled={password !== confirmpassword || password === ""}></Button>
        </Form>
      </Wrapper>
    </Container>
  )
}


export default About

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const H1 = styled.h1`
  color: aliceblue;
  width: 100%;
  text-align: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Emailinput = styled.input`
border-radius: 0.5rem;
width: 20rem;
height: 2rem;
padding-left: 0.5rem;
background-color: rgb(49, 45, 45);
border: none;
color: white;
`
const Passinput = styled.input`
border-radius: 0.5rem;
  width: 20rem;
  height: 2rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  background-color: rgb(49, 45, 45);
  border: none;
  color: white;
`
const Confirmpassinput = styled.input`
border-radius: 0.5rem;
  width: 20rem;
  height: 2rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  background-color: rgb(49, 45, 45);
  border: none;
  color: white;
`
const Button = styled.input`
background-color: green;
color: aliceblue;
border-radius: 0.5rem;
width: 20.5rem;
height: 2rem;
margin-top: 0.5rem;
padding-left: 0.5rem;
border: none;
:disabled{
  background-color: rgb(24, 20, 20);
}
`
