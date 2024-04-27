import './Homepage.css';
import homepagevid from './homepagevid.mp4';

const Homepage = () => {
  return (
      <video className='custom-homepage-video-container' muted autoPlay loop>
        <source src={homepagevid}></source>
      </video>
  );
}

export default Homepage;
