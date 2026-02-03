import type { ImageResponse, PageResponse } from "./common";
import type { Detailfields, DetailTags } from "./challengeDetail";
import type { CommentType } from "./comment";

export interface PostDetailResponse {
    challengeId: number;
    writerId: number;
    nickname: string;
    thumbnail: ImageResponse | null;
    title: string;
    tags: DetailTags[];
    fields: Detailfields[];
    job: string;
    startDate: string;
    totalWeeks: number;
    isLiked: boolean;
    likeCount: number;
    content: string;
    attachedImages: ImageResponse[];
    attachedFiles: ImageResponse[];
}

export interface PostCommentResponse {
    comments: CommentType[];
    pageInfo: PageResponse;
}

export interface PostLikeResponse {
    id: number;
    isLiked: boolean;
}

export interface QnaResponse {
    content: QnaType[];
    page: PageResponse;
}

export interface QnaType {
    postId: number;
    challengeId?: number;
    thumbnail: ImageResponse | null;
    user: PostUser;
    name: string;
    fields: string[];
    tags: string[];
    job: string;
    isLiked: boolean;
    likeCount: number;
}

export interface PostUser {
    userId: number;
    nickname: string;
    tier: string;
    profileImage: ImageResponse;
}