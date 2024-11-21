import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hobbiesImg from './assets/Untitled design (17).png'
import { Link } from 'react-router-dom';
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
      
      <div className='myhobbies'>
        <h3><u>My Hobbies</u></h3>
        <p>Basketball is more than just a game to me. It’s a passion, a way of life, and a source of joy.<br/> Ever since I was a young child, I have been drawn to the sport, and as I have grown, so has my love for it.<br/> There are countless reasons why I love playing basketball, but there are a few that stand out as the most significant.</p>
        <p>Playing computer games is not just a hobby for me it is a form of entertainment that brings me joy, excitement, and countless memorable experiences.</p>
      </div>
      <div className='hobbies-img'>
        <img src={hobbiesImg} width={700} alt="" />
      </div>
     
    </div>
  )
}

export default Hobbies
