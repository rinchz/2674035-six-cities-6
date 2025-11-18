import React from 'react';

interface SortOptionsProps {
  sortType: 'Popular' | 'PriceLowToHigh' | 'PriceHighToLow' | 'TopRatedFirst';
  onSortChange: (sort: SortOptionsProps['sortType']) => void;
}

const options: { label: string; value: SortOptionsProps['sortType'] }[] = [
  { label: 'Popular', value: 'Popular' },
  { label: 'Price: low to high', value: 'PriceLowToHigh' },
  { label: 'Price: high to low', value: 'PriceHighToLow' },
  { label: 'Top rated first', value: 'TopRatedFirst' },
];

const SortOptions: React.FC<SortOptionsProps> = ({ sortType, onSortChange }) => (
  <form className="places__sorting">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type">{options.find((o) => o.value === sortType)?.label}</span>
    <ul className="places__options places__options--custom">
      {options.map((option) => (
        <li
          key={option.value}
          className={`places__option ${sortType === option.value ? 'places__option--active' : ''}`}
          onClick={() => onSortChange(option.value)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  </form>
);

export default SortOptions;
