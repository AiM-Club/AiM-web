import { useFetch, useFetchMutation, usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse, QueryOptions } from "./types";
import type { ChallengeDetailWeeksResponse, ChallengeSoloDetailResponse, ChallengeVSDetailResponse, CommentPostResponse, ChallengeLikeResponse, ChallengeRequestResponse } from "@/types/challengeDetail";
import { buildPath } from "@/utils/buildPath";
import { api } from "./utils";
import type { CommentResponse } from "@/types/comment";

//vs대결 overview
export const useGetChallengeDetail = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeVSDetailResponse>>(buildPath(ApiEndpoints.CHALLENGE_VS_DETAIL, { challengeId }));
}

//챌린지 주차별 내용 리스트 조회
export const useGetChallengeDetailWeeks = (challengeId: string, userId: string, options?: QueryOptions<ApiResponse<ChallengeDetailWeeksResponse>>) => {
    return useFetch<ApiResponse<ChallengeDetailWeeksResponse>>(buildPath(ApiEndpoints.CHALLENGE_DETAIL_WEEKS, { challengeId }), { userId }, options);
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


//댓글 작성
export const usePostWeeklyComment = (challengeId: string, weeksId: string) => {
    return usePost<FormData, ApiResponse<CommentPostResponse>>(buildPath(ApiEndpoints.CHALLENGE_DETAIL_WEEKS_COMMENTS, { challengeId, weeksId }));
}

//주차별 챌린지 인증샷 업로드
export const usePostWeeklyProof = (challengeId: string) => {
    return usePost<FormData, string>(buildPath(ApiEndpoints.CHALLENGE_DETAIL_WEEKS_PROOF, { challengeId }));
}

//챌린지 좋아요
export const useChallengeLike = (challengeId: string) => {
    return usePost<void, ChallengeLikeResponse>(buildPath(ApiEndpoints.CHALLENGE_LIKE, { challengeId }));
}

//챌린지 모집 요청
export const usePostChallengeRecruit = (challengeId: string) => {
    return usePost<void, ChallengeRequestResponse>(buildPath(ApiEndpoints.VS_REQUEST, { challengeId }));
}