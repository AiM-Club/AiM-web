import type { User } from "@/types/auth";
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  userPhoto: Blob | null;
  setUser: (user: User) => void;
  setUserPhoto: (userPhoto: Blob | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  userPhoto: null,
  setUser: (user) => set({ user }),
  setUserPhoto: (userPhoto) => set({ userPhoto }),
  logout: () => {
    set({ user: null, userPhoto: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  },
}));