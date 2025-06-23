import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const sectionStyle = {
    minHeight: '100vh',
    backgroundImage: 'url("/tech-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white'
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <section id="home" style={sectionStyle}>
      <div style={overlayStyle}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="display-3 fw-bold">I'm Tammana Kavyasri</h1>
              <p className="lead mt-3 mb-4">Java Full Stack Developer | React | Spring Boot | Node.js</p>
              <Button variant="light" href="#projects">View My Work</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Home;
