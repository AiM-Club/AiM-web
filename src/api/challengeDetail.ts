import { useFetch } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { ChallengeDetailWeeksResponse, ChallengeVSDetailResponse } from "@/types/challengeDetail";
import { buildPath } from "@/utils/buildPath";

//vs대결 overview
export const useGetChallengeDetail = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeVSDetailResponse>>(buildPath(ApiEndpoints.CHALLENGE_VS_DETAIL, { challengeId }));
}

//챌린지 주차별 내용 리스트 조회
export const useGetChallengeDetailWeeks = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeDetailWeeksResponse>>(buildPath(ApiEndpoints.CHALLENGE_DETAIL_WEEKS, { challengeId }));
}