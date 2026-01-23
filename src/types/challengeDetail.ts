import type { ProfileImage } from "./auth";

export interface ChallengeVSDetailResponse{
    challengeInfo: ChallengeInfo;
    participants: ParticipantInfo;
    opponent: ParticipantInfo | null;
}

export interface ChallengeInfo {
    thumbnail: string | null;
    name: string;
    fields: Detailfields[];
    tags: DetailTags[];
    job: string;
    startDate: string;
    endDate: string;
    totalWeeks: number;
}

export interface Detailfields {
    id: number;
    name: string;
}

export interface DetailTags {
    id: number;
    name: string;
}

export interface ParticipantInfo {
    id: number;
    profileImage: ProfileImage;
    nickname: string;
    progressRate: number;
    successRate: number;
    isSuccess: boolean;
}