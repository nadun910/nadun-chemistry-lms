import { Navbar, Container, Nav } from 'react-bootstrap';  // Add this import
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import YearContentPage from './pages/YearContentPage';

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:year" element={<YearContentPage />} />
        </Routes>
      </Container>
    </>
  );
}