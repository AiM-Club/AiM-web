// 아이디나 비밀번호처럼 input를 입력할 수 있는 component
import * as S from "./InputFeild.style";

interface InputFeildProps {
  label: string;
  placeholder: string;
  error?: string;
  value: string;
  setValue: (value: string) => void;
}

export const InputFeild = ({ label, placeholder, error, value, setValue }: InputFeildProps) => {
  return (
    <S.InputFeildWrapper>
      <S.LabelText>{label}</S.LabelText>
      <S.InputFeildInput value={value} onChange={(e) => setValue(e.target.value)} $label={label} placeholder={placeholder} />
      {error && label == "비밀번호" ? <S.ErrorText>{error}</S.ErrorText> : <></>}
    </S.InputFeildWrapper>
  )
}