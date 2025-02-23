
import { Container, Row, Col, Card } from 'react-bootstrap';

const Exper= () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0 rounded-3">
            <Card.Body>
              <h1 id="text" className="text-primary mb-3">Experience</h1>
              <p className="text-muted">
                As a recruiter at <strong>Everonn</strong>, I managed end-to-end recruitment processes, including sourcing, interviewing, and onboarding. 
                Developed and maintained strong relationships with candidates and hiring managers. 
                Conducted employee engagement activities and assisted in policy formulation.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Exper;
