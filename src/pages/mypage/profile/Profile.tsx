import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/mypage/profile/Profile.style";
import { PageTopic } from "@/components/text/PageTopic";
import FieldTagWorkPeriod from "@/components/field/FieldTagWorkPeriod";
import ProfileImage from "@/components/image/ProfileImage";
import { getRankImg } from "@/utils/userRank";
import { ChallengeMainContent } from "@/components/content/CardContent";
import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
    
const Profile = () => {

    const fieldData = ["분야1", "분야2", "분야3"];
    const tagData = ["태그1", "태그2", "태그3"];
    const myProfileImg = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif";
    
    return (
        <DefaultLayout>
            <S.profileWrapper>
            <PageTopic text="프로필" size="l" />
                <S.profileContainer>
                    <S.profileHeader>
                        <S.profileInfoWrapper>
                        <ProfileImage color="pink" image={myProfileImg} width={13.938} />
                        <S.profileInfo>
                            <S.Info>
                                <S.profileName>유저_닉네임</S.profileName>
                                <S.profileNickName>@User-nickname</S.profileNickName>
                            </S.Info>
                            <S.RankInfo>
                                <S.RankImg src={getRankImg("diamond")} />
                                <S.RankName>LV. 100</S.RankName>
                            </S.RankInfo>
                        </S.profileInfo>
                        </S.profileInfoWrapper>
                        <FieldTagWorkPeriod fieldData={fieldData} tagData={tagData} />
                    </S.profileHeader>
                    <S.profileContent>
                        <CardChallenge color="pink" topic="ALL 챌린지" openBtn={false} topicDirection="left" >
                            <ChallengeMainContent color="pink" progress={90} tryCount={10} successCount={9} failCount={1} />
                        </CardChallenge>
                        <S.ChallengeWrapper>
                        <CardChallenge color="green" topic="SOLO 챌린지" openBtn={false}>
                            <ChallengeMainContent color="green" progress={40} tryCount={10} successCount={9} failCount={1} />
                        </CardChallenge>
                        <CardChallenge color="pink" topic="VS 대결 챌린지" openBtn={false}>
                            <ChallengeMainContent color="pink" progress={90} tryCount={10} successCount={9} failCount={1} />
                        </CardChallenge>
                        </S.ChallengeWrapper>
                    </S.profileContent>
                </S.profileContainer>
            </S.profileWrapper>
        </DefaultLayout>
    )
}

export default Profile;