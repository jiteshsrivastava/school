import React from 'react'
import { Carousel, Container ,Button } from 'react-bootstrap';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';


export default function ImgSlider() {
    return (
        <Container>
             <Carousel interval={2000}>
                <Carousel.Item>
                    <img className="d-block w-100" src={img1} alt="school pic" />
                                    </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img2} alt="school pic" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} alt="school pic" />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}