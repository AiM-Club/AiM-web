import FieldBtn from "../button/FieldBtn";
import * as S from "./FieldTagWorkPeriod.style";

interface FieldTagWorkPeriodProps {
  fieldData: string[];
  tagData: string[];
  wordData: string;
  startData: string;
  endData: string;
  week: number;
}

const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('.');
  return `${year}년 ${parseInt(month)}월 ${parseInt(day)}일`;
};

const FieldTagWorkPeriod = ({ fieldData, tagData, wordData, startData, endData, week }: FieldTagWorkPeriodProps) => {
  return (
    <S.FieldWrapper>
      <S.TopWrapper>
        <S.EachWrapper>
          <S.Topic>분야</S.Topic>
          <S.Content>
            {fieldData.map((data, i) => (
              <div key={i}><FieldBtn text={data} /></div>
            ))}
          </S.Content>
        </S.EachWrapper>
        <S.EachWrapper>
          <S.Topic>태그</S.Topic>
          <S.Content>
            {tagData.map((data, i) => (
              <div key={i}>#{data}</div>
            ))}
          </S.Content>
        </S.EachWrapper>
        <S.EachWrapper>
          <S.Topic>직무</S.Topic>
          <S.Content>{wordData}</S.Content>
        </S.EachWrapper>
      </S.TopWrapper>
      <S.EachWrapper>
        <S.Topic>기간</S.Topic>
        <S.Content>
          {formatDate(startData)} ~ {formatDate(endData)} ({week}주)
        </S.Content>
      </S.EachWrapper>
    </S.FieldWrapper>
  )
}

export default FieldTagWorkPeriod;