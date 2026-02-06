// 아이디나 비밀번호처럼 input를 입력할 수 있는 component
import * as S from "./InputField.style";
import type { UseFormRegisterReturn } from "react-hook-form";

//중복 확인이 inputfield에 있을 경우 checkDuplicate를 true로 넘깁니다.
interface InputFieldProps {
  label: string;
  value?: string;
  placeholder: string;
  checkDuplicate?: boolean;
  register: UseFormRegisterReturn;
  onDuplicateCheck?: () => void;
  disabled?: boolean;
}

export const InputField = ({ label, value, placeholder, checkDuplicate = false, register, onDuplicateCheck, disabled = false }: InputFieldProps) => {
  return (
    <S.InputFieldWrapper>
      <S.LabelText>{label}</S.LabelText>
      <S.InputFieldInput
        $checkDuplicate={checkDuplicate}
        $label={label}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
      {checkDuplicate && !disabled &&
        <S.DuplicateBtnWrapper $canCheckDuplicate={value?.trim() !== ""} onClick={onDuplicateCheck}>
          중복 확인
        </S.DuplicateBtnWrapper>}
    </S.InputFieldWrapper>
  )
}