import { StoreItem } from "@/lib/schema";
import { create } from "zustand";

type CartStore = {
  cartItems: StoreItem[];
  addItem: (item: StoreItem) => void;
  increaseQty: (name: string) => void;
  decreaseQty: (name: string) => void;
  removeItem: (name: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.cartItems.find((i) => i.name === item.name);
      if (existing) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    }),

  increaseQty: (name) =>
    set((state) => ({
      cartItems: state.cartItems.map((i) =>
        i.name === name ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),

  decreaseQty: (name) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((i) =>
          i.name === name ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0),
    })),

  removeItem: (name) =>
    set((state) => ({
      cartItems: state.cartItems.filter((i) => i.name !== name),
    })),
}));
