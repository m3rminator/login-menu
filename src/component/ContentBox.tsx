import React from "react";
import styled from 'styled-components/macro';


function ContentBox(props: any) {
    return (
        <Container>
            <Img src={`${props.img}`} />
            <H2>{props.title}</H2>
            <P>{props.paragraph}</P>
        </Container>
    )
}


const Container = styled.div`
display: flex;
flex-direction: inherit;
margin: auto;
background-color: white;
border: 0.1px black solid;
border-radius: 10px;
width: 50%;
height: 20%;
margin-bottom: 1rem;
font-family: "Lucida Console", "Courier New", monospace;
}
`

const Img = styled.img`
border-radius: 5px;
max-width: 20%;
max-height: 12.5%;
margin-left: 0.5rem;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
object-fit: contain;
`

const P = styled.p`
margin: auto;
margin-left: 1rem;
margin-top: 1rem;
margin-bottom: 1rem;
`

const H2 = styled.h2`
margin: auto;
margin-left: 1rem;
`



export default ContentBox