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

const ChallengeVSMatch = () => {
  const { id } = useParams<{ id: string }>();

  const fieldData = ["분야1", "분야2", "분야3"];
  const tagData = ["태그1", "태그2", "태그3"];
  const wordData = "작성된 직무";
  const startData = "2025.11.07";
  const endData = "2025.11.30";
  const oppenentProgress = 90;
  const myProgress = 10;
  const opponentProfileImg = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif";
  const myProfileImg = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif";

  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const [viewCard, setViewCard] = useState<"left" | "right" | "both">("both");
  const [wholeWidth, setWholeWidth] = useState<number>(0);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);
  const isMobile = useMedia(770);

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

  return (
    <DefaultLayout variant="home">
      <S.VSMatchWrapper>
        <Banner image="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif" topic="제목 작성은 15글자 이하" />
        <S.VSMatchContentWrapper ref={setContentElement}>
          <FieldTagWorkPeriod fieldData={fieldData} tagData={tagData} wordData={wordData} startData={startData} endData={endData} week={5} />
          {/* 나중에 상대가 있을 경우 보이게 설정 */}
          //나중에 상대가 있을 경우만 보이게 설정 예정
          <S.VSMatchProgressWrapper>
            <S.ProfileWrapper $direction={viewCard}><ProfileImage color={viewCard === "left" ? "pink" : "green"} image={viewCard === "left" ? myProfileImg : opponentProfileImg} width={isMobile ? 2 : 4} /></S.ProfileWrapper>
            {!isMobile && <VSMatchBar opponentProgress={oppenentProgress} myProgress={myProgress} />}
          </S.VSMatchProgressWrapper>
          <S.VSMatchCardWrapper>
            {viewCard === "left" || viewCard === "both" ?
              <CardChallenge isMobile={isMobile} mobileTopic="none" cardNum={3} color="green" topic="사용자 닉네임" minWidth={21} openBtn={true} viewCard={viewCard} setViewCard={setViewCard}>
                <ChallengeVSMatchContentInvite height={wholeWidth >= 938 ? cardHeight : null} />
              </CardChallenge> : <></>}
            {viewCard === "right" || viewCard === "both" ?
              <CardChallenge isMobile={isMobile} mobileTopic="none" cardNum={3} color="pink" topic="ME : 사용자 닉네임" minWidth={21} openBtn={true} setCardHeight={setCardHeight} viewCard={viewCard} setViewCard={setViewCard}>
                <ChallengeVSMatchContent isMobile={isMobile} color="pink" progress={80} success={80} totalWeek={9} currentWeek={5} viewCard={viewCard} profileImg="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif" />
              </CardChallenge> : <></>}
          </S.VSMatchCardWrapper>
        </S.VSMatchContentWrapper>
      </S.VSMatchWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSMatch;
