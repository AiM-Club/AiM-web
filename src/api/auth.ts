import { useFetch } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";

export const useExistId = (nickName: string) => {
    return useFetch<boolean>(
        ApiEndpoints.EXIST_ID,
        {
            nickName,
        }
      );
};