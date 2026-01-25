import * as S from "./Comment.style";
import ProfileImage from "@/components/image/ProfileImage";
import type { CommentType } from "@/types/comment";
import NoPhoto from "@/assets/NoPhoto.svg";
import { getRankImg } from "@/utils/userRank";
import { formatDay } from "@/utils/useTime";
import { useGetPhoto } from "@/api/photo";
import { useEffect, useState } from "react";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";

interface CommentComponentProps {
  data: CommentType;
}

const Comment = ({ data }: CommentComponentProps) => {
  const { mutate: getThumbnail } = useGetPhoto();
  const [thumbnail, setThumbnail] = useState<Blob | null>(null);
  useEffect(() => {
    if (data.writerInfo.profileImage.uuid) {
      getThumbnail({ file_uuid: data.writerInfo.profileImage.uuid }, {
        onSuccess: (photo) => {
          setThumbnail(photo);
        },
      });
    }
  }, [data.writerInfo.profileImage.uuid, getThumbnail]);

  const thumbnailUrl = useUserPhotoUrl(thumbnail ?? null);

  return (
    <S.CommentItem>
      <S.CommentProfileWrapper>
        <ProfileImage image={thumbnailUrl || NoPhoto} width={2.5} />
      </S.CommentProfileWrapper>
      <S.CommentContentWrapper>
        <S.CommentHeaderWrapper>
          <S.CommentUserName>{data.writerInfo.nickname}</S.CommentUserName>
          <S.CommentUserGrade src={getRankImg(data.writerInfo.tier?.name || "bronze")} />
        </S.CommentHeaderWrapper>
        <S.CommentText>{data.content}</S.CommentText>
        {(data.attachedFiles.length > 0 || data.attachedImages.length > 0) && <S.CommentFile>{data.attachedFiles.length > 0 ? data.attachedFiles[0].fileName : data.attachedImages.length > 0 ? data.attachedImages[0].fileName : ""}</S.CommentFile>}
        <S.CommentBottomWrapper>
          <S.CommentTime>{formatDay(data.createdAt)}</S.CommentTime>
          <S.CommentReplyBtn>답글쓰기</S.CommentReplyBtn>
        </S.CommentBottomWrapper>
      </S.CommentContentWrapper>
    </S.CommentItem>
  );
}

export default Comment;