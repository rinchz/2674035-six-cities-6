import React from 'react';

export interface ReviewData {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewProps {
  review: ReviewData;
}

const Review: React.FC<ReviewProps> = ({ review }) => (
  <li className="reviews__item review">
    <div className="review__user user">
      <div className="review__avatar-wrapper user__avatar-wrapper">
        <img
          className="review__avatar user__avatar"
          src={review.avatar}
          width={54}
          height={54}
          alt="Reviews avatar"
        />
      </div>
      <span className="review__user-name">{review.name}</span>
    </div>

    <div className="review__info">
      <div className="review__rating rating">
        <div className="review__stars rating__stars">
          <span style={{ width: `${review.rating * 20}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>

      <p className="review__text">{review.text}</p>

      <time className="review__time" dateTime={review.date}>
        {new Date(review.date).toLocaleString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
      </time>
    </div>
  </li>
);

export default Review;
