import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
            BrowserRouter as Router,
            Switch,
            Route,
        } from "react-router-dom";
import Container from "react-bootstrap/Container";
import SliderContainer from "../slider/SliderContainer";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";



function Layout({ children }) {
    return (
        
        <Router> 
            <div className="wrapper">   
                <Navbar id="top" variant="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <a href="#work" className="nav-link">
                            Work
                            </a>
                            <a href="#contact" className="nav-link">
                            Contact
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Switch>
                        <Route path="/Work" exact compontent={Work} />
                        <Route path="/Contact" exact compontent={Contact} />
                    </Switch>
                
                    <div className="layout">
                        {children}
                    </div>
                    </Container>
                <SliderContainer />
                <Contact />
                <Footer />
            </div>
        </Router>
    );
}

export default Layout;