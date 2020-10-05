import React from "react";
import Heading from "./Heading";
import HeaderImg from "../../images/background-colour1db2.jpg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Jumbotron from "react-bootstrap/Jumbotron";



function Home() {
    return (
        <Jumbotron fluid id="home" xs={6} md={4} lg={3} className="header">
            <div style={{ backgroundImage:`url(${HeaderImg})`, backgroundPosition: "bottom", backgroundSize: "cover",
            className:  "header__img", alt: "hexagons"}}  >
                <Heading title="Vegard Pihl Bratteng" subtitle="Professional IT solution" />
                <a className="header--icon" href="#work"><IoIosArrowDropdownCircle /></a>
            </div>
            
            
        </Jumbotron>
    );
}

export default Home;