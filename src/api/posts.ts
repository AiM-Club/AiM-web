import { buildPath } from "@/utils/buildPath";
import { useDelete, useFetch, usePost } from "./hooks";
import { ApiEndpoints } from "@/constants/endpoints";
import type { PostDetailResponse, PostCommentResponse, PostLikeResponse, QnaResponse, AllSearchResponse } from "@/types/posts";
import type { ApiResponse } from "./types";

//챌린지 모집글 생성
export const usePostChallengeRecruit = () => {
    return usePost<FormData, { postId: number }>(ApiEndpoints.VS_RECRUIT);
}

//챌린지 모집글 상세조회
export const useGetChallengeRecruitDetail = (postId: string) => {
    return useFetch<ApiResponse<PostDetailResponse>>(buildPath(ApiEndpoints.VS_RECRUIT_DETAIL, { postId }));
}

//게시글 댓글 목록 조회
export const useGetPostComments = (postId: string, page: number = 0, size: number = 10) => {
    return useFetch<ApiResponse<PostCommentResponse>>(buildPath(ApiEndpoints.POST_COMMENTS, { postId }), { page, size });
}

//게시글 댓글 작성
export const usePostPostComment = (postId: string) => {
    return usePost<FormData, ApiResponse<{ commentId: number }>>(buildPath(ApiEndpoints.POST_COMMENTS, { postId }));
}

//게시글 좋아요 토글
export const usePostPostLike = (postId: string) => {
    return usePost<void, PostLikeResponse>(buildPath(ApiEndpoints.POST_LIKE, { postId }));
}

//후기 작성
export const usePostReview = () => {
    return usePost<FormData, { postId: number }>(ApiEndpoints.REVIEW);
}

//qna 작성
export const usePostQna = () => {
    return usePost<FormData, { postId: number }>(ApiEndpoints.QNA);
}

//qna 목록 조회
export const useGetQna = ({ filter, sort, keyword, page = 0, size = 8 }: { filter?: string, sort?: string, keyword?: string, page?: number, size?: number }) => {
    const params: Record<string, string | number> = { page, size };

    if (filter && filter !== "--") {
        params.filter = filter;
    }
    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }
    return useFetch<ApiResponse<QnaResponse>>(ApiEndpoints.QNA, params);
}

//후기 목록 조회
export const useGetReview = ({ filter, sort, keyword, page = 0, size = 8 }: { filter?: string, sort?: string, keyword?: string, page?: number, size?: number }) => {
    const params: Record<string, string | number> = { page, size };

    if (filter && filter !== "--") {
        params.filter = filter;
    }
    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }
    return useFetch<ApiResponse<QnaResponse>>(ApiEndpoints.REVIEW, params);
}

//qna 상세조회
export const useGetQnaDetail = (postId: string) => {
    return useFetch<ApiResponse<PostDetailResponse>>(buildPath(ApiEndpoints.QNA_DETAIL, { postId }));
}

//후기 상세조회
export const useGetReviewDetail = (postId: string) => {
    return useFetch<ApiResponse<PostDetailResponse>>(buildPath(ApiEndpoints.REVIEW_DETAIL, { postId }));
}

//게시글 삭제
export const useDeletePost = (postId: string) => {
    return useDelete<void>(buildPath(ApiEndpoints.POST_DETAIL, { postId }));
}

//전체 검색
export const useGetAllSearch = ({ sort, keyword, page = 0, size = 16 }: { sort?: string, keyword?: string, page?: number, size?: number }) => {
    const params: Record<string, string | number> = { page, size };
    if (sort && sort !== "--") {
        params.sort = sort;
    }
    if (keyword && keyword.trim() !== "") {
        params.keyword = keyword.trim();
    }
    return useFetch<ApiResponse<AllSearchResponse>>(ApiEndpoints.ALL_SEARCH, params);
}