import './Services.css';

import { Link } from 'react-router-dom';
import React from 'react';


const Services = () => {
  return (
    <div className='services-page-container'>

      <p className='text-3xl text-center p-4'>Our Services</p>

      <div className='services-grid-container pb-4'>
        <Link to='/services/primary-care' className='service-links' id='service-primary-care'>
          <p className='services-link-title'>Primary Care</p>
        </Link>

        <Link to='/services/womens-health' className='service-links' id='service-womens-health'>
          <p className='services-link-title'>Womens Health</p>
        </Link>

        <Link to='/services/mens-health' className='service-links' id='service-mens-health'>
          <p className='services-link-title'>Mens Health</p>
        </Link>

        <Link to='/services/screening' className='service-links' id='service-screenings'>
          <p className='services-link-title'>Screenings</p>
        </Link>

        <Link to='/services/walk-ins' className='service-links' id='service-walk-in'>
          <p className='services-link-title'>Walk In's</p>
        </Link>

        <Link to='/services/telehealth' className='service-links' id='service-telehealth'>
          <p className='services-link-title'>Telehealth</p>
        </Link>

        <Link to='/services/select-aesthetics' className='service-links' id='service-aesthetics'>
          <p className='services-link-title'>Select Aesthetics</p>
        </Link>

        <Link to='/services/sick-visits' className='service-links' id='service-sick-visits'>
          <p className='services-link-title'>Sick Visits</p>
        </Link>

        <Link to='/services/fpact' className='service-links' id='service-fpact'>
          <p className='services-link-title'>Fpact</p>
        </Link>

        <Link to='/services/every-woman-counts' className='service-links' id='service-every-woman-counts'>
          <p className='services-link-title'>Every Woman Counts</p>
        </Link>

        <Link to='/services/fee-for-service' className='service-links' id='service-cash-patients'>
          <p className='services-link-title'>Cash Patients</p>
        </Link>

        <Link to='/services/lipo-c' className='service-links' id='service-lipo-c'>
          <p className='services-link-title'>Lipo-C Injections</p>
        </Link>
      </div>

    </div>
  );
};


export default Services;
