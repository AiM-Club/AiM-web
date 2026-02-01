export interface TopUser {
    rank: number;
    userId: number;
    nickname: string;
    level: number;
}

export type TopUserResponse = TopUser[];