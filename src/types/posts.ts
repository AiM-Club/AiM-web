import type { ImageResponse, PageResponse } from "./common";
import type { Detailfields, DetailTags } from "./challengeDetail";
import type { CommentType } from "./comment";

export interface ChallengeRecruitDetailResponse {
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