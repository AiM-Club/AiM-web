import { useFetch, usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
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

export const useExistId = (nickName: string) => {
    return useFetch<boolean>(
        ApiEndpoints.EXIST_ID,
        {
            nickName,
        }
      );
};