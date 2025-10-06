import { StoreItem } from "@/lib/schema";
import { create } from "zustand";

type CartStore = {
  cartItem: StoreItem[];
  addItem: (item: StoreItem) => void;
  removeItem: (name: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItem: [],
  addItem: (item) =>
    set((state) =>
      state.cartItem.find((i) => i.name === item.name)
        ? state
        : { cartItem: [...state.cartItem, item] }
    ),
    
  removeItem: (name) =>
    set((state) => ({
      cartItem: state.cartItem.filter((item) => item.name !== name),
    })),
}));
