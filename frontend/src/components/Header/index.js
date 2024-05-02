import './Header.css';
import { Link, useLocation } from 'react-router-dom';
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

  const location = useLocation();

  useEffect(() => {
    // Update active link when location changes
    const links = document.querySelectorAll('.active-nav');
    links.forEach(link => {
        if (link.getAttribute('href') === location.pathname) {
            link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
    });
}, [location.pathname]);


  return (
    <header className="bg-white text-black border-b-2 border-black">
      <div className="mx-2 flex items-center justify-between">
        <Link className='md:-mt-4' to="/">
          <img className="w-40 mt-2  md:mt-5  mb-2" src={logo} alt="LOGO" />
        </Link>

        <div>
          <p className='text-lg xl:text-5xl lg:text-4xl md:text-2xl text-center mb-4 custom-header-title'>Mountain View Wellness and Family Medical Corporation</p>
        </div>

        <div>
          <div className='hidden md:flex mb-4 justify-between'>
            <div className='flex flex justify-center custom-header-directions'>
              <a className='text-blue-800 ml-2 pr-2 custom-footer-number' href='tel:661-947-3300'>
                <i className="fas fa-phone mr-2 custom-phone-icon text-black"></i>
                (661)-947-3300
              </a>
            </div>
            <div className='custom-header-directions'>
              <a className='mr-2 text-blue-800 font-bold custom-header-directions-text' href="https://www.google.com/maps/search/?api=1&query=520 W Palmdale Blvd Q, Palmdale, Ca 93551" target="_blank" rel="noreferrer">
                <i className="ml-2 mr-2 fa-solid fa-location-dot text-black"></i>
                Get Directions!
              </a>
            </div>
          </div>

          <nav className="hidden md:block text-center mr-4">
            <Link className="active-nav custom-nav-css" to="/about">
              About
            </Link>
            <Link className="active-nav custom-nav-css" to="/reviews">
              Reviews
            </Link>
            <Link className="active-nav custom-nav-css" to="/services">
              Services
            </Link>
            <Link className="active-nav custom-nav-css" to="/faq">
              FAQ
            </Link>
            <Link className="active-nav custom-nav-css" to="/contact">
              Contact
            </Link>
          </nav>

          <div className='hidden md:block mb-2'>
            <Link className="mw-48 mt-4 custom-new-patient" to="/new-patients">
              New Patients
            </Link>
          </div>
        </div>

        <button
          className="md:hidden bg-blue-800 h-14 text-white px-2 py-1 rounded-lg toggle-button border border-black"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Show the mobile menu on screens the size of a mobile device */}
      {isMobileMenuOpen && (
        <div className=" bg-blue-800 container mx-auto py-4 text-center custom-menu-slide">
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
                to="/new-patients"
                onClick={toggleMobileMenu}
              >
                New Patients
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
