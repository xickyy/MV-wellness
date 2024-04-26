import './Homepage.css';
import homepagevid from './homepagevid.mp4';

const Homepage = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <video controls muted autoplay loop>
        <source src={homepagevid}></source>
      </video>
    </div>
  );
}

export default Homepage;
