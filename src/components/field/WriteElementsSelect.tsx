import Select from "@/components/Select/Select";
import * as S from "./WriteElementsSelect.style";
import { useState, useRef, useEffect, forwardRef, useImperativeHandle, useMemo } from "react";
import Check from "@/assets/Check.svg";
import { z } from "zod";
import useMedia from "@/hooks/useMedia";
import { useGetMyChallengeList } from "@/api/challenge";
import type { ChallengeMyListResponse } from "@/types/challenge";

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
  ({ mode = false, challenge = true, inputtable = true }, ref) => {
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
      { value: "BUSINESS", label: "경영" },
      { value: "ECONOMICS", label: "경제" },
      { value: "POLITICS", label: "정치" },
      { value: "LANGUAGE", label: "어문" },
      { value: "SCIENCE", label: "자연" },
      { value: "DESIGN", label: "디자인" },
      { value: "SPORTS", label: "체육" },
      { value: "MUSIC", label: "음악" },
    ];

    //챌린지 선택 시 챌린지 정보 로드 (서버에서 받아오기)
    const [challengeInfo, setChallengeInfo] = useState<ChallengeMyListResponse | null>(null);
    const [selectedChallengeId, setSelectedChallengeId] = useState<string>("");

    // 모드 선택 시 챌린지 리스트 가져오기
    const { data: myChallengeListData } = useGetMyChallengeList({
      mode: currentMode || "",
    }, {
      enabled: !!(mode && currentMode && !inputtable && challenge),
    });

    // 챌린지 옵션 생성
    const challengeOptions: SelectOption[] = useMemo(() => {
      if (!myChallengeListData?.data) return [];
      return myChallengeListData.data.map((challenge) => ({
        value: String(challenge.challengeId),
        label: challenge.name,
      }));
    }, [myChallengeListData]);

    // 챌린지 선택 핸들러
    const handleChallengeChange = (value: string) => {
      setSelectedChallengeId(value);
      if (!myChallengeListData?.data) return;

      const selectedChallenge = myChallengeListData.data.find(
        (challenge) => String(challenge.challengeId) === value
      );

      if (selectedChallenge) {
        setChallengeInfo(selectedChallenge);

        // 챌린지 정보로 필드 채우기
        if (selectedChallenge.fields.length > 0) {
          setSelectedField(selectedChallenge.fields[0].name);
        }

        // 태그 채우기
        const tags = selectedChallenge.tags.map((tag) => tag.name);
        setTagValues([...tags, ...Array(3 - tags.length).fill("")].slice(0, 3));

        // 직무 채우기
        setJob(selectedChallenge.job);

        // 시작일 파싱하여 설정
        const startDate = new Date(selectedChallenge.startedAt);
        setSelectedYear(startDate.getFullYear());
        setSelectedMonth(startDate.getMonth() + 1);
        setSelectedDay(startDate.getDate());

        // 기간 설정
        setSelectedWeek(selectedChallenge.durationWeek);
      }
    };

    useImperativeHandle(ref, () => ({
      validate: async () => {
        const startDate = `${selectedYear}-${String(selectedMonth).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
        const filteredTags = tagValues.filter((tag) => tag.trim() !== "");

        const data: Partial<WriteElementsForm> = {
          field: selectedField,
          tags: filteredTags,
          job,
          startDate,
          weeks: selectedWeek,
          // mode가 true인 화면에서만 강제 검증되도록: mode prop이 false면 빈 문자열 허용 처리
          mode: mode ? (currentMode ?? "") : (currentMode ?? ""),
        };

        const result = writeElementsSchema.safeParse(data);
        if (!result.success) {
          const newErrors: Record<string, string> = {};
          result.error.issues.forEach((err) => {
            if (err.path[0]) newErrors[err.path[0] as string] = err.message;
          });
          setErrors(newErrors);
          const firstError = result.error.issues[0]?.message || "유효성 검사 실패";
          return { isValid: false, error: firstError };
        }

        setErrors({});
        return { isValid: true, data: result.data };
      },
      getData: () => {
        const startDate = `${selectedYear}-${String(selectedMonth).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;
        const filteredTags = tagValues.filter((tag) => tag.trim() !== "");
        return {
          field: selectedField,
          tags: filteredTags,
          job,
          startDate,
          weeks: selectedWeek,
          mode: currentMode ?? undefined,
          challengeSelect: selectedChallengeId || undefined,
        };
      },
    }));

    const handleModeClick = (mode: string) => {
      setCurrentMode(mode);
      setErrors((prev) => ({ ...prev, mode: "" }));
      // mode 변경 시 챌린지 선택 초기화
      setSelectedChallengeId("");
      setChallengeInfo(null);
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
            <Select
              placeholder="선택"
              options={challengeOptions}
              width={isMobile ? "calc(100% - 4rem)" : 18}
              value={selectedChallengeId}
              onValueChange={handleChallengeChange}
            />
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
                value={challengeInfo.fields.map((f) => f.name).join(", ") || ""}
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