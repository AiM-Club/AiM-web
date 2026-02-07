import type { ImageResponse } from "./common";

export interface ChallengeVSDetailResponse {
    challengeInfo: ChallengeInfo;
    dominance: Dominance;
    participants: Participants;
}

export interface ChallengeInfo {
    writerId: number;
    writerNickname: string;
    thumbnail: ImageResponse;
    name: string;
    isLiked: boolean;
    likedCount: number;
    fields: Detailfields[];
    tags: DetailTags[];
    job: string;
    startDate: string;
    endDate: string;
    totalWeeks: number;
    status: string;
}

export interface Detailfields {
    id: number;
    name: string;
}

export interface DetailTags {
    id: number;
    name: string;
}

export interface Dominance {
    myPercent: number;
    mySuccessRate: number;
    opponentPercent: number;
    opponentSuccessRate: number;
}
export interface Participants {
    me: ParticipantsInfo;
    opponent: ParticipantsInfo | null;
}

export interface ParticipantsInfo {
    id: number;
    profileImage: ImageResponse;
    nickname: string;
    progressRate: number;
    successRate: number;
    isSuccess: boolean;
}

export interface ChallengeDetailWeeksResponse {
    challengeId: number;
    totalWeeks: number;
    currentWeek: number;
    progressList: ProgressList[];
}

export interface ProgressList {
    weeklyProgressId: number;
    weekNumber: number;
    weekStartDate: string;
    weekEndDate: string;
    title: string;
    content: string;
    proofImages: ImageResponse[];
    proofFiles: ImageResponse[];
    stopwatchTimeSeconds: number;
    weeklyStatus: string;
    isComplete: boolean;
}

export interface ChallengeSoloDetailResponse {
    challengeInfo: ChallengeInfo;
    participant: ParticipantsInfo;
}

export interface CommentPostResponse {
    commentId: number;
    weeksId: number;
}

export interface ChallengeLikeResponse {
    likes: boolean;
}

export interface ChallengeRequestResponse {
    requestId: number;
    challengeId: number;
    status: string;
}