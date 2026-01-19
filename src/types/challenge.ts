// 챌린지 생성/수정 요청 타입
export interface ChallengeRequest {
    name: string;
    startedAt: string;
    duration: number;
    tags: string[];
    fields: string[];
    jobs: string[];
    userRequest: string;
    mode: "SOLO" | "TEAM";
    visibility: "PUBLIC" | "PRIVATE";
}

export interface ChallengeResponse {
    id: number;
}