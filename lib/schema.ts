import { ImageSourcePropType } from "react-native";

export interface SettingItem {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface CategorySchema {
  id : string;
  name : string;
  image : ImageSourcePropType;
}

export interface StoreItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  time: string;
  price: number;
  per : string;
  tags: string[];
  quantity: number;
}

export interface GroceryItem {
  itemId: number;
  itemName: string;
  image:string;
  category: string;
  itemWeight: number;
  itemFatContent: string;
  price: number;
  brand: string;
  stockLevel: number;
  itemVisibility: number;
  rating: number;
  outletId: number;
  outletType: string;
  outletLocationType: string;
  outletSize: string;
  sales: number;
  dateAdded: Date;
  quantity: number;
}

export interface Restaurant {
  restaurantId: number;
  restaurantName: string;
  category: string;
  location: string;
  outletType: string;
  rating: number;
  priceRange: string;
  popularItems: string; // Or: string[]
  deliveryAvailability: boolean;
  reviewsCount: number;
}

export interface Order {
  orderId: number;
  userId: number;
  productId: number;
  quantity: number;
  orderStatus: string;
  totalAmount: number;
  createdAt: Date;
  deliveryId: number;
  deliveryStatus: string;
  estimatedDeliveryTime: Date;
}