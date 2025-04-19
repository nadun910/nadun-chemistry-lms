import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/layout/Navbar';
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