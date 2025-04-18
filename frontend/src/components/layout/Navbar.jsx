import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Nadun Chemistry</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}