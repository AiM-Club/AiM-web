import * as S from "./ProgressBar.style";
import ProgressBarIconPink from "@/assets/ProgressBarPink.svg";
import ProgressBarIconPinkSmall from "@/assets/ProgressBarSmallPink.svg";
import ProgressBarIconGreen from "@/assets/ProgressBarGreen.svg";

//text는 bar의 topic, progress는 서버에서 받아온 진도율, height는 bar의 높이, color는 bar의 색깔깔
interface ProgressBarProps {
  text?: string;
  barText?: "main" | "sub";
  progress: number;
  height: number;
  color: string;
  background?: "black" | "gray";
}

export const ProgressBar = ({ text, barText = "main", progress, height, color, background = "gray" }: ProgressBarProps) => {
  return (
    <S.ProgressBarWrapper $barText={barText} $height={height}>
      {text && <S.ProgressBarTextWrapper>
        <S.ProgressBarText $barText={barText} $height={height}>{text}: {progress}%</S.ProgressBarText>
      </S.ProgressBarTextWrapper>}
      <S.ProgressBar $height={height} $background={background}>
        {color == "pink" ? <S.ProgressBarIcon src={height <= 32 ? ProgressBarIconPinkSmall : ProgressBarIconPink} $height={height} $progress={progress} />
          : <S.ProgressBarIcon src={ProgressBarIconGreen} $height={height} $progress={progress} />}
        <S.ProgressBarFill $progress={progress} $color={color} />
      </S.ProgressBar>
    </S.ProgressBarWrapper>
  )
}