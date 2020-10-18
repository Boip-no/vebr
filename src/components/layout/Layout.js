import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
            BrowserRouter as Router
        } from "react-router-dom";
import Home from "../home/Home";
import Work from "../work/Work";
import HackerNews from "../news/HackerNews";
import CarouselContainer from "../carousel/CarouselContainer";
import Contact from "../contact/Contact";
import Logo from "../../images/logo.png";
import Footer from "../footer/Footer";
import Knowledge from "../knowledge/Knowledge";

function Layout() {
    return (
        
        <Router>
            <Navbar sticky="top" variant="dark" expand="lg" xs={6} lg={0} >
            <a href="#home"><img className="logo" src={Logo} alt="website logo" /></a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav activeKey="/home">
                        <a href="#work" className="nav-link">
                        Work/Knowledge
                        </a>
                        <a href="#references" className="nav-link">
                        References
                        </a>
                        <a href="#contact" className="nav-link">
                        Contact
                        </a>
                        <a href="#news" className="nav-link">
                        Hacker News
                        </a>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
                <Home />
                <Work />
                <Knowledge />
                <CarouselContainer />
                <Contact />
                <HackerNews />
            <Footer />
        </Router>
    );
}

export default Layout;