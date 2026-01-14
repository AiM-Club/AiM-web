import Select from "@/components/Select/Select";
import * as S from "./WriteElementsSelect.style";
import { useState, useRef, useEffect } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface WriteElementsSelectProps {
  mode?: boolean;
  challenge?: boolean;
}

const WriteElementsSelect = ({ mode = false, challenge = true }: WriteElementsSelectProps) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  const years = Array.from({ length: 3 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weeks = Array.from({ length: 10 }, (_, i) => i + 1);

  // 피커 상태 관리
  const [yearOpen, setYearOpen] = useState<boolean>(false);
  const [monthOpen, setMonthOpen] = useState<boolean>(false);
  const [dayOpen, setDayOpen] = useState<boolean>(false);
  const [weekOpen, setWeekOpen] = useState(false);
  const [currentMode, setCurrentMode] = useState<"SOLO" | "VS대결" | null>(null);

  // 선택된 값 관리
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<number>(currentDay);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  // 외부 클릭 감지를 위한 ref
  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);
  const weekRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 피커 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setYearOpen(false);
      }
      if (monthRef.current && !monthRef.current.contains(event.target as Node)) {
        setMonthOpen(false);
      }
      if (dayRef.current && !dayRef.current.contains(event.target as Node)) {
        setDayOpen(false);
      }
      if (weekRef.current && !weekRef.current.contains(event.target as Node)) {
        setWeekOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options: SelectOption[] = [
    { value: "newest", label: "IT" },
    { value: "oldest", label: "경영" },
    { value: "likes", label: "경제" },
    { value: "alphabetical", label: "정치" },
    { value: "alphabetical", label: "어문" },
    { value: "alphabetical", label: "자연" },
    { value: "alphabetical", label: "디자인" },
    { value: "alphabetical", label: "음악" },
    { value: "alphabetical", label: "체육" },
  ];

  return (
    <S.WriteElementsSelectWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>분야</S.ContentTitle>
        <Select placeholder="선택" options={options} width={18} />
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>태그</S.ContentTitle>
        <S.InputWrapper>
          {Array.from({ length: 3 }).map((_, i) => (
            <S.InputField key={i} placeholder="#작성" $width={5.6} />
          ))}
        </S.InputWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>직무</S.ContentTitle>
        <S.InputField placeholder="직무를 작성하세요" />
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>시작일</S.ContentTitle>
        <S.InputWrapper>
          <S.PickerWrapper ref={yearRef}>
            <S.PickerTop onClick={() => setYearOpen(!yearOpen)}>
              {selectedYear}년
            </S.PickerTop>
            {yearOpen && (
              <S.PickerBottom>
                {years.map((year) => (
                  <S.PickerItem
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setYearOpen(false);
                    }}
                    $isSelected={selectedYear === year}
                  >
                    {year}
                  </S.PickerItem>
                ))}
              </S.PickerBottom>
            )}
          </S.PickerWrapper>
          <S.PickerWrapper ref={monthRef}>
            <S.PickerTop onClick={() => setMonthOpen(!monthOpen)}>
              {selectedMonth}월
            </S.PickerTop>
            {monthOpen && (
              <S.PickerBottom>
                {months.map((month) => (
                  <S.PickerItem
                    key={month}
                    onClick={() => {
                      setSelectedMonth(month);
                      setMonthOpen(false);
                    }}
                    $isSelected={selectedMonth === month}
                  >
                    {month}
                  </S.PickerItem>
                ))}
              </S.PickerBottom>
            )}
          </S.PickerWrapper>
          <S.PickerWrapper ref={dayRef}>
            <S.PickerTop onClick={() => setDayOpen(!dayOpen)}>
              {selectedDay}일
            </S.PickerTop>
            {dayOpen && (
              <S.PickerBottom>
                {days.map((day) => (
                  <S.PickerItem
                    key={day}
                    onClick={() => {
                      setSelectedDay(day);
                      setDayOpen(false);
                    }}
                    $isSelected={selectedDay === day}
                  >
                    {day}
                  </S.PickerItem>
                ))}
              </S.PickerBottom>
            )}
          </S.PickerWrapper>
        </S.InputWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>기간</S.ContentTitle>
        <S.InputWrapper>
          <S.PickerWrapper ref={weekRef}>
            <S.PickerTop onClick={() => setWeekOpen(!weekOpen)}>
              {selectedWeek}주
            </S.PickerTop>
            {weekOpen && (
              <S.PickerBottom>
                {weeks.map((week) => (
                  <S.PickerItem
                    key={week}
                    onClick={() => {
                      setSelectedWeek(week);
                      setWeekOpen(false);
                    }}
                    $isSelected={selectedWeek === week}
                  >
                    {week}
                  </S.PickerItem>
                ))}
              </S.PickerBottom>
            )}
          </S.PickerWrapper>
        </S.InputWrapper>
      </S.EachContentWrapper>
      {mode && (
        <S.EachContentWrapper>
          <S.ContentTitle>모드</S.ContentTitle>
          <S.InputWrapper>
            <S.Mode $isSelected={currentMode === "SOLO"} onClick={() => setCurrentMode("SOLO")}>SOLO</S.Mode>
            <S.Mode $isSelected={currentMode === "VS대결"} onClick={() => setCurrentMode("VS대결")}>VS대결</S.Mode>
          </S.InputWrapper>
        </S.EachContentWrapper>
      )}
      {challenge && (
        <S.EachContentWrapper>
          <S.ContentTitle>챌린지</S.ContentTitle>
          <Select placeholder="선택" options={options} width={18} />
        </S.EachContentWrapper>
      )}
    </S.WriteElementsSelectWrapper>
  );
}

export default WriteElementsSelect;