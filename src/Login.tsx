import React from "react";
import './App.css';
import styled from 'styled-components'

function Form() {
  return (
    <Container>
      <Wrapper>
        <H1>Login</H1>
        <Loginform>
          <Emailinput type='email' placeholder='your email' id='email-input' required></Emailinput>
          <Passinput type='password' placeholder='your password' id='pass-input' required></Passinput>
          <Button type="submit" placeholder="login" value='login'></Button>
        </Loginform>
      </Wrapper>
    </Container>
  )
}


export default Form

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
const Loginform = styled.form`
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
const Button = styled.input`
background-color: green;
color: aliceblue;
border-radius: 0.5rem;
width: 20.5rem;
height: 2rem;
margin-top: 0.5rem;
padding-left: 0.5rem;
border: none;
`