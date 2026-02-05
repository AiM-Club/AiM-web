import { useFetch, usePatch } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { TopUserResponse, TopUserDetailResponse, UserChallengeRecordResponse, UserLevelResponse, UserProfileResponse, UserPostResponse } from "@/types/user";


//TOP 10 유저 랭킹 조회
export const userGetTop10 = () => {
    return useFetch<ApiResponse<TopUserResponse>>(ApiEndpoints.TOP_10_USER);
}

//TOP 20 유저 랭킹 조회
export const userGetTop20 = () => {
    return useFetch<ApiResponse<TopUserDetailResponse>>(ApiEndpoints.TOP_20_USER);
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

//내 게시글 조회
export const userGetMyPost = ({ filter, sort, keyword, page = 0, size = 16 }: { filter?: string, sort?: string, keyword?: string, page?: number, size?: number }) => {
    const params: Record<string, string | number> = { page, size };
    if (filter && filter !== "ALL") {
        params.filter = filter;
    }
    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }
    return useFetch<ApiResponse<UserPostResponse>>(ApiEndpoints.USER_MY_POST, params);
}

//내 좋아요 조회
export const userGetMyLiked = ({ filter, sort, keyword, page = 0, size = 16 }: { filter?: string, sort?: string, keyword?: string, page?: number, size?: number }) => {
    const params: Record<string, string | number> = { page, size };
    if (filter && filter !== "ALL") {
        params.filter = filter;
    }
    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }
    return useFetch<ApiResponse<UserPostResponse>>(ApiEndpoints.USER_MY_LIKED, params);
}

//내 프로필 수정
export const userUpdateMyProfile = () => {
    return usePatch<FormData, UserProfileResponse>(ApiEndpoints.USER_MY_PROFILE);
}