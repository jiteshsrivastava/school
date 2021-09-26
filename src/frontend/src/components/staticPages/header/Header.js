
import React from "react";
import { Nav, Navbar, NavDropdown ,Container} from "react-bootstrap";
import logo from "./logo.png";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <Container>
    <Navbar collapseOnSelect expand="lg">

      <Navbar.Brand>
        <LinkContainer to="/">
          <Nav.Link><img src={logo} alt="logo" /></Nav.Link>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/About"><Nav.Link>About Us</Nav.Link></LinkContainer>
          <LinkContainer to="/Notification"><Nav.Link>Notification</Nav.Link></LinkContainer>
          <LinkContainer to="/Facilities"><Nav.Link>Facilities</Nav.Link></LinkContainer>
           <LinkContainer to="/Admission"><Nav.Link>Admission</Nav.Link></LinkContainer>
        {/*   <Nav.Link href="#pricing">Career</Nav.Link>
          <NavDropdown title="Student Zone" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Score Card
              </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Gallery" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Photo Gallery
              </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Vedio Gallery
              </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <LinkContainer to="/Contact"><Nav.Link>Contact us</Nav.Link></LinkContainer>          
          {/* <Nav.Link eventKey={2} href="#memes">
            Get A Quote
            </Nav.Link>  */}
        </Nav> 
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}