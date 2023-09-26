import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ICountry, Categories } from "../types/country";

const { persistAtom: countryPersist } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});

export const categoryState = atom<ICountry>({
  key: "categoryState",
  default: {
    countryName: "",
    category: Categories.WANT_TO_GO,
    travelId: 0,
  },
});

export const countryState = atom<ICountry[]>({
  key: "countryState",
  default: [],
  effects_UNSTABLE: [countryPersist],
});
