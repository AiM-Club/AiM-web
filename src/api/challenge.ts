import { ApiEndpoints } from "@/constants/endpoints";
import { useFetch, usePost } from "./hooks";
import { buildPath } from "@/utils/buildPath";
import type { ChallengeRequest, ChallengeResponse } from "@/types/challenge";


export const usePostChallengeVS = () => {
    return usePost<ChallengeRequest, ChallengeResponse>(ApiEndpoints.CHALLENGE);
}
