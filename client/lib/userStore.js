import { create } from "zustand";

const useUserStore = create((set) => ({
  currentUserID: null,
  currentUserEmail: null,
  fetchUserInfo: (x) => {
    set({ currentUserID: "omE" });
  },
}));

export default useUserStore;
