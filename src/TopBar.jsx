import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export default function TopBar() {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">TragicPanda10</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Learn More</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}