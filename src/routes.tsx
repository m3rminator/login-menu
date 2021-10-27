import React from "react";
import { NavLink, Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import About from './Register';
import Form from './Login';
import styled, { keyframes } from 'styled-components';


function Register() {
  return (
    <div>
      <Nav>
        <Ul>
          <Liregister>
            <StyledLink to="/About">Register</StyledLink>
          </Liregister>
          <Lilogin>
            <StyledLink to="/">Login</StyledLink>
          </Lilogin>
        </Ul>
      </Nav>
    </div>
  );
}

export default Register

const StyledLink = styled(Link)`
@media (max-width: 600px) {
  border: 0.3rem solid green;
  background-color: green;
  border-radius: 0.4rem;
  padding: 0.1rem 2rem 0.3rem 2rem;
  text-align: center;
}
@media (min-width: 768px) {
  border: 0.2rem solid green;
  background-color: green;
  border-radius: 0.4rem;
  padding: 0.1rem 2rem 0.2rem 2rem;
  text-align: center;  
}
`

const button = keyframes`
  0% {
    color: green;
    border: 0.2rem solid green;
    background-color: white;
    border-radius: 0.2rem;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }
  80% {
    color: white;
  }
  
  100% {
    color: white;
    border: 0.2rem solid white;
    background-color: green;
    border-radius: 0.2rem;
    padding: 0.5rem 2rem 0.5rem 2rem;  
  }
  `

const Liregister = styled.li`
  list-style: none;
  a{
    color: white;
    text-decoration: none;
  }
  text-align: center;
  margin-right: 2rem;
  &:hover {
    a{
      animation: ${button} 1s linear forwards;
   }
  }
  font-size: 2rem;  
  `

const Lilogin = styled.li`      
    list-style: none;
       a{
          color: white;
        text-decoration: none;
        }
        margin-right: 2rem;
        
     &:hover {
       a{
        animation: ${button} 1s linear forwards;
      }
  }
  font-size: 2rem;
  text-align: center;
`

const Ul = styled.ul`
}
@media (max-width : 600px) {
    display : flex;
    width: 25%;
    justify-content: space-between;
    flex-direction: column;
    height: 6.1rem;
}
@media (min-width : 600px) {
    display : flex;
    width: 25%;
    justify-content: space-between;
    flex-direction: column;
    height: 5.5rem;
    text-align: center; 
}
@media (min-width : 768px) {
  display : flex;
  width: 25%;
  justify-content: space-between;
  flex-direction: column;
  height: 6rem;
  text-align: center;
}
@media (min-width : 992px) {
  display : flex;
  width: 25%;
  justify-content: space-between;
  flex-direction: column;
  height: 5.5rem;
  text-align: center;
}
@media (min-width : 1200px){ 
  display: flex; 
  justify-content: space-around;
  width: 50%;
  text-align: center;
  margin-left: 20rem;
}
`

const Nav = styled.nav`
  height: 0.01rem;
`