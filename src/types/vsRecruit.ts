import type { ImageResponse, PageResponse, RequestUser } from "./common";

export interface ChallengeRecruitListResponse {
  content: ChallengeRecruitResponse[];
  page: PageResponse;
}

export interface ChallengeRecruitResponse {
  postId: number;
  challengeId?: number;
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

export interface ChallengeRecruitHotResponse {
  postId: number;
  title: string;
  fields: string[];
}

export interface ChallengeReviewHotResponse {
  postId: number;
  title: string;
  likeCount: number;
}