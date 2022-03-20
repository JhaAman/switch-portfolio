import { atom } from "recoil";

const selectState = atom({
  key: "selectState",
  default: {
    selected: null,
    selectedIndex: -1,
  },
});
