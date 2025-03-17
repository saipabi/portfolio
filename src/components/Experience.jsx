import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [

  {
    title: 'MERN Blog Website',
    imageUrl: 'https://www.hubspot.com/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/free-blog-maker/grow-blog-traffic-en.webp',
    githubLink: 'https://github.com/saipabi/front-end-blog',
    netlifyLink: 'https://blog-complete-frontend.netlify.app/'
  },
  {
    title: 'A MERN Vege-Fruits-App',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/dc66c097701855.5ecbb5191c865.jpg',
    githubLink: 'https://github.com/saipabi/frontend-vegetables',
    netlifyLink: 'https://frontend-app-fruitveg.netlify.app/'
  },
  
  

  {
    title: 'MERN To dos Application',
    imageUrl: '/todo.jpg',
    githubLink: 'https://github.com/saipabi/frontend-todo', 
    netlifyLink: 'https://mern-todo-app-com.netlify.app/' 
  },

  {
    title: 'MERN Email-Tool',
    imageUrl: '/email.png',
    githubLink: 'https://github.com/saipabi/capstone-finalproject-emailtool',   
    netlifyLink: 'https://email-tool-s.netlify.app/'
  }
];

const Experience = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Projects</h1>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col md={6} className="mb-4 d-flex justify-content-center" key={index}>
            <Card className="h-100 shadow-sm bg-black text-white" style={{ width: '100%', maxWidth: '350px' }}>
              <Card.Img 
                variant="top" 
                src={project.imageUrl}
                alt={project.title} 
                style={{ height: '180px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title className="text-center">{project.title}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Button 
                    variant="dark" 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="me-1 p-1"
                  >
                    GitHub
                  </Button>
                  
                  <Button 
                    variant="primary" 
                    href={project.netlifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experience;
