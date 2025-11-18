import React from 'react';
import OfferCard from './OfferCard';
import { Offer } from '../mocks/offers';

interface OfferListProps {
  offers: Offer[];
  onOfferHover?: (id: number | null) => void;
}

const OfferList: React.FC<OfferListProps> = ({ offers, onOfferHover }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <div
        key={offer.id}
        onMouseEnter={() => onOfferHover?.(offer.id)}
        onMouseLeave={() => onOfferHover?.(null)}
      >
        <OfferCard offer={offer} />
      </div>
    ))}
  </div>
);

export default OfferList;
