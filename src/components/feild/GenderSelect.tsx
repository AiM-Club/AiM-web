import { useState } from "react";
import * as S from "./GenderSelect.style";

export const GenderSelect = () => {
  const [selectedGender, setSelectedGender] = useState<string>("");

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  }

  return (
    <S.GenderSelectWrapper>
      <S.GenderLabel>성별</S.GenderLabel>
      <S.GenderSelect>
        <S.GenderText onClick={() => handleGenderSelect("남")} $selected={selectedGender === "남"}>남</S.GenderText>
        <S.GenderText onClick={() => handleGenderSelect("여")} $selected={selectedGender === "여"}>여</S.GenderText>
        <S.GenderText onClick={() => handleGenderSelect("기타")} $selected={selectedGender === "기타"}>기타</S.GenderText>
      </S.GenderSelect>
    </S.GenderSelectWrapper>
  )
}