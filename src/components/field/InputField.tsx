// 아이디나 비밀번호처럼 input를 입력할 수 있는 component
import * as S from "./InputField.style";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label: string;
  placeholder: string;
  error?: string;
  checkDuplicate?: boolean;
  register: UseFormRegisterReturn;
}

export const InputField = ({ label, placeholder, error, checkDuplicate = false, register }: InputFieldProps) => {
  return (
    <S.InputFieldWrapper>
      <S.LabelText>{label}</S.LabelText>
      <S.InputFieldInput
        $checkDuplicate={checkDuplicate}
        $label={label}
        placeholder={placeholder}
        {...register}
      />
      {checkDuplicate &&
        <S.DuplicateBtnWrapper>
          중복 확인
        </S.DuplicateBtnWrapper>}
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.InputFieldWrapper>
  )
}