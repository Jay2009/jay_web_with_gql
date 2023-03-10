import { atom } from "recoil";

export interface IRiseOrFallBtn {
  dollar?: boolean | null;
  gold?: boolean | null;
  nasdaq?: boolean | null;
  vix?: boolean | null;
}

export const economyState = atom({
  key: "economyStateKey",
  default: null,
});

export const riseOrFallState = atom<IRiseOrFallBtn>({
  key: "riseOrFallStateKey",
  default: {
    dollar: null,
    gold: null,
    nasdaq: null,
    vix: null,
  },
});
