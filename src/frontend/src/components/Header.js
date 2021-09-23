import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import logo from './logo.png';

export default function header() {
    return (

        <Navbar collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand>
                    <a href="#">
                        <img src={logo} />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Notification</Nav.Link>
                        <Nav.Link href="#pricing">Facilities</Nav.Link>
                        <Nav.Link href="#pricing">Admission</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                        <NavDropdown title="Student Zone" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Photo Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Vedio Gallery</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Gallery" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Photo Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Vedio Gallery</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contact us</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Get A Quote
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
