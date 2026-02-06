import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import FieldBtn from "../button/FieldBtn";
import * as S from "./FieldTagWorkPeriod.style";
import { formatDateKR } from "@/utils/useTime";
import { useFieldName } from "@/utils/useField";


const FieldTagWorkPeriod = () => {
  const { challengeInfo } = useChallengeDetailStore();

  return (
    <S.FieldWrapper>
      <S.TopWrapper>
        <S.EachWrapper>
          <S.Topic>분야</S.Topic>
          <S.Content>
            {challengeInfo?.fields.map((data, i) => (
              <div key={i}><FieldBtn text={useFieldName(data.name) || data.name} /></div>
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
            {formatDateKR(challengeInfo?.startDate || "")} ~ {formatDateKR(challengeInfo?.endDate || "")} ({challengeInfo?.totalWeeks}주)
          </S.Content>
        </S.EachWrapper>
      )}
    </S.FieldWrapper>
  )
}

export default FieldTagWorkPeriod;