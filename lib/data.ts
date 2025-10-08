import { CategorySchema, SettingItem, StoreItem } from './schema';

// categories.js
export const categories: CategorySchema[] = [
  { id: 'fruits', name: 'Fruits', image: require('../assets/images/categories/Fruits.png') },
  {
    id: 'vegetables',
    name: 'Vegetables',
    image: require('../assets/images/categories/Vegetables.png'),
  },
  { id: 'dairy', name: 'Dairy', image: require('../assets/images/categories/Dairy.png') },
  { id: 'Namkeen', name: 'Namkeen', image: require('../assets/images/categories/Snacks.png') },
  { id: 'Snacks', name: 'Snacks', image: require('../assets/images/categories/Chips.png') },
  { id: 'sweets', name: 'Sweets', image: require('../assets/images/categories/Sweets.png') },
  {
    id: 'beverages',
    name: 'Beverages',
    image: require('../assets/images/categories/Beverages.png'),
  },
  { id: 'bakery', name: 'Bakery', image: require('../assets/images/categories/bakery.png') },
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
  { id: '1', name: 'Store 1', image: require('../assets/images/categories/Sweets.png') },
  { id: '2', name: 'Store 2', image: require('../assets/images/categories/Sweets.png') },
  { id: '3', name: 'Store 3', image: require('../assets/images/categories/Sweets.png') },
  { id: '4', name: 'Store 4', image: require('../assets/images/categories/Sweets.png') },
];

export const products: Record<string, StoreItem[]> = {
  fruits: [
    {
      id: 'apple',
      name: 'Apple',
      image: require('../assets/images/categories/Fruits/apple.png'),
      rating: 4.5,
      quantity: 1,
      time: '10-15 min',
      price: 120,
      per: "kg",
      tags: ['fresh', 'organic'],
    },
    {
      id: 'banana',
      name: 'Banana',
      image: require('../assets/images/categories/Fruits/banana.png'),
      rating: 4.5,
      quantity: 1,
      time: '10-15 min',
      price: 60,
      per: "Dozen",

      tags: ['fresh'],
    },
    {
      id: 'mango',
      name: 'mango',
      image: require('../assets/images/categories/Fruits/mango.png'),
      rating: 4.5,
      quantity: 1,
      time: '10-15 min',
      price: 70,
      per: "kg",
      tags: ['fresh', 'seasonal'],
    },
    {
      id: 'pineapple',
      name: 'pineapple',
      image: require('../assets/images/categories/Fruits/pineapple.png'),
      rating: 4.5,
      quantity: 1,
      time: '10-15 min',
      price: 150,
      per: "kg",
      tags: ['fresh'],
    },
    {
      id: 'kiwi',
      name: 'kiwi',
      image: require('../assets/images/categories/Fruits/kiwi.png'),
      rating: 4.5,
      quantity: 1,
      time: '10-15 min',
      price: 90,
      per: "kg",
      tags: ['fresh', 'exotic'],
    },
    {
      id: 'guava',
      name: 'guava',
      image: require('../assets/images/categories/Fruits/guava.png'),
      rating: 4.5,
      quantity: 1,
      time: '10-15 min',
      price: 120,
      per: "kg",
      tags: ['fresh'],
    },
  ],
  vegetables: [
    {
      id: 'carrot',
      name: 'Carrot',
      image: require('../assets/images/categories/Vegetables/carrot.png'),
      price: 60,
      rating: 4.5,
      quantity: 1,
      per: "kg",
      time: '10-15 min',
      tags: ['fresh', 'organic'],
    },
    {
      id: 'potato',
      name: 'Potato',
      image: require('../assets/images/categories/Vegetables/potato.png'),
      rating: 4.5,
      quantity: 1,
      price: 30,
      per: "kg",
      time: '10-15 min',
      tags: ['fresh'],
    },
    {
      id: 'broccoli',
      name: 'Broccoli',
      image: require('../assets/images/categories/Vegetables/broccoli.png'),
      rating: 4.5,
      quantity: 1,
      price: 90,
      per: "kg",
      time: '10-15 min',
      tags: ['fresh', 'organic'],
    },
    {
      id: 'spinach',
      name: 'Spinach',
      price: 40,
      per: "Gatthi",
      image: require('../assets/images/categories/Vegetables/spinach.png'),
      rating: 4.5,
      quantity: 1,
      time: '10-15 min',
      tags: ['fresh', 'leafy'],
    },
    {
      id: 'cabbage',
      name: 'Cabbage',
      price: 60,
      per: "kg",
      image: require('../assets/images/categories/Vegetables/cabbage.png'),
      rating: 4.5,
      quantity: 1,
      time: '10-15 min',
      tags: ['fresh', 'leafy'],
    },
  ],
};

export const settingsData: { General: SettingItem[]; Account: SettingItem[] } = {
  General: [
    { id: 'General', name: 'General', image: require('../assets/images/categories/Sweets.png'), href: '/general' },
    { id: 'Orders', name: 'Orders', image: require('../assets/images/categories/Sweets.png'), href: '/orders' },
    { id: 'Login & Password', name: 'Login & Password', image: require('../assets/images/categories/Sweets.png'), href: '/auth' },
  ],

  Account: [
    { id: 'Complaints', name: 'Complaints', image: require('../assets/images/categories/Sweets.png'), href: '/complaints' },
    {
      id: 'Delete & Deactivate Account',
      name: 'Delete & Deactivate Account',
      image: require('../assets/images/categories/Sweets.png'),
      href: '/deleteAccount',
    },
  ],
};
