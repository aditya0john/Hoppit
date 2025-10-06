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
  href: string;
  rating: number;
  time: string;
  price: string;
  tags: string[];
}
