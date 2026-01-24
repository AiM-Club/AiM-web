import Select from "@/components/Select/Select";
import * as S from "./WriteElementsSelect.style";
import { useState, useRef, useEffect, forwardRef } from "react";
import Check from "@/assets/Check.svg";
import { z } from "zod";
import useMedia from "@/hooks/useMedia";

interface SelectOption {
  value: string;
  label: string;
}

const writeElementsSchema = z.object({
  field: z.string().min(1, "분야를 선택해 주세요"),
  tags: z
    .array(z.string().min(1, "태그를 입력해 주세요"))
    .min(1, "태그를 1개 이상 입력해 주세요"),
  job: z.string().min(1, "직무를 입력해 주세요"),
  startDate: z.string().min(1, "시작일을 선택해 주세요"),
  weeks: z.number().min(1, "기간을 선택해 주세요"),
  mode: z.string().min(1, "모드를 선택해 주세요"),
  challengeSelect: z.string().optional(),
});

type WriteElementsForm = z.infer<typeof writeElementsSchema>;

export interface WriteElementsSelectRef {
  validate: () => Promise<{ isValid: boolean; data?: WriteElementsForm; error?: string }>;
  getData: () => Partial<WriteElementsForm>;
}

interface WriteElementsSelectProps {
  mode?: boolean;
  challenge?: boolean;
  inputtable?: boolean;
}

const WriteElementsSelect = forwardRef<WriteElementsSelectRef, WriteElementsSelectProps>(
  ({ mode = false, challenge = true, inputtable = true }) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    const years = Array.from({ length: 3 }, (_, i) => currentYear + i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const weeks = Array.from({ length: 10 }, (_, i) => i + 1);

    const isMobile = useMedia(500);

    // 피커 상태 관리
    const [yearOpen, setYearOpen] = useState<boolean>(false);
    const [monthOpen, setMonthOpen] = useState<boolean>(false);
    const [dayOpen, setDayOpen] = useState<boolean>(false);
    const [weekOpen, setWeekOpen] = useState(false);
    const [currentMode, setCurrentMode] = useState<string | null>(null);

    // 선택된 값 관리
    const [selectedYear, setSelectedYear] = useState<number>(currentYear);
    const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);
    const [selectedDay, setSelectedDay] = useState<number>(currentDay);
    const [selectedWeek, setSelectedWeek] = useState<number>(1);
    const [selectedField, setSelectedField] = useState<string>("");
    const [tagValues, setTagValues] = useState<string[]>(["", "", ""]);
    const [job, setJob] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});

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
      { value: "IT", label: "IT" },
      { value: "경영", label: "경영" },
      { value: "경제", label: "경제" },
      { value: "정치", label: "정치" },
      { value: "어문", label: "어문" },
      { value: "자연", label: "자연" },
      { value: "디자인", label: "디자인" },
      { value: "음악", label: "음악" },
      { value: "체육", label: "체육" },
    ];

    //모드 선택 시 챌린지 로드 (서버에서 받아오기)
    const challengeOptions: SelectOption[] = [];

    //챌린지 선택 시 챌린지 정보 로드 (서버에서 받아오기), [] to null로 고치기
    const [challengeInfo, setChallengeInfo] = useState<string[] | null>([]);

    const handleModeClick = (mode: string) => {
      setCurrentMode(mode);
      setErrors((prev) => ({ ...prev, mode: "" }));
    }

    const handleFieldChange = (value: string) => {
      setSelectedField(value);
      setErrors((prev) => ({ ...prev, field: "" }));
    }

    const handleTagChange = (index: number, value: string) => {
      const next = [...tagValues];
      next[index] = value;
      setTagValues(next);
      setErrors((prev) => ({ ...prev, tags: "" }));
    }

    const handleJobChange = (value: string) => {
      setJob(value);
      setErrors((prev) => ({ ...prev, job: "" }));
    }

    const handleDateChange = (y: number, m: number, d: number) => {
      setSelectedYear(y);
      setSelectedMonth(m);
      setSelectedDay(d);
      setErrors((prev) => ({ ...prev, startDate: "" }));
    }

    const handleWeeksChange = (value: number) => {
      setSelectedWeek(value);
      setErrors((prev) => ({ ...prev, weeks: "" }));
    }

    return (
      <S.WriteElementsSelectWrapper>
        {inputtable && (
          <>
            <S.EachContentWrapper>
              <S.ContentTitle>분야</S.ContentTitle>
              <Select
                placeholder="선택"
                options={options}
                width={isMobile ? "calc(100% - 4rem)" : 18}
                value={selectedField}
                onValueChange={handleFieldChange}
              />
              {errors.field && (
                <p style={{ color: "var(--error-primary)", marginTop: "0.5rem", fontSize: "0.875rem" }}>
                  {errors.field}
                </p>
              )}
            </S.EachContentWrapper>
            <S.EachContentWrapper>
              <S.ContentTitle>태그</S.ContentTitle>
              <S.InputWrapper>
                {Array.from({ length: 3 }).map((_, i) => (
                  <S.InputField
                    key={i}
                    placeholder="#작성"
                    $width={isMobile ? "32%" : 5.6}
                    value={tagValues[i] || ""}
                    onChange={(e) => handleTagChange(i, e.target.value)}
                  />
                ))}
              </S.InputWrapper>
              {errors.tags && (
                <p style={{ color: "var(--error-primary)", marginTop: "0.5rem", fontSize: "0.875rem" }}>
                  {errors.tags}
                </p>
              )}
            </S.EachContentWrapper>
            <S.EachContentWrapper>
              <S.ContentTitle>직무</S.ContentTitle>
              <S.InputField
                placeholder="직무를 작성하세요"
                value={job}
                onChange={(e) => handleJobChange(e.target.value)}
              />
              {errors.job && (
                <p style={{ color: "var(--error-primary)", marginTop: "0.5rem", fontSize: "0.875rem" }}>
                  {errors.job}
                </p>
              )}
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
                            handleDateChange(year, selectedMonth, selectedDay);
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
                            handleDateChange(selectedYear, month, selectedDay);
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
                            handleDateChange(selectedYear, selectedMonth, day);
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
                            handleWeeksChange(week);
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
          </>)}
        {mode && (
          <S.EachContentWrapper>
            <S.ContentTitle>모드</S.ContentTitle>
            <S.InputWrapper>
              <S.Mode $isSelected={currentMode === "SOLO"} onClick={() => handleModeClick("SOLO")}>
                {currentMode === "SOLO" ? <img src={Check} /> : ""}
                SOLO
              </S.Mode>
              <S.Mode $isSelected={currentMode === "VS"} onClick={() => handleModeClick("VS")}>
                {currentMode === "VS" ? <img src={Check} /> : ""}
                VS대결
              </S.Mode>
            </S.InputWrapper>
          </S.EachContentWrapper>
        )}
        {challenge && (
          <S.EachContentWrapper>
            <S.ContentTitle>챌린지</S.ContentTitle>
            <Select placeholder="선택" options={challengeOptions} width={isMobile ? "calc(100% - 4rem)" : 18} />
          </S.EachContentWrapper>
        )}
        {!inputtable && challengeInfo && (
          <S.DisabledWrapper>
            <S.EachContentWrapper>
              <S.ContentTitle>직무</S.ContentTitle>
              <S.InputField
                value={job}
                disabled={true}
                $nonInputtable={true}
              />
            </S.EachContentWrapper>
            <S.EachContentWrapper>
              <S.ContentTitle>분야</S.ContentTitle>
              <S.InputField
                value={"ㅇㅇㅇ"}
                disabled={true}
                $nonInputtable={true}
              />
            </S.EachContentWrapper>
            <S.EachContentWrapper>
              <S.ContentTitle>태그</S.ContentTitle>
              <S.InputWrapper>
                {Array.from({ length: 3 }).map((_, i) => (
                  <S.InputField
                    key={i}
                    $width={isMobile ? "32%" : 5.6}
                    value={tagValues[i] || ""}
                    disabled={true}
                    $nonInputtable={true}
                  />
                ))}
              </S.InputWrapper>
            </S.EachContentWrapper>
            <S.EachContentWrapper>
              <S.ContentTitle>시작일</S.ContentTitle>
              <S.InputWrapper>
                <S.PickerWrapper>
                  <S.PickerTop $nonInputtable={true}>
                    {selectedYear}년
                  </S.PickerTop>
                </S.PickerWrapper>
                <S.PickerWrapper>
                  <S.PickerTop $nonInputtable={true}>
                    {selectedMonth}월
                  </S.PickerTop>
                </S.PickerWrapper>
                <S.PickerWrapper>
                  <S.PickerTop $nonInputtable={true}>
                    {selectedDay}일
                  </S.PickerTop>
                </S.PickerWrapper>
              </S.InputWrapper>
            </S.EachContentWrapper>
            <S.EachContentWrapper>
              <S.ContentTitle>기간</S.ContentTitle>
              <S.InputWrapper>
                <S.PickerWrapper>
                  <S.PickerTop $nonInputtable={true}>
                    {selectedWeek}주
                  </S.PickerTop>
                </S.PickerWrapper>
              </S.InputWrapper>
            </S.EachContentWrapper>
          </S.DisabledWrapper>)}
      </S.WriteElementsSelectWrapper>
    );
  });

WriteElementsSelect.displayName = "WriteElementsSelect";

export default WriteElementsSelect;