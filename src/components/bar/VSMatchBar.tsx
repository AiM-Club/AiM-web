import * as S from "./VSMatchBar.style";
import ProgressIcon from "@/assets/VSPointer.svg";

interface VSMatchBarProps {
  opponentProgress?: number;
  myProgress?: number;
}

const VSMatchBar = ({ opponentProgress = 50, myProgress = 50 }: VSMatchBarProps) => {
  const oppenentPercent = opponentProgress / (opponentProgress + myProgress) * 100;
  const myPercent = myProgress / (opponentProgress + myProgress) * 100;
  return (
    <S.VSMatchBarWrapper>
      <S.TextWrapper $percent={oppenentPercent}>
        <S.ProgressTextGreen>{opponentProgress}%</S.ProgressTextGreen>
        <S.ProgressIcon src={ProgressIcon} />
        <S.ProgressTextPink>{myProgress}%</S.ProgressTextPink>
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