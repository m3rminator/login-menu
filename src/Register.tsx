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

                    <Input type='email' placeholder='your email' required></Input>

                    <input type='password' placeholder='your password' id='pass-input' required value={password}
                        onChange={onChangePassword}></input>

                    <input type='password' placeholder='confirm your password' id='confirm-pass-input' required
                        value={confirmpassword} onChange={onChangeConfirmpassword}></input>

                    <input type="submit" placeholder="login" className='login-button' disabled={password !== confirmpassword || password === ""}></input>
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
const Input = styled.input`
border-radius: 0.5rem;
width: 20rem;
height: 2rem;
padding-left: 0.5rem;
background-color: rgb(49, 45, 45);
border: none;
color: white;
`