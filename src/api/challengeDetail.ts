import { useFetch, useFetchMutation } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { ChallengeDetailWeeksResponse, ChallengeSoloDetailResponse, ChallengeVSDetailResponse } from "@/types/challengeDetail";
import { buildPath } from "@/utils/buildPath";
import { api } from "./utils";
import type { CommentResponse } from "@/types/comment";

//vs대결 overview
export const useGetChallengeDetail = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeVSDetailResponse>>(buildPath(ApiEndpoints.CHALLENGE_VS_DETAIL, { challengeId }));
}

//챌린지 주차별 내용 리스트 조회
export const useGetChallengeDetailWeeks = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeDetailWeeksResponse>>(buildPath(ApiEndpoints.CHALLENGE_DETAIL_WEEKS, { challengeId }));
}

//주차별 댓글 조회
export const useGetWeeklyComments = () => {
    return useFetchMutation<{ challengeId: number, weeksId: string, page?: number, size?: number }, CommentResponse>(ApiEndpoints.CHALLENGE_DETAIL_WEEKS_COMMENTS, {
        mutationFn: async ({ challengeId, weeksId, page = 0, size = 10 }) => {
            const url = buildPath(ApiEndpoints.CHALLENGE_DETAIL_WEEKS_COMMENTS, { challengeId, weeksId });
            const params: Record<string, number> = {
                page,
                size,
            };

            const res = await api.get<CommentResponse>(url, params);
            return (res as unknown as { data: CommentResponse }).data;
        },
    });
}

//solo챌린지 overview
export const useGetChallengeSoloDetail = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeSoloDetailResponse>>(buildPath(ApiEndpoints.CHALLENGE_SOLO_DETAIL, { challengeId }));
}