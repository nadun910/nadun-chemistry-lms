import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll create this file next

export default function MainNavbar() {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg"
      className="custom-navbar" // Added custom class
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          Nadun Chemistry
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/2025" className="nav-link-custom">2025 A/L</Nav.Link>
            <Nav.Link as={Link} to="/2026" className="nav-link-custom">2026 A/L</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login" className="nav-link-custom">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}