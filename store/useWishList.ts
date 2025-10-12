import { StoreItem } from "@/lib/schema";
import { create } from "zustand";

type WishList = {
  wishList: StoreItem[];
  addFav: (item: StoreItem) => void;
  removeFav: (name: string) => void;
};

export const useWishList = create<WishList>((set) => ({
  wishList: [],

  addFav: (item) =>
    set((state) =>
      state.wishList.find((i) => i.name === item.name)
        ? { wishList: state.wishList.filter((i) => i.name !== item.name) }
        : { wishList: [...state.wishList, item] }
    ),

  removeFav: (name) =>
    set((state) => ({
      wishList: state.wishList.filter((item) => item.name !== name),
    })),
}));
