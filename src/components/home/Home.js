import React from "react";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import HeaderImg from "../../images/background-colour1db2.jpg";



function Home() {
    return (
        <Container xs={6} md={4} lg={3} className="header">
            <div style={{ backgroundImage:`url(${HeaderImg})`, backgroundPosition: "center", backgroundSize: "100vh", className:  "header__img", alt: "hexagons"}}  >
                <Heading title="Vegard Pihl Bratteng" />
            </div>
        </Container>
    );
}

export default Home;