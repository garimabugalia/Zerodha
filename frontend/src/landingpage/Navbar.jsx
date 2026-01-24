

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import useAuth from "../hooks/useAuth";
import { API_BASE, DASHBOARD_URL } from "../config/api";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { loading, isAuthenticated } = useAuth();




  // check login state

  const navLinks = [
    { name: "Signup", href: '/signup' },
    { name: "About", href: '/about' },
    { name: "Product", href: '/product' },
    { name: "Pricing", href: '/pricing' },
    { name: "Support", href: '/support' },
  ];

  


 if (loading) return null;
 
 const logout = async () => {
  await fetch(`${API_BASE}/api/logout`, {
    method: "POST",
    credentials: "include",
  });
  window.location.href = "/signup";
};

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img src="/Media/logo.svg" alt="Logo" className="h-5" />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-500 hover:text-blue-600 transition-colors text-[16px] !no-underline"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => {
                if (isAuthenticated) {
                  window.location.href = `${DASHBOARD_URL}`;  
                } else {
                  navigate("/signup");
                }
              }}

              className="text-gray-500 hover:text-blue-600 transition-colors text-[16px]"
            >
              Dashboard
            </button>


            {isAuthenticated && (
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-600 text-[16px]"
              >
                Logout
              </button>
            )}



          </div>
          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-blue-600 py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
             to={isAuthenticated ? "/dashboard" : "/signup"}


              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-blue-600 py-2"
            >
              Dashboard
            </Link>
            {/* {isLoggedIn && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="block text-red-500 hover:text-red-600 py-2"
              >
                Logout
              </button>
            )} */}

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
