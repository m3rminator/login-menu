import React, { useState, useEffect } from "react";
import styled from 'styled-components/macro';
import { BiMenu } from 'react-icons/bi';
import PopUp from './PopUp';

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = () => {
    console.log('mobin inja')
    setTimeout(() =>
      setIsOpen(!isOpen)
      , 1000);
  }
  return (
    <Container>
      <HeaderImg src="Logo_vector.png" />
      <Btn>
        <BiMenu size={50}
          type="button"
          onClick={() => setIsOpen(!isOpen)} />
      </Btn>
      {isOpen && <PopUp handleClose={togglePopup} />}
      <HeaderComponents>
        <A href="/Login">
          Login
        </A>
        <As>/</As>
        <A href="/Register">
          Register
        </A>
      </HeaderComponents>
    </Container>
  )
}

const Container = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     background-color: #050A30;
     width: 100%;
     height: 5rem;
`

const HeaderImg = styled.img`
max-width: 6%;
max-height: 70%;
margin-left: 1rem;
@media (max-width : 600px){
    width: 20%;
  }
  @media (min-width: 768px) {
    width: 30%rem;  
  }
  @media (min-width: 1440px) {
    width: 40%rem;
  }
`

const Btn = styled.div`
color: white;
   @media (min-width: 769px) {
    display: none;
   }
`

const HeaderComponents = styled.div`
display: flex;
font-size: 100%;
  @media (max-width: 768px) {
   display: none;
  }
`

const A = styled.a`
color: white;
text-decoration: none;
display: flex;
align-items: center;
margin-right: 1rem;
font-family: "Lucida Console", "Courier New", monospace;
transition-duration: 0.2s;
background-color: #050A30;
border: solid 5px #050A30;
&:hover {
  color: #050A30;
  border: solid 12px white;
  background-color: white;
}
`
const As = styled.a`
color: white;
text-decoration: none;
color: white;
display: flex;
align-items: center;
margin-right: 1rem;
`

export default Header