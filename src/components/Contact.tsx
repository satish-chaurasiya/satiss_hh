import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  data: {
    title: string;
    info: Array<{
      type: string;
      title: string;
      value: string;
    }>;
  };
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">{data.title}</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex flex-column gap-4">
              {data.info.map((item, index) => (
                <div key={index} className="d-flex align-items-center gap-3">
                  {item.type === 'email' && <Mail className="text-primary" />}
                  {item.type === 'phone' && <Phone className="text-primary" />}
                  {item.type === 'address' && <MapPin className="text-primary" />}
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-0">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;