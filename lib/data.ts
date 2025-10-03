import { SettingItem, StoreItem } from './schema';

// categories.js
export const categories = [
  { id: 'fruits', name: 'Fruits', image: require('../assets/images/categories/Fruits.png') },
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: require('../assets/images/categories/Vegetables.jpg'),
  },
  { id: 'dairy', name: 'Dairy', image: require('../assets/images/categories/Dairy.png') },
  { id: 'Namkeen', name: 'Namkeen', image: require('../assets/images/categories/Snacks.jpeg') },
  { id: 'Snacks', name: 'Snacks', image: require('../assets/images/categories/Chips.jpg') },
  { id: 'sweets', name: 'Sweets', image: require('../assets/images/categories/Sweets.png') },
  {
    id: 'beverages',
    name: 'Beverages',
    image: require('../assets/images/categories/Beverages.jpeg'),
  },
  { id: 'bakery', name: 'Bakery', image: require('../assets/images/categories/bakery.jpeg') },
];

export const stores = [
  { id: '1', name: 'Store 1', image: '/' },
  { id: '2', name: 'Store 2', image: '/' },
  { id: '3', name: 'Store 3', image: '/' },
  { id: '4', name: 'Store 4', image: '/' },
];

export const products: { fruits: StoreItem[]; vegetables: StoreItem[] } = {
  fruits: [
    {
      id: 'apple',
      name: 'Apple',

      image: '/',
      href: '/',
      rating: 4.5,
      time: '10-15 min',
      price: '$2.00',
      tags: ['fresh', 'organic'],
    },
    {
      id: 'banana',
      name: 'Banana',
      href: '/',
      image: '/',
      rating: 4.0,
      time: '10-15 min',
      price: '$1.00',
      tags: ['fresh'],
    },
    {
      id: 'mango',
      name: 'mango',
      href: '/',
      image: '/',
      rating: 4.8,
      time: '10-15 min',
      price: '$3.00',
      tags: ['fresh', 'seasonal'],
    },
    {
      id: 'pineapple',
      name: 'pineapple',
      href: '/',
      image: '/',
      rating: 4.3,
      time: '10-15 min',
      price: '$2.50',
      tags: ['fresh'],
    },
    {
      id: 'kiwi',
      name: 'kiwi',
      href: '/',
      image: '/',
      rating: 4.6,
      time: '10-15 min',
      price: '$2.20',
      tags: ['fresh', 'exotic'],
    },
    {
      id: 'guava',
      name: 'guava',
      href: '/',
      image: '/',
      rating: 4.4,
      time: '10-15 min',
      price: '$1.80',
      tags: ['fresh'],
    },
  ],
  vegetables: [
    {
      id: 'carrot',
      name: 'Carrot',
      price: 'Rs 60',
      image: '/',
      href: '/',
      rating: 4.5,
      time: '10-15 min',
      tags: ['fresh', 'organic'],
    },
    {
      id: 'potato',
      name: 'Potato',
      price: 'Rs 30',
      image: '/',
      href: '/',
      rating: 4.0,
      time: '10-15 min',
      tags: ['fresh'],
    },
    {
      id: 'broccoli',
      name: 'Broccoli',
      price: 'Rs 90',
      image: '/',
      href: '/',
      rating: 4.8,
      time: '10-15 min',
      tags: ['fresh', 'organic'],
    },
    {
      id: 'spinach',
      name: 'Spinach',
      price: 'Rs 40',
      image: '/',
      href: '/',
      rating: 4.3,
      time: '10-15 min',
      tags: ['fresh', 'leafy'],
    },
    {
      id: 'cabbage',
      name: 'Cabbage',
      price: 'Rs 50',
      image: '/',
      href: '/',
      rating: 4.6,
      time: '10-15 min',
      tags: ['fresh', 'leafy'],
    },
  ],
};

export const settingsData: { General: SettingItem[]; Account: SettingItem[] } = {
  General: [
    { id: 'General', name: 'General', image: '/', href: '/general' },
    { id: 'Orders', name: 'Orders', image: '/', href: '/orders' },
    { id: 'Privacy', name: 'Privacy', image: '/', href: '/privacy' },
    { id: 'Login & Password', name: 'Login & Password', image: '/', href: '/auth' },
  ],

  Account: [
    { id: 'Complaints', name: 'Complaints', image: '/', href: '/complaints' },
    { id: 'Advertisements', name: 'Advertisements', image: '/', href: '/ads' },
    {
      id: 'Delete & Deactivate Account',
      name: 'Delete & Deactivate Account',
      image: '/',
      href: '/deleteAccount',
    },
  ],
};
