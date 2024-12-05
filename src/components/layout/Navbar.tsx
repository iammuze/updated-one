import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, User, LogOut, MapPin } from 'lucide-react';
import { useAuthStore } from '../../store/auth-store';

export function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">GymGPT</span>
            </Link>
            
            <div className="hidden md:flex md:ml-10 space-x-4">
              <Link
                to="/membership"
                className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Membership
              </Link>
              <Link
                to="/find-gym"
                className="flex items-center text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <MapPin className="h-4 w-4 mr-1" />
                Find Gym
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/scan"
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Scan QR
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}