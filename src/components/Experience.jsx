
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Food-card App',
    description: '"Developed using React Context, Props, useState, and Bootstrap."',
    imageUrl: 'https://img.freepik.com/free-psd/special-food-menu-restaurant-poster-template_47987-16772.jpg',
    githubLink: 'https://github.com/saipabi/front-end-recode',
    netlifyLink: 'https://elegant-khapse-405dee.netlify.app/'
  },
  {
    title: 'Router Blog Design',
    description: '  "REACT-ROUTER,Use-state,Props and CSS".',
    imageUrl: '/React-router.jpg',
    githubLink: ' https://github.com/saipabi/React-Router',
    netlifyLink: 'https://react-router-zen.netlify.app/Carrier'
  },
  {
    title: 'Simon game',
    description: '"A game developed using JS, HTML, and CSS."',
    imageUrl: 'https://i.ytimg.com/vi/1Yqj76Q4jJ4/maxresdefault.jpg',
    githubLink: 'https://github.com/saipabi/game',
    netlifyLink: 'https://game-si.netlify.app/'
  },

  {
    title: 'Hightlight Images',
    description: '"Highlights the selected imagaes, Developed using JS, HTML, and CSS."',
    imageUrl: '/highlights.png',
    githubLink: 'https://github.com/saipabi/image-hilights',   
    netlifyLink: '  https://imagehighlight.netlify.app/'
  },

  {
    title: 'MERN To do App',
    description: '"A complete todos, Developed with React, Bootstrap, Node.js, Express, and MongoDB."',
    imageUrl: '/todo.jpg',
    githubLink: 'https://github.com/saipabi/frontend-todo',   
    netlifyLink: 'https://mern-todo-app-com.netlify.app/'   
  },
  {
    title: 'MERN Email-Tool',
    description: '"Developed with React Hooks, Node.js, Express, MongoDB, and Bootstrap."',
    imageUrl: '/email.png',
    githubLink: 'https://github.com/saipabi/frontend-todo',   
    netlifyLink: 'https://email-tool-s.netlify.app/'
  }


];

const Experience = () => {
  return (
    
    
    <Container className="mt-5">
      <h1 className='text-center mb-4'>Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img 
                variant="top" 
                src={project.imageUrl}
                alt={project.title} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button 
                    variant="dark" 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="me-3 p-3"
                    
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