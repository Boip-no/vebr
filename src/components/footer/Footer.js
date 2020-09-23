import React from "react";
import Alert from "react-bootstrap/Alert";

function Footer() {
    return (
        <footer className="icons__footer">
            <Alert.Link href="https://github.com/search?q=Sprtn"> 
                <i className="icons__footer--item fab fa-github-square"></i>
            </Alert.Link>
            <Alert.Link href="https://www.linkedin.com/in/vegard-pihl-bratteng-6ab846b7/"> 
                <i className="icons__footer--item fab fa-linkedin"></i>
            </Alert.Link>
            <p>
                Copyright 2020 
                <Alert.Link href="http://boip.no/">BOIP</Alert.Link>
            </p>
        </footer>
    );
}

export default Footer;