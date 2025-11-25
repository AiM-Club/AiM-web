// hooks/useActiveMenu.ts
import { useLocation } from "react-router-dom";
import { PageEndPoints } from "@/constants/endpoints.ts";

export const useActiveMenu = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === PageEndPoints.HOME) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return { isActive };
};