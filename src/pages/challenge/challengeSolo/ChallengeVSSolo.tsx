import DefaultLayout from "@/layouts/defaultLayout/DefaultLayout";
import * as S from "@/styles/challenge/challengeSolo/ChallengeVSSolo.style";
import CardBoard from "@/components/board/CardBoard";
import { searchVsData } from "@/pages/search/Constants";
import { PageTopic } from "@/components/text/PageTopic";
import SearchField from "@/components/field/SearchField";
import Button from "@/components/button/Button";

const ChallengeVSSolo = () => {
  return (
    <DefaultLayout>
      <S.ChallengeVSMainWrapper>
        <PageTopic text="SOLO 챌린지" size="l" />
        <S.ContentWrapper>
          <SearchField
            categories={[
              { value: "ongoing", label: "진행 중" },
              { value: "completed", label: "진행 완료" }
            ]}
          />
          <CardBoard data={searchVsData} />
        </S.ContentWrapper>
      </S.ChallengeVSMainWrapper>
      <Button $variant="fixed">작성</Button>
    </DefaultLayout>
  )
}

export default ChallengeVSSolo;