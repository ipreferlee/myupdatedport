import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hobbiesImg from './assets/Untitled design (17).png'

const Hobbies = () => {
  return (
    <div className='hobbies-sec'>
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
      
      <div className='hobbies-img'>
        <img src={hobbiesImg} width={700} alt="" />
      </div>
     
      
      
    </div>
  )
}

export default Hobbies
