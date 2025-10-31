import { GroceryItem, StoreItem } from "@/lib/schema";
import { create } from "zustand";

type WishList = {
  wishList: GroceryItem[];
  addFav: (item: GroceryItem) => void;
  removeFav: (name: string) => void;
};

export const useWishList = create<WishList>((set) => ({
  wishList: [],

  addFav: (item) =>
    set((state) =>
      state.wishList.find((i) => i.itemName === item.itemName)
        ? { wishList: state.wishList.filter((i) => i.itemName !== item.itemName) }
        : { wishList: [...state.wishList, item] }
    ),

  removeFav: (name) =>
    set((state) => ({
      wishList: state.wishList.filter((item) => item.itemName !== name),
    })),
}));
