import type { ProfileImage, User } from "./auth";

export interface CommentResponse {
  comments: CommentType[];
  pageInfo: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    hasNext: boolean;
  };
}

export interface CommentType {
  commentId: number;
  depth: number;
  writerInfo: writerInfo;
  content: string;
  attachedImages: ProfileImage[];
  attachedFiles: ProfileImage[];
  createdAt: string;
  updatedAt: string;
  childrenComments: CommentType[];
}

export interface writerInfo extends User {
  id: number;
}

export interface CommentProps {
  commentId: number;
  comment: string;
  userName: string;
  userGrade: string;
  userImg: string;
  time: string;
  reply?: ReplyProps[];
}

export interface ReplyProps {
  commentId: number;
  comment: string;
  userName: string;
  userGrade: string;
  userImg: string;
  time: string;
}

