import './App.css';
import TopBar from './TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayGrid from './DisplayGrid';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Container fluid className='title-bg'>
          <Row>
            <Col>
              <div className='title text-light'>Tragicpanda10</div>
            </Col>
          </Row>
          <Row className='text-light mt-5 title-desc'>
            <Col>
              <div className='desc'>
                I'm a UI/UX designer with an interest in improving accessibility to information on the web, in games, and more!
              </div>
            </Col>
          </Row>
      </Container>
      <Container style={{height:'10vh'}}/>


      <Container fluid id="about"> 
        <Row className='row'>
          <Col>
            <Image roundedCircle style={{width:'auto', height:'300px'}} className='shadow' src={process.env.PUBLIC_URL + '/images/panda.jpg'} />
            <div className='mt-3'>
              Currently a student at Brown University studying computer science.
            </div>
          </Col>
          <Col>
            <div className='fs-4 text-start text-center'>
              <div className="mb-5 titling">
                Proficiencies:
              </div>

            <Row className='row'>
               <Card className="me-2" style={{width:'240px', }}>
              <ListGroup variant="flush">
                <ListGroup.Item>Storyboarding</ListGroup.Item>
                <ListGroup.Item>User Testing</ListGroup.Item>
                <ListGroup.Item>Balsamiq</ListGroup.Item>
                <ListGroup.Item>Figma</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card style={{width:'240px', }}>
              <ListGroup variant="flush">
                <ListGroup.Item>HTML</ListGroup.Item>
                <ListGroup.Item>CSS</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Flutter</ListGroup.Item>
              </ListGroup>
              </Card>
            </Row>
           </div>
            
          </Col>
        </Row>
      </Container>

      <Container id='projects' style={{height:'10vh'}}/>
      <div className='titling m-3'>
        Check out some of my projects here!
      </div>
      <DisplayGrid />
    </div>
  );
}

export default App;
