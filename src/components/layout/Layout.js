import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  Alert from "react-bootstrap/Alert";
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
import Logo from "../../images/logo.png";
import Footer from "../footer/Footer";

function Layout({ children }) {
    return (
        
        <Router>   
            <Navbar variant="light" expand="lg">
            <Alert.Link href="#home"><img className="logo" src={Logo} alt="website logo" /></Alert.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center" activeKey="/home">
                        <Alert.Link href="#work" className="nav-link">
                        Work/Knowledge
                        </Alert.Link>
                        <Alert.Link href="#references" className="nav-link">
                        References
                        </Alert.Link>
                        <Alert.Link href="#contact" className="nav-link">
                        Contact
                        </Alert.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/Contact" exact compontent={Contact} />
                </Switch>
            
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