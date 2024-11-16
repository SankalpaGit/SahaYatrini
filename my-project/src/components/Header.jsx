import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaUserCircle } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-gray-800 p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600">
          <Link to="/">SahaYatrini</Link>
        </h1>

        {/* Search Bar for tablet and desktop */}
        <div className="hidden md:flex items-center w-full max-w-md ml-4 ">
          <div className="flex items-center w-full bg-white rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Search by places..."
              className="w-full px-4 py-2 text-gray-800 rounded-l-lg outline-none border border-orange-600"
            />
            <button className="bg-orange-600 p-3 rounded-r-lg flex justify-center items-center border border-orange-600">
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
          <Link to="/add-review" className="hover:text-orange-600">
            Add Review
          </Link>
          <Link to="/profile" className="hover:text-orange-600 flex items-center">
            <FaUserCircle size={28} className="mr-2" /> 
          </Link>
        </nav>

        {/* Hamburger Menu (Mobile and Tablet) */}
        <div className="md:hidden flex items-center text-orange-600">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} className='text-red-600' /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-white shadow-lg z-50"
        >
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="hover:text-orange-600" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/add-review" className="hover:text-orange-600" onClick={toggleMenu}>
              Add Review
            </Link>
            <Link to="/profile" className="hover:text-orange-600 flex items-center" onClick={toggleMenu}>
              Profile
            </Link>
            <div className="flex items-center w-full bg-white rounded-lg shadow-sm">
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
