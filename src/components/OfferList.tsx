import React from 'react';
import OfferCard from './OfferCard';
import { Offer } from '../mocks/offers';

interface OfferListProps {
  offers: Offer[];
}

const OfferList: React.FC<OfferListProps> = ({ offers }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => (
      <OfferCard key={offer.id} {...offer} />
    ))}
  </div>
);

export default OfferList;
