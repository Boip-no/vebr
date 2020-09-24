import React from "react";
import Alert from "react-bootstrap/Alert";

function Footer() {
    return (
        <footer className="icons__footer text-center py-3">
            <a href="https://github.com/search?q=Sprtn"> 
                <i className="icons__footer--item fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/vegard-pihl-bratteng-6ab846b7/"> 
                <i className="icons__footer--item fab fa-linkedin"></i>
            </a>
            <p>
            &copy; {new Date().getFullYear()} Copyright: 
            </p>
            <p>
                <a href="http://boip.no/">BOIP</a>
            </p>
        </footer>
    );
}

export default Footer;