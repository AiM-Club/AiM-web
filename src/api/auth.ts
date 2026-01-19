import { useFetch, usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { LoginRequest, LoginResponse, SocialLoginRequest } from "@/types/auth";

//로그인
export const useLogin = () => {
    return usePost<LoginRequest, LoginResponse>(ApiEndpoints.LOGIN);
}


// 구글 소셜 로그인
export const useGoogleLogin = () => {
    return usePost<SocialLoginRequest, LoginResponse>(ApiEndpoints.GOOGLE_LOGIN);
}

// 카카오 소셜 로그인
export const useKakaoLogin = () => {
    return usePost<SocialLoginRequest, LoginResponse>(ApiEndpoints.KAKAO_LOGIN);
}

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
    return useFetch<ApiResponse<User>>(ApiEndpoints.MY_PROFILE);
}