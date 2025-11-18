export interface ReviewData {
  id: number;
  offerId: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: ReviewData[] = [
  {
    id: 1,
    offerId: 1,
    name: 'John Doe',
    avatar: 'img/avatar-1.jpg',
    rating: 4,
    text: 'Great stay!',
    date: '2021-05-01',
  },
  {
    id: 2,
    offerId: 1,
    name: 'Jane Smith',
    avatar: 'img/avatar-2.jpg',
    rating: 5,
    text: 'Amazing place!',
    date: '2021-06-15',
  },
  {
    id: 3,
    offerId: 2,
    name: 'Alice Johnson',
    avatar: 'img/avatar-3.jpg',
    rating: 3,
    text: 'It was okay.',
    date: '2021-07-20',
  },
];
