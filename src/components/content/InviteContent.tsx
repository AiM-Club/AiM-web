import * as S from "@/components/content/InviteContent.style";
import ProfileImage from "../image/ProfileImage";
import Diamond from "@/assets/Diamond.png";
import { useEffect, useState } from "react";

const InviteContent = () => {
  const categories = ["분야1", "분야2", "분야3"];
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

  return (
    <S.InviteContentWrapper $wrap={wrapperWidth <= 865} ref={setContentElement}>
      <S.LeftWrapper>
        <ProfileImage width={4} image="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif" />
        {wrapperWidth > 865 ?
          <S.LevelWrapper>
            <S.LevelImage src={Diamond} />
            <span>Lv.10</span>
          </S.LevelWrapper>
          : <></>}
        <span>닉네임 최대 10자</span>
        <S.Title>제목 최대 15자</S.Title>
      </S.LeftWrapper>
      <S.RightWrapper $wrap={wrapperWidth <= 865}>
        {wrapperWidth <= 865 ?
          <S.LevelWrapper>
            <S.LevelImage src={Diamond} />
            <span>Lv.10</span>
          </S.LevelWrapper>
          : <></>}
        <S.CategoryBtnWrapper>
          <S.CategoryWrapper>
            {categories.map((data, index) => (
              <S.Category key={index}>{data}</S.Category>
            ))}
          </S.CategoryWrapper>
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