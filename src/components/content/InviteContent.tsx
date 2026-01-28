import * as S from "@/components/content/InviteContent.style";
import ProfileImage from "../image/ProfileImage";
import { useEffect, useState } from "react";
import type { ChallengeRequestContent } from "@/types/challenge";
import { getRankImg } from "@/utils/userRank";
import { useGetPhoto } from "@/api/photo";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import NoPhoto from "@/assets/NoPhoto.svg";

const InviteContent = ({ item }: { item: ChallengeRequestContent }) => {
  const { data: userPhoto, mutate: getUserPhoto } = useGetPhoto();
  const [wrapperWidth, setWrapperWidth] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentElement) return;

    const updateWidth = () => {
      const contentWidth = contentElement.offsetWidth;
      setWrapperWidth(contentWidth);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(contentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [contentElement]);

  useEffect(() => {
    if (item.requester.profileImage.uuid) {
      getUserPhoto({ file_uuid: item.requester.profileImage.uuid });
    }
  }, [item.requester.profileImage.uuid, getUserPhoto]);


  return (
    <S.InviteContentWrapper $wrap={wrapperWidth <= 865} ref={setContentElement}>
      <S.LeftWrapper>
        <ProfileImage width={wrapperWidth > 480 ? 4 : 3} image={useUserPhotoUrl(userPhoto ?? null) || NoPhoto} />
        {wrapperWidth > 865 || wrapperWidth <= 480 ?
          <S.LevelWrapper>
            <S.LevelImage src={getRankImg(item.requester.tier?.name || "bronze")} />
            <span>{item.requester.level}</span>
          </S.LevelWrapper>
          : <></>}
        <span>{item.requester.nickname}</span>
        {wrapperWidth > 480 ? <S.Title>{item.challenge.name}</S.Title> : <></>}
      </S.LeftWrapper>
      <S.RightWrapper $wrap={wrapperWidth <= 865}>
        {wrapperWidth <= 865 && wrapperWidth > 480 ?
          <S.LevelWrapper>
            <S.LevelImage src={getRankImg(item.requester.tier?.name || "bronze")} />
            <span>{item.requester.tier?.name}</span>
          </S.LevelWrapper>
          : <S.LevelWrapper><S.Title>{item.challenge.name}</S.Title></S.LevelWrapper>}
        <S.CategoryBtnWrapper>
          {wrapperWidth > 480 && <S.CategoryWrapper>
            {item.challenge.fields.map((data, index) => (
              <S.Category key={index}>{data.name}</S.Category>
            ))}
          </S.CategoryWrapper>}
          <S.BtnWrapper>
            <S.ApproveBtn>승인</S.ApproveBtn>
            <S.RejectBtn>거절</S.RejectBtn>
          </S.BtnWrapper>
        </S.CategoryBtnWrapper>
      </S.RightWrapper>
    </S.InviteContentWrapper>
  )
}

export default InviteContent;