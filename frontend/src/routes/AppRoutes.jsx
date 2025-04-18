import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import HomePage from '../pages/HomePage.JsX';
import YearContentPage from '../pages/YearContentPage';

export default function AppRoutes() {
  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:year" element={<YearContentPage />} />
        </Routes>
      </Container>
    </>
  );
}