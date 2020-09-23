import React from "react";
import Heading from "../layout/Heading";
import HeaderImg from "../../images/background-colour1db2.jpg";

function Home() {
    return (
        <div className="header">
            <Heading title="Vegard Pihl Bratteng" />
            <img className="header__img" src={HeaderImg} alt="hexagons" />
        </div>
    );
}

export default Home;