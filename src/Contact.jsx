import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='contact-sec'>
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

        
      <div className="form-container">
      <div className="form">
        <span className="heading">Get in touch</span>
        <input placeholder="Name" type="text" className="input" />
        <input placeholder="Email" id="mail" type="email" className="input" />
        <textarea
          placeholder="Say Hello"
          rows="10"
          cols="30"
          id="message"
          name="message"
          className="textarea"
        ></textarea>
        <div className="button-container">
          <div className="send-button">Send</div>
          <div className="reset-button-container">
            <div id="reset-btn" className="reset-button">
              Reset
            </div>
          </div>
        </div>
      </div>
    </div>
 
      
      
    </div>
  )
}

export default Contact
