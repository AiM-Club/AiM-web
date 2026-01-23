import type { ProfileImage } from "./auth";

export interface ChallengeVSDetailResponse{
    challengeInfo: ChallengeInfo;
    dominance: Dominance;
    participants: Participants;
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
    profileImage: ProfileImage;
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
    weekNumber: number;
    weekStartDate: string;
    weekEndDate: string;
    title: string;
    content: string;
    stopwatchTimeSeconds: number;
    isComplete: boolean;
}