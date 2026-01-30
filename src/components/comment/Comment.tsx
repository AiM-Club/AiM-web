import * as S from "./Comment.style";
import ProfileImage from "@/components/image/ProfileImage";
import useMedia from "@/hooks/useMedia";
import type { CommentType } from "@/types/comment";
import NoPhoto from "@/assets/NoPhoto.svg";
import { getRankImg } from "@/utils/userRank";
import { formatDay } from "@/utils/useTime";
import { useGetPhoto } from "@/api/photo";
import { useEffect, useState } from "react";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import { useFileDownload } from "@/hooks/useFileDownload";
import { useImageOpen } from "@/hooks/useImageOpen";

interface CommentComponentProps {
  data: CommentType;
  onReplyClick?: (commentId: number) => void;
  type?: "comment" | "reply";
  isSelected?: boolean;
}

const Comment = ({ data, onReplyClick, type = "comment", isSelected }: CommentComponentProps) => {
  const { mutate: getThumbnail } = useGetPhoto();
  const { downloadFile } = useFileDownload();
  const { openImage } = useImageOpen();
  const [thumbnail, setThumbnail] = useState<Blob | null>(null);
  const isMobile = useMedia(560);

  useEffect(() => {
    if (data.writerInfo?.profileImage?.uuid) {
      getThumbnail({ file_uuid: data.writerInfo?.profileImage?.uuid }, {
        onSuccess: (photo) => {
          setThumbnail(photo);
        },
      });
    }
  }, [data.writerInfo?.profileImage?.uuid, getThumbnail]);

  const thumbnailUrl = useUserPhotoUrl(thumbnail ?? null);

  return (
    <S.CommentItem $isSelected={isSelected}>
      <S.CommentProfileWrapper>
        <ProfileImage image={thumbnailUrl || NoPhoto} width={isMobile ? 2 : 2.5} />
      </S.CommentProfileWrapper>
      <S.CommentContentWrapper>
        <S.CommentHeaderWrapper>
          <S.CommentUserName>{data.writerInfo.nickname}</S.CommentUserName>
          <S.CommentUserGrade src={getRankImg(data.writerInfo.tier?.name || "bronze")} />
        </S.CommentHeaderWrapper>
        <S.CommentText>{data.content}</S.CommentText>
        {data.attachedFiles.length > 0 && (
          <S.CommentFile onClick={() => downloadFile(data.attachedFiles[0])}>
            {data.attachedFiles[0].fileName}
          </S.CommentFile>
        )}
        {data.attachedImages.length > 0 && (
          <S.CommentFile onClick={() => openImage(data.attachedImages[0])}>
            {data.attachedImages[0].fileName}
          </S.CommentFile>
        )}
        <S.CommentBottomWrapper>
          <S.CommentTime>{formatDay(data.createdAt)}</S.CommentTime>
          {type === "comment" && <S.CommentReplyBtn onClick={() => onReplyClick?.(data.commentId)}>답글쓰기</S.CommentReplyBtn>}
        </S.CommentBottomWrapper>
      </S.CommentContentWrapper>
    </S.CommentItem>
  );
}

export default Comment;