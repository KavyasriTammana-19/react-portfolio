import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css'; // 🔁 Custom styles here

const Projects = () => {
  const projectList = [
    {
      title: "1️⃣ Employee Management System",
      description: "Full CRUD system with photo upload, PDF generation, and email integration.",
      tech: "Node.js, Express, MySQL, Multer, Nodemailer, PDFKit",
      github: "https://github.com/KavyasriTammana-19/Project1.git",
      demo: "#"
    },
    {
      title: "2️⃣ User Registration System (JSP)",
      description: "User registration, login, session handling, and SHA-256 password hashing.",
      tech: "Java, JSP, Servlets, MySQL, JDBC",
      github: "https://github.com/KavyasriTammana-19/Project2.git",
      demo: "#"
    },
    {
      title: "3️⃣ Employee Form ",
      description: "Simple JSP-based employee data submission with MySQL integration.",
      tech: "JSP, MySQL",
      github: "https://github.com/KavyasriTammana-19/Project.git",
      demo: "#"
    },
    {
      title: "4️⃣ React Portfolio (This Site)",
      description: "React + Bootstrap portfolio with smooth scroll, back to top, and project showcase.",
      tech: "React, Bootstrap, Vite",
      github: "https://github.com/KavyasriTammana-19/react-portfolio",
      demo: "#"
    },
{
  title: "5️⃣ Mina Sweet Shop Website",
  description: "Customized sweet shop website with product display, enquiry form, and responsive design.",
  tech: "HTML, CSS, JavaScript, WordPress (Hostinger)",
  github: "#",
  demo: "https://sweetshop.credencer.in/sweetshop/"
},
{
  title: "6️⃣ Scoop Ice Creams Website",
  description: "Business website for an ice cream shop with gallery, contact info and modern UI.",
  tech: "HTML, CSS, JavaScript, Bootstrap",
  github: "#",
  demo: "https://project06.credencer.in/project06/"
}

  ];

  return (
    <section id="projects" className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center mb-4" data-aos="fade-up">Projects</h2>
        <Row>
          {projectList.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index} data-aos="zoom-in">
              <Card className="h-100 project-card text-dark">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{project.tech}</Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  {project.demo !== "#" && (
                    <Button variant="primary" href={project.demo} className="me-2" target="_blank">Live Demo</Button>
                  )}
                  {project.github !== "#" && (
                    <Button variant="dark" href={project.github} target="_blank">GitHub</Button>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
