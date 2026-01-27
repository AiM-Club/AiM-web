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
import { useParams } from "react-router-dom";
import { useGetChallengeDetail, useGetChallengeDetailWeeks } from "@/api/challengeDetail";
import Loading from "@/components/loading/Loading";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useGetPhoto } from "@/api/photo";
import { useUserPhotoUrl } from "@/hooks/useUserPhotoUrl";
import NoPhoto from "@/assets/NoPhoto.svg";
import { useAuthStore } from "@/stores/authStore";

const ChallengeVSMatch = () => {
  const { user } = useAuthStore();
  const { id } = useParams<{ id: string }>();
  const { data: challengeDetail, isLoading } = useGetChallengeDetail(id || "");
  const { mutate: getThumbnail } = useGetPhoto();
  const { mutate: getMyPhoto } = useGetPhoto();
  const { mutate: getOpponentPhoto } = useGetPhoto();
  const { setChallengeId, setChallengeInfo, setDominance, setMyInfo, setOpponentInfo, setThumbnail, setMyPhoto, setOpponentPhoto, setChallengeDetailWeeks, myPhoto, opponentPhoto, resetChallengeDetail } = useChallengeDetailStore();
  const myUserId = challengeDetail?.data?.participants?.me?.id ? String(challengeDetail.data.participants.me.id) : "";
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
      setDominance(challengeDetail.data.dominance);
      setMyInfo(challengeDetail.data.participants.me);
      setOpponentInfo(challengeDetail.data.participants.opponent);
      setChallengeDetailWeeks(challengeDetailWeeks.data);
      setIsMine(challengeDetail.data.participants.me.id === user?.id);

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
      if (challengeDetail?.data.participants.me.profileImage.uuid) {
        getMyPhoto(
          { file_uuid: challengeDetail.data.participants.me.profileImage.uuid },
          {
            onSuccess: (photo) => {
              setMyPhoto(photo);
            },
          }
        );
      }
      if (challengeDetail?.data.participants.opponent?.profileImage.uuid) {
        getOpponentPhoto(
          { file_uuid: challengeDetail.data.participants.opponent.profileImage.uuid },
          {
            onSuccess: (photo) => {
              setOpponentPhoto(photo);
            },
          }
        );
      }
    }
  }, [challengeDetail, challengeDetailWeeks, getThumbnail, getMyPhoto, getOpponentPhoto, setThumbnail, setMyPhoto, setOpponentPhoto, setChallengeInfo, setDominance, setMyInfo, setOpponentInfo, setChallengeDetailWeeks]);

  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const [viewCard, setViewCard] = useState<"left" | "right" | "both">("both");
  const [wholeWidth, setWholeWidth] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);
  const isMobile = useMedia(770);
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

  if (isLoading || isLoadingWeeks) return <Loading />;

  return (
    <DefaultLayout variant="home">
      <S.VSMatchWrapper>
        <Banner isMine={isMine} />
        <S.VSMatchContentWrapper ref={setContentElement}>
          <FieldTagWorkPeriod />
          {/* 나중에 상대가 있을 경우 보이게 설정 */}
          <S.VSMatchProgressWrapper>
            <S.ProfileWrapper $direction={viewCard}><ProfileImage color={viewCard === "left" ? "pink" : "green"} image={viewCard === "left" ? myPhotoUrl || NoPhoto : opponentPhotoUrl || NoPhoto} width={isMobile ? 2 : 4} /></S.ProfileWrapper>
            <VSMatchBar />
          </S.VSMatchProgressWrapper>
          <S.VSMatchCardWrapper>
            {viewCard === "left" || viewCard === "both" ?
              <CardChallenge isMobile={isMobile} cardNum={3} color="green" kind="opponent" minWidth={21} openBtn={true} viewCard={viewCard} setViewCard={setViewCard}>
                <ChallengeVSMatchContentInvite height={wholeWidth >= 938 ? cardHeight : null} />
              </CardChallenge> : <></>}
            {viewCard === "right" || viewCard === "both" ?
              <CardChallenge isMobile={isMobile} cardNum={3} color="pink" kind="my" minWidth={21} openBtn={true} setCardHeight={setCardHeight} viewCard={viewCard} setViewCard={setViewCard}>
                <ChallengeVSMatchContent isMobile={isMobile} color="pink" kind="my" viewCard={viewCard} value="VS" />
              </CardChallenge> : <></>}
          </S.VSMatchCardWrapper>
        </S.VSMatchContentWrapper>
      </S.VSMatchWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSMatch;
