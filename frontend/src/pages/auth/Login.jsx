// src/pages/auth/Login.jsx
import { Form, Button } from 'react-bootstrap';

export default function Login() {
  return (
    <div className="auth-form">
      <h2>Student Login</h2>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="primary" className="mt-3">Login</Button>
      </Form>
    </div>
  );
}