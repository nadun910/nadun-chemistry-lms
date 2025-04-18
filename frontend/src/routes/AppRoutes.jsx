import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';          // Fixed path
import Login from '../pages/auth/Login';           // Fixed path
import Navbar from '../components/layout/Navbar';  // Fixed path
import { Container } from 'react-bootstrap';

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}