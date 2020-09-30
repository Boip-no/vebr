import React from "react";
import Heading from "./Heading";
import HeaderImg from "../../images/background-colour1db2.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Container from "react-bootstrap/Container";



function Home() {
    return (
        <Container id="home" xs={6} md={4} lg={3} className="header">
            <div style={{ backgroundImage:`url(${HeaderImg})`, backgroundPosition: "bottom", backgroundSize: "cover",
            className:  "header__img", alt: "hexagons"}}  >
                <Heading title="Vegard Pihl Bratteng" subtitle="Professional IT solution" />
                <a className="header--icon" href="#work"><IoIosArrowDropdownCircle /></a>
            </div>
            
            
        </Container>
    );
}

export default Home;