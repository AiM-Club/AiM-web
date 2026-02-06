import * as S from "./BirthSelect.style";
import { useState, useEffect } from "react";

interface BirthSelectProps {
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
}

export const BirthSelect = ({ onChange, value, disabled = false }: BirthSelectProps) => {
  const [selectedTap, setSelectedTap] = useState<"year" | "month" | "day" | "">("");
  const currentYear = new Date().getFullYear();
  
  // value에서 날짜 파싱
  const parseDate = (dateStr?: string) => {
    if (!dateStr) return { year: "년도", month: "월", day: "일" };
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return { year: parts[0], month: parts[1], day: parts[2] };
    }
    return { year: "년도", month: "월", day: "일" };
  };
  
  const parsedDate = parseDate(value);
  const [selectedYear, setSelectedYear] = useState<string>(parsedDate.year);
  const [selectedMonth, setSelectedMonth] = useState<string>(parsedDate.month);
  const [selectedDay, setSelectedDay] = useState<string>(parsedDate.day);

  // value가 변경되면 state 업데이트
  useEffect(() => {
    const parsed = parseDate(value);
    setSelectedYear(parsed.year);
    setSelectedMonth(parsed.month);
    setSelectedDay(parsed.day);
  }, [value]);

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
        <S.BirthSelectContent onClick={() => !disabled && handleTapSelect("year")} $selected={selectedTap === "year"} style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.5 : 1 }}>
          <S.BirthText>{selectedYear}</S.BirthText>
          {selectedTap === "year" ? <S.SelectItems>
            {Array.from({ length: currentYear - 1939 }, (_, index) => (
              <S.SelectItem key={index} onClick={() => handleBirthSelect("year", (currentYear - index).toString())}>
                {currentYear - index}
              </S.SelectItem>
            ))}
          </S.SelectItems> : <></>}
        </S.BirthSelectContent>
        <S.BirthSelectContent onClick={() => !disabled && handleTapSelect("month")} $selected={selectedTap === "month"} style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.5 : 1 }}>
          <S.BirthText>{selectedMonth}</S.BirthText>
          {selectedTap === "month" ? <S.SelectItems>
            {Array.from({ length: 12 }, (_, index) => (
              <S.SelectItem key={index} onClick={() => handleBirthSelect("month", (index + 1).toString().padStart(2, '0'))}>
                {(index + 1).toString().padStart(2, '0')}
              </S.SelectItem>
            ))}
          </S.SelectItems> : <></>}
        </S.BirthSelectContent>
        <S.BirthSelectContent onClick={() => !disabled && handleTapSelect("day")} $selected={selectedTap === "day"} style={{ pointerEvents: disabled ? "none" : "auto", opacity: disabled ? 0.5 : 1 }}>
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