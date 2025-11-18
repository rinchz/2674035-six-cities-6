import React from 'react';
import { Offer } from '../mocks/offers';

interface OfferCardProps {
  offer: Offer;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, onMouseEnter, onMouseLeave }) => (
  <article className="cities__place-card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <img className="place-card__image" src={offer.imageUrl} width="260" height="200" alt={offer.title} />
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <b className="place-card__price-value">€{offer.price}</b>
        <span className="place-card__price-text">/ night</span>
      </div>
      <h2 className="place-card__name">{offer.title}</h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

export default OfferCard;
