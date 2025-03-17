import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css"; // Import custom styles

const Skills = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center moving-text mb-4">SKILLS & EXPERTISE</h1>
      <Row className="gy-4 justify-content-center">
        {/* Frontend */}
        <Col md={3} lg={4}>
          <Card className="skill-card frontend">
            <Card.Body>
              <h4>Frontend</h4>
              <ul>
                <li>React.js</li>
                <li>Javascript</li>
                <li>Redux</li>
                <li>HTML, CSS</li>
                <li>Bootstrap</li>
                <li>API</li> 
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Backend */}
        <Col md={3} lg={4}>
          <Card className="skill-card backend">
            <Card.Body>
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Auth & Security</li>
                <li>API Handling</li>
                <li>Error Handling</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Database */}
        <Col md={3} lg={4}>
          <Card className="skill-card database">
            <Card.Body>
              <h4>Databas</h4>
              <ul>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Aggregation</li>
                <li>Atlas Cloud</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Tools */}
        <Col md={3} lg={4}>
          <Card className="skill-card tools">
            <Card.Body>
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>Netlify & Render</li>
                <li>Postman</li>
                <li>VS Code</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

