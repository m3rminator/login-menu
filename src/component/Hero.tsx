import React from "react";
import styled from 'styled-components/macro';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Hero() {
    return (
        <Car>
            <Carousel>
                <Img>
                    <img src="ds3slider.jpg" />
                </Img>
                <Img>
                    <img src="t620x300-f14ace8d792c9f235b86811c5f3afafa.jpg" />
                </Img>
                <Img>
                    <img src="sifu.jpg" />
                </Img>
            </Carousel>
        </Car>
    )
}

const Car = styled.div`
z-index: 1;
`
const Img = styled.div`
height: 500px;
`




export default Hero;