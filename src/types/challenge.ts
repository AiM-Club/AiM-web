import type { ProfileImage } from "./auth";
import type { ImageResponse, PageResponse } from "./common";
// 챌린지 생성/수정 요청 타입
export interface ChallengeRequest {
    name: string;
    startedAt: string;
    duration: number;
    tags: string[];
    fields: string[];
    jobs: string[];
    userRequest: string;
    mode: string;
    visibility: string;
}

export interface ChallengeVSListResponse {
    content: ChallengeVSResponse[];
    page: PageResponse;
}


export interface ChallengeVSResponse {
    challengeId: number;
    postId?: number;
    thumbnail: ImageResponse | null;
    user: ChallengeUser;
    startDate: string;
    duration: string;
    name: string;
    fields: string[];
    tags: string[];
    job: string;
    liked: boolean;
    likeCount: number;
    createdAt: string;
    lastModifiedAt: string;
    status: string;
}

export interface ChallengeUser {
    userId: number;
    nickname: string;
    badge: string;
    profileImage: ProfileImage;
}