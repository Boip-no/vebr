import React from "react";
import Heading from "./Heading";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";



function Home() {
    return (
        <Container>
            <Jumbotron fluid id="home" xs={6} md={4} lg={3} className="header">
                <div className="header__img" alt="Hexagons">
                    <Heading title="Vegard Pihl Bratteng" subtitle="Professional IT solution" />
                    <a className="header--icon" href="#work"><IoIosArrowDropdownCircle /></a>
                </div>
            </Jumbotron>
        </Container>
    );
}

export default Home;