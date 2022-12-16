import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortPiece from './PortPiece';

export default function DisplayGrid() {

    return(
        <Container fluid='md'>
            <Row className='grid-layout'>
                <Col className='d-flex justify-content-center' >
                    <PortPiece 
                    name="Personas and Storyboarding" 
                    source='/images/printer.png'
                    website='https://tragicpanda10.github.io/Personas-and-Storyboarding/' />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <PortPiece
                    name="Web Redesign" 
                    source='/images/web_redesign.png'
                    website='https://tragicpanda10.github.io/showcase-redesign/' />
                </Col>
            </Row>
            <Row className='grid-layout'>
                <Col className='d-flex justify-content-center'>
                    <PortPiece 
                    name="Iterative Design"
                    source='/images/vacation_homerents.png'
                    website='https://tragicpanda10.github.io/iterative-design/' />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <PortPiece
                    name = "Development" 
                    source = "/images/develop.png"
                    website='https://tragicpanda10.github.io/development-showcase/' />
                </Col>
            </Row>
        </Container>
    )
}