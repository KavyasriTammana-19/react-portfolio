import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Skills.css'; // If you have custom styles

const skills = [
  {
    category: "Programming Languages",
    items: "Java, JavaScript",
  },
  {
    category: "Backend Development",
    items: "Spring Boot, Node.js, Servlets, RESTful APIs",
  },
  {
    category: "Frontend Development",
    items: "HTML, CSS, JavaScript, Bootstrap, JQuery, React.js",
  },
  {
    category: "Database Management",
    items: "SQL, MySQL, JPA/Hibernate",
  },
  {
    category: "Frameworks & Tools",
    items: "Git, JIRA, Maven",
  },
  {
    category: "Hosting & Deployment",
    items: "GitHub Pages, Hostinger, Vite, Netlify",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 text-white" style={{
      background: 'linear-gradient(135deg, #0d6efd 10%, #6f42c1 90%)',
    }}>
      <Container>
        <h2 className="text-center mb-4" data-aos="fade-down">My Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={6} lg={4} key={index} className="mb-4" data-aos="zoom-in">
              <Card className="h-100 shadow-sm bg-light text-dark">
                <Card.Body>
                  <h5 className="fw-bold mb-2">{skill.category}</h5>
                  <p>{skill.items}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
