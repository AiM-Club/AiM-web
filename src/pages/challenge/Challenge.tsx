import { ProgressBar } from "@/components/bar/ProgressBar";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/Challenge.style";
import { cardVSData } from "./Constants";
import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";
import { ChallengeMainContent } from "@/components/content/CardContent";
import SearchField from "@/components/field/SearchField";
import CardBoard from "@/components/board/CardBoard";

const Challenge = () => {

  return (
    <DefaultLayout>
      <S.ChallengeWrapper>
        <S.ChallengeRecordWrapper>
          <S.RecordTop>
            <PageTopic text="챌린지 기록" size="l" />
            <ProgressBar text="ALL 성공률" progress={90} height={40} color="pink" />
            <S.ProgressWrapper>
              <CardChallenge color="green" topic="SOLO" openBtn={false}>
                <ChallengeMainContent color="green" progress={40} tryCount={10} successCount={9} failCount={1} />
              </CardChallenge>
              <CardChallenge color="pink" topic="VS 대결" openBtn={false}>
                <ChallengeMainContent color="pink" progress={90} tryCount={10} successCount={9} failCount={1} />
              </CardChallenge>
            </S.ProgressWrapper>
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