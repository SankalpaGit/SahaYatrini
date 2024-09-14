// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/">SahaYatrini</Link>
        </h1>

        {/* Search Bar for tablet and desktop */}
        <div className="hidden md:flex items-center w-full max-w-md ml-4">
          <div className="flex items-center w-full bg-white rounded-lg">
            <input
              type="text"
              placeholder="Search by places..."
              className="w-full px-4 py-2 text-gray-800 rounded-l-lg outline-none"
            />
            <button className="bg-green-600 p-3 rounded-r-lg flex justify-center items-center">
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu (Mobile and Tablet) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navbar Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-500">
            Home
          </Link>
          <Link to="/add-review" className="hover:text-green-500">
            Add Review
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-green-500" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/add-review" className="hover:text-green-500" onClick={toggleMenu}>
              Add Review
            </Link>
            <div className="flex items-center w-full bg-white rounded-lg">
              <input
                type="text"
                placeholder="Search by places..."
                className="w-full px-4 py-2 text-gray-800 rounded-l-lg outline-none"
              />
              <button className="bg-green-600 p-3 rounded-r-lg flex justify-center items-center">
                <FaSearch className="text-white" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
