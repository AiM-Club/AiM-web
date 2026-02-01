import { useFetch } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type { TopUserResponse, UserChallengeRecordResponse } from "@/types/user";


//TOP 10 유저 랭킹 조회
export const userGetTop10 = () => {
    return useFetch<TopUserResponse>(ApiEndpoints.TOP_10_USER);
}

//유저 챌린지 기록 조회
export const userGetChallengeRecord = () => {
    return useFetch<ApiResponse<UserChallengeRecordResponse>>(ApiEndpoints.USER_CHALLENGE_RECORD);
}