import { useFetch, useFetchMutation, usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse, QueryOptions } from "./types";
import type { LoginRequest, LoginResponse, SocialLoginRequest, User, ExistResponse } from "@/types/auth";

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

// 회원가입
export const useJoin = () => {
    return usePost<FormData, User>(ApiEndpoints.JOIN);
}

//닉네임 중복 검사
export const useExistNickname = () => {
    return useFetchMutation<{ nickname: string }, ApiResponse<ExistResponse>>(ApiEndpoints.EXIST_NICKNAME);
}

//아이디 중복 검사
export const useExistId = () => {
    return useFetchMutation<{ id: string }, ApiResponse<ExistResponse>>(ApiEndpoints.EXIST_ID);
};

//내 프로필 조회
export const useGetMe = (options?: QueryOptions<ApiResponse<User>>) => {
    return useFetch<ApiResponse<User>>(ApiEndpoints.MY_PROFILE, undefined, options);
}

//로그아웃
export const useLogout = () => {
    return usePost<void, string>(ApiEndpoints.LOGOUT);
}