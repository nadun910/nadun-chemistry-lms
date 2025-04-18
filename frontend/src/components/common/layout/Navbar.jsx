import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ChemistryNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Nadun Edirisinghe Chemistry
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/2025">2025 A/L</Nav.Link>
          <Nav.Link as={Link} to="/2026">2026 A/L</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}