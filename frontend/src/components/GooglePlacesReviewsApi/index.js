import React, { useState, useEffect } from 'react';

const GooglePlacesReviewsApi = ({ apiKey, placeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `/proxy/googlePlacesReviews?placeId=${placeId}&apiKey=${apiKey}`,
      {
        mode: 'no-cors'
      }
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch reviews: ${response.status} ${response.statusText}`);
        }
        console.log(response)
        const data = await response.json();
        if (data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [apiKey, placeId]);

  console.log(reviews)

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            <p>Author: {review.author_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GooglePlacesReviewsApi;
