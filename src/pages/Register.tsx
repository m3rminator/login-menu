import React, { useState, useEffect } from "react";
import '../App.css';
import styled from 'styled-components/macro'
import { NavLink, Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

function Register() {

  const [password, setPassword] = useState<string>(() => {
    const saved = localStorage.getItem("password");
    const initialValue = (saved);
    return initialValue || "";
  })
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const [confirmpassword, setConfirmpassword] = useState<string>("");
  const onChangeConfirmpassword = (event: any) => {
    setConfirmpassword(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("password", (password));
  }, [password]);

  return (

    <Container>
      <StyledIcon to="/">
        <IoChevronBackOutline size={70} />
      </StyledIcon>
      <Wrapper>

        <H1>Register</H1>
        <Form>

          <Emailinput type="email" placeholder='your email' required></Emailinput>

          <Passinput type='password' placeholder='your password' required value={password}
            onChange={onChangePassword}></Passinput>

          <Confirmpassinput type='password' placeholder='confirm your password' required
            value={confirmpassword} onChange={onChangeConfirmpassword}></Confirmpassinput>

          <Button type="submit" placeholder="login" disabled={password !== confirmpassword || password === ""}></Button>

          <StyledA href="/Login">Have an Account?</StyledA>
        </Form>
      </Wrapper>
    </Container>
  )
}


export default Register

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
const Form = styled.form`
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
const Confirmpassinput = styled.input`
  border-radius: 0.5rem;
  width: 20rem;
  height: 2rem;
  margin-top: 0.5rem;
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
:disabled{
  background-color: rgb(24, 20, 20);
  cursor: default;
}
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
