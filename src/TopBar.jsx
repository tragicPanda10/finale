import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React from "react";


export default function TopBar() {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="https://tragicpanda10.github.io/finale/">TragicPanda10</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="https://tragicpanda10.github.io/finale/">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}