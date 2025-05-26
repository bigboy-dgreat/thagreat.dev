import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const linkClass = 'text-white hover:text-teal-400 px-4 py-2';

  return (
    <nav className="bg-black/90 border-b border-blue-950 sticky top-0 z-50 w-full">
      {/* Greeting Overlay */}
      {showGreeting && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-teal-100 text-3xl font-bold animate-greeting z-40">
          You're Welcome
        </div>
      )}

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo */}
          <NavLink to="/" className="text-white text-2xl font-bold absolute left-4">
            ThaGreat II
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex absolute right-8">
            <HashLink smooth to="#" className={linkClass}>Home</HashLink>
            <HashLink smooth to="#project" className={linkClass}>Project</HashLink>
            <NavLink to="/resume" className={linkClass}>Resume</NavLink>
            <HashLink smooth to="#contact" className={linkClass}>
              Say Hello <i className="fa-solid fa-envelope" />
            </HashLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute right-4 z-50">
            <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-4 text-right">
          <HashLink smooth to="#" onClick={toggleMenu} className={linkClass}>Home</HashLink>
          <HashLink smooth to="#project" onClick={toggleMenu} className={linkClass}>Project</HashLink>
          <NavLink to="/resume" onClick={toggleMenu} className={linkClass}>Resume</NavLink>
          <HashLink smooth to="#contact" onClick={toggleMenu} className={linkClass}>
            Say Hello <i className="fa-solid fa-envelope" />
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


