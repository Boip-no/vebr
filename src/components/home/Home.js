import React from "react";
import HeaderContainer from "./HeaderContainer";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Jumbotron from "react-bootstrap/Jumbotron";



function Home() {
    return (
        <Jumbotron fluid id="home" xs={6} md={4} lg={3} className="header">
            <div className="header__img" alt="Hexagons">
                <HeaderContainer title="Vegard Pihl Bratteng" subtitle="Professional IT solution" />
                <a className="header--icon" href="#work"><IoIosArrowDropdownCircle /></a>
            </div>
        </Jumbotron>
    );
}

export default Home;