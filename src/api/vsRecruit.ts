import { useFetch, usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { ApiResponse } from "./types";
import type {
  ChallengeRecruitHotResponse,
  ChallengeRecruitListResponse,
  ChallengeReviewHotResponse,
} from "@/types/vsRecruit";

//vs 모집글 조회
export const useGetChallengeRecruit = ({
  sort,
  page = 0,
  size = 16,
  keyword,
}: {
  sort?: string;
  page?: number;
  size?: number;
  keyword?: string;
}) => {
  const params: Record<string, string | number> = { page, size };

  if (sort && sort !== "--") {
    params.sort = sort;
  }
  if (keyword && keyword.trim() !== "") {
    params.keyword = keyword.trim();
  }

  return useFetch<ApiResponse<ChallengeRecruitListResponse>>(ApiEndpoints.VS_RECRUIT, params);
};

//hot 모집글 조회
export const useGetHotChallengeRecruit = () => {
  return useFetch<ApiResponse<ChallengeRecruitHotResponse[]>>(ApiEndpoints.VS_RECRUIT_HOT);
};

//hot 후기글 조회
export const useGetHotChallengeReview = () => {
  return useFetch<ApiResponse<ChallengeReviewHotResponse[]>>(ApiEndpoints.VS_RECRUIT_HOT_REVIEW);
};

//vs 모집글 작성
export const usePostChallengeRecruit = () => {
  return usePost<FormData, string>(ApiEndpoints.VS_RECRUIT);
};
