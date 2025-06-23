import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img
              src="/Kavyasri.jpeg"
              alt="Tammana Kavyasri"
              className="img-fluid shadow"
              // style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="mb-3">About Me</h2>
            <p>
              I'm <strong>Tammana Kavyasri</strong>, a passionate and results-oriented <strong>Java Full Stack Developer</strong> with expertise in technologies like <strong>Java, Spring Boot, React.js, Node.js, MySQL</strong>, and more.
            </p>
            <p>
              I’ve successfully built and deployed several real-time applications, ranging from employee management systems to user authentication portals and business websites.
            </p>
            <p>
              I recently completed a full stack Java Developer at <strong>AZ SoftTech</strong>, where I developed and maintained Java-based applications with backend integrations. Currently, I’m working as a full stack intern at <strong>Credencer Technologies</strong>, contributing to both frontend and backend modules in live client projects.
            </p>
            <p>
              I believe in continuous learning, teamwork, and writing clean, scalable code. With a strong foundation in both frontend and backend technologies, I’m always excited to take on new challenges and grow as a developer.
            </p>
            <Button
              variant="primary"
              href="/Kavyasri_Resume.pdf"
              download
              className="mt-3"
            >
              📄 Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
