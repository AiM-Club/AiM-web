import * as S from "./Comment.style";
import Diamond from "@/assets/Diamond.svg";
import ProfileImage from "@/components/image/ProfileImage";
import type { CommentProps } from "@/types/comment";

interface CommentComponentProps {
  data: CommentProps;
}

const Comment = ({ data }: CommentComponentProps) => {
  return (
    <S.CommentItem>
      <S.CommentProfileWrapper>
        <ProfileImage image={data.userImg} width={2.5} />
      </S.CommentProfileWrapper>
      <S.CommentContentWrapper>
        <S.CommentHeaderWrapper>
          <S.CommentUserName>{data.userName}</S.CommentUserName>
          <S.CommentUserGrade src={Diamond} />
        </S.CommentHeaderWrapper>
        <S.CommentText>{data.comment}</S.CommentText>
        <S.CommentBottomWrapper>
          <S.CommentTime>{data.time}</S.CommentTime>
          <S.CommentReplyBtn>답글쓰기</S.CommentReplyBtn>
        </S.CommentBottomWrapper>
      </S.CommentContentWrapper>
    </S.CommentItem>
  );
}

export default Comment;