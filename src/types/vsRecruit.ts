import type { ImageResponse, PageResponse } from "./common";
import type { User } from "./auth";

export interface ChallengeRecruitListResponse {
  content: ChallengeRecruitResponse[];
  page: PageResponse;
}

export interface ChallengeRecruitResponse {
  postId: number;
  challengeId?: number;
  thumbnail: ImageResponse | null;
  user: RecruitUser;
  startDate: string;
  duration: string;
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

export interface RecruitUser extends User {
  id: number;
}
