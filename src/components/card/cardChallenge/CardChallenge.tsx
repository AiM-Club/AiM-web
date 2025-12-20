import * as S from "./CardChallenge.style"
import greenCard from "@/assets/CardChallengeGreen.png";
import pinkCard from "@/assets/CardChallengePink.png";
import greenCardHover from "@/assets/CardChallengeGreenHover.png";
import pinkCardHover from "@/assets/CardChallengePinkHover.png";
import TryIcon from "@/assets/Try.png";
import { ProgressBar } from "@/components/bar/ProgressBar";
import { useState } from "react";

interface CardChallengeProps {
  color: "green" | "pink";
  topic: string;
  progress: number;
  tryCount: number;
  successCount: number;
  failCount: number;
}

export const CardChallenge = ({ color, topic, progress, tryCount, successCount, failCount }: CardChallengeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCardImage = () => {
    if (color === "green") {
      return isHovered ? greenCardHover : greenCard;
    } else {
      return isHovered ? pinkCardHover : pinkCard;
    }
  };

  return (
    <S.CardChallengeWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <S.CardBackground src={getCardImage()} />
      <S.CardTopic $color={color}>{topic}</S.CardTopic>
      <S.CardContentWrapper>
        <ProgressBar text="성공률" progress={progress} height={32} color={color} />
        <S.TryWrapper>
          <S.TryContent>
            <p>시도 횟수</p>
            <S.TryIconWrapper>
              <S.TryIcon src={TryIcon} />
              <S.TryTextWrapper>
                <S.TryNum>{tryCount}</S.TryNum>
                <S.TryText>회</S.TryText>
              </S.TryTextWrapper>
            </S.TryIconWrapper>
          </S.TryContent>
          <S.TryContent>
            <p>성공 횟수</p>
            <S.TryIconWrapper>
              <S.TryIcon src={TryIcon} />
              <S.TryTextWrapper>
                <S.TryNum>{successCount}</S.TryNum>
                <S.TryText>회</S.TryText>
              </S.TryTextWrapper>
            </S.TryIconWrapper>
          </S.TryContent>
          <S.TryContent>
            <p>실패 횟수</p>
            <S.TryIconWrapper>
              <S.TryIcon src={TryIcon} />
              <S.TryTextWrapper>
                <S.TryNum>{failCount}</S.TryNum>
                <S.TryText>회</S.TryText>
              </S.TryTextWrapper>
            </S.TryIconWrapper>
          </S.TryContent>
        </S.TryWrapper>
      </S.CardContentWrapper>
    </S.CardChallengeWrapper>
  )
}