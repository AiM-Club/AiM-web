import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import { ChallengeVSMatchContent } from "@/components/content/CardContent";
import FieldTagWorkPeriod from "@/components/field/FieldTagWorkPeriod";
import Banner from "@/components/slider/Banner";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeSolo/ChallengeVSSoloDetail.style";
import { useParams } from "react-router-dom";

const ChallengeVSSoloDetail = () => {
  const { id } = useParams<{ id: string }>();

  const fieldData = ["분야1", "분야2", "분야3"];
  const tagData = ["태그1", "태그2", "태그3"];
  const wordData = "작성된 직무";
  const startData = "2025.11.07";
  const endData = "2025.11.30";

  return (
    <DefaultLayout variant="home">
      <S.ChallengeVSSoloDetailWrapper>
        <Banner topic="제목 작성은 15글자 이하" image="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWE5bjl4cWtvcXA5cHF0NTA0MjlzNWZmZmRmZml0NXZ3YXZ2dGwyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif" />
        <S.ChallengeVSSoloDetailContentWrapper>
          <FieldTagWorkPeriod fieldData={fieldData} tagData={tagData} wordData={wordData} startData={startData} endData={endData} week={5} />
          <CardChallenge topicDirection="left" cardNum={3} color="pink" topic="ME : 사용자 닉네임" openBtn={false} viewCard="right">
            <ChallengeVSMatchContent commentView={false} color="pink" progress={80} success={80} totalWeek={9} currentWeek={5} viewCard="right" profileImg="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlwMHl4dXFnOHlxcW5hNzNiZ2V0bXczMXdhOXdmY3dsc3M2dDhiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3Ky1RlGqJN4xadIyRW/giphy.gif" />
          </CardChallenge>
        </S.ChallengeVSSoloDetailContentWrapper>
      </S.ChallengeVSSoloDetailWrapper>
    </DefaultLayout>
  )
}

export default ChallengeVSSoloDetail;