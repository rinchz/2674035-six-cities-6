import React, { useState } from 'react';
import OfferCard from './OfferCard';
import { Offer } from '../mocks/offers';

interface OfferListProps {
  offers: Offer[];
}

const OfferList: React.FC<OfferListProps> = ({ offers }) => {
  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <div
          key={offer.id}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        >
          <OfferCard {...offer} isActive={activeOfferId === offer.id} />
        </div>
      ))}
    </div>
  );
};

export default OfferList;
