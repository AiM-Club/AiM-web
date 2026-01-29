import { usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
//챌린지 모집글 생성
export const usePostChallengeRecruit = () => {
    return usePost<FormData, { challengeId: number }>(ApiEndpoints.VS_RECRUIT);
}