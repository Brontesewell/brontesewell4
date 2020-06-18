import { Nav, Navbar,} from 'react-bootstrap'
import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import ScrollingColorBackground from 'react-scrolling-color-background'

class WebNav extends Component {
 
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll =(event) => {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
    
        this.setState({
          transform: itemTranslate
        });
    }


    render() {

       

        return (
            <nav>

                    <Navbar style={{backgroundColor: window.scrollY > 10 ? "#7a7a7a" : "transparent", paddingTop: '0px', paddingRight: '10px',}} bg="" expand="lg" className="navbar-welcome-page navbar-light fixed-top navbar-expand-lg">
                    <Navbar.Brand className="navbar-brand" href='#section1'>Bronte Sewell</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav navbar-light" />
                    <Navbar.Collapse id="basic-navbar-nav navbar-light">
                        <Nav className="ml-auto navbar-light">
                        <Nav.Link  className="nav-links" href='#section1'>HOME</Nav.Link>
                        <Nav.Link className="nav-links" href='#section2'>ABOUT</Nav.Link>
                        <Nav.Link  className="nav-links" href='#section3'>SERVICES</Nav.Link>
                        <Nav.Link  className="nav-links" href='#section4'>PORTFOLIO</Nav.Link>
                        <Nav.Link  className="nav-links" href='#section5'>CONTACT ME</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    
             </nav>

             
        );
    }
}

export default WebNav;