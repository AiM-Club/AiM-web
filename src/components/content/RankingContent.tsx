import TryIcon from "@/assets/Try.png";
import * as S from "./RankingContent.style";
import { ProgressBar } from "../bar/ProgressBar";
import ProfileImage from "../image/ProfileImage";
import { getRankImg } from "@/utils/userRank";

interface RankingContentProps {
    progress: number;
    tryCount: number;
    successCount: number;
    failCount: number;
    contentType: "main" | "sub";
  }

const RankingContent = ({ progress, tryCount, successCount, failCount, contentType }: RankingContentProps) => {
    const myProfileImg = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif";

    return (
      <S.RankingContentWrapper $contentType={contentType}>
        <S.UserInfoWrapper $contentType={contentType}>
            <ProfileImage image={myProfileImg} width={9.25} />
            <S.RankInfo>
                <S.RankImg src={getRankImg("diamond")} />
                <S.RankName>LV. 100</S.RankName>
            </S.RankInfo>
        </S.UserInfoWrapper>
        <S.AllChallengeInfoWrapper>
            <S.ChallengeTitle>ALL 챌린지</S.ChallengeTitle>
            <ProgressBar text="성공률" progress={progress} height={28} color={"pink"} />
            <S.TryWrapper>
                <S.TryContent>
                    <S.TryTitle>시도 횟수</S.TryTitle>
                    <S.TryIconWrapper>
                    <S.TryIcon src={TryIcon} />
                    <S.TryTextWrapper>
                        <S.TryNum>{tryCount}</S.TryNum>
                        <S.TryText>회</S.TryText>
                    </S.TryTextWrapper>
                    </S.TryIconWrapper>
                </S.TryContent>
                <S.TryContent>
                    <S.TryTitle>성공 횟수</S.TryTitle>
                    <S.TryIconWrapper>
                    <S.TryIcon src={TryIcon} />
                    <S.TryTextWrapper>
                        <S.TryNum>{successCount}</S.TryNum>
                        <S.TryText>회</S.TryText>
                    </S.TryTextWrapper>
                    </S.TryIconWrapper>
                </S.TryContent>
                <S.TryContent>
                    <S.TryTitle>실패 횟수</S.TryTitle>
                    <S.TryIconWrapper>
                    <S.TryIcon src={TryIcon} />
                    <S.TryTextWrapper>
                        <S.TryNum>{failCount}</S.TryNum>
                        <S.TryText>회</S.TryText>
                    </S.TryTextWrapper>
                    </S.TryIconWrapper>
                </S.TryContent>
            </S.TryWrapper>
        </S.AllChallengeInfoWrapper>
        {contentType === "main" && (
        <S.ChallengeInfoWrapper>
            <S.ChallengeContent>
                <S.ChallengeTitle>SOLO 챌린지</S.ChallengeTitle>
                <S.TryContentWrapper>
                    <ProgressBar text="성공률" barText="sub" progress={progress} height={14} color={"pink"} />
                    <S.TrySubContentWrapper>
                        <S.TrySubContent>
                            <S.TrySubTitle>시도 횟수</S.TrySubTitle>
                            <S.TrySubNum>N회</S.TrySubNum>
                        </S.TrySubContent>
                        <S.TrySubContent>
                            <S.TrySubTitle>성공 횟수</S.TrySubTitle>
                            <S.TrySubNum>N회</S.TrySubNum>
                        </S.TrySubContent>
                        <S.TrySubContent>
                            <S.TrySubTitle>실패 횟수</S.TrySubTitle>
                            <S.TrySubNum>N회</S.TrySubNum>
                        </S.TrySubContent>
                    </S.TrySubContentWrapper>
                </S.TryContentWrapper>
            </S.ChallengeContent>
            <S.ChallengeContent>
                <S.ChallengeTitle>VS 챌린지</S.ChallengeTitle>
                <S.TryContentWrapper>
                    <ProgressBar text="성공률" barText="sub" progress={progress} height={14} color={"pink"} />
                    <S.TrySubContentWrapper>
                        <S.TrySubContent>
                            <S.TrySubTitle>시도 횟수</S.TrySubTitle>
                            <S.TrySubNum>N회</S.TrySubNum>
                        </S.TrySubContent>
                        <S.TrySubContent>
                            <S.TrySubTitle>성공 횟수</S.TrySubTitle>
                            <S.TrySubNum>N회</S.TrySubNum>
                        </S.TrySubContent>
                        <S.TrySubContent>
                            <S.TrySubTitle>실패 횟수</S.TrySubTitle>
                            <S.TrySubNum>N회</S.TrySubNum>
                        </S.TrySubContent>
                    </S.TrySubContentWrapper>
                </S.TryContentWrapper>  
            </S.ChallengeContent>
        </S.ChallengeInfoWrapper>
        )}
      </S.RankingContentWrapper>
    )
  }

  export default RankingContent;