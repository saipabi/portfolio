// File: Portfolio.js
// Libraries: React, Bootstrap, react-icons

// import { Container, Row, Col, Button, Card } from "react-bootstrap";

import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Portfolio = () => {
  return (
    <div className="bg-primary body">
    <Container className="mt-5 text-center">
      {/* Profile Section */}
      <Row className="justify-content-center">
        <Col md={6}>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="rounded-circle img-fluid border border-3 border-primary"
            style={{ width: "150px", height: "150px" }}
          />
          <h1 className="mt-3">Your Name</h1>
          <p className="text-muted">Full Stack Developer | MERN Stack</p>
        </Col>
      </Row>

      {/* Links */}
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="me-3">
            <FaLinkedin size={30} className="text-primary" />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="me-3">
            <FaGithub size={30} className="text-dark" />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope size={30} className="text-danger" />
          </a>
        </Col>
      </Row>

      {/* Resume Button */}
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Button variant="primary" href="/resume.pdf" download>
            Download Resume
          </Button>
        </Col>
      </Row>

      {/* About Section */}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card className="p-4 shadow">
            <h2>About Me</h2>
            <p>I am a passionate and skilled Full Stack Developer with a strong background in MERN stack (MongoDB, Express.js, React, Node.js) and other modern web technologies. With a career transition from HR to Software Development, I bring a unique blend of problem-solving, communication, and analytical skills that enhance my ability to build efficient, user-friendly applications.

I thrive on tackling complex challenges, optimizing workflows, and developing scalable solutions that make an impact. My expertise spans frontend and backend development, API integration, database management, and cloud deployment.</p>
          </Card>
        </Col>
      </Row>

      {/* Education Section */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="p-4 shadow">
            <h2>Education</h2>
            <p>Master's in Human Resource Management, WCC</p>
            <p>Bachelor's in Computer Science, XYZ University</p>
          </Card>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="p-4 shadow">
            <h2>Experience</h2>
            <p>HR Recruiter, Everonn Education (2011 - 2013)</p>
            <p>Full Stack Developer Intern, ABC Tech (2024 - Present)</p>
          </Card>
        </Col>
      </Row>

      {/* Projects Section */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="p-4 shadow">
            <h2>Projects</h2>
            <ul className="list-unstyled">
              <li>
                <strong>Fundraising Portal:</strong> Designed a portal to track donations and referral codes.{" "}
                <a href="https://github.com/yourgithub/fundraising">
                  View Code <FaExternalLinkAlt />
                </a>
              </li>
              <li className="mt-3">
                <strong>URL Shortener:</strong> Developed a URL shortening application with login & analytics.{" "}
                <a href="https://github.com/yourgithub/urlshortener">
                  View Code <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Resources Section */}
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <Card className="p-4 shadow">
            <h2>Resources</h2>
            <ul className="list-unstyled">
              <li>
                <a href="https://yourblog.com/react-guide">
                  React Beginner's Guide <FaExternalLinkAlt />
                </a>
              </li>
              <li className="mt-2">
                <a href="https://yourgithub.com/repo">
                  Open Source Contributions <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Portfolio;
