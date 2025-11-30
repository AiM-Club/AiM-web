import * as S from "./BirthSelect.style";
import { useState } from "react";

interface BirthSelectProps {
  onChange?: (value: string) => void;
}

export const BirthSelect = ({ onChange }: BirthSelectProps) => {
  const [selectedTap, setSelectedTap] = useState<"year" | "month" | "day" | "">("");
  const [selectedYear, setSelectedYear] = useState<string>("년도");
  const [selectedMonth, setSelectedMonth] = useState<string>("월");
  const [selectedDay, setSelectedDay] = useState<string>("일");
  const currentYear = new Date().getFullYear();

  const handleTapSelect = (tap: "year" | "month" | "day" | "") => {
    if (tap == selectedTap) {
      setSelectedTap("");
      return;
    }
    setSelectedTap(tap);
  }

  const handleBirthSelect = (tap: "year" | "month" | "day", value: string) => {
    let newYear = selectedYear;
    let newMonth = selectedMonth;
    let newDay = selectedDay;

    if (tap === "year") {
      newYear = value;
      setSelectedYear(value);
    } else if (tap === "month") {
      newMonth = value;
      setSelectedMonth(value);
    } else if (tap === "day") {
      newDay = value;
      setSelectedDay(value);
    }

    // 모든 값이 선택되었을 때만 날짜 문자열 생성
    if (newYear !== "년도" && newMonth !== "월" && newDay !== "일") {
      const birthDate = `${newYear}-${newMonth}-${newDay}`;
      onChange?.(birthDate);
      console.log(birthDate);
    }

  }

  return (
    <S.BirthSelectWrapper>
      <S.BirthLabel>생년월일</S.BirthLabel>
      <S.BirthSelect>
        <S.BirthSelectContent onClick={() => handleTapSelect("year")} $selected={selectedTap === "year"}>
          <S.BirthText>{selectedYear}</S.BirthText>
          {selectedTap === "year" ? <S.SelectItems>
            {Array.from({ length: currentYear - 1939 }, (_, index) => (
              <S.SelectItem key={index} onClick={() => handleBirthSelect("year", (currentYear - index).toString())}>
                {currentYear - index}
              </S.SelectItem>
            ))}
          </S.SelectItems> : <></>}
        </S.BirthSelectContent>
        <S.BirthSelectContent onClick={() => handleTapSelect("month")} $selected={selectedTap === "month"}>
          <S.BirthText>{selectedMonth}</S.BirthText>
          {selectedTap === "month" ? <S.SelectItems>
            {Array.from({ length: 12 }, (_, index) => (
              <S.SelectItem key={index} onClick={() => handleBirthSelect("month", (index + 1).toString().padStart(2, '0'))}>
                {(index + 1).toString().padStart(2, '0')}
              </S.SelectItem>
            ))}
          </S.SelectItems> : <></>}
        </S.BirthSelectContent>
        <S.BirthSelectContent onClick={() => handleTapSelect("day")} $selected={selectedTap === "day"}>
          <S.BirthText>{selectedDay}</S.BirthText>
          {selectedTap === "day" ? <S.SelectItems>
            {Array.from({ length: 31 }, (_, index) => (
              <S.SelectItem key={index} onClick={() => handleBirthSelect("day", (index + 1).toString().padStart(2, "0"))}>
                {(index + 1).toString().padStart(2, "0")}
              </S.SelectItem>
            ))}
          </S.SelectItems> : <></>}
        </S.BirthSelectContent>
      </S.BirthSelect>
    </S.BirthSelectWrapper >
  )
}