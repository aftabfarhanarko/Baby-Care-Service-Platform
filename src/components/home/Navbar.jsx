"use client"
import { Heart, Menu, X } from 'lucide';
import React from 'react';

const Navbar = () => {
    const user = true
    const mobileMenuOpen = true
    return (
          // Navbar Component
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('home')}>
            {/* <Heart className="w-8 h-8 mr-2" /> */}
            <span className="text-2xl font-bold">Care.xyz</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => navigate('home')} className="hover:text-blue-200 transition">Home</button>
            <button onClick={() => navigate('services')} className="hover:text-blue-200 transition">Services</button>
            {user && <button onClick={() => navigate('my-bookings')} className="hover:text-blue-200 transition">My Bookings</button>}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Hello, {user.name}</span>
                <button onClick={() => {
                  setUser(null);
                  localStorage.removeItem('careUser');
                  navigate('home');
                }} className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={() => navigate('login')} className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {/* {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} */}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <button onClick={() => navigate('home')} className="block w-full text-left py-2 hover:text-blue-200">Home</button>
            <button onClick={() => navigate('services')} className="block w-full text-left py-2 hover:text-blue-200">Services</button>
            {user && <button onClick={() => navigate('my-bookings')} className="block w-full text-left py-2 hover:text-blue-200">My Bookings</button>}
            {user ? (
              <>
                <div className="py-2 text-sm">Hello, {user.name}</div>
                <button onClick={() => {
                  setUser(null);
                  localStorage.removeItem('careUser');
                  navigate('home');
                }} className="bg-white text-blue-600 px-4 py-2 rounded-lg w-full mt-2">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => navigate('login')} className="bg-white text-blue-600 px-4 py-2 rounded-lg w-full mt-2">
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>

    );
};

export default Navbar;