import { Nav, Navbar,} from 'react-bootstrap'
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

const EquestrianNav = () =>  {
        return (
            <nav id="wecome-navbar">

                    
                    <Navbar bg="light" expand="lg" className="navbar-welcome-page navbar-expand-lg">
                    <Navbar.Brand className="navbar-brand-small" href="/">Bronte Sewell</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link  className="nav-links" href="#">HOME</Nav.Link>
                        <Nav.Link className="nav-links" href="#">ABOUT</Nav.Link>
                        <Nav.Link  className="nav-links" href="#">LESSONS</Nav.Link>
                        <Nav.Link  className="nav-links" href="#">HORSE SCHOOLING</Nav.Link>
                        <Nav.Link  className="nav-links" href="#">SELLING HORSES</Nav.Link>
                        <Nav.Link  className="nav-links" href="#">BUYING HORSES</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
       
             </nav>


        );
    }

export default EquestrianNav;