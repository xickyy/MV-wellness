import './PrimaryCare.css';
import steth from '../images/Stethescope.jpeg'

const PrimaryCare = () => {
  return (
    <div className='service-background-gradient'>

      <p className='text-center text-4xl underline pt-4'>Primary Care</p>
      <img src={steth} alt='' className='stethescope-img'></img>
      <p>
        
      </p>

    </div>
  );
}

export default PrimaryCare;
