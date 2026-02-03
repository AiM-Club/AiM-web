import type { Tier } from "./auth";
import type { ImageResponse, PageResponse, RequestUser } from "./common";

export interface TopUser {
    rank: number;
    userId: number;
    nickname: string;
    level: number;
}

export type TopUserResponse = TopUser[];

export interface UserChallengeRecordResponse {
    allSuccessRate: number;
    soloRecord: Record;
    vsRecord: Record;
}

export interface Record {
    successRate: number;
    attemptCount: number;
    successCount: number;
    failCount: number;
}

export interface UserLevelResponse {
    tier: Tier;
    level: number;
    tierProgressPercent: number;
    nextTier: Tier;
}

export interface UserProfileResponse {
    userId: number;
    profileImage: ImageResponse;
    nickname: string;
    loginId: string;
    tier: Tier;
    level: number;
    tags: string[];
    fields: string[];
    allChallengeRecord: Record;
    soloChallengeRecord: Record;
    vsChallengeRecord: Record;
    isMine: boolean;
}

export interface UserPostResponse {
    content: PostType[];
    page: PageResponse;
}

export interface PostType {
    postId: number;
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
}