import React from 'react';
import { Container } from 'react-bootstrap';

const LoadingSpinner: React.FC = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </Container>
  );
};

export default LoadingSpinner;