import { atom } from "recoil";

// for login page
export const authority = atom<string>({
  key: "authorityKey",
  default: "",
});
export const loggedInUserId = atom<string>({
  key: "loggedInUserIdKey",
  default: undefined,
});
export const isRefetchedUser = atom({
  key: "isRefetchedUserKey",
  default: false,
});
