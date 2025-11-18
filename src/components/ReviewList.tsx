import React from 'react';
import Review, { ReviewData } from './Review';

interface ReviewListProps {
  reviews: ReviewData[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <Review key={review.id} review={review} />
    ))}
  </ul>
);

export default ReviewList;
