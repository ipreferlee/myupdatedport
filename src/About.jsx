import React from 'react'
import myImage from './assets/Person-Assets.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const About = () => {
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
              <Nav.Link id='nav-link' href="#">Hobbies</Nav.Link>
              <Nav.Link id='nav-link' href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



<div className='about-section'>
        <div className='left-sec'>
          <h2>About me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Placeat quis error doloremque, vitae in velit commodi, ducimus odio, <br /> eum deleniti accusamus soluta perferendis consequuntur nihil! <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, corporis?</p>
          
        </div>

        <div className='right-sec'>
        <img className='person-img' src={myImage} alt="description" width={200} />
        </div>
    </div>

   </div>
      
    
  )
}

export default About
