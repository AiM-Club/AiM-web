import * as S from "./MoreBtn.style";
import React from "react";
import useMedia from "@/hooks/useMedia";
import ArrowRight from "@/assets/GrayRightArrow.svg";

interface MoreBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const MoreBtn = ({ children = "더보기", ...props }: MoreBtnProps) => {
  const isMobile = useMedia(560);

  return (
    <S.MoreWrapper>
      <S.MoreBtnWrapper {...props}>
        {children}
      </S.MoreBtnWrapper>
      {isMobile && <S.MoreIcon src={ArrowRight} />}
    </S.MoreWrapper>
  )
}

export default MoreBtn;