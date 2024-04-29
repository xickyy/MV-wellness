import './Homepage.css';
import homepagevid from './homepagevid.mp4';
import GoogleMap from '../GoogleMap';

const Homepage = () => {
  return (
    <div>
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
