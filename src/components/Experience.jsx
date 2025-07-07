import React from 'react';
import './Experience.css';

const experiences = [
  
  {
    company: "Credencer Technologies",
    role: "Full Stack Intern",
    period: "Mar 2025 – jun 2025",
    description: "Built business websites using WordPress, Canva, and Hostinger. Created frontend UI and managed hosting for real-world client sites."
  },
  {
    company: "AZ SoftTech",
    role: "Java Developer",
    period: "Nov 2024 - Feb 2025",
    description: "Developed and maintained backend features using Java, Servlets, MySQL. Handled email automation and PDF generation for employee data."
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card"
           data-aos="fade-up"
           data-aos-delay={index * 150} 
           data-aos-duration="1000"
          >
            <h3>{exp.company}</h3>
            <h4>{exp.role}</h4>
            <p className="period">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
