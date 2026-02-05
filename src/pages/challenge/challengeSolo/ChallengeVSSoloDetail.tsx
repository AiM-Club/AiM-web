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
import useMedia from "@/hooks/useMedia";
import { useWebSocketTimer } from "@/api/timer";

const ChallengeVSSoloDetail = () => {
  const isMobile = useMedia(560);
  const { user } = useAuthStore();
  const { id } = useParams<{ id: string }>();
  const { data: challengeDetail, isLoading } = useGetChallengeSoloDetail(id || "");
  const { mutate: getThumbnail } = useGetPhoto();
  const { mutate: getPhoto } = useGetPhoto();
  const { setChallengeId, setChallengeInfo, setMyInfo, setThumbnail, setMyPhoto, setChallengeMyDetailWeeks, resetChallengeDetail, myInfo, updateTimer } = useChallengeDetailStore();
  const myUserId = challengeDetail?.data.participant.id ? String(challengeDetail.data.participant.id) : "";
  const { data: challengeDetailWeeks, isLoading: isLoadingWeeks } = useGetChallengeDetailWeeks(id || "", myUserId, {
    enabled: !!(id && id !== "0") && !!myUserId && !!challengeDetail?.data,
  });
  const [isMine, setIsMine] = useState(false);
  const challengeId = challengeDetail?.data ? Number(id) : null;

  // WebSocket 연결 및 구독
  const { publishTimer } = useWebSocketTimer({
    challengeId,
    enabled: !!(challengeId && challengeDetail?.data),
    onTimerUpdate: (data) => {
      // store에 타이머 업데이트 반영
      const isMy = myInfo?.id === data.userId;
      updateTimer(data.weekNumber, data.stopwatchTimeSeconds, isMy);
    },
    onError: (error) => {
      console.error("=== 타이머 에러 (SOLO) ===");
      console.error("에러 코드:", error.code);
      console.error("에러 메시지:", error.message);
      console.error("=== 에러 처리 완료 ===");
      alert(error.message);
    },
  });

  // challengeId가 변경될 때 store 초기화
  useEffect(() => {
    resetChallengeDetail();
  }, [id, resetChallengeDetail]);

  useEffect(() => {
    if (challengeDetail && challengeDetailWeeks) {
      setChallengeId(Number(id));
      setChallengeInfo(challengeDetail.data.challengeInfo);
      setMyInfo(challengeDetail.data.participant);
      setChallengeMyDetailWeeks(challengeDetailWeeks.data);
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
      if (challengeDetail?.data.participant?.profileImage?.uuid) {
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
  }, [challengeDetail, challengeDetailWeeks, id, setChallengeId, setChallengeInfo, setMyInfo, setChallengeMyDetailWeeks, setThumbnail, setMyPhoto, getThumbnail, getPhoto, user?.id]);

  if (isLoading || isLoadingWeeks) return <Loading />;

  return (
    <DefaultLayout variant="home">
      <S.ChallengeVSSoloDetailWrapper>
        <Banner />
        <S.ChallengeVSSoloDetailContentWrapper>
          <FieldTagWorkPeriod />
          <CardChallenge isMobile={isMobile} mobileTopic="none" topicDirection="left" cardNum={3} color="pink" kind="my" openBtn={false} viewCard="right">
            <ChallengeVSMatchContent isMobile={isMobile} commentView={false} color="pink" kind="my" viewCard="right" value="SOLO" publishTimer={publishTimer} />
          </CardChallenge>
        </S.ChallengeVSSoloDetailContentWrapper>
      </S.ChallengeVSSoloDetailWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSSoloDetail;