import './Reviews.css';

import GooglePlacesReviewsApi from '../GooglePlacesReviewsApi';

const Reviews = () => {
  return (
    <div>

      <h2>Reviews Page</h2>

      <div>
        <GooglePlacesReviewsApi apiKey={'AIzaSyCjSXNAi8GFCToY1e9tlKg2GaYb8KUSf9U'} placeId={'ChIJ1ezppTpZwoARKabjrAlOv-A'} />
      </div>

    </div>
  );
};


export default Reviews;
