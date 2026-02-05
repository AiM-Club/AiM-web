import * as S from "@/components/content/RankInfoContent.style";
import ProfileImage from "../image/ProfileImage";
import { getRankImg } from "@/utils/userRank";
import useMedia from "@/hooks/useMedia";
import { getDomain } from "@/api/utils";
import { buildPath } from "@/utils/buildPath";
import { ApiEndpoints } from "@/constants/endpoints";
import NoPhoto from "@/assets/NoPhoto.svg";

export interface RankInfoContentProps {
  type?: "header" | "list";
  content: any;
}

const RankInfoContent = ({ type = "list", content }: RankInfoContentProps) => {
  const isMobile = useMedia(560);

  // 프로필 이미지 URL 생성
  const profileImageUrl = type === "list" && content.userInfo?.profileImage?.uuid
    ? getDomain(buildPath(ApiEndpoints.PHOTO, { file_uuid: content.userInfo.profileImage.uuid }))
    : null;

  return (
    <S.RankInfoContentWrapper $type={type}>
      <S.LeftWrapper $type={type}>
        <S.RankWrapper $type={type}>
          {type === "header" ? content.rank || "순위" : content.rank}
        </S.RankWrapper>
        {type === "list" ? (
          <ProfileImage width={isMobile ? 3 : 4.5} image={profileImageUrl || NoPhoto} />
        ) : (
          <S.ProfileWrapper>{content.userInfo?.profileImage?.url || "프로필"}</S.ProfileWrapper>
        )}
        {type === "list" ? (
          <S.LevelWrapper>
            <S.LevelImage src={getRankImg(content.userInfo?.tier?.name || "")} />
            <span>Lv.{content.userInfo?.level || content.level || 0}</span>
          </S.LevelWrapper>
        ) : (
          <S.LevelWrapper>{!isMobile && (content.userInfo?.level || content.level || "레벨")}</S.LevelWrapper>
        )}
        <S.NicknameWrapper>
          <S.NicknameText>
            {type === "header"
              ? (content.userInfo?.nickname || content.nickname || "닉네임")
              : (content.userInfo?.nickname || "")
            }
          </S.NicknameText>
        </S.NicknameWrapper>
      </S.LeftWrapper>
      <S.RightWrapper $type={type}>
        <S.TryNumWrapper>
          {type === "list"
            ? `${content.allRecord?.attemptCount || 0}회`
            : (content.allRecord?.attemptCount || content.attemptCount || "시도 횟수")
          }
        </S.TryNumWrapper>
        <S.SuccessNumWrapper>
          {type === "list"
            ? `${content.allRecord?.successCount || 0}회`
            : (content.allRecord?.successCount || content.successCount || "성공 횟수")
          }
        </S.SuccessNumWrapper>
        <S.SuccessPercentWrapper>
          {type === "list"
            ? `${content.allRecord?.successRate || 0}%`
            : (content.allRecord?.successRate || content.successRate || "성공률")
          }
        </S.SuccessPercentWrapper>
      </S.RightWrapper>
    </S.RankInfoContentWrapper>
  )
}

export default RankInfoContent;