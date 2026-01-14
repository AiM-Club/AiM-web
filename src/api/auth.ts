import { useFetch, usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { LoginRequest, LoginResponse } from "@/types/auth";

//로그인
export const useLogin = () => {
    return usePost<LoginRequest, LoginResponse>(ApiEndpoints.LOGIN);
}

export const useExistId = (nickName: string) => {
    return useFetch<boolean>(
        ApiEndpoints.EXIST_ID,
        {
            nickName,
        }
      );
};