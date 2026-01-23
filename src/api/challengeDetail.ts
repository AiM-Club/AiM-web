import { useFetch } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { ChallengeVSDetailResponse } from "@/types/challengeDetail";
import { buildPath } from "@/utils/buildPath";


export const useGetChallengeDetail = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeVSDetailResponse>>(buildPath(ApiEndpoints.CHALLENGE_VS_DETAIL, { challengeId }));
}