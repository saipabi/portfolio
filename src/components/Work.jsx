import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaPhoneAlt, FaEnvelope, FaGithub, FaLink } from 'react-icons/fa';

const Work = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row className="justify-content-center align-items-center w-100">
        {/* Work With Me Section */}
        <Col md={5} className="mb-4">
          <Card className="p-4 shadow-sm border-0 h-100 bg-black text-primary">
            <Card.Body>
              <h2 id="textit" className="text-primary fw-bold" style={{ lineHeight: '1.2' }}>
                WORK<br />WITH ME
              </h2>
              <ul className="list-unstyled mt-3">
                <li className="d-flex align-items-center mb-2">
                  <FaLinkedin className="me-2 text-primary" />
                  <a href="https://www.linkedin.com/in/suriya-raj" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/suriya_raj
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaPhoneAlt className="me-2 text-success" />
                  6381565927
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaEnvelope className="me-2 text-danger" />
                  saipabi123@gmail.com
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaGithub className="me-2 text-dark" />
                  <a href="https://github.com/saipabi" target="_blank" rel="noopener noreferrer">
                    github.com/saipabi
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaLink className="me-2 text-info" />
                  <a href="https://drive.google.com/file/d/1HdrBUrjAHwQRhB2Ay2TpVz5WaZrxi9wa/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    reme.com/suriya_raj
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Work Experience Section */}
        <Col md={5} className="mb-4">
          <Card className="p-4 shadow-sm border-0 h-100 bg-black text-primary">
            <Card.Body>
              <h2 className="text-primary fw-bold" id="textit" style={{ lineHeight: '1.2' }}>
                WORK<br />EXPERIENCE
              </h2>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">Work At</li>
                <li className="mb-2">HR Specialist (2011 - 2015)</li>
                <li className="mb-2">Everonn Edu LTD.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
