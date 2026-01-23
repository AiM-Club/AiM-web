import VSMatchBar from "@/components/bar/VSMatchBar";
import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import { ChallengeVSMatchContent, ChallengeVSMatchContentInvite } from "@/components/content/CardContent";
import FieldTagWorkPeriod from "@/components/field/FieldTagWorkPeriod";
import ProfileImage from "@/components/image/ProfileImage";
import Banner from "@/components/slider/Banner";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeVS/ChallengeVSDetail.style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetChallengeDetail, useGetChallengeDetailWeeks } from "@/api/challengeDetail";
import Loading from "@/components/loading/Loading";
import { useChallengeDetailStore } from "@/stores/challengeDetailStore";
import { useGetPhoto } from "@/api/photo";

const ChallengeVSMatch = () => {
  const { id } = useParams<{ id: string }>();
  const { data: challengeDetail, isLoading } = useGetChallengeDetail(id || "");
  const { mutate: getPhoto } = useGetPhoto();
  const { setChallengeInfo, setDominance, setMyInfo, setOpponentInfo, setThumbnail, setMyPhoto, setOpponentPhoto, setChallengeDetailWeeks } = useChallengeDetailStore();
  const { data: challengeDetailWeeks, isLoading: isLoadingWeeks } = useGetChallengeDetailWeeks(id || "");
  useEffect(() => {
    if (challengeDetail && challengeDetailWeeks) {
      setChallengeInfo(challengeDetail.data.challengeInfo);
      setDominance(challengeDetail.data.dominance);
      setMyInfo(challengeDetail.data.participants.me);
      setOpponentInfo(challengeDetail.data.participants.opponent);
      setChallengeDetailWeeks(challengeDetailWeeks.data);
      
      if(challengeDetail?.data.challengeInfo.thumbnail) {
        getPhoto(
          { file_uuid: challengeDetail.data.challengeInfo.thumbnail },
          {
            onSuccess: (photo) => {
              setThumbnail(photo);
            },
          }
        );
      }
      if (challengeDetail?.data.participants.me.profileImage.uuid) {
        getPhoto(
          { file_uuid: challengeDetail.data.participants.me.profileImage.uuid },
          {
            onSuccess: (photo) => {
              setMyPhoto(photo);
            },
          }
        );
      }
      if (challengeDetail?.data.participants.opponent?.profileImage.uuid) {
        getPhoto(
          { file_uuid: challengeDetail.data.participants.opponent.profileImage.uuid },
          {
            onSuccess: (photo) => {
              setOpponentPhoto(photo);
            },
          }
        );
      }
    }
  }, [challengeDetail, challengeDetailWeeks, getPhoto, setThumbnail, setMyPhoto, setOpponentPhoto, setChallengeInfo, setDominance, setMyInfo, setOpponentInfo, setChallengeDetailWeeks]);

  const opponentProfileImg = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif";
  const myProfileImg = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif";

  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const [viewCard, setViewCard] = useState<"left" | "right" | "both">("both");
  const [wholeWidth, setWholeWidth] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);

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

  if(isLoading || isLoadingWeeks) return <Loading />;

  return (
    <DefaultLayout variant="home">
      <S.VSMatchWrapper>
        <Banner image="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif" />
        <S.VSMatchContentWrapper ref={setContentElement}>
          <FieldTagWorkPeriod  />
          {/* 나중에 상대가 있을 경우 보이게 설정 */}
          <S.VSMatchProgressWrapper>
            <S.ProfileWrapper $direction={viewCard}><ProfileImage color={viewCard === "left" ? "pink" : "green"} image={viewCard === "left" ? myProfileImg : opponentProfileImg} width={4} /></S.ProfileWrapper>
            <VSMatchBar />
          </S.VSMatchProgressWrapper>
          <S.VSMatchCardWrapper>
            {viewCard === "left" || viewCard === "both" ?
              <CardChallenge cardNum={3} color="green" kind="opponent" minWidth={21} openBtn={true} viewCard={viewCard} setViewCard={setViewCard}>
                <ChallengeVSMatchContentInvite height={wholeWidth >= 938 ? cardHeight : null} />
              </CardChallenge> : <></>}
            {viewCard === "right" || viewCard === "both" ?
              <CardChallenge cardNum={3} color="pink" kind="my" minWidth={21} openBtn={true} setCardHeight={setCardHeight} viewCard={viewCard} setViewCard={setViewCard}>
                <ChallengeVSMatchContent color="pink" kind="my" viewCard={viewCard} />
              </CardChallenge> : <></>}
          </S.VSMatchCardWrapper>
        </S.VSMatchContentWrapper>
      </S.VSMatchWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSMatch;
