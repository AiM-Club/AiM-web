import { ProgressBar } from "@/components/bar/ProgressBar";
import { PageTopic } from "@/components/text/PageTopic";
import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/Challenge.style";
import Select from "@/components/Select/Select";
import { cardVSData } from "./Constants";
import CardVS from "@/components/card/cardvs/CardVS";
import SearchInput from "@/components/field/SearchInput";
import { CardChallenge } from "@/components/card/cardChallenge/CardChallenge";

const Challenge = () => {

  return (
    <DefaultLayout>
      <S.ChallengeWrapper>
        <S.ChallengeRecordWrapper>
          <S.RecordTop>
            <PageTopic text="챌린지 기록" size="l" />
            <ProgressBar text="ALL 성공률" progress={90} height={40} color="pink" />
            <S.ProgressWrapper>
              <CardChallenge color="green" topic="SOLO" progress={40} tryCount={10} successCount={9} failCount={1} />
              <CardChallenge color="pink" topic="VS 대결" progress={90} tryCount={10} successCount={9} failCount={1} />
            </S.ProgressWrapper>
          </S.RecordTop>
        </S.ChallengeRecordWrapper>
        <S.AllChallengeWrapper>
          <PageTopic text="ALL 챌린지" size="l" />
          <S.SearchSortWrapper>
            <SearchInput />
            <Select placeholder="정렬" />
          </S.SearchSortWrapper>
          <S.ListWrapper>
            {cardVSData.map((item) => (
              <CardVS key={item.id} data={item} />
            ))}
          </S.ListWrapper>
        </S.AllChallengeWrapper>
      </S.ChallengeWrapper>
    </DefaultLayout>
  )
}

export default Challenge;