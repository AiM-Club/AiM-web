import * as S from "./Comment.style";
import ProfileImage from "@/components/image/ProfileImage";
import type { CommentType } from "@/types/comment";
import NoPhoto from "@/assets/NoPhoto.svg";
import { getRankImg } from "@/utils/userRank";
import { formatDay } from "@/utils/useTime";

interface CommentComponentProps {
  data: CommentType;
}

const Comment = ({ data }: CommentComponentProps) => {
  return (
    <S.CommentItem>
      <S.CommentProfileWrapper>
        <ProfileImage image={NoPhoto} width={2.5} />
      </S.CommentProfileWrapper>
      <S.CommentContentWrapper>
        <S.CommentHeaderWrapper>
          <S.CommentUserName>{data.writerInfo.nickname}</S.CommentUserName>
          <S.CommentUserGrade src={getRankImg(data.writerInfo.tier?.name || "bronze")} />
        </S.CommentHeaderWrapper>
        <S.CommentText>{data.content}</S.CommentText>
        <S.CommentBottomWrapper>
          <S.CommentTime>{formatDay(data.createdAt)}</S.CommentTime>
          <S.CommentReplyBtn>답글쓰기</S.CommentReplyBtn>
        </S.CommentBottomWrapper>
      </S.CommentContentWrapper>
    </S.CommentItem>
  );
}

export default Comment;