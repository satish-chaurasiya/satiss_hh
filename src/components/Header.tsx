import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

interface HeaderProps {
  data: {
    logo: string;
    navigation: Array<{
      text: string;
      link: string;
      isButton: boolean;
    }>;
  };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <Navbar bg="white" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="fs-4 fw-bold text-primary">
          {data.logo}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {data.navigation.map((item, index) => (
              item.isButton ? (
                <Button key={index} variant="outline-primary" href={item.link} className="ms-3">
                  {item.text}
                </Button>
              ) : (
                <Nav.Link key={index} href={item.link} className="text-dark">
                  {item.text}
                </Nav.Link>
              )
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;