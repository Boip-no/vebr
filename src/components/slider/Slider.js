import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "../../images/stars.jpg"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Slider({ client1, firm1, content1, client2, firm2, content2 }) {

    return (
        <Container className="justify-content-md-center">
            <h3 id="references" className="background">References</h3>
            <Col xs-lg="2">
                <Carousel className="p-5">
                    <Carousel.Item className="carousel__item">
                        <img
                            className="carousel__item--img d-block"
                            src={Image}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="carousel__caption">
                            <p className="carousel__caption--content">{client1}</p>
                            <h5 className="carousel__caption--content">{content1}</h5>
                            <p className="carousel__caption--content">{firm1}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="carousel__item">
                        <img
                            className="carousel__item--img d-block"
                            src={Image}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="carousel__caption w-100">
                            <p className="carousel__caption--content">{client2}</p>
                            <h5 className="carousel__caption--content">{content2}</h5>
                            <p className="carousel__caption--content">{firm2}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
        </Container>
    );
}

export default Slider;