// import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#education">Education and Projects</Nav.Link>
            <Nav.Link href="#experience">Skills</Nav.Link>
            <Nav.Link href="#exper">Experience</Nav.Link>
            {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
            {/* <Nav.Link href="#hobbies">Hobbies</Nav.Link> */}
            <Nav.Link href="#work">Contacts</Nav.Link>
            {/* <Nav.Link href="#experience">Skills</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
