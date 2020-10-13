import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Slider({ content1, content2, client1, client2, firm1, firm2 }) {

    return (
        <>
            <h2 id="references" className="background">References</h2>
            <Container>
                <Carousel>
                    <Carousel.Item className="carousel__item">
                        <Carousel.Caption className="carousel__caption">
                            <p className="carousel__caption--content">{client1}</p>
                            <h4 className="carousel__caption--mainTxt">{content1}</h4>
                            <p className="carousel__caption--firmNameText">{firm1}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className="carousel__item--img ">
                        <Carousel.Caption className="carousel__caption">
                            <p className="carousel__caption--content">{client2}</p>
                            <h4 className="carousel__caption--mainTxt">{content2}</h4>
                            <p className="carousel__caption--firmNameText">{firm2}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
}

export default Slider;