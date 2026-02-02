import * as S from "./VSMatchBar.style";
import ProgressIcon from "@/assets/VSPointer.svg";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";



const VSMatchBar = () => {
  const { dominance } = useChallengeDetailStore();
  const oppenentPercent = (dominance?.opponentPercent || 0) / ((dominance?.opponentPercent || 0) + (dominance?.myPercent || 0)) * 100;
  const myPercent = (dominance?.myPercent || 0) / ((dominance?.opponentPercent || 0) + (dominance?.myPercent || 0)) * 100;
  return (
    <S.VSMatchBarWrapper>
      <S.TextWrapper $percent={oppenentPercent}>
        <S.ProgressTextGreen>{dominance?.opponentPercent || 0}%</S.ProgressTextGreen>
        <S.ProgressIcon src={ProgressIcon} />
        <S.ProgressTextPink>{dominance?.myPercent || 0}%</S.ProgressTextPink>
      </S.TextWrapper>
      <S.ProgressBarWrapper>
        <S.ProgressBarGreen $percent={oppenentPercent} />
        {oppenentPercent === 100 && <S.ProgressBarPinkFill />}
        {myPercent === 100 && <S.ProgressBarGreenFill />}
        <S.ProgressBarPink $percent={myPercent} />
      </S.ProgressBarWrapper>
    </S.VSMatchBarWrapper>
  )
}

export default VSMatchBar;