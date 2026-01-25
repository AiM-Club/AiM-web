import { useFetch } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { ChallengeRecruitListResponse } from "@/types/vsRecruit";

export const useGetChallengeRecruit = ({ sort, page = 0, size = 16, keyword }: { sort?: string, page?: number, size?: number, keyword?: string }) => {
    const params: Record<string, string | number> = { page, size };

    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }

    return useFetch<ApiResponse<ChallengeRecruitListResponse>>(ApiEndpoints.VS_RECRUIT, params);
}