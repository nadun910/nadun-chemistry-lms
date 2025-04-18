import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';          // Fixed path
import Login from '../pages/auth/Login';           // Fixed path
import NavigationBar from '../components/layout/Navbar';  // Updated import name
import { Container } from 'react-bootstrap';

export default function AppRoutes() {
  return (
    <>
      <NavigationBar /> {/* Corrected component name */}
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}