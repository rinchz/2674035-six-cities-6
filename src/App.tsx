import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FavoritesPage from './components/FavoritesPage';
import OfferPage from './components/OfferPage';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';

const offers = [
  { id: 1, title: 'Beautiful & luxurious apartment at great location', price: 120, type: 'Apartment', imageUrl: 'img/apartment-01.jpg', isPremium: true, rating: 80 },
  { id: 2, title: 'Wood and stone place', price: 80, type: 'Room', imageUrl: 'img/room.jpg', isFavorite: true, rating: 80 },
  { id: 3, title: 'Canal View Prinsengracht', price: 132, type: 'Apartment', imageUrl: 'img/apartment-02.jpg', rating: 80 },
  { id: 4, title: 'Nice, cozy, warm big bed apartment', price: 180, type: 'Apartment', imageUrl: 'img/apartment-03.jpg', isPremium: true, rating: 100 },
  { id: 5, title: 'Wood and stone place', price: 80, type: 'Room', imageUrl: 'img/room.jpg', isFavorite: true, rating: 80 },
];

const isAuthorized = false;

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage offers={offers} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute isAuthorized={isAuthorized}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<OfferPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
