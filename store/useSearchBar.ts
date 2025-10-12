import { create } from "zustand";

type SeachBar = {
  active: Boolean;
  activeBar: () => void;
  deactiveBar : ()=>void;
};

export const useSearchBar = create<SeachBar>((set) => ({
    active: false,
    activeBar: () => set({ active: true }), 
    deactiveBar: () => set({ active: true }),
}));
