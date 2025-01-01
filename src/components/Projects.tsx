import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface ProjectsProps {
  data: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
      technologies: string[];
    }>;
  };
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">{data.title}</h2>
      <Row className="g-4">
        {data.items.map((project, index) => (
          <Col key={index} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Img 
                variant="top" 
                src={project.image} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex gap-2 flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="badge bg-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;