import React, { useRef, useEffect } from 'react';

import './About.css';
import doc from './images/theDoctor.jpg';
import mom from './images/theProvider.jpg';
import bg from './images/desertBg.mp4';
import desert from './images/desert.png';

const About = () => {

  const videoRef = useRef(null);
  const playButtonRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;

      // // Check if the device is iOS
      // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      // if (isIOS) {
      //   // Show play button on iOS
      //   if (playButtonRef.current) {
      //     playButtonRef.current.style.display = 'block';
      //   }

      //   // Add event listener to play video on button click
      //   playButtonRef.current.addEventListener('click', () => {
      //     videoRef.current.play();
      //     playButtonRef.current.style.display = 'none';
      //   });
      // } else {
      //   // Attempt to autoplay the video on non-iOS devices
      //   videoRef.current.play();
      // }
    }
  }, []);


  return (
    <div className='about-page-container'>

      <div className=' about-bg-container'>
        <video id='myVideo' ref={videoRef} muted autoPlay loop playsInline type="video/mp4" poster={desert} className='about-background'>
          <source src={bg}></source>
        </video>
      </div>

      <div className='md:flex justify-around '>

        <div className='profile-card-container'>
          <p className='text-center p-4 underline text-2xl text-blue-900'>Meet Our Medical Director</p>
          <div className='text-center'>
            <p className='-mb-6 font-bold'>Dr. Kenneth Clayton, DO</p>
            <div className='p-8 about-img-container'>
              <img className='custom-doc-img md:h-80' src={doc} alt=''></img>
            </div>
            <div className='about-text-container'>
              <div className='p-2 container about-text-container'>
                <p className='md:hidden p-2 doctor-about-text'>Dr. Ken Clayton, DO, a dedicated medical professional specializing in OBGYN, who holds licenses in California and Hawaii. He completed his
                  education at West Virginia School of Osteopathic Medicine, followed by an internship at Doctors Hospital in Columbus, Ohio, and residency at Arrowhead Regional Medical Center in
                  Colton, California. Beyond his medical career, he is deeply involved in philanthropy, supporting Guiding Eyes for the Blind and St. Jude Children's Hospital. He is married with
                  two young children, aged 5 and 6, with family time at the top of his priorities. When Dr. Clayton is not "paying it forward" to the residents of his community, he enjoys spending
                  his free time traveling, camping, golfing, and four-wheeling in his Jeep. Additionally, he holds an instrument-rated private pilot license, although opportunities for flying are
                  few. Despite his busy schedule, he remains committed to his profession, serving on staff at Sierra Nevada Hospital, Riverside Community Hospital, and Little Company of Mary in
                  Torrance. Driven by a passion for education, he actively engages with residents in his community, embodying the principle of "paying it forward."
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className='profile-card-container'>
          <p className='text-center p-4 underline text-2xl text-blue-900'>Meet Our Medical Provider</p>
          <div className='text-center'>
            <p className='-mb-6 font-bold'>Bobbie Lee Tahar, FNP-C</p>
            <div className='p-8 about-img-container '>
              <img className='custom-doc-img md:h-80' src={mom} alt=''></img>
            </div>
            <div className='about-text-container'>
              <div className='p-2 container'>
                <p className='md:hidden p-2 doctor-about-text'>Bobbie Tahar, FNP-C, a local native, embarked on her medical career at Antelope Valley College, where she earned her first degree as a Registered Nurse.
                  Driven by a thirst for knowledge, Bobbie pursued her Bachelor's in Nursing at Chamberlain University and her Master's in Nursing at United States University, specializing in
                  family primary care. Now a certified Family Nurse Practitioner (FNP-C), she excels in OB-GYN, aesthetics, and primary care, holding a deep commitment to comprehensive patient well-being.
                  Bobbie always remains at the forefront of her field's advancements. She is deeply passionate about animal welfare
                  and actively supports ASPCA. Outside of her medical profession, She finds joy in outdoor activities like boating, skiing, dirt bike riding, and horseback riding.
                  However, her greatest joy comes from spending quality time with her family. Bobbie is happily married and is a loving mother of nine children, along with several adopted children who
                  affectionately call her "mom." She is an active member of The American Association of Nurse Practitioners, demonstrating her commitment to staying updated with the latest advancements
                  in her field. Her compassionate nature extends beyond her medical practice, as she remains dedicated to caring for others in all aspects of her life.
                </p>
              </div>
            </div>
          </div>
        </div>



      </div>

      <div>
        <div className='flex p-4'>
          <p className='hidden md:block w-6/12 border border-black p-4 mr-6 doctor-about-text'>Dr. Ken Clayton, DO, a dedicated medical professional specializing in OBGYN, who holds licenses in California and Hawaii. He completed his
            education at West Virginia School of Osteopathic Medicine, followed by an internship at Doctors Hospital in Columbus, Ohio, and residency at Arrowhead Regional Medical Center in
            Colton, California. Beyond his medical career, he is deeply involved in philanthropy, supporting Guiding Eyes for the Blind and St. Jude Children's Hospital. He is married with
            two young children, aged 5 and 6, with family time at the top of his priorities. When Dr. Clayton is not "paying it forward" to the residents of his community, he enjoys spending
            his free time traveling, camping, golfing, and four-wheeling in his Jeep. Additionally, he holds an instrument-rated private pilot license, although opportunities for flying are
            few. Despite his busy schedule, he remains committed to his profession, serving on staff at Sierra Nevada Hospital, Riverside Community Hospital, and Little Company of Mary in
            Torrance. Driven by a passion for education, he actively engages with residents in his community, embodying the principle of "paying it forward."</p>
          <p className='hidden md:block w-6/12 border border-black p-2 center doctor-about-text'>Bobbie Tahar, FNP-C, a local native, embarked on her medical career at Antelope Valley College, where she earned her first degree as a Registered Nurse.
            Driven by a thirst for knowledge, Bobbie pursued her Bachelor's in Nursing at Chamberlain University and her Master's in Nursing at United States University, specializing in
            family primary care. Now a certified Family Nurse Practitioner (FNP-C), she excels in OB-GYN, aesthetics, and primary care, holding a deep commitment to comprehensive patient well-being.
            Bobbie always remains at the forefront of her field's advancements. She is deeply passionate about animal welfare
            and actively supports ASPCA. Outside of her medical profession, She finds joy in outdoor activities like boating, skiing, dirt bike riding, and horseback riding.
            However, her greatest joy comes from spending quality time with her family. Bobbie is happily married and is a loving mother of nine children, along with several adopted children who
            affectionately call her "mom." She is an active member of The American Association of Nurse Practitioners, demonstrating her commitment to staying updated with the latest advancements
            in her field. Her compassionate nature extends beyond her medical practice, as she remains dedicated to caring for others in all aspects of her life.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
