import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from "@/assets/icon.svg";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center gap-2 group transition-all duration-300 hover:scale-105"
          >
            <div className="rounded-lg shadow-lg">
                <img src={icon} alt="App Icon" className="w-10 h-10" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Magnum Enterprise
            </span>
          </Link>

          <div className="flex gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'text-blue-800 border-b-2 border-blue-800' 
                  : 'text-gray-600 hover:text-blue-800 hover:scale-105'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/catalogue" 
              className={`text-sm font-medium transition-all duration-300 ${
                isActive('/catalogue') 
                  ? 'text-blue-800 border-b-2 border-blue-800' 
                  : 'text-gray-600 hover:text-blue-800 hover:scale-105'
              }`}
            >
              Catalogue
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;