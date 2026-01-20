import { ApiEndpoints } from "@/constants/endpoints";
import { useFetch, usePost } from "./hooks";
import { buildPath } from "@/utils/buildPath";
import type { ChallengeRequest, ChallengeVSListResponse } from "@/types/challenge";
import type { ApiResponse } from "./types";


export const usePostChallengeVS = () => {
    return usePost<ChallengeRequest, number>(ApiEndpoints.CHALLENGE);
}

//챌린지 조회
export const useGetChallengeVS = ({ filterType, sort, page = 0, size = 16, keyword }: { filterType?: string, sort?: string, page?: number, size?: number, keyword?: string }) => {
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