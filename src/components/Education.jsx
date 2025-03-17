
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card} from 'react-bootstrap';
import Experience from "./Experience";
// 
const Education = () => {
  return (
    <>
    <Container className='mt-5'>
      <h1 className=' moving-text text-center mb-4 text-white'>Education and Projects</h1>
      <Row className='justify-content-center'>
        <Col md={6}>
          <Card className='mb-4 shadow-sm bg-black text-white'>
            <Card.Body>
              <Card.Title>MA in Human Resource Management</Card.Title>
              <Card.Subtitle className='mb-2 text-white'>WCC 2011</Card.Subtitle>
            </Card.Body>
          </Card>
          
          <Card className='mb-4 shadow-sm bg-black text-white'>
            <Card.Body>
              <Card.Title>Full Stack Development Course</Card.Title>
              <Card.Subtitle className='mb-2 text-white'>Guvi (2024)</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="container mt-5">
    

      {/* <p>✅Designed and developed a fully functional calculator (using JS, HTML, CSS).</p>
      <p>✅Created New Year Countdown App (Using JS, HTML, CSS).</p>
      <p>✅Developed a food cart app. Added CRUD operations (using React.js, Redux, and Router).</p>
      <p>✅Build a Currency Converter (Using JS, HTML, CSS).</p>
      <p>✅Developed a responsive landing page (using JS, HTML, CSS).</p>
      <p>✅Developed an interactive dashboard app that visualizes key metrics and analytics through charts, graphs, and data. (React, Router, Context.)
      <p></p>✅Created an image highlights app that allows users to upload and highlight specific parts of images.
        for better visualization (JS, HTML, CSS).</p>
        <p>✅Built a to-do list app that allows users to add, update, 
        and delete tasks, with a simple and intuitive interface.
        interface (React, Use Context)</p> */}
    </div>
    <Experience/>

     
    </Container>
    <div>
      
    </div>
    </>
    

    

    
  );
};
export default Education;


