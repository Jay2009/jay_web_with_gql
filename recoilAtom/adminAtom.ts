import { atom } from "recoil";

// for login page
export const authority = atom({
  key: "authority",
  default: "",
});
export const loggedInUserId = atom({
  key: "loggedInUserId",
  default: "",
});
