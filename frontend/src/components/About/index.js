import './About.css';
import doc from './images/theDoctor.jpg';

const About = () => {
  return (
    <div>

      <div>

        <p className='text-center p-4 underline text-2xl'>Meet Our Medical Director</p>

        <div className='text-center'>
          <p className='-mb-6'>Dr. Kenneth Clayton, DO</p>
          <div className='p-8'>
            <img className='custom-doc-img md:h-80' src={doc} alt=''></img>
          </div>
          <div className='p-2'>
            <p className='p-2 doctor-about-text'>Dr. Ken Clayton, DO, a dedicated medical professional, who holds licenses in California and Hawaii. He completed his education at West Virginia School of Osteopathic Medicine,
              followed by an internship at Doctors Hospital in Columbus, Ohio, and residency at Arrowhead Regional Medical Center in Colton, California. Beyond his medical career,
              he is deeply involved in philanthropy, supporting Guiding Eyes for the Blind and St. Jude Children's Hospital. He is married with two young children, aged 5 and 6, with family
              time in the top of his priorities. When Dr. Clayton is not "paying it forward" to the residents of his community, he enjoys spending his free time traveling, camping, golfing, and
              four wheeling in his Jeep, Additionally, he holds an instrument-rated private pilot license, although opportunities for flying are
              few. Despite his busy schedule, he remain committed to his profession,
              serving on staff at Sierra Nevada Hospital, Riverside Community Hospital, and Little Company of Mary in Torrance. Driven by a passion for education, he actively engages
              with residents in his community, embodying the principle of "paying it forward."</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
