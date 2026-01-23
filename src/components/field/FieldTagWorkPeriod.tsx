import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import FieldBtn from "../button/FieldBtn";
import * as S from "./FieldTagWorkPeriod.style";

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
};

const FieldTagWorkPeriod = () => {
  const { challengeInfo } = useChallengeDetailStore();
  
  return (
    <S.FieldWrapper>
      <S.TopWrapper>
        <S.EachWrapper>
          <S.Topic>분야</S.Topic>
          <S.Content>
            {challengeInfo?.fields.map((data, i) => (
              <div key={i}><FieldBtn text={data.name} /></div>
            ))}
          </S.Content>
        </S.EachWrapper>
        <S.EachWrapper>
          <S.Topic>태그</S.Topic>
          <S.Content>
            {challengeInfo?.tags.map((data, i) => (
              <div key={i}>#{data.name}</div>
            ))}
          </S.Content>
        </S.EachWrapper>
        {challengeInfo?.job && (
        <S.EachWrapper>
          <S.Topic>직무</S.Topic>
          <S.Content>{challengeInfo?.job}</S.Content>
        </S.EachWrapper>
        )}
      </S.TopWrapper>
      {challengeInfo?.startDate && challengeInfo?.endDate && challengeInfo?.totalWeeks && (
      <S.EachWrapper>
        <S.Topic>기간</S.Topic>
        <S.Content>
            {formatDate(challengeInfo?.startDate || "")} ~ {formatDate(challengeInfo?.endDate || "")} ({challengeInfo?.totalWeeks}주)
          </S.Content>
        </S.EachWrapper>
      )}
    </S.FieldWrapper>
  )
}

export default FieldTagWorkPeriod;