import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { GymOwnerNavbar } from './components/layout/GymOwnerNavbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { QRScanner } from './components/scanner/QRScanner';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { GymRegistration } from './pages/GymRegistration';
import { Careers } from './pages/Careers';
import { Membership } from './pages/Membership';
import { FindGym } from './pages/FindGym';
import { GymOwnerDashboard } from './pages/GymOwnerDashboard';
import { GymOwnerProfile } from './pages/GymOwnerProfile';
import { GymOwnerSettings } from './pages/GymOwnerSettings';
import { Toaster } from 'react-hot-toast';
import { useGymOwnerStore } from './store/gym-owner-store';

export default function App() {
  const isGymOwnerAuthenticated = useGymOwnerStore((state) => state.isAuthenticated);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {isGymOwnerAuthenticated ? <GymOwnerNavbar /> : <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scan" element={<QRScanner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/gym-registration" element={<GymRegistration />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/find-gym" element={<FindGym />} />
            <Route path="/gym-owner-dashboard" element={<GymOwnerDashboard />} />
            <Route path="/gym-owner-profile" element={<GymOwnerProfile />} />
            <Route path="/gym-owner-settings" element={<GymOwnerSettings />} />
          </Routes>
        </main>
        {!isGymOwnerAuthenticated && <Footer />}
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}