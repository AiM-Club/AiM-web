import { useNavigate, useParams } from "react-router-dom";
import FieldBtn from "../button/FieldBtn";
import * as S from "./ChallengeInfoField.style";
import LinkIcon from "@/assets/Link.svg";
import { PageEndPoints } from "@/constants/endpoints";

const ChallengeInfoField = () => {
  const navigate = useNavigate();
  const categories = ["분야", "분야1", "분야2"];
  const { id } = useParams<{ id: string }>();

  return (
    <S.ChallengeInfoFieldWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>제목</S.ContentTitle>
        <S.DataWrapper>
          {categories.map((data, index) => (
            <FieldBtn key={index} text={data} />
          ))}
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>태그</S.ContentTitle>
        <S.DataWrapper>
          {categories.map((data, index) => (
            <S.Data key={index}>#{data}</S.Data>
          ))}
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>직무</S.ContentTitle>
        <S.DataWrapper>
          <S.Data>작성된 직무</S.Data>
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>시작일</S.ContentTitle>
        <S.DataWrapper>
          <S.Data>2025년 11월 9일</S.Data>
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>기간</S.ContentTitle>
        <S.DataWrapper>
          <S.Data>n주</S.Data>
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.DataWrapper>
          <img src={LinkIcon} />
          <S.LinkData onClick={() => { navigate(`/challenge/vs/detail/${id}`) }}>챌린지명(링크)</S.LinkData>
        </S.DataWrapper>
      </S.EachContentWrapper>
    </S.ChallengeInfoFieldWrapper>
  )
}

export default ChallengeInfoField;