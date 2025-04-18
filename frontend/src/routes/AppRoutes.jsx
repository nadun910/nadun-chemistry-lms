import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import HomePage from '../pages/HomePage';
import YearContentPage from '../pages/YearContentPage';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          {/* Existing Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/:year" element={<YearContentPage />} />
          
          {/* New Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}