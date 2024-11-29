import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import hobbiesImg from './assets/Untitled design (17).png'
import { Link } from 'react-router-dom';

const hobbies = [
  <div className="navigation">
      <Navbar id="navBar" expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/education">Education</Nav.Link>
              <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
</div>,
  {
    title: "Riding",
    description: "I love exploring new worlds and ideas through riding",
    icon: "🚗",
  },
  {
    title: "Gaming",
    description: "I enjoy playing video games to relax and have fun with friends.",
    icon: "🎮",
  },

  {
    title: "Sports",
    description: "Sports keep me active and motivated, offering a fun way to challenge myself and stay fit.",
    icon: "🏐",
  },
  {
    title: "Photography",
    description: "Capturing special moments and beautiful scenery is something I love.",
    icon: "📷",
  },
];

return (
  <div
    style={{
      textAlign: "center",
      padding: "40px",
      background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      minHeight: "100vh",
    }}
  >
    <h1
      style={{
        fontSize: "36px",
        color: "#333",
        marginBottom: "20px",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      My Hobbies
    </h1>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
            width: "240px",
            padding: "20px",
            textAlign: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 8px 16px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 6px 12px rgba(0, 0, 0, 0.15)";
          }}
        >
          <div
            style={{
              fontSize: "50px",
              marginBottom: "15px",
              color: "#4c4c4c",
            }}
          >
            {hobby.icon}
          </div>
          <h2
            style={{
              fontSize: "22px",
              color: "#444",
              margin: "10px 0",
            }}
          >
            {hobby.title}
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            {hobby.description}
          </p>
        </div>
      ))}
    </div>
  </div>
)
export default Hobbies

