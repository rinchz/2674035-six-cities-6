import React from 'react';
import OfferCard from './OfferCard';

interface Offer {
  id: number;
  title: string;
  price: number;
  type: string;
  imageUrl: string;
  isPremium?: boolean;
  isFavorite?: boolean;
  rating?: number;
}

interface HomePageProps {
  offers: Offer[];
}

const HomePage: React.FC<HomePageProps> = ({ offers }) => (
  <div className="page page--gray page--main">
    <header className="header">
      {/* header из main.html */}
    </header>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <div className="tabs">
        {/* блок с локациями из main.html */}
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>

            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => (
                <OfferCard key={offer.id} {...offer} />
              ))}
            </div>
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
