import './Reviews.css';

import ReviewsApi from '../ReviewsApi';
import stars from './stars.jpeg'


const Reviews = () => {
  return (
    <div>

      <div>
        <ReviewsApi />
      </div>

      <img className='stars-img' src={stars} alt='reviews'></img>

    </div>
  );
};


export default Reviews;
