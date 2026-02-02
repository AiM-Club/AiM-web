// border-radius 4px의 직사각형 버튼 component
import * as S from "./SubmitBtn.style";

interface SubminBtnProps {
  text: string;
  fill: boolean;
  active?: boolean;
  onSubmit?: () => void;
}

export const SubmitBtn = ({ text, fill, active, onSubmit }: SubminBtnProps) => {
  return (
    <S.SubmitBtnWrapper
      $fill={fill}
      $active={active}
      onClick={onSubmit}
      as="button"
      type="button"
    >
      {text}
    </S.SubmitBtnWrapper>
  )
}