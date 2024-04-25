import './Footer.css';

import { Link } from 'react-router-dom';
import facebook from './facebook-logo.png';
import instagram from './instagram-logo.png';
import yelp from './yelp-logo.png';
import logo from './M-circle.svg';

const Footer = () => {

  const scrollToTop = () => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollTop({ behavior: 'smooth' });
    }
  }

  return (
    <div className='bg-gray-300 text-black py-10'>
      <div className='container mx-auto flex flex-wrap'>

        <div className='w-full md:w-1/4 px-4 text-center'>
          <h3 className='text-xl underline text-center'>Contact info:</h3>
          <div className='flex mt-2 flex justify-center'>
            <i className="fas fa-phone mr-2"></i>
            <p>Call us if you have questions!
              <a className='text-blue-800 ml-2 custom-footer-number' href='tel:661-947-3300'> 661-947-3300</a>
            </p>
          </div>
          <p className='mt-2'>Mountain View Wellness and Family Medical Corporation</p>
          <i className="mr-2 fa-solid fa-location-dot"></i>
          <a href="https://www.google.com/maps/search/?api=1&query=520 W Palmdale Blvd Q, Palmdale, Ca 93551" target="_blank" rel="noreferrer">520 W Palmdale Blvd Q, Palmdale, Ca 93551</a>

        </div>

        <div className='w-full md:w-1/4 px-4 text-center md:flex md:flex-col'>
          <h3 className='mt-6 text-xl underline'>Social Links</h3>
          <div className='flex justify-around items-center md:flex-col md:place-content-center'>
            <a href='https://www.facebook.com/profile.php?id=100053771570764' target='_blank' rel="noreferrer">
              <img className='w-12 h-12 mt-2 custom-hover-social-img' src={facebook} alt=''></img>
            </a>
            <a href='https://www.instagram.com/tahar_garage_door_repair_' target='_blank' rel="noreferrer">
              <img className='w-12 h-12 mt-2 custom-hover-social-img' src={instagram} alt=''></img>
            </a>
            <a href='https://www.yelp.com/biz/tahar-garage-door-repair-services-palmdale-2?osq=tahar+garage+door+services&override_cta=Get+pricing+%26+availability' target='_blank' rel="noreferrer">
              <img className='w-12 h-12 mt-2 custom-hover-social-img' src={yelp} alt=''></img>
            </a>
          </div>
        </div>

        <div className='w-full md:w-1/4 px-4'>
          <h3 className='text-xl underline text-center mt-6 md:mt-0'>Quick Links:</h3>
          <div className='flex justify-around md:flex-col md:text-center'>
            <Link id="top" onClick={scrollToTop} className='text-blue-800 mt-2 custom-footer-link' to='/reviews'>Reviews</Link>
            <Link id="top" onClick={scrollToTop} className='text-blue-800 mt-2 custom-footer-link' to='/services'>Services</Link>
            <Link id="top" onClick={scrollToTop} className='text-blue-800 mt-2 custom-footer-link' to='/about'>About</Link>
            <Link id="top" onClick={scrollToTop} className='text-blue-800 mt-2 custom-footer-link' to='/gallery'>Gallery</Link>
            <Link id="top" onClick={scrollToTop} className='text-blue-800 mt-2 custom-footer-link' to='/faq'>FAQ</Link>
            <Link id="top" onClick={scrollToTop} className='text-blue-800 mt-2 custom-footer-link' to='/contact'>Contact</Link>
          </div>
        </div>

        <div className='w-full md:w-1/4 px-4'>
          <h3 className='text-xl custom-footer-hours mt-8 text-center md:mt-0'>Hours Of Operation:</h3>
          <p className='mt-2 text-center'>Monday - Friday:</p>
          <p className='mt-1 text-green-600 text-center'>9:00am - 5:00pm</p>
          <div className='mt-2'>
            <p className='mt-1 text-center'>Saturday - Sunday:</p>
            <p className='text-red-600 text-center'>Closed</p>
          </div>
        </div>
      </div>
      <Link to='/' id="top" onClick={scrollToTop}><img className='w-24 h-24 mt-4 mx-auto rounded-full border-2 border-black' src={logo} alt='LOGO'></img></Link>
    </div>
  );
};

export default Footer;
