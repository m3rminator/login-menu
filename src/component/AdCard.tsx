import React from "react";
import styled from 'styled-components/macro';

function AdCard() {
    return (
        <Container>
            <H1>Mobin Shahini</H1>
        </Container>
    )
}

const Container = styled.div`
// glass morphism
background: rgba(255, 255, 255, 0.24);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.3px);
border: 1px solid rgba(255, 255, 255, 0.3);


width: 80%;
margin: auto;
margin-top: 1rem;
margin-bottom: 1rem;
text-align: center;
padding: 3rem;
color: gray;
`

const H1 = styled.h1`
`



export default AdCard;