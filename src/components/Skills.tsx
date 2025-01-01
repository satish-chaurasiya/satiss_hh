import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code, Palette, Server } from 'lucide-react';

interface SkillsProps {
  data: {
    title: string;
    items: Array<{
      name: string;
      icon: string;
    }>;
  };
}

const iconMap: { [key: string]: React.ReactNode } = {
  react: <Code size={40} />,
  code: <Code size={40} />,
  palette: <Palette size={40} />,
  server: <Server size={40} />
};

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{ 
        background: 'var(--anime-gradient)', 
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        fontWeight: 'bold'
      }}>
        {data.title}
      </h2>
      <Row className="g-4">
        {data.items.map((skill, index) => (
          <Col key={index} md={3}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 skills-card">
              <div className="skills-icon mb-3">
                {iconMap[skill.icon]}
              </div>
              <Card.Title className="fw-bold">{skill.name}</Card.Title>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;