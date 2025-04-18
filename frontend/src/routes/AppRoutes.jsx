import { Routes, Route } from 'react-router-dom';
import MainNavbar from '../components/layout/MainNavbarNavbar';
import HomePage from '../pages/HomePage';
import Login from '../pages/auth/Login';
import YearContentPage from '../pages/YearContentPage';
import { Container } from 'react-bootstrap';

export default function AppRoutes() {
  return (
    <>
      <MainNavbar />
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