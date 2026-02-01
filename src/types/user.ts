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