import React from 'react';
import { Container, Alert } from 'react-bootstrap';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Container className="py-5">
      <Alert variant="danger">
        <Alert.Heading>Error Loading Portfolio</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </Container>
  );
};

export default ErrorMessage;