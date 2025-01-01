import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../assets/profile.jpg'

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
              <h1 className="lead mb-4 fw-bold" style={{ fontSize: '4rem', opacity: 0.9 }}>
                {data.title}
              </h1>
              <p className="lead mb-5" style={{ fontSize: '1.25rem', opacity: 0.9 }}>
                {data.subtitle}
              </p>
            </div>
            <div className="avatar-container mb-5">
              <img
                src={profileImg}
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