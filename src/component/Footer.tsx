import React from "react";
import styled from 'styled-components/macro';
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

function Footer() {
    return (
        <Foooter>
            <Container>
                <Social>
                    <SocialLink href="www.youtube.com" target="_blank"><SocialLogo><AiOutlineYoutube size={30} /></SocialLogo></SocialLink>
                    <SocialLink href="www.instagram.com" target="_blank"><SocialLogo><AiOutlineInstagram size={30} /></SocialLogo></SocialLink>
                    <SocialLink href="www.facebook.com" target="_blank"><SocialLogo><BsFacebook size={25} /></SocialLogo></SocialLink>
                </Social>
                <LogoDiv>
                    <Logo src="Logo_vector.png"></Logo>
                </LogoDiv>
            </Container>
        </Foooter>
    )
}

const Foooter = styled.footer`
bottom: 0;
width:100%;

`

const Container = styled.div`
width: 100%;
height: 60px;
background-color: #000C66;
display: flex;
align-items: center;
`
const Social = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
position: absolute;
right: 0;
margin-right: 1rem;
`

const LogoDiv = styled.div`
`

const SocialLink = styled.a`
cursor: pointer;
width: 100%;
`

const SocialLogo = styled.div`
color: white;

`

const Logo = styled.img`
cursor: pointer;
max-width: 7%;
margin-left: 1rem;
`

export default Footer