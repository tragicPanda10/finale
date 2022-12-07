import './App.css';
import TopBar from './TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayGrid from './DisplayGrid';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

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
      <Container fluid> 
        <Row className='row'>
          <Col>
            <Image roundedCircle style={{width:'auto', height:'400px'}} className='shadow' src={process.env.PUBLIC_URL + '/images/panda.jpg'} />
            <div className='mt-3'>
              Currently a student at Brown University studying computer science.
            </div>
          </Col>
          <Col>
            <div className='fs-4 text-start'>
              Hi! I'm a panda from the New England area with a fascination around
              web development and computer science. If you don't see me in the library, 
              I'm probably catching up on sleep or going out to get food.  
            </div>
          </Col>
        </Row>
      </Container>

      <Container style={{height:'10vh'}}/>
      <div className='display-4 m-3'>
        Check out some of my projects here!
      </div>
      <DisplayGrid />
      <div className='d-flex justify-content-between'>
        <Image style={{width:'auto', height:'400px'}} src={process.env.PUBLIC_URL + '/images/bamboo.png'}/>
        <Image style={{width:'auto', height:'400px'}} src={process.env.PUBLIC_URL + '/images/bamboo2.png'}/>
      </div>
    </div>
  );
}

export default App;
