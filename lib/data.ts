import { CategorySchema, SettingItem, StoreItem } from './schema';

// categories.js
export const categories: CategorySchema[] = [
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



// const BASE_URL = '../assets/images/categories/';

// export const categories: CategorySchema[] = [
//   { id: 'cat001', name: 'Fruits & Vegetables', image: require(`${BASE_URL}fruits_vegetables.png`) },
//   { id: 'cat002', name: 'Dairy & Breakfast', image: require(`${BASE_URL}dairy_breakfast.png`) },
//   { id: 'cat003', name: 'Atta, Rice & Dal', image: require(`${BASE_URL}atta_rice_dal.png`) },
//   { id: 'cat004', name: 'Oil, Masala & Salt', image: require(`${BASE_URL}oil_masala_salt.png`) },
//   { id: 'cat005', name: 'Snacks & Munchies', image: require(`${BASE_URL}snacks_munchies.png`) },
//   { id: 'cat006', name: 'Biscuits & Bakery', image: require(`${BASE_URL}biscuits_bakery.png`) },
//   { id: 'cat007', name: 'Beverages', image: require(`${BASE_URL}beverages.png`) },
//   { id: 'cat008', name: 'Instant & Frozen Food', image: require(`${BASE_URL}instant_frozen.png`) },
//   { id: 'cat009', name: 'Sweet Cravings', image: require(`${BASE_URL}sweet_cravings.png`) },
//   { id: 'cat010', name: 'Baby Care', image: require(`${BASE_URL}baby_care.png`) },
//   { id: 'cat011', name: 'Home & Cleaning', image: require(`${BASE_URL}home_cleaning.png`) },
//   { id: 'cat012', name: 'Personal Care', image: require(`${BASE_URL}personal_care.png`) },
//   { id: 'cat013', name: 'Pet Care', image: require(`${BASE_URL}pet_care.png`) },
//   { id: 'cat014', name: 'Stationery & Office', image: require(`${BASE_URL}stationery_office.png`) },
//   { id: 'cat015', name: 'Pooja Needs', image: require(`${BASE_URL}pooja_needs.png`) },
//   { id: 'cat016', name: 'Local Specialties', image: require(`${BASE_URL}local_specials.png`) },
//   { id: 'cat017', name: 'Pharma & Wellness', image: require(`${BASE_URL}pharma_wellness.png`) },
//   { id: 'cat018', name: 'Electronics & Accessories', image: require(`${BASE_URL}electronics_accessories.png`) },
//   { id: 'cat019', name: 'Festive Essentials', image: require(`${BASE_URL}festive_essentials.png`) },
//   { id: 'cat020', name: 'Deals & Combos', image: require(`${BASE_URL}deals_combos.png`) },
// ];



export const stores = [
  { id: '1', name: 'Store 1', image: '/' },
  { id: '2', name: 'Store 2', image: '/' },
  { id: '3', name: 'Store 3', image: '/' },
  { id: '4', name: 'Store 4', image: '/' },
];

export const products: Record<string, StoreItem[]> = {
  fruits: [
    {
      id: 'apple',
      name: 'Apple',
      image: '/',
      href: '/',
      rating: 4.5,
      time: '10-15 min',
      price: 2.00,
      tags: ['fresh', 'organic'],
    },
    {
      id: 'banana',
      name: 'Banana',
      href: '/',
      image: '/',
      rating: 4.0,
      time: '10-15 min',
      price: 1.00,
      tags: ['fresh'],
    },
    {
      id: 'mango',
      name: 'mango',
      href: '/',
      image: '/',
      rating: 4.8,
      time: '10-15 min',
      price: 3.00,
      tags: ['fresh', 'seasonal'],
    },
    {
      id: 'pineapple',
      name: 'pineapple',
      href: '/',
      image: '/',
      rating: 4.3,
      time: '10-15 min',
      price: 2.50,
      tags: ['fresh'],
    },
    {
      id: 'kiwi',
      name: 'kiwi',
      href: '/',
      image: '/',
      rating: 4.6,
      time: '10-15 min',
      price: 2.20,
      tags: ['fresh', 'exotic'],
    },
    {
      id: 'guava',
      name: 'guava',
      href: '/',
      image: '/',
      rating: 4.4,
      time: '10-15 min',
      price: 1.80,
      tags: ['fresh'],
    },
  ],
  vegetables: [
    {
      id: 'carrot',
      name: 'Carrot',
      price: 60,
      image: '/',
      href: '/',
      rating: 4.5,
      time: '10-15 min',
      tags: ['fresh', 'organic'],
    },
    {
      id: 'potato',
      name: 'Potato',
      price: 30,
      image: '/',
      href: '/',
      rating: 4.0,
      time: '10-15 min',
      tags: ['fresh'],
    },
    {
      id: 'broccoli',
      name: 'Broccoli',
      price: 90,
      image: '/',
      href: '/',
      rating: 4.8,
      time: '10-15 min',
      tags: ['fresh', 'organic'],
    },
    {
      id: 'spinach',
      name: 'Spinach',
      price: 40,
      image: '/',
      href: '/',
      rating: 4.3,
      time: '10-15 min',
      tags: ['fresh', 'leafy'],
    },
    {
      id: 'cabbage',
      name: 'Cabbage',
      price: 50,
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
    { id: 'Login & Password', name: 'Login & Password', image: '/', href: '/auth' },
  ],

  Account: [
    { id: 'Complaints', name: 'Complaints', image: '/', href: '/complaints' },
    {
      id: 'Delete & Deactivate Account',
      name: 'Delete & Deactivate Account',
      image: '/',
      href: '/deleteAccount',
    },
  ],
};
