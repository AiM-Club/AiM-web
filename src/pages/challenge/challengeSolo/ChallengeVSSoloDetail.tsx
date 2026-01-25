import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import { ChallengeVSMatchContent } from "@/components/content/CardContent";
import FieldTagWorkPeriod from "@/components/field/FieldTagWorkPeriod";
import Banner from "@/components/slider/Banner";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeSolo/ChallengeVSSoloDetail.style";
import { useParams } from "react-router-dom";
import { useGetChallengeSoloDetail } from "@/api/challengeDetail";
import { useGetPhoto } from "@/api/photo";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useEffect } from "react";
import Loading from "@/components/loading/Loading";

const ChallengeVSSoloDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: challengeDetail, isLoading } = useGetChallengeSoloDetail(id || "");
  const { mutate: getPhoto } = useGetPhoto();
  const { setChallengeId, setChallengeInfo, setMyInfo, setThumbnail, setMyPhoto } = useChallengeDetailStore();

  useEffect(() => {
    if (challengeDetail) {
      console.log(challengeDetail);
      setChallengeId(Number(id));
      setChallengeInfo(challengeDetail.data.challengeInfo);
      setMyInfo(challengeDetail.data.participant);
      if (challengeDetail?.data.challengeInfo.thumbnail) {
        getPhoto(
          { file_uuid: challengeDetail.data.challengeInfo.thumbnail.uuid },
          {
            onSuccess: (photo) => {
              setThumbnail(photo);
            },
          }
        );
      }
      if (challengeDetail?.data.participant.profileImage.uuid) {
        getPhoto(
          { file_uuid: challengeDetail.data.participant.profileImage.uuid },
          {
            onSuccess: (photo) => {
              setMyPhoto(photo);
            },
          }
        );
      }
    }
  }, [challengeDetail, id, setChallengeId, setChallengeInfo, setMyInfo]);

  if (isLoading) return <Loading />;

  return (
    <DefaultLayout variant="home">
      <S.ChallengeVSSoloDetailWrapper>
        <Banner />
        <S.ChallengeVSSoloDetailContentWrapper>
          <FieldTagWorkPeriod />
          <CardChallenge topicDirection="left" cardNum={3} color="pink" topic="ME : 사용자 닉네임" openBtn={false} viewCard="right">
            <ChallengeVSMatchContent commentView={false} color="pink" kind="my" viewCard="right" value="SOLO" />
          </CardChallenge>
        </S.ChallengeVSSoloDetailContentWrapper>
      </S.ChallengeVSSoloDetailWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSSoloDetail;