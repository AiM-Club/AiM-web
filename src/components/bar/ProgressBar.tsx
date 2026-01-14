import * as S from "./ProgressBar.style";
import ProgressBarIconPink from "@/assets/progressBarPink.svg";
import ProgressBarIconPinkSmall from "@/assets/progressBarSmallPink.svg";
import ProgressBarIconGreen from "@/assets/progressBarGreen.svg";

//text는 bar의 topic, progress는 서버에서 받아온 진도율, height는 bar의 높이, color는 bar의 색깔깔
interface ProgressBarProps {
  text?: string;
  progress: number;
  height: number;
  color: string;
}

export const ProgressBar = ({ text, progress, height, color }: ProgressBarProps) => {
  return (
    <S.ProgressBarWrapper $height={height}>
      {text && <S.ProgressBarTextWrapper>
        <S.ProgressBarText $height={height}>{text}: {progress}%</S.ProgressBarText>
      </S.ProgressBarTextWrapper>}
      <S.ProgressBar $height={height}>
        {color == "pink" ? <S.ProgressBarIcon src={height <= 32 ? ProgressBarIconPinkSmall : ProgressBarIconPink} $height={height} $progress={progress} />
          : <S.ProgressBarIcon src={ProgressBarIconGreen} $height={height} $progress={progress} />}
        <S.ProgressBarFill $progress={progress} $color={color} />
      </S.ProgressBar>
    </S.ProgressBarWrapper>
  )
}