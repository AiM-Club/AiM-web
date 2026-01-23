import { useFetch, useFetchMutation } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { ChallengeDetailWeeksResponse, ChallengeVSDetailResponse } from "@/types/challengeDetail";
import { buildPath } from "@/utils/buildPath";
import axios from "axios";
import { getDomain } from "./utils";

//vs대결 overview
export const useGetChallengeDetail = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeVSDetailResponse>>(buildPath(ApiEndpoints.CHALLENGE_VS_DETAIL, { challengeId }));
}

//챌린지 주차별 내용 리스트 조회
export const useGetChallengeDetailWeeks = (challengeId: string) => {
    return useFetch<ApiResponse<ChallengeDetailWeeksResponse>>(buildPath(ApiEndpoints.CHALLENGE_DETAIL_WEEKS, { challengeId }));
}

//주차별 댓글 조회
// export const useGetPhoto = () => {
//     return useFetchMutation<{ challengeId: string, weeksId: string }, ApiResponse<CommentResponse>>(ApiEndpoints.PHOTO, {
//         mutationFn: async ({ challengeId, weeksId }) => {
//             const res = await axios.get(
//                 getDomain(buildPath(ApiEndpoints.CHALLENGE_DETAIL_WEEKS_COMMENTS, { challengeId, weeksId })),
//             );
//             return res.data;
//         },
//     });