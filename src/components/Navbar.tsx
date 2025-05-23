
import React from 'react';
import { ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-white text-xl font-bold tracking-wide">Paragon</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white font-semibold hover:text-orange-500 transition-colors duration-300">
              Home
            </a>
            <a href="#" className="text-white font-semibold hover:text-orange-500 transition-colors duration-300">
              Pages
            </a>
            <a href="#" className="text-white font-semibold hover:text-orange-500 transition-colors duration-300">
              Portfolio
            </a>
            <a href="#" className="text-white font-semibold hover:text-orange-500 transition-colors duration-300">
              Blog
            </a>
            <a href="#" className="text-white font-semibold hover:text-orange-500 transition-colors duration-300">
              Shop
            </a>
          </div>

          {/* Right Side Icons and CTA */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-white hover:text-orange-500 transition-colors duration-300 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </div>
              <Search className="w-6 h-6 text-white hover:text-orange-500 transition-colors duration-300 cursor-pointer" />
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
