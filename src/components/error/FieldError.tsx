import * as S from "./FieldError.style";

interface FieldErrorProps {
  error?: string;
}

export const FieldError = ({ error }: FieldErrorProps) => {
  if (!error) return null;

  return (
    <S.FieldErrorWrapper>
      <p>{error}</p>
    </S.FieldErrorWrapper>
  )
}