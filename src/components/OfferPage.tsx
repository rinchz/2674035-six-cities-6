import React from 'react';
import { useParams } from 'react-router-dom';
import { offers } from '../mocks/offers';
import CommentForm from './CommentForm';

const OfferPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const offer = offers.find((o) => o.id === Number(id));

  if (!offer) {
    return <p>Offer not found</p>;
  }

  return (
    <div className="page">
      <header className="header">{/* header из offer.html */}</header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <img className="offer__image" src={offer.imageUrl} alt={offer.title} />
          </div>
          <div className="offer__container container">
            <h1 className="offer__title">{offer.title}</h1>
            <p className="offer__price">
              <b className="offer__price-value">€{offer.price}</b> <span className="offer__price-text">night</span>
            </p>
            <p className="offer__type">{offer.type}</p>
            <p className="offer__text">{offer.description}</p>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews · <span className="reviews__amount">2</span></h2>
            <CommentForm />
          </section>
        </section>
      </main>
    </div>
  );
};

export default OfferPage;
