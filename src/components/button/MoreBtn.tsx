import * as S from "./MoreBtn.style";
import React from "react";

interface MoreBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const MoreBtn = ({ children = "더보기", ...props }: MoreBtnProps) => {
    return (
      <S.MoreBtnWrapper {...props}>
        {children}
      </S.MoreBtnWrapper>
    )
  }

export default MoreBtn;