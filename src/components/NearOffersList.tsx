import React from 'react';
import NearOfferCard from './NearOfferCard';
import { Offer } from '../mocks/offers';

interface NearOffersListProps {
  offers: Offer[];
}

const NearOffersList: React.FC<NearOffersListProps> = ({ offers }) => (
  <div className="near-places__list places__list">
    {offers.map((offer) => (
      <NearOfferCard key={offer.id} {...offer} />
    ))}
  </div>
);

export default NearOffersList;
