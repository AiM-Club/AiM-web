import { useState } from "react";
import * as S from "./GenderSelect.style";

interface GenderSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const GenderSelect = ({ value = "", onChange, disabled = false }: GenderSelectProps) => {
  const [selectedGender, setSelectedGender] = useState<string>(value);

  const handleGenderSelect = (gender: string) => {
    if (disabled) return;
    setSelectedGender(gender);
    //?
    onChange?.(gender);
  }

  return (
    <S.GenderSelectWrapper>
      <S.GenderLabel>성별</S.GenderLabel>
      <S.GenderSelect>
        <S.GenderText onClick={() => handleGenderSelect("남")} $selected={selectedGender === "남"} style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.5 : 1 }}>남</S.GenderText>
        <S.GenderText onClick={() => handleGenderSelect("여")} $selected={selectedGender === "여"} style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.5 : 1 }}>여</S.GenderText>
        <S.GenderText onClick={() => handleGenderSelect("기타")} $selected={selectedGender === "기타"} style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.5 : 1 }}>기타</S.GenderText>
      </S.GenderSelect>
    </S.GenderSelectWrapper>
  )
}