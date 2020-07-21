import { atom, selector } from "recoil";
import { TIMER } from "./constants";

export const runningAtom = atom({
  key: "runningAtom",
  default: false,
});

export const currentTimeAtom = atom({
  key: "currentTimeAtom",
  default: 0,
});

export const minutesAtom = atom({
  key: "minutesAtom",
  default: 8,
});

export const secondsAtom = atom({
  key: "secondsAtom",
  default: 0,
});

const realModeAtom = atom({
  key: "realModeAtom",
  default: TIMER,
});

export const modeAtom = selector({
  key: "modeAtom",
  get: ({ get }) => get(realModeAtom),
  set: ({ set, get }, newMode) => {
    if (newMode === TIMER) {
      set(currentTimeAtom, get(minutesAtom) * 60 + get(secondsAtom));
    } else {
      set(currentTimeAtom, 0);
    }
    set(realModeAtom, newMode);
  },
});
