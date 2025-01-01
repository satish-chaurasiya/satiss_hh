import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
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
              <p className="lead mb-5 fw-bold" style={{ fontSize: '1.25rem', opacity: 0.9 }}>
                {data.subtitle}
              </p>
              <p className="lead mb-5 fw-bold" style={{ fontSize: '1.25rem', opacity: 0.9 }}>
                <a href="https://1drv.ms/w/s!Al9yIj3x9O0cjZ53ihRE8fVy15Fa1g?e=vyvIeA" className="resume-url m-2 p-2"><span>Checkout my resume</span></a>
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