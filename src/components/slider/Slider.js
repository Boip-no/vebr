import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "../../images/stars.jpg"

function Slider({ client1, firm1, content1, client2, firm2, content2 }) {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={Image}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p>{client1}</p>
                    <h3>{content1}</h3>
                    <p>{firm1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={Image}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <p>{client2}</p>
                    <h3>{content2}</h3>
                    <p>{firm2}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;