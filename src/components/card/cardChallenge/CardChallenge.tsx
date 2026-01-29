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
import pinkCardStraightTop from "@/assets/CardPinkStraightTop.png"
import PinkCardShortLeft from "@/assets/PinkCardLeft.png";
import PinkCardShortLeftHover from "@/assets/PinkCardLeftHover.png";
import pinkCardStraightBottom from "@/assets/CardPinkStraightBottom.png"
import pinkCardStraightHoverTop from "@/assets/CardPinkStraightHoverTop.png"
import pinkCardStraightHoverBottom from "@/assets/CardPinkStraightHoverBottom.png"
import PinkTopMobile from "@/assets/CardPinkTopMobile.png";
import GreenTopMobile from "@/assets/CardGreenTopMobile.png";
import RightArrow from "@/assets/BlackRightArrow.svg";
import LeftArrow from "@/assets/BlackLeftArrow.svg";
import { useState, useEffect } from "react";
import { PageTopic } from "@/components/text/PageTopic";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";

// To 작업자: 모바일일 경우 카드 토픽이 단순히 밑으로 내려오는게 아닌
// 1. 구조가 바뀌는 경우 **mobileTopic을 none**으로 넘겨 topic을 카드에선 제거하고 카드 안 content에 추가해주세요.
// 2. 카드 토픽이 챌린지 랭킹 페이지와 같이 background top 위에 있을 경우 **mobileTopic을 top**으로 넘겨주세요.
// mobileTopic을 top과 none으로 넘길 경우 카드 안 content의 wrapper의 패딩 값을 아래와 같이 바꿔주세요

// @media (max-width: ooopx) {
//   padding: 2.5rem 0 1.5rem 0;
// }


//color: 카드의 색상, topic: 카드의 제목, openBtn: 카드의 펼치기 버튼 여부
//children: 카드의 내용(CardContent 컴포넌트에 작성 후 아래와 같이 넣어주세요)
{/* <CardChallenge>
  <CardCotent의 컴포넌트 명/>
</CardChallenge> */}
//cardNum: width에 들어갈 카드의 최대 개수, 기본은 2개 입니다.
//minWidth: 카드의 최소 너비(rem), 기본은 20rem 입니다.

interface CardChallengeProps {
  color: "green" | "pink";
  kind?: "opponent" | "my";
  topic?: string;
  topicDirection?: "left" | "right" | null;
  openBtn: boolean;
  children: React.ReactNode;
  cardNum?: number;
  minWidth?: number | null;
  setCardHeight?: (height: number | null) => void;
  viewCard?: "left" | "right" | "both";
  setViewCard?: (view: "left" | "right" | "both") => void;
  isMobile?: boolean;
  mobileTopic?: "none" | "top" | "normal";
  isMine?: boolean;
}

//해당 컴포넌트를 호출하는 페이지의 이 컴포넌트를 감싸는 레이아웃에 
// width: 100%;
// flex-wrap: wrap;
// 추가해주세요

//gap 설정도 상위 페이지의 wrapper에서 설정해주세야 합니다

export const CardChallenge = ({ color, kind, topic, topicDirection = null, openBtn, children, cardNum = 3, minWidth = null, setCardHeight, viewCard, setViewCard, isMobile = false, mobileTopic = "normal", isMine = false }: CardChallengeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [backgroundHeight, setBackgroundHeight] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);
  const { myInfo, opponentInfo } = useChallengeDetailStore();

  if (topic) {
    topic = topic;
  } else {
    topic = kind === "opponent" ? opponentInfo?.nickname : isMine ? `ME : ${myInfo?.nickname}` : ` ${myInfo?.nickname}`;
  }
  const getCardImageTop = () => {
    if (isMobile) {
      if (color === "green") return GreenTopMobile;
      else if (color === "pink") return PinkTopMobile;
    }
    if (color === "green") {
      return isHovered ? greenCardTopHover : greenCardTop;
    } else if (color === "pink" && topicDirection === "left") {
      return isHovered && backgroundHeight > 600 ? pinkCardStraightHoverTop : isHovered ? PinkCardShortLeftHover : backgroundHeight > 600 ? pinkCardStraightTop : PinkCardShortLeft;
    } else {
      return isHovered ? pinkCardTopHover : pinkCardTop;
    }
  };

  const getCardImageBottom = () => {
    if (isMobile) return;
    if (color === "green") {
      return isHovered ? backgroundHeight > 600 ? greenCardBottomHoverLong : greenCardBottomHover : backgroundHeight > 600 ? greenCardBottomLong : greenCardBottom;
    } else if (color === "pink" && topicDirection === "left") {
      return isHovered ? pinkCardStraightHoverBottom : pinkCardStraightBottom;
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
      $minWidth={minWidth ?? 0}
      $height={backgroundHeight}
      $ismobile={isMobile}
    >
      {isMobile && mobileTopic === "top" && <S.CardTopic $mobileTopic={mobileTopic} $color={color} $direction={topicDirection} $ismobile={isMobile}><PageTopic text={topic || ""} size="s" /></S.CardTopic>}
      <S.CardBackgroundWrapper>
        <S.CardBackgroundTop $image={getCardImageTop().toString().split('/').pop()?.split('?')[0] || ''} src={getCardImageTop()} $ismobile={isMobile} />
        {!isMobile && <S.CardBackground src={getCardImageBottom()} $height={backgroundHeight} />}
      </S.CardBackgroundWrapper>
      {!isMobile && <S.CardTopic $color={color} $direction={topicDirection} $ismobile={isMobile}>{topic}</S.CardTopic>}
      {openBtn && !isMobile && (
        color === "green" ?
          <S.OpenBtnWrapper $color={color}>
            <S.OpenBtn $color={color} onClick={handleOpenBtn}>{viewCard === "both" ? "펼치기" : "나가기"}<S.OpenBtnIcon src={RightArrow} /></S.OpenBtn>
          </S.OpenBtnWrapper>
          :
          <S.OpenBtnWrapper $color={color}>
            <S.OpenBtn $color={color} onClick={handleOpenBtn}><S.OpenBtnIcon src={LeftArrow} />{viewCard === "both" ? "펼치기" : "나가기"}</S.OpenBtn>
          </S.OpenBtnWrapper>
      )}
      <S.CardContentWrapper ref={setContentElement} $ismobile={isMobile} $mobileTopic={mobileTopic} $color={color}>
        {isMobile && mobileTopic === "normal" && <S.CardTopic $color={color} $direction={topicDirection} $ismobile={isMobile}>{topic}</S.CardTopic>}
        {children}
      </S.CardContentWrapper>
    </S.CardChallengeWrapper>
  )
}