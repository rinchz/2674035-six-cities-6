export interface Offer {
  id: number;
  title: string;
  price: number;
  type: string;
  imageUrl: string;
  isPremium?: boolean;
  isFavorite?: boolean;
  rating?: number;
  description?: string;
}

export const offers: Offer[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    price: 120,
    type: 'Apartment',
    imageUrl: 'img/apartment-01.jpg',
    isPremium: true,
    rating: 80,
    description: 'Spacious apartment in the heart of the city with stunning views.',
  },
  {
    id: 2,
    title: 'Wood and stone place',
    price: 80,
    type: 'Private room',
    imageUrl: 'img/room.jpg',
    isFavorite: true,
    rating: 70,
    description: 'Cozy wooden house perfect for weekend retreats.',
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    price: 132,
    type: 'Apartment',
    imageUrl: 'img/apartment-02.jpg',
    rating: 90,
    description: 'Stylish apartment overlooking the main canal of Amsterdam.',
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    type: 'Apartment',
    imageUrl: 'img/apartment-03.jpg',
    isPremium: true,
    rating: 100,
    description: 'Perfect stay for couples with all modern amenities.',
  },
];
