import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import { ChallengeVSMatchContent } from "@/components/content/CardContent";
import FieldTagWorkPeriod from "@/components/field/FieldTagWorkPeriod";
import Banner from "@/components/slider/Banner";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeSolo/ChallengeVSSoloDetail.style";
import { useParams } from "react-router-dom";
import { useGetChallengeDetailWeeks, useGetChallengeSoloDetail } from "@/api/challengeDetail";
import { useGetPhoto } from "@/api/photo";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useEffect, useState } from "react";
import Loading from "@/components/loading/Loading";
import { useAuthStore } from "@/stores/authStore";

const ChallengeVSSoloDetail = () => {
  const { user } = useAuthStore();
  const { id } = useParams<{ id: string }>();
  const { data: challengeDetail, isLoading } = useGetChallengeSoloDetail(id || "");
  const { mutate: getThumbnail } = useGetPhoto();
  const { mutate: getPhoto } = useGetPhoto();
  const { setChallengeId, setChallengeInfo, setMyInfo, setThumbnail, setMyPhoto, setChallengeDetailWeeks, resetChallengeDetail } = useChallengeDetailStore();
  const myUserId = challengeDetail?.data.participant.id ? String(challengeDetail.data.participant.id) : "";
  const { data: challengeDetailWeeks, isLoading: isLoadingWeeks } = useGetChallengeDetailWeeks(id || "", myUserId, {
    enabled: !!(id && id !== "0") && !!myUserId && !!challengeDetail?.data,
  });
  const [isMine, setIsMine] = useState(false);

  // challengeId가 변경될 때 store 초기화
  useEffect(() => {
    resetChallengeDetail();
  }, [id, resetChallengeDetail]);

  useEffect(() => {
    if (challengeDetail && challengeDetailWeeks) {
      setChallengeId(Number(id));
      setChallengeInfo(challengeDetail.data.challengeInfo);
      setMyInfo(challengeDetail.data.participant);
      setChallengeDetailWeeks(challengeDetailWeeks.data);
      setIsMine(challengeDetail.data.participant.id === user?.id);
      if (challengeDetail?.data.challengeInfo.thumbnail) {
        getThumbnail(
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
  }, [challengeDetail, challengeDetailWeeks, id, setChallengeId, setChallengeInfo, setMyInfo, setChallengeDetailWeeks, setThumbnail, setMyPhoto, getThumbnail, getPhoto, user?.id]);

  if (isLoading || isLoadingWeeks) return <Loading />;

  return (
    <DefaultLayout variant="home">
      <S.ChallengeVSSoloDetailWrapper>
        <Banner isMine={isMine} />
        <S.ChallengeVSSoloDetailContentWrapper>
          <FieldTagWorkPeriod />
          <CardChallenge topicDirection="left" cardNum={3} color="pink" kind="my" openBtn={false} viewCard="right">
            <ChallengeVSMatchContent commentView={false} color="pink" kind="my" viewCard="right" value="SOLO" />
          </CardChallenge>
        </S.ChallengeVSSoloDetailContentWrapper>
      </S.ChallengeVSSoloDetailWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSSoloDetail;