import React from 'react';
import OfferList from './OfferList';
import { Offer } from '../mocks/offers';

interface HomePageProps {
  offers: Offer[];
}

const HomePage: React.FC<HomePageProps> = ({ offers }) => (
  <div className="page page--gray page--main">
    <header className="header">{/* header из main.html */}</header>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <div className="tabs">{/* блок с локациями */}</div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <OfferList offers={offers} />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default HomePage;
