import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";

function Slider({ content1, content2, client1, client2, firm1, firm2 }) {

    return (
        <>
            <h2 id="references" className="background">References</h2>
            <Carousel>
                <Carousel.Item className="carousel__item">
                    <Carousel.Caption className="carousel__caption">
                        <p className="carousel__caption--content">{client1}</p>
                        <p className="carousel__caption--mainTxt">{content1}</p>
                        <p className="carousel__caption--firmNameText">{firm1}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carousel__item">
                    <Carousel.Caption className="carousel__caption">
                        <p className="carousel__caption--content">{client2}</p>
                        <p className="carousel__caption--mainTxt">{content2}</p>
                        <p className="carousel__caption--firmNameText">{firm2}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Slider;