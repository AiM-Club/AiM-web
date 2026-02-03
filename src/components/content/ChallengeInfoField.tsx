import { useNavigate } from "react-router-dom";
import FieldBtn from "../button/FieldBtn";
import * as S from "./ChallengeInfoField.style";
import LinkIcon from "@/assets/Link.svg";
import { usePostDetailStore } from "@/stores/PostDetailStore";
import { formatDateKR } from "@/utils/useTime";
import { PageEndPoints } from "@/constants/endpoints";

const ChallengeInfoField = () => {
  const { postInfo } = usePostDetailStore();
  const navigate = useNavigate();

  const navigateToChallengeVS = () => {
    if (postInfo?.mode === "VS") {
      navigate(PageEndPoints.CHALLENGE_VS_DETAIL.replace(":id", String(postInfo?.challengeId || "0")));
    } else {
      navigate(PageEndPoints.CHALLENGE_SOLO_DETAIL.replace(":id", String(postInfo?.challengeId || "0")));
    }
  }
  return (
    <S.ChallengeInfoFieldWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>분야</S.ContentTitle>
        <S.DataWrapper>
          {postInfo?.fields.map((data, index) => (
            <FieldBtn key={index} text={data.name} />
          ))}
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>태그</S.ContentTitle>
        <S.DataWrapper>
          {postInfo?.tags.map((data, index) => (
            <S.Data key={index}>#{data.name}</S.Data>
          ))}
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>직무</S.ContentTitle>
        <S.DataWrapper>
          <S.Data>{postInfo?.job}</S.Data>
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>시작일</S.ContentTitle>
        <S.DataWrapper>
          <S.Data>{formatDateKR(postInfo?.startDate || "")}</S.Data>
        </S.DataWrapper>
      </S.EachContentWrapper>
      <S.EachContentWrapper>
        <S.ContentTitle>기간</S.ContentTitle>
        <S.DataWrapper>
          <S.Data>{postInfo?.totalWeeks}주</S.Data>
        </S.DataWrapper>
      </S.EachContentWrapper>
      {postInfo?.mode && <S.EachContentWrapper>
        <S.ContentTitle>모드</S.ContentTitle>
        <S.DataWrapper>
          <S.Data>{postInfo?.mode}</S.Data>
        </S.DataWrapper>
      </S.EachContentWrapper>}
      <S.EachContentWrapper>
        <S.DataWrapper>
          <img src={LinkIcon} />
          <S.LinkData onClick={navigateToChallengeVS}>{postInfo?.challengeName}(링크)</S.LinkData>
        </S.DataWrapper>
      </S.EachContentWrapper>
    </S.ChallengeInfoFieldWrapper>
  )
}

export default ChallengeInfoField;