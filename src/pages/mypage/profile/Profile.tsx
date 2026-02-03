import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/mypage/profile/Profile.style";
import { PageTopic } from "@/components/text/PageTopic";
// import FieldTagWorkPeriod from "@/components/field/FieldTagWorkPeriod";
import ProfileImage from "@/components/image/ProfileImage";
import { getRankImg } from "@/utils/userRank";
import { ChallengeMainContent } from "@/components/content/CardContent";
import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import useMedia from "@/hooks/useMedia";
import Button from "@/components/button/Button";
import { useAuthStore } from "@/stores/authStore";
import Lock from "@/assets/Lock.svg";
import { userGetMyProfile } from "@/api/user";
import Loading from "@/components/loading/Loading";
import { useGetPhoto } from "@/api/photo";
import { useEffect } from "react";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import NoPhoto from "@/assets/NoPhoto.svg";
const Profile = () => {
  const { user } = useAuthStore();
  const isMobile = useMedia(700);
  const { data: myProfileData, isLoading } = userGetMyProfile();
  const { data: photo, mutate: getPhoto } = useGetPhoto();
  const profileImageUrl = useUserPhotoUrl(photo ?? null);

  useEffect(() => {
    if (myProfileData?.data?.profileImage?.uuid) {
      getPhoto({ file_uuid: myProfileData?.data?.profileImage?.uuid });
    }
  }, [myProfileData?.data?.profileImage?.uuid, getPhoto]);

  if (isLoading) return <Loading />;

  return (
    <DefaultLayout>
      {user ? (
        <S.profileWrapper>
          <PageTopic text="프로필" size="l" />
          <S.profileContainer>
            <S.profileHeader>
              <S.profileInfoWrapper>
                <ProfileImage color="pink" image={profileImageUrl || NoPhoto} width={isMobile ? 6 : 13.938} />
                <S.profileInfo>
                  <S.Info>
                    <S.profileName>{myProfileData?.data?.nickname}</S.profileName>
                    <S.profileNickName>@{myProfileData?.data?.loginId}</S.profileNickName>
                  </S.Info>
                  <S.RankInfo>
                    <S.RankImg src={getRankImg(myProfileData?.data?.tier?.name || "")} />
                    <S.RankName>LV. {myProfileData?.data?.level}</S.RankName>
                  </S.RankInfo>
                </S.profileInfo>
              </S.profileInfoWrapper>
              {/* <FieldTagWorkPeriod /> */}
            </S.profileHeader>
            <S.profileContent>
              <CardChallenge isMobile={isMobile} color="pink" topic="ALL 챌린지" openBtn={false} topicDirection="left" >
                <ChallengeMainContent color="pink" progress={myProfileData?.data?.allChallengeRecord?.successRate || 0} tryCount={myProfileData?.data?.allChallengeRecord?.attemptCount || 0} successCount={myProfileData?.data?.allChallengeRecord?.successCount || 0} failCount={myProfileData?.data?.allChallengeRecord?.failCount || 0} />
              </CardChallenge>
              <S.ChallengeWrapper>
                <CardChallenge isMobile={isMobile} color="green" topic="SOLO 챌린지" openBtn={false}>
                  <ChallengeMainContent color="green" progress={myProfileData?.data?.soloChallengeRecord?.successRate || 0} tryCount={myProfileData?.data?.soloChallengeRecord?.attemptCount || 0} successCount={myProfileData?.data?.soloChallengeRecord?.successCount || 0} failCount={myProfileData?.data?.soloChallengeRecord?.failCount || 0} />
                </CardChallenge>
                <CardChallenge isMobile={isMobile} color="pink" topic="VS 대결 챌린지" openBtn={false}>
                  <ChallengeMainContent color="pink" progress={myProfileData?.data?.vsChallengeRecord?.successRate || 0} tryCount={myProfileData?.data?.vsChallengeRecord?.attemptCount || 0} successCount={myProfileData?.data?.vsChallengeRecord?.successCount || 0} failCount={myProfileData?.data?.vsChallengeRecord?.failCount || 0} />
                </CardChallenge>
              </S.ChallengeWrapper>
            </S.profileContent>
          </S.profileContainer>
          <Button $variant="fixed" $color="green">편집</Button>
        </S.profileWrapper>
      ) : (
        <S.EmptyState>
          <S.LockImage src={Lock} />
          로그인 후 이용 가능합니다
        </S.EmptyState>
      )}
    </DefaultLayout>
  )
}

export default Profile;