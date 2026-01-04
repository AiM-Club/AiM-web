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
