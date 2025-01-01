import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    avatarUrl: string;
  };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="hero-section">
      <Container className="py-5 text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="mb-5">
              <h1 className="display-4 fw-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                {data.title}
              </h1>
              <p className="lead mb-5" style={{ fontSize: '1.25rem', opacity: 0.9 }}>
                {data.subtitle}
              </p>
            </div>
            <div className="avatar-container mb-5">
              <img
                src={data.avatarUrl}
                alt="Profile"
                className="rounded-circle"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;