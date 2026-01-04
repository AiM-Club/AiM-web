import * as S from "./CardChallenge.style"
import greenCardTop from "@/assets/CardGreenTop.png";
import pinkCardTop from "@/assets/CardPinkTop.png";
import greenCardBottom from "@/assets/CardGreenBottom.png";
import pinkCardBottom from "@/assets/CardPinkBottom.png";
import greenCardBottomLong from "@/assets/CardGreenLong.png";
import pinkCardBottomLong from "@/assets/CardPinkLong.png";
import greenCardTopHover from "@/assets/CardGreenHoverTop.png"
import pinkCardTopHover from "@/assets/CardPinkHoverTop.png"
import greenCardBottomHover from "@/assets/CardGreenHoverBottom.png"
import pinkCardBottomHover from "@/assets/CardPinkHoverBottom.png"
import greenCardBottomHoverLong from "@/assets/CardGreenHoverLong.png"
import pinkCardBottomHoverLong from "@/assets/CardPinkHoverLong.png"
import RightArrow from "@/assets/BlackRightArrow.svg";
import LeftArrow from "@/assets/BlackLeftArrow.svg";
import { useState, useEffect } from "react";

//color: 카드의 색상, topic: 카드의 제목, openBtn: 카드의 펼치기 버튼 여부
//children: 카드의 내용(CardContent 컴포넌트에 작성 후 아래와 같이 넣어주세요)
{/* <CardChallenge>
  <CardCotent의 컴포넌트 명/>
</CardChallenge> */}
//cardNum: width에 들어갈 카드의 최대 개수, 기본은 2개 입니다.
//minWidth: 카드의 최소 너비(rem), 기본은 20rem 입니다.

interface CardChallengeProps {
  color: "green" | "pink";
  topic: string;
  openBtn: boolean;
  children: React.ReactNode;
  cardNum?: number;
  minWidth?: number;
  setCardHeight?: (height: number | null) => void;
  viewCard?: "left" | "right" | "both";
  setViewCard?: (view: "left" | "right" | "both") => void;
}

//해당 컴포넌트를 호출하는 페이지의 이 컴포넌트를 감싸는 레이아웃에 
// width: 100%;
// flex-wrap: wrap;
// 추가해주세요

//gap 설정도 상위 페이지의 wrapper에서 설정해주세야 합니다

export const CardChallenge = ({ color, topic, openBtn, children, cardNum = 3, minWidth = 20, setCardHeight, viewCard, setViewCard }: CardChallengeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [backgroundHeight, setBackgroundHeight] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);

  const getCardImageTop = () => {
    if (color === "green") {
      return isHovered ? greenCardTopHover : greenCardTop;
    } else {
      return isHovered ? pinkCardTopHover : pinkCardTop;
    }
  };

  const getCardImageBottom = () => {
    if (color === "green") {
      return isHovered ? backgroundHeight > 600 ? greenCardBottomHoverLong : greenCardBottomHover : backgroundHeight > 600 ? greenCardBottomLong : greenCardBottom;
    } else {
      return isHovered ? backgroundHeight > 600 ? pinkCardBottomHoverLong : pinkCardBottomHover : backgroundHeight > 600 ? pinkCardBottomLong : pinkCardBottom;
    }
  };

  const handleOpenBtn = () => {
    console.log(viewCard, color);
    if (viewCard === "left" && color === "green") setViewCard?.("both");
    if (viewCard === "right" && color === "pink") setViewCard?.("both");
    if (viewCard === "both" && color === "green") setViewCard?.("left");
    if (viewCard === "both" && color === "pink") setViewCard?.("right");
  }

  //자식 content의 height 받아오기
  useEffect(() => {
    if (!contentElement) return;

    const updateHeight = () => {
      const contentHeight = contentElement.offsetHeight;
      setBackgroundHeight(contentHeight * 1.01);
      setCardHeight?.(contentHeight);
    };

    updateHeight();

    //실시간 추적 height
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(contentElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [contentElement, children]);

  return (
    <S.CardChallengeWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $cardNum={cardNum}
      $minWidth={minWidth}
      $height={backgroundHeight}
    >
      <S.CardBackgroundWrapper>
        <S.CardBackgroundTop src={getCardImageTop()} />
        <S.CardBackground src={getCardImageBottom()} $height={backgroundHeight} />
      </S.CardBackgroundWrapper>
      <S.CardTopic $color={color}>{topic}</S.CardTopic>
      {openBtn && (
        color === "green" ?
          <S.OpenBtnWrapper $color={color}>
            <S.OpenBtn $color={color} onClick={handleOpenBtn}>{viewCard === "both" ? "펼치기" : "나가기"}<S.OpenBtnIcon src={RightArrow} /></S.OpenBtn>
          </S.OpenBtnWrapper>
          :
          <S.OpenBtnWrapper $color={color}>
            <S.OpenBtn $color={color} onClick={handleOpenBtn}><S.OpenBtnIcon src={LeftArrow} />{viewCard === "both" ? "펼치기" : "나가기"}</S.OpenBtn>
          </S.OpenBtnWrapper>
      )}
      <S.CardContentWrapper ref={setContentElement}>
        {children}
      </S.CardContentWrapper>
    </S.CardChallengeWrapper>
  )
}