import { useFetch } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { TopUserResponse, UserChallengeRecordResponse, UserLevelResponse, UserProfileResponse } from "@/types/user";


//TOP 10 유저 랭킹 조회
export const userGetTop10 = () => {
    return useFetch<ApiResponse<TopUserResponse>>(ApiEndpoints.TOP_10_USER);
}

//유저 챌린지 기록 조회
export const userGetChallengeRecord = () => {
    return useFetch<ApiResponse<UserChallengeRecordResponse>>(ApiEndpoints.USER_CHALLENGE_RECORD);
}

//마이페이지 레벨 조회
export const userGetMyLevel = () => {
    return useFetch<ApiResponse<UserLevelResponse>>(ApiEndpoints.USER_MY_LEVEL);
}

//내 프로필 조회
export const userGetMyProfile = () => {
    return useFetch<ApiResponse<UserProfileResponse>>(ApiEndpoints.USER_MY_PROFILE);
}