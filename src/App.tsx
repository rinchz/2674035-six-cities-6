import React from 'react';
import HomePage from './components/HomePage';

const offers = [
  { id: 1, title: 'Beautiful & luxurious apartment at great location', price: 120, type: 'Apartment', imageUrl: 'img/apartment-01.jpg', isPremium: true, rating: 80 },
  { id: 2, title: 'Wood and stone place', price: 80, type: 'Room', imageUrl: 'img/room.jpg', isFavorite: true, rating: 80 },
  { id: 3, title: 'Canal View Prinsengracht', price: 132, type: 'Apartment', imageUrl: 'img/apartment-02.jpg', rating: 80 },
  { id: 4, title: 'Nice, cozy, warm big bed apartment', price: 180, type: 'Apartment', imageUrl: 'img/apartment-03.jpg', isPremium: true, rating: 100 },
  { id: 5, title: 'Wood and stone place', price: 80, type: 'Room', imageUrl: 'img/room.jpg', isFavorite: true, rating: 80 },
];

const App: React.FC = () => <HomePage offers={offers} />;

export default App;
