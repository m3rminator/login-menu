import React from "react";
import '../App.css';
import styled from 'styled-components/macro'
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";


function Login() {


  return (
    <Container>
      <StyledIcon to="/">
        <IoChevronBackOutline size={70} />
      </StyledIcon>
      <Wrapper>
        <H1>Login</H1>
        <Loginform>
          <Emailinput type='email' placeholder='your email' id='email-input' required></Emailinput>
          <Passinput type='password' placeholder='your password' id='pass-input' required></Passinput>
          <Button type="submit" placeholder="login" value='login' ></Button>
          <StyledA href="/Register">Dont have an Account?</StyledA>
        </Loginform>
      </Wrapper>
    </Container>

  )
}


export default Login

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

const StyledIcon = styled(Link)`
    color : white;
    position: absolute;
    left: 0;
    top: 0;
`

const H1 = styled.h1`
  color: aliceblue;
  width: 100%;
  text-align: center;
  @media (max-width : 600px){
    font-size: 3rem;
  }
  @media (min-width : 600px){
    font-size: 3rem;
  }
`
const Loginform = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledA = styled.a`
color: white;
margin-top: 1rem;
text-decoration: none;
font-size: 0.8rem;
`


const Emailinput = styled.input`
border-radius: 0.5rem;
width: 20rem;
height: 2rem;
padding-left: 0.5rem;
background-color: rgb(49, 45, 45);
border: none;
color: white;
@media (max-width : 600px){
  width: 19rem;
}
@media (min-width: 768px) {
  width: 25rem;  
}
@media (min-width: 1440px) {
  width: 50rem;
  padding: 1rem 1rem 1rem 1rem;\
  font-size: 1.5rem;  
}
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
  cursor: text;
  @media (max-width : 600px){
    width: 19rem;
  }
  @media (min-width: 768px) {
    width: 25rem;  
  }
  @media (min-width: 1440px) {
    width: 50rem;
    padding: 1rem 1rem 1rem 1rem;
    font-size: 1.5rem;  
  }
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
cursor: pointer;
@media (max-width : 600px){
  width: 20rem;
}
@media (min-width: 768px) {
  width: 25rem;  
}
@media (min-width: 1440px) {
  width: 50rem;
  font-size: 1.5rem;  
  height: 3rem;
}
`