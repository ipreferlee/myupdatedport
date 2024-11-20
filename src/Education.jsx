import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from './assets/Person-Assets.png';
import ncfLogo from './assets/NCF-LOGO.png';
import angelesLogo from './assets/angeles.jpg';
import systemPlus from './assets/systemplus.jpg';

const Education = () => {
  return (
    <div className="navigation">
    <Navbar id="navBar" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link id='nav-link' href="/">Home</Nav.Link>
              <Nav.Link id='nav-link' href="/about">About</Nav.Link>
              <Nav.Link id='nav-link' href="/education">Education</Nav.Link>
              <Nav.Link id='nav-link' href="/hobbies">Hobbies</Nav.Link>
              <Nav.Link id='nav-link' href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

            <div class="container d-flex justify-content-center" id='cards'>
        <div class="row align-items-start">
          <div class="col">
            <Card style={{ width: '18rem' }} id='card-body' >
            <Card.Img id='educ-img' variant="top" src={angelesLogo} />
            <Card.Body>
              <Card.Title>Junior High</Card.Title>
              <Card.Text>
                Angeles City National Highschool
              </Card.Text>
              <Button variant="success">Visit Page</Button>
            </Card.Body>
          </Card>
          </div>
          
          <div class="col">
          <Card style={{ width: '18rem' }}>
          <Card.Img id='educ-img' variant="top" src={systemPlus} />
          <Card.Body>
            <Card.Title>Senior High</Card.Title>
            <Card.Text>
              System Plus College Foundation
            </Card.Text>
            <Button variant="success">Visit Page</Button>
          </Card.Body>
        </Card>
          </div>
          <div class="col">
          <Card style={{ width: '18rem' }}>
          <Card.Img id='educ-img' variant="top" src={ncfLogo} />
          <Card.Body>
            <Card.Title className='text-center'>College</Card.Title>
            <Card.Text className='text-center'>
              Naga College Foundation Inc.
            </Card.Text>
            <Button variant="success">Visit Page</Button>
          </Card.Body>
        </Card>
          </div>
        </div>
        

      
          



        

      </div>



   </div>
      
  )
}

export default Education
