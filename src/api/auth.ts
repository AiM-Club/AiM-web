import { useFetch, usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { LoginRequest, LoginResponse, ProfileResponse } from "@/types/auth";
import type { ApiResponse } from "./types";

//로그인
export const useLogin = () => {
    return usePost<LoginRequest, LoginResponse>(ApiEndpoints.LOGIN);
}

//아이디 중복검사
export const useExistId = (id: string) => {
    return useFetch<boolean>(
        ApiEndpoints.EXIST_ID,
        {
            id,
        }
    );
};

//내 프로필 조회
export const useGetMe = () => {
    return useFetch<ApiResponse<ProfileResponse>>(ApiEndpoints.MY_PROFILE);
}