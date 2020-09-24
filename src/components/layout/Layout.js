import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
            BrowserRouter as Router,
            Switch,
            Route,
        } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Work from "../work/Work";
import SliderContainer from "../slider/SliderContainer";
import Contact from "../contact/Contact";
import Logo from "../../images/symbol.png";
import HeaderImg from "../../images/background-colour1db2.jpg";
import Footer from "../footer/Footer";

function Layout({ children }) {
    return (
        
        <Router>   
            <Navbar variant="light" expand="lg">
            <div xs={6} lg={0} style={{ backgroundImage:`url(${HeaderImg})` }} className="header__img" alt="hexagons">
            <a href="#home"><img className="logo" src={Logo} alt="website logo" /></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center" activeKey="/home">
                        <a href="#work" className="nav-link">
                        Work/Knowledge
                        </a>
                        <a href="#references" className="nav-link">
                        References
                        </a>
                        <a href="#contact" className="nav-link">
                        Contact
                        </a>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
            
                <Switch>
                    <Route path="/Contact" exact compontent={Contact} />
                </Switch>
            <Container>
                    <div className="layout">
                        {children}
                    </div>
                <Home />
                <Work />
                <SliderContainer />
                <Contact />
            </Container>
            <Footer />
        </Router>
    );
}

export default Layout;