import React from "react";
import styled from 'styled-components/macro';
import { AiOutlineClose } from 'react-icons/ai';
import { keyframes } from 'styled-components/macro';

function PopUp(props: { handleClose: React.MouseEventHandler<SVGElement> | undefined; }) {

    return (
        <Container>
            <Btn>
                <AiOutlineClose onClick={props.handleClose} size={30} />
            </Btn>
            <Components>
                <A href="/Login">
                    Login
                </A>
                <A href="/Register">
                    Register
                </A>
            </Components>
        </Container>)
}

const oppening = keyframes`
from {
    transform: translateX(300px);
}
to {
    transform: translateX(0px);
  }
`;


const Container = styled.div` 
// glass morphism
border: 1px solid rgba(38, 0, 255, 0.56);
border-radius: 20px;
background: rgba(87, 99, 180, 0.35);
backdrop-filter: blur(8px);
// 
color: white;
display: flex;
animation: ${oppening} 1s linear 1;
flex-direction: row-reverse;
position: fixed;
z-index: 3;
height: 100%;
width: 40%;
right: 0;
top: 0;
text-align: center;
border-bottom-right-radius: 0px;
border-top-right-radius: 0px;
@media (min-width: 769px) {
    display: none;
}
`

const Btn = styled.div`
`

const Components = styled.div`
margin: auto;
display: flex;
flex-direction: column;
`

const A = styled.a`
color: white;
text-decoration: none;
margin-bottom: 2rem;
font-family: "Lucida Console", "Courier New", monospace;
transition-duration: 1s;
// &:hover{
//     box-shadow: inset 100px 0 0 0 white;
//     color: #050A30;
// }
`

export default PopUp;