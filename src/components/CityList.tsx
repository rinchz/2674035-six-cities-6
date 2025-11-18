import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../reducer';
import { RootState } from '../store';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const CityList: React.FC = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector((state: RootState) => state.city);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              dispatch(changeCity(city));
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CityList;