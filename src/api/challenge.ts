import { ApiEndpoints } from "@/constants/endpoints";
import { useFetch, useFetchMutation, usePost } from "./hooks";
import { api } from "./utils";
import type { ChallengeRequestListResponse, ChallengeVSListResponse } from "@/types/challenge";
import type { ApiResponse } from "./types";


export const usePostChallenge = () => {
    return usePost<FormData, { challengeId: number }>(ApiEndpoints.CHALLENGE);
}

//챌린지 조회
export const useGetChallengeVS = ({ filterType, field, sort, page = 0, size = 16, keyword }: { filterType?: string, field?: string, sort?: string, page?: number, size?: number, keyword?: string }) => {
    const params: Record<string, string | number> = { page, size };

    if (filterType && filterType !== "--") {
        params.filterType = filterType;
    }
    if (field && field !== "전체") {
        params.field = field;
    }
    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }

    return useFetch<ApiResponse<ChallengeVSListResponse>>(ApiEndpoints.CHALLENGE_VS, params);
}

//솔로챌린지 조회
export const useGetChallengeSolo = ({ filterType, sort, page = 0, size = 16, keyword }: { filterType?: string, sort?: string, page?: number, size?: number, keyword?: string }) => {
    const params: Record<string, string | number> = { page, size };

    if (filterType && filterType !== "--") {
        params.filterType = filterType;
    }
    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }

    return useFetch<ApiResponse<ChallengeVSListResponse>>(ApiEndpoints.CHALLENGE_SOLO, params);
}

//챌린지 모집 요청 조회
export const useGetChallengeRequest = ({ sort, page = 0, size = 16, keyword }: { sort?: string, page?: number, size?: number, keyword?: string }) => {
    const params: Record<string, string | number> = { page, size };

    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }

    return useFetch<ApiResponse<ChallengeRequestListResponse>>(ApiEndpoints.VS_REQUEST_LIST, params);
}