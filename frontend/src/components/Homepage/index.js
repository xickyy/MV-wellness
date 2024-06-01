import './Homepage.css';

import React, { useState, useEffect } from 'react';

import homepagevid from './homepagevid.mp4';
import GoogleMap from '../GoogleMap';
import infoBg from './homepageBgInfo.mp4';

const Homepage = () => {

  const [word, setWord] = useState("We Accept Walk-in's!");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const words = ["We Accept Walk-in's!", 'No Insurance No Problem!', 'We Do Select Aesthetics!', 'Sick Visits For Children!', 'Weight Loss Programs!'];
    let index = 1;

    const timer = setInterval(() => {
      setFadeOut(true); // Trigger fade-out animation
      setTimeout(() => {
        setWord(words[index]);
        setFadeOut(false); // Reset fade-out animation
        index = (index + 1) % words.length;
      }, 500); // Change the word after 500ms (0.5 seconds)
    }, 4000); // Repeat every 4 seconds (4000 milliseconds)

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div>

      <div className='home-welcome-text home-welcome-message-container text-center mt-12 w-64 md:mt-24 md:w-3/6'>
        <p className='text-4xl md:text-6xl mt-6 md:mt-8 pt-2 home-welcome-text home-text-outline'>Welcome!</p>

        <span className={`text-xl md:text-4xl mt-12 md:mt-16 pb-2 animated-word home-text-outline ${fadeOut ? 'fade-out' : ''}`}>
          {word}
        </span>
      </div>

      <video className='custom-homepage-video-container' muted autoPlay loop playsinline>
        <source src={homepagevid}></source>
      </video>

      <div className=' flex justify-center text-center p-2 py-6 md:py-12 home-page-info-container'>
        <video autoPlay muted loop playsinline id="bg-video">
          <source src={infoBg} ></source>
        </video>
        <p className='lg:w-4/5 text-lg md:text-xl font-bold home-page-text'>Nestled in the heart of our serene mountain community, Mountain View Wellness and Family Medical Corporation. offers personalized, compassionate
          care for you and your family. Our dedicated team of healthcare professionals is here to provide top-quality medical services, ensuring you stay healthy in a holistic manner,
          mind, body and soul. At Mountain View Wellness and Family Medical Corporation, we believe in building strong relationships with our patients and the community Our team is committed to providing you with
          the highest standard of care, from routine check-ups to managing chronic conditions, we are here to support you every step of the way. Furthermore, we understand that life
          can be busy, so we offer flexible appointment times to fit your schedule needs including walk-in’s. Whether you need an early morning check-up or a late afternoon consultation,
          we’ve got you covered. Come visit us at Mountain View Wellness and family Medical Corporation, where your health is our top priority! Call us at (661) 947-3300 to schedule an appointment
          today. We look forward to serving you and your family!
        </p>
      </div>

      <div className='google-map-homepage'>
        <GoogleMap />
      </div>

    </div>
  );
}

export default Homepage;
