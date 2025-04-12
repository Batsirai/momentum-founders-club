
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  HomeIcon, 
  UserCircleIcon, 
  ChartBarIcon, 
  ArrowLeftOnRectangleIcon 
} from '@heroicons/react/24/outline';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  // This is a placeholder for the authentication state
  // This will be replaced with Supabase auth later
  const isLoggedIn = false;

  // Placeholder function for logout
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <nav className="py-4 px-6 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">First99K</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {isLoggedIn ? (
            <>
              <NavLink to="/dashboard" isActive={isActive('/dashboard')}>
                <HomeIcon className="h-5 w-5 mr-1" />
                Dashboard
              </NavLink>
              <NavLink to="/profile" isActive={isActive('/profile')}>
                <UserCircleIcon className="h-5 w-5 mr-1" />
                Profile
              </NavLink>
              <NavLink to="/leaderboard" isActive={isActive('/leaderboard')}>
                <ChartBarIcon className="h-5 w-5 mr-1" />
                Leaderboard
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" isActive={isActive('/')}>Home</NavLink>
              <NavLink to="/leaderboard" isActive={isActive('/leaderboard')}>
                <ChartBarIcon className="h-5 w-5 mr-1" />
                Leaderboard
              </NavLink>
            </>
          )}
        </div>

        <div>
          {isLoggedIn ? (
            <Button 
              variant="ghost" 
              className="flex items-center" 
              onClick={handleLogout}
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-1" />
              Logout
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button variant="ghost" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ 
  children, 
  to, 
  isActive 
}: { 
  children: React.ReactNode; 
  to: string; 
  isActive: boolean;
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-2 py-1 rounded-md transition-colors ${
        isActive 
          ? 'text-purple-700 font-medium'
          : 'text-gray-700 hover:text-purple-600'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navigation;
