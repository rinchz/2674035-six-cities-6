import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import OfferList from './OfferList';
import Map from './Map';
import SortOptions from './SortOptions';

const HomePage: React.FC = () => {
  const city = useSelector((state: RootState) => state.city);
  const allOffers = useSelector((state: RootState) => state.offers);

  const [activeOfferId, setActiveOfferId] = useState<number | null>(null);
  const [sortType, setSortType] = useState<'Popular' | 'PriceLowToHigh' | 'PriceHighToLow' | 'TopRatedFirst'>('Popular');

  const offersByCity = allOffers.filter((offer) => offer.city === city);

  const sortedOffers = [...offersByCity].sort((a, b) => {
    switch (sortType) {
      case 'PriceLowToHigh': return a.price - b.price;
      case 'PriceHighToLow': return b.price - a.price;
      case 'TopRatedFirst': return (b.rating ?? 0) - (a.rating ?? 0);
      default: return 0;
    }
  });

  return (
    <div className="page page--gray page--main">
      <header className="header">{/* header */}</header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <section className="cities">
          <div className="cities__places-container container">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sortedOffers.length} places to stay in {city}</b>
            <SortOptions sortType={sortType} onSortChange={setSortType} />
            <OfferList offers={sortedOffers} onOfferHover={setActiveOfferId} />
          </div>
          <div className="cities__right-section">
            <Map offers={sortedOffers} activeOfferId={activeOfferId} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
