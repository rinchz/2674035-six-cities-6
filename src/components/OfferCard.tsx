import React from 'react';
import { Link } from 'react-router-dom';

interface OfferCardProps {
  id: number;
  title: string;
  price: number;
  type: string;
  imageUrl: string;
  isPremium?: boolean;
  isFavorite?: boolean;
  rating?: number;
}

const OfferCard: React.FC<OfferCardProps> = ({
  id,
  title,
  price,
  type,
  imageUrl,
  isPremium = false,
  isFavorite = false,
  rating = 0,
}) => (
  <article className="cities__card place-card">
    {isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={`/offer/${id}`}>
        <img className="place-card__image" src={imageUrl} width="260" height="200" alt={title} />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button
          className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
          type="button"
        >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${rating}%` }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>
);

export default OfferCard;
