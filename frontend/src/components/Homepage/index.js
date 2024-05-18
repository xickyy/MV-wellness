import './Homepage.css';

import React, { useState, useEffect } from 'react';

import homepagevid from './homepagevid.mp4';
import GoogleMap from '../GoogleMap';

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

      <video className='custom-homepage-video-container' muted autoPlay loop>
        <source src={homepagevid}></source>
      </video>

      <div className='google-map-homepage'>
        <GoogleMap />
      </div>

    </div>
  );
}

export default Homepage;
