import VSMatchBar from "@/components/bar/VSMatchBar";
import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import { ChallengeVSMatchContent, ChallengeVSMatchContentInvite } from "@/components/content/CardContent";
import FieldTagWorkPeriod from "@/components/field/FieldTagWorkPeriod";
import ProfileImage from "@/components/image/ProfileImage";
import Plus from "@/assets/Plus.svg";
import Banner from "@/components/slider/Banner";
import useMedia from "@/hooks/useMedia";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVSDetail.style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetChallengeDetail, useGetChallengeDetailWeeks } from "@/api/challengeDetail";
import Loading from "@/components/loading/Loading";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useGetPhoto } from "@/api/photo";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import NoPhoto from "@/assets/NoPhoto.svg";
import { useAuthStore } from "@/stores/authStore";
import { PageEndPoints } from "@/constants/endpoints";
import { useWebSocketTimer } from "@/api/timer";

const ChallengeVSMatch = () => {
  const { user } = useAuthStore();
  const { id } = useParams<{ id: string }>();
  const { data: challengeDetail, isLoading } = useGetChallengeDetail(id || "");
  const { mutate: getThumbnail } = useGetPhoto();
  const { mutate: getMyPhoto } = useGetPhoto();
  const { mutate: getOpponentPhoto } = useGetPhoto();
  const { setChallengeId, setChallengeInfo, setDominance, setMyInfo, setOpponentInfo, setThumbnail, setMyPhoto, setOpponentPhoto, setChallengeMyDetailWeeks, setChallengeOpponentDetailWeeks, myPhoto, opponentPhoto, resetChallengeDetail, myInfo, updateTimer } = useChallengeDetailStore();
  const myUserId = challengeDetail?.data?.participants?.me?.id ? String(challengeDetail.data.participants.me.id) : "";
  const opponentUserId = challengeDetail?.data?.participants?.opponent ? String(challengeDetail.data.participants.opponent.id) : null;
  const { data: challengeMyDetailWeeks, isLoading: isLoadingMyWeeks } = useGetChallengeDetailWeeks(id || "", myUserId, {
    enabled: !!(id && id !== "0") && !!myUserId && !!challengeDetail?.data,
  });
  const { data: challengeOpponentDetailWeeks, isLoading: isLoadingOpponentWeeks } = useGetChallengeDetailWeeks(id || "", opponentUserId || "", {
    enabled: !!(id && id !== "0") && !!opponentUserId && !!challengeDetail?.data,
  });
  const [isMine, setIsMine] = useState(false);
  const [isWriter, setIsWriter] = useState(false);
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
      console.error("=== 타이머 에러 ===");
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
    if (challengeDetail && challengeMyDetailWeeks) {
      setChallengeId(Number(id));
      setChallengeInfo(challengeDetail.data.challengeInfo);
      setDominance(challengeDetail.data.dominance);
      setMyInfo(challengeDetail.data.participants.me);
      setOpponentInfo(challengeDetail.data.participants.opponent);
      setChallengeMyDetailWeeks(challengeMyDetailWeeks.data);
      setIsMine(challengeDetail.data.participants.me.id === user?.id);
      setIsWriter(challengeDetail.data.challengeInfo.writerId === user?.id);

      if (challengeOpponentDetailWeeks) {
        setChallengeOpponentDetailWeeks(challengeOpponentDetailWeeks.data);
      }

      if (challengeDetail?.data.challengeInfo.thumbnail?.uuid) {
        getThumbnail(
          { file_uuid: challengeDetail.data.challengeInfo.thumbnail.uuid },
          {
            onSuccess: (photo) => {
              setThumbnail(photo);
            },
            onError: (error) => {
              console.log(error);
              setThumbnail(null);
            },
          }
        );
      } else {
        setThumbnail(null);
      }
      if (challengeDetail?.data.participants?.me?.profileImage?.uuid) {
        getMyPhoto(
          { file_uuid: challengeDetail.data.participants.me.profileImage.uuid },
          {
            onSuccess: (photo) => {
              setMyPhoto(photo);
            },
          }
        );
      }
      if (challengeDetail?.data.participants?.opponent?.profileImage?.uuid) {
        getOpponentPhoto(
          { file_uuid: challengeDetail.data.participants?.opponent?.profileImage?.uuid },
          {
            onSuccess: (photo) => {
              setOpponentPhoto(photo);
            },
          }
        );
      }
    }
  }, [challengeDetail, challengeMyDetailWeeks, challengeOpponentDetailWeeks, getThumbnail, getMyPhoto, getOpponentPhoto, setThumbnail, setMyPhoto, setOpponentPhoto, setChallengeInfo, setDominance, setMyInfo, setOpponentInfo, setChallengeMyDetailWeeks, setChallengeOpponentDetailWeeks]);

  const isMobile = useMedia(770);
  const navigate = useNavigate();
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const [viewCard, setViewCard] = useState<"left" | "right" | "both">("both");
  const [wholeWidth, setWholeWidth] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);
  const myPhotoUrl = useUserPhotoUrl(myPhoto);
  const opponentPhotoUrl = useUserPhotoUrl(opponentPhoto);

  useEffect(() => {
    if (!contentElement) return;
    const updateWidth = () => {
      const contentWidth = contentElement.offsetWidth;
      setWholeWidth(contentWidth);
    }
    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(contentElement);
  }, [contentElement])

  useEffect(() => {
    setViewCard(isMobile ? "right" : "both");
  }, [isMobile]);

  const handleViewCard = (view: "left" | "right") => {
    if (isMobile && !opponentUserId && view === "left") {
      navigate(PageEndPoints.CHALLENGE_VS_INVITE);
      return;
    }
    if (isMobile) { setViewCard(view); return; }
    return;
  }

  if (isLoading || isLoadingMyWeeks || isLoadingOpponentWeeks) return <Loading />;

  return (
    <DefaultLayout variant="home">
      <S.VSMatchWrapper>
        <Banner isWriter={isWriter} />
        <S.VSMatchContentWrapper ref={setContentElement}>
          <FieldTagWorkPeriod />
          {/* 나중에 상대가 있을 경우 보이게 설정 */}
          <S.VSMatchProgressWrapper>
            {viewCard !== "both" && <S.ProfileWrapper $direction={viewCard}>
              <div onClick={() => handleViewCard("left")}><ProfileImage color={viewCard === "left" && !isMobile ? "pink" : "green"} image={viewCard === "left" && !isMobile ? myPhotoUrl || NoPhoto : !opponentUserId && isMobile ? Plus : opponentPhotoUrl || NoPhoto} width={isMobile ? 2 : 4} /></div>
              {isMobile && <div onClick={() => handleViewCard("right")}><ProfileImage color={"pink"} image={myPhotoUrl || NoPhoto} width={isMobile ? 2 : 4} /></div>}
            </S.ProfileWrapper>}
            {opponentUserId && <VSMatchBar />}
          </S.VSMatchProgressWrapper>
          <S.VSMatchCardWrapper>
            {(viewCard !== "right" && !isMobile) || (isMobile && viewCard === "left") ?
              <CardChallenge mobileTopic="none" isMobile={isMobile} cardNum={3} color="green" kind="opponent" minWidth={21} openBtn={true} viewCard={viewCard} setViewCard={!isMobile ? setViewCard : undefined}>
                {opponentUserId ?
                  <ChallengeVSMatchContent isMobile={isMobile} color="green" kind="opponent" viewCard={viewCard} value="VS" publishTimer={publishTimer} />
                  : <ChallengeVSMatchContentInvite height={wholeWidth > 866 ? cardHeight : null} isMine={isMine} />}
              </CardChallenge> : <></>}
            {(viewCard !== "left" && !isMobile) || (isMobile && viewCard === "right") ?
              <CardChallenge isMine={isWriter} mobileTopic="none" isMobile={isMobile} cardNum={3} color="pink" kind="my" minWidth={21} openBtn={true} setCardHeight={setCardHeight} viewCard={viewCard} setViewCard={!isMobile ? setViewCard : undefined}>
                <ChallengeVSMatchContent isMobile={isMobile} color="pink" kind="my" viewCard={viewCard} value="VS" isMine={isMine} publishTimer={publishTimer} />
              </CardChallenge> : <></>}
          </S.VSMatchCardWrapper>
        </S.VSMatchContentWrapper>
      </S.VSMatchWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSMatch;
