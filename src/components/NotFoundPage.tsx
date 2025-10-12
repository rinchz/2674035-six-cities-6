import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <h1>404 Not Found</h1>
    <p>Такой страницы не существует 😢</p>
    <Link to="/">Вернуться на главную</Link>
  </div>
);

export default NotFoundPage;
