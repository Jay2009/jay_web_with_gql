import { atom } from "recoil";

// for login page
export const authority = atom({
  key: "authorityKey",
  default: "",
});
export const loggedInUserId = atom({
  key: "loggedInUserIdKey",
  default: "",
});
