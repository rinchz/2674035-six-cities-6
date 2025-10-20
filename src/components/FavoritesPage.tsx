import React from 'react';
import OfferList from './OfferList';
import { Offer } from '../mocks/offers';

interface FavoritesPageProps {
  offers: Offer[];
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ offers }) => (
  <div className="page">
    <header className="header">{/* header */}</header>
    <main className="page__main page__main--favorites">
      <h1 className="page__title">Saved listing</h1>
      <OfferList offers={offers.filter((offer) => offer.isFavorite)} />
    </main>
  </div>
);

export default FavoritesPage;
