import './Header.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from "./M.svg";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when the screen size changes to desktop
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  // Add a resize event listener to handle the screen size change
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <header className="bg-white text-black">
      <div className="mx-2 flex items-center justify-between">
        <Link className='md:-mt-4' to="/">
          <img className="w-40 mt-2  md:mt-5  mb-2" src={logo} alt="LOGO" />
        </Link>

        <div>
          <p className='text-lg xl:text-5xl lg:text-4xl md:text-2xl text-center tahar-header-text mb-4'>Mountain View Wellness and Family Medical Corporation</p>
        </div>

        <div>
          <div className='hidden md:flex -mt-10 mb-6'>
            <p>Contact info will go here -----------</p>
          </div>

          <nav className="hidden md:block space-x-4 text-center mr-4">
            <Link className="hover:text-blue-900 custom-nav-css" to="/about">
              About
            </Link>
            <Link className="hover:text-blue-300 custom-nav-css" to="/reviews">
              Reviews
            </Link>
            <Link className="hover:text-blue-300 custom-nav-css" to="/services">
              Services
            </Link>
            <Link className="hover:text-blue-300 custom-nav-css" to="/gallery">
              Gallery
            </Link>
            <Link className="hover:text-blue-300 custom-nav-css" to="/faq">
              FAQ
            </Link>
            <Link className="hover:text-blue-300 custom-nav-css" to="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <button
          className="md:hidden bg-blue-500 hover:bg-blue-600 h-14 text-white px-2 py-1 rounded-lg toggle-button border border-black"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Show the mobile menu on screens the size of a mobile device */}
      {isMobileMenuOpen && (
        <div className=" bg-blue-400 container mx-auto py-4 text-center custom-menu-slide">
          <ul className="space-y-2">
            <li>
              <Link
                className="hover:text-blue-300"
                to="/about"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/reviews"
                onClick={toggleMobileMenu}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/services"
                onClick={toggleMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/gallery"
                onClick={toggleMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/faq"
                onClick={toggleMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300"
                to="/contact"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}



    </header>
  );
};

export default Header;
