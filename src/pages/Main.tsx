import React from "react";
import styled from 'styled-components/macro';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import ContentBox from "../component/ContentBox";
import {articleData} from "../data";
import AdCard from "../component/AdCard";


function Main() {
    const Content = articleData.map(item => {
        return (
            <ContentBox
                key={item.id}
                img={item.Img}
                title={item.title}
                paragraph={item.paragraph}
            />
        )
    })

    return (
        <Container>
            <Header />
            <Body>
                <Hero />
                <AdCard />
                {Content}
            </Body>
            <footer>
                <Footer />
            </footer>
        </Container>
    )
}

export default Main



const Container = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;

`

const Body = styled.div`
flex: 1;
`