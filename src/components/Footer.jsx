import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-md-start text-center mb-3 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()} Tammana Kavyasri. All rights reserved.</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <a href="#home" className="text-white mx-2">Home</a>
            <a href="#about" className="text-white mx-2">About</a>
            <a href="#projects" className="text-white mx-2">Projects</a>
            <a href="#contact" className="text-white mx-2">Contact</a>
            <a href="#experience" className="text-white mx-2">Experience</a>
          </Col>
          <Col md={4} className="text-md-end text-center">
            <a href="https://www.linkedin.com/in/kavyasri-tammana-75355b333" target="_blank" rel="noreferrer" className="text-white mx-2"><FaLinkedin /></a>
            <a href="https://github.com/KavyasriTammana-19" target="_blank" rel="noreferrer" className="text-white mx-2"><FaGithub /></a>
            <a href="mailto:kavyasritammananvs@gmail.com" className="text-white mx-2"><FaEnvelope /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
