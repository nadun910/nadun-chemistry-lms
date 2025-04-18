import { Routes, Route } from 'react-router-dom';
import ChemistryNavbar from '../components/layout/Navbar';
import HomePage from '../pages/HomePage';

export default function AppRoutes() {
  return (
    <>
      <ChemistryNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:year" element={<YearContentPage />} />
        </Routes>
      </Container>
    </>
  );
}