import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import OfferList from './OfferList';
import Map from './Map';

const HomePage: React.FC = () => {
  const city = useSelector((state: RootState) => state.city);
  const allOffers = useSelector((state: RootState) => state.offers);

  const offers = allOffers.filter((offer) => offer.city === city);

  return (
    <div className="page page--gray page--main">
      <header className="header">{/* header */}</header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <section className="cities">
          <div className="cities__places-container container">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {city}</b>
            <OfferList offers={offers} />
          </div>
          <div className="cities__right-section">
            <Map offers={offers} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;