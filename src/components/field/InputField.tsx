// 아이디나 비밀번호처럼 input를 입력할 수 있는 component
import * as S from "./InputField.style";

interface InputFieldProps {
  label: string;
  placeholder: string;
  error?: string;
  value: string;
  setValue: (value: string) => void;
  checkDuplicate?: boolean;
}

export const InputField = ({ label, placeholder, error, value, setValue, checkDuplicate = false }: InputFieldProps) => {

  return (
    <S.InputFieldWrapper>
      <S.LabelText>{label}</S.LabelText>
      <S.InputFieldInput $checkDuplicate={checkDuplicate} value={value} onChange={(e) => setValue(e.target.value)} $label={label} placeholder={placeholder} />
      {checkDuplicate &&
        <S.DuplicateBtnWrapper>
          중복 확인
        </S.DuplicateBtnWrapper>}
      {error && label == "비밀번호" ? <S.ErrorText>{error}</S.ErrorText> : <></>}
    </S.InputFieldWrapper>
  )
}