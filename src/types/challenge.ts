import type { User } from "./auth";
import type { ImageResponse, PageResponse, RequestUser } from "./common";
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
    user: RequestUser;
    startedAt: string;
    durationWeek: number;
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


export interface ChallengeRequestListResponse {
    content: ChallengeRequestContent[];
    page: PageResponse;
}

export interface ChallengeRequestContent {
    id: number;
    requesterId: number;
    requester: Requester;
    challenge: RequestChallenge;
}

export interface Requester extends User {
    level: number;
}
export interface RequestChallenge {
    name: string;
    fields: {
        id: number;
        name: string;
    }[];
}

export interface ChallengeMyListResponse {
    challengeId: number;
    name: string;
    job: string;
    fields: {
        id: number;
        name: string;
    }[];
    tags: {
        id: number;
        name: string;
    }[];
    startedAt: string;
    durationWeek: number;
    mode: string;
}
