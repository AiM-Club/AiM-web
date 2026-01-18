import * as S from "@/components/content/RankInfoContent.style";
import ProfileImage from "../image/ProfileImage";
import { getRankImg } from "@/utils/userRank";

export interface RankInfoContentProps {
  type?: "header" | "list";
  content: any;
}

const RankInfoContent = ({ type="list", content }: RankInfoContentProps) => {

  return (
    <S.RankInfoContentWrapper $type={type}>    
      <S.LeftWrapper>
        <S.RankWrapper $type={type}>
          {content.id}
        </S.RankWrapper>
        {type==="list" ? (
          <ProfileImage width={4.5} image="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif" />
          ):(
          <S.ProfileWrapper>프로필</S.ProfileWrapper>
          )}
          {type==="list" ? (
            <S.LevelWrapper>
              <S.LevelImage src={getRankImg(content.rank)} />
              <span>Lv.10</span>
            </S.LevelWrapper>
          ):(
            <S.LevelWrapper>레벨</S.LevelWrapper>
          )}
          <S.NicknameWrapper>
            <S.NicknameText>{content.userName}</S.NicknameText>
          </S.NicknameWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
          <S.TryNumWrapper>
            {content.tryNum}{type==="list" ? "회" : ""}
          </S.TryNumWrapper>
          <S.SuccessNumWrapper>
            {content.successNum}{type==="list" ? "회" : ""}
          </S.SuccessNumWrapper>
          <S.SuccessPercentWrapper>
            {content.successPercent}{type==="list" ? "%" : ""}
          </S.SuccessPercentWrapper>
      </S.RightWrapper>
    </S.RankInfoContentWrapper>
  )
}

export default RankInfoContent;