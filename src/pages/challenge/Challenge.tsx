import { ProgressBar } from "@/components/bar/ProgressBar";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/Challenge.style";
import { cardVSData } from "./Constants";
import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import { ChallengeMainContent } from "@/components/content/CardContent";
import SearchField from "@/components/field/SearchField";
import CardBoard from "@/components/board/CardBoard";
import useMedia from "@/hooks/useMedia";
import CardSlider from "@/components/slider/CardSlider";

const Challenge = () => {
  const isMobile = useMedia(800);

  return (
    <DefaultLayout>
      <S.ChallengeWrapper>
        <S.ChallengeRecordWrapper>
          <S.RecordTop>
            <PageTopic text="챌린지 기록" size="l" />
            <ProgressBar text="ALL 성공률" progress={90} height={40} color="pink" />
            {isMobile ?
              <CardSlider>
                <CardChallenge minWidth={20} color="green" topic="SOLO" openBtn={false} isMobile={isMobile}>
                  <ChallengeMainContent color="green" progress={90} tryCount={10} successCount={9} failCount={1} />
                </CardChallenge>
                <CardChallenge minWidth={20} color="pink" topic="VS 대결" openBtn={false} isMobile={isMobile}>
                  <ChallengeMainContent color="pink" progress={40} tryCount={10} successCount={9} failCount={1} />
                </CardChallenge>
              </CardSlider> :
              <S.ProgressWrapper>
                <CardChallenge minWidth={20} color="green" topic="SOLO" openBtn={false}>
                  <ChallengeMainContent color="green" progress={90} tryCount={10} successCount={9} failCount={1} />
                </CardChallenge>
                <CardChallenge minWidth={20} color="pink" topic="VS 대결" openBtn={false}>
                  <ChallengeMainContent color="pink" progress={40} tryCount={10} successCount={9} failCount={1} />
                </CardChallenge>
              </S.ProgressWrapper>}
          </S.RecordTop>
        </S.ChallengeRecordWrapper>
        <S.AllChallengeWrapper>
          <PageTopic text="ALL 챌린지" size="l" />
          <SearchField />
          <CardBoard data={cardVSData} />
        </S.AllChallengeWrapper>
      </S.ChallengeWrapper>
    </DefaultLayout>
  )
}

export default Challenge;