import React from 'react';
import { useParams } from 'react-router-dom';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';
import ReviewList from './ReviewList';
import CommentForm from './CommentForm';
import Map from './Map';
import OfferList from './OfferList';

const OfferPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((o) => o.id === Number(id));

  if (!offer) {
    return <p>Offer not found</p>;
  }

  const offerReviews = reviews.filter((r) => r.offerId === offer.id);
  const nearOffers = offers.filter((o) => o.id !== offer.id).slice(0, 3);

  return (
    <div className="page">
      <header className="header">{/* header */}</header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <img className="offer__image" src={offer.imageUrl} alt={offer.title} />
          </div>

          <div className="offer__container container">
            <h1 className="offer__title">{offer.title}</h1>
            <p className="offer__price">
              <b className="offer__price-value">€{offer.price}</b>{' '}
              <span className="offer__price-text">night</span>
            </p>
            <p className="offer__type">{offer.type}</p>
            <p className="offer__text">{offer.description}</p>
          </div>

          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{offerReviews.length}</span>
            </h2>
            <ReviewList reviews={offerReviews} />
            <CommentForm />
          </section>

          <section className="offer__map map">
            <Map offers={[offer, ...nearOffers]} />
          </section>
        </section>

        <section className="near-places places">
          <h2 className="visually-hidden">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OfferList offers={nearOffers} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default OfferPage;
